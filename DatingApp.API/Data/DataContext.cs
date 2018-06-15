using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

/*
  - update any time a new model is created
    - run `dotnet ef migrations add { NameOfMigration }` i.e. `dotnet ef migrations add AddedUserModel`
    - confirm new table and columns by inspecting new file in /Migrations
    - run `dotnet ef database update`
*/

namespace DatingApp.API.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Value> Values { get; set; }

    public DbSet<User> Users { get; set; }
  }
}