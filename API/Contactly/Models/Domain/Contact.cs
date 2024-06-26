using System.Globalization;
using System.ComponentModel.DataAnnotations;

namespace Contactly.Models.Domain
{
    public class Contact
    {
        public Guid Id { get; set; } //our primary key for the database

        //[Required]

        //public required string name {  get; set; } //not availabe in C#10
        public string Name {  get; set; } = string.Empty;
        public string? Email { get; set; } //? allows nullable

        public string Phone { get; set; } = string.Empty;

        public bool Favourite { get; set; }
    }
}
