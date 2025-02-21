using exercise.wwwapi.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace exercise.wwwapi.DataContext
{
  public class TodoContext : DbContext
  {
        public TodoContext()
        {
        }

        private readonly IConfiguration _configuration;

        public TodoContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private static string GetConnectionString()
        {
          string jsonSettings = File.ReadAllText("appsettings.json");
          JObject configuration = JObject.Parse(jsonSettings);
          return configuration["ConnectionStrings"]["DefaultConnection"].ToString();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // 1. First, check if DATABASE_URL exists in Azure environment variables
            var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL");

            // 2. If missing, fallback to appsettings.json (for local development)
            if (string.IsNullOrEmpty(connectionString))
            {
                connectionString = _configuration.GetConnectionString("DefaultConnection");
            }

            // 3. If still missing, throw an error
            if (string.IsNullOrEmpty(connectionString))
            {
                throw new Exception("Database connection string is missing.");
            }

            optionsBuilder.UseNpgsql(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          base.OnModelCreating(modelBuilder);

          modelBuilder.Entity<Todo>().HasData(
                new Todo { Id = 1, Title = "First task", Completed = true },
                new Todo { Id = 2, Title = "Second task", Completed = false },
                new Todo { Id = 3, Title = "Third task", Completed = true }
            );
        }

    public DbSet<Todo> Todos { get; set; }
  }
}