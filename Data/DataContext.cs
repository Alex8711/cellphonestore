using cellphonestore.Models;
using Microsoft.EntityFrameworkCore;

namespace cellphonestore.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Product>().HasData(
                new Product { ProductId = 1, ImagePath = "path1", Description = "first", Price = 100, Title = "iphone11" },
                new Product { ProductId = 2, ImagePath = "path2", Description = "second", Price = 200, Title = "iphone12" }
                );
        }
    }
}