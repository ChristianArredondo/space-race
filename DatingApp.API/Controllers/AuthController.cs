using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo) {
          _repo = repo;
        }

        /* Use [FromBody] to enforce that values be pulled from Http request body  */
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
          // TODO. validate request

          userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

          if (await _repo.UserExists(userForRegisterDto.Username))
            return BadRequest("Username is already taken");
          
          var userToCreate = new User
          {
            Username = userForRegisterDto.Username
          };

          var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

          return StatusCode(201);
        }
    }
}