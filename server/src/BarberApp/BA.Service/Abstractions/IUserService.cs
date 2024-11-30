using System.Threading.Tasks;
using BA.Common.Models.User;

namespace BA.Service.Abstractions;

public interface IUserService
{
    Task<bool> UpdateUserAsync(string userEmail, UserUM newUserInfo);
    Task<UserVM> GetUserByIdAsync(string userId);
}