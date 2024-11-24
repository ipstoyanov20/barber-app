using System.Threading.Tasks;
using BA.Data.Models;

namespace BA.Service.Abstractions;

public interface IUserAdditionalService
{
    Task<User> GetUserAdditionalInfoAsync(string Id);
    
    Task<User> CreateUserAdditionalInfoAsync(string firstName, string lastName);
}