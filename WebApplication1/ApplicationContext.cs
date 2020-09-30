using Microsoft.EntityFrameworkCore;

using WebApplication1.Model;

namespace WebApplication1.Pages
{
    public class ApplicationContext : DbContext
    {
        public DbSet<ToDoModel> ToDoModels { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source = (localdb)\MSSQLLocalDB; Initial Catalog = ToDoList.db; Integrated Security = True; Connect Timeout = 30; Encrypt = False; TrustServerCertificate = False; ApplicationIntent = ReadWrite; MultiSubnetFailover = False");
        }
    }
}
