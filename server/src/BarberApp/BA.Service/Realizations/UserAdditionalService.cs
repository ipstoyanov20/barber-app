using System.Threading.Tasks;
using BA.Data.Data;
using BA.Data.Models;

namespace BA.Service.Realizations;

public class UserAdditionalService
{
    private readonly ApplicationDbContext context; 
    public UserAdditionalService(
        ApplicationDbContext context)
    {
        this.context = context;
    }
    public async Task<User?> GetUserAdditionalInfoAsync(string Id)
    {
        var user = await this.context.UserAdditionalInfo.FindAsync(Id);
        return user;
    }
    public async Task<User?> CreateUserAdditionalInfoAsync(string firstName, string lastName)
    {
        var user = new User()
        {
            FirstName = firstName,
            LastName = lastName
        };
        await this.context.UserAdditionalInfo.AddAsync(user);
        await this.context.SaveChangesAsync();
        
        return user;
    }
}