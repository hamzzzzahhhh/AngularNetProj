using Microsoft.EntityFrameworkCore;
using System;
using Contactly.Models.Domain;

namespace Contactly.Data
{
    public class DBContext : DbContext
    {
        public DbSet<Contact> contact { get; set; }
        public DBContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new ContactConfig().Configure(modelBuilder.Entity<Contact>());
        }
    }
}