using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

/*
  Used by Entity Framework to understand what needs to be created
  when running the `database update` command.
*/

namespace DatingApp.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        /* Up() method is used to create table in the database */
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Values",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Values", x => x.Id);
                });
        }

        /* Down() method removes migration (undoes Up() method workflow) */
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Values");
        }
    }
}
