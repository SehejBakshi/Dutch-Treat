﻿using DutchTreat.Data.Entities;

namespace DutchTreat.Data
{
    public interface IDutchRespository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        IEnumerable<Order> GetAllOrders();
        Order GetOrderById(int id);
        bool SaveAll();
        void AddEntity(object model);
    }
}