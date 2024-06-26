using Contactly.Data;
using Contactly.Models;
using Contactly.Models.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Contactly.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly DBContext dBContext;

        //use ctor trict to quickly create the constructor
        public ContactsController(DBContext dBContext)
        {
            this.dBContext = dBContext;
        }
        //now we will write the endpoint to retreive all the data from the database

        [HttpGet]
        public IActionResult GetAllContacts()
        {
            var contacts = dBContext.contact.ToList(); //convert table to a list

            //as this is a RESTFUL API, we will return OK 
            return Ok(contacts); //Ok converts to a status 200
        }

        [HttpPost]
        public IActionResult AddContact(AddContactRequestDTO request)
        {
            //now we will map request dto to contact domain model
            var domainModelContact = new Contact
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Favourite = request.Favourite
            };

            dBContext.contact.Add(domainModelContact);
            dBContext.SaveChanges();

            return Ok(domainModelContact);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteContact(Guid id)
        {
            var contact = dBContext.contact.Find(id);

            if(contact is not null)
            {
                dBContext.contact.Remove(contact);
                dBContext.SaveChanges();
              
            }

            return Ok();
        }
    }
}
