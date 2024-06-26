namespace Contactly.Models
{
    public class AddContactRequestDTO
    {
        public string Name { get; set; }
        public string? Email { get; set; } //? allows nullable

        public string Phone { get; set; }

        public bool Favourite { get; set; }
    }
}
