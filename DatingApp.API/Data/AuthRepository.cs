using System;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
  public class AuthRepository : IAuthRepository
  {
    private readonly DataContext _context;
    public AuthRepository(DataContext context)
    {
      this._context = context;
    }
    public async Task<User> Login(string authUsername, string password)
    {
      var user = await _context.Users.FirstOrDefaultAsync(dbUser => dbUser.Username == authUsername);

      if (user == null)
      {
        return null;
      }
      if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
      {
        return null;
      }
      // auth successful
      return user;
    }

    private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
      using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
      {
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        for (int i = 0; i < computedHash.Length; i++)
        {
          // compare hash against hash in Db
          if (computedHash[i] != passwordHash[i]) return false;
        }
      }
      return true;
    }

    public async Task<User> Register(User newUser, string password)
    {

      byte[] passwordHash, passwordSalt;
      /*
        - use keyword `out` to pass references as inputs instead of
          passing values of unassigned local variables
      */
      CreatePassWordHash(password, out passwordHash, out passwordSalt);

      newUser.PasswordHash = passwordHash;
      newUser.PasswordSalt = passwordSalt;

      await _context.AddAsync(newUser);
      await _context.SaveChangesAsync();

      return newUser;
    }

    private void CreatePassWordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
      using (var hmac = new System.Security.Cryptography.HMACSHA512())
      {
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      }
    }

    public async Task<bool> UserExists(string usernameToFind)
    {
      if (await _context.Users.AnyAsync(dbUser => dbUser.Username == usernameToFind))
        return true;

      return false;
    }
  }
}