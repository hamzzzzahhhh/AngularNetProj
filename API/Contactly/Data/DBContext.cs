using Microsoft.EntityFrameworkCore;
using System;
using Contactly.Models.Domain;

namespace Contactly.Data
{
    public class DBContext : DbContext
    {
        public DbSet<Contact> contact;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().
                Property(b => b.Name).IsRequired();

            modelBuilder.Entity<Contact>().Property(b => b.Phone).IsRequired();
        }
    }
}
