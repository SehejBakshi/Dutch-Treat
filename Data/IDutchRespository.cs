﻿using DutchTreat.Data.Entities;

namespace DutchTreat.Data
{
    public interface IDutchRespository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);
        bool SaveAll();
        void AddEntity(object model);
    }
}