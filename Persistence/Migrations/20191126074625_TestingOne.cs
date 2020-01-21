using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class TestingOne : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Customer",
                table: "Activities",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Activities",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telephone",
                table: "Activities",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Customer",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "Telephone",
                table: "Activities");
        }
    }
}
