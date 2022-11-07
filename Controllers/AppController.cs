using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly IDutchRespository _respository;
        public AppController(IMailService mailService, IDutchRespository repository)
        {
            _mailService = mailService;
            _respository = repository;
        }

        public IActionResult Index()
        {
            //throw new InvalidProgramException("Bad things happen to good developers");
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if(ModelState.IsValid) 
            {
                // send email
                _mailService.SendMessage("abc@gmail.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent!";
                ModelState.Clear();
            }

            return View();
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            ViewBag.Title = "About";
            return View();
        }

        // [HttpGet("shop")]
        //[HttpGet]
        //[Authorize]
        public IActionResult Shop()
        {
            var results = _respository.GetAllProducts();
            //var results = _respository.GetProductsByCategory("Poster");

            return View(results);
        }
    }
}
