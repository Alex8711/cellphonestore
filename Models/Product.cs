using System.ComponentModel.DataAnnotations;

namespace cellphonestore.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [MaxLength(250)]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public string ImagePath { get; set; }

    }
}