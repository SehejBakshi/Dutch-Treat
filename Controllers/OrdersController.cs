using DutchTreat.Data;
using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
        private readonly IDutchRespository _repository;
        private readonly ILogger<OrdersController> _logger;
        public OrdersController(IDutchRespository repository, ILogger<OrdersController> logger)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllOrders());
            }
            catch(Exception ex) {
                _logger.LogError($"Failed to get all orders: {ex}");
                return BadRequest("Failed to get all orders.");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var order = _repository.GetOrderById(id);
                if (order != null)
                {
                    return Ok(order);
                }
                else
                {
                    return NotFound();
                }
            }
            catch(Exception ex)
            {
                _logger.LogError("Failed to get order {0}: {1}", id, ex);
                return BadRequest($"Failed to get order {id}.");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Order model)
        {
            // add it to db
            try
            {
                _repository.AddEntity(model);
                if(_repository.SaveAll())
                {
                    return Created($"/api/orders/{model.Id}", model);
                }
                
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to create order: {ex}");
            }

            return BadRequest("Failed to create order");
        }
    }
}
