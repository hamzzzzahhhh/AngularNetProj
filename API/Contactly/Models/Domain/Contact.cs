using System.Globalization;

namespace Contactly.Models.Domain
{
    public class Contact
    {
        public Guid Id { get; set; } //our primary key for the database

        //[Required]

        //public required string name {  get; set; } //not availabe in C#10
        public string Name {  get; set; }
        public string? Email { get; set; } //? allows nullable

        public string Phone { get; set; }

        public bool Favourite { get; set; }
    }
}
