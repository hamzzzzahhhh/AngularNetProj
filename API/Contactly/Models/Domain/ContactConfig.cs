using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Contactly.Models.Domain
{
    public class ContactConfig : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.Property(b => b.Name).IsRequired().HasMaxLength(256);
            builder.Property(b => b.Phone ).IsRequired().HasMaxLength(256);
        }
    }
}
