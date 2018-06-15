using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {

      private readonly DataContext _context;
      /* Constructor used to inject data context */
      public ValuesController(DataContext context)
      {
       this._context = context;   
      }
        // GET api/values
        [HttpGet]
        public IActionResult GetValues()
        {
            /* `ToList()` = fetch values from db */
            var values = this._context.Values.ToList();
            /* Return values */
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetValue(int id)
        {
            /* `FirstOrDefault()` returns first matched entity or null */
            var value = this._context.Values.FirstOrDefault(val => val.Id == id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
