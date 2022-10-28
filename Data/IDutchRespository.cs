using DutchTreat.Data.Entities;

namespace DutchTreat.Data
{
    public interface IDutchRespository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        bool SaveAll();
    }
}