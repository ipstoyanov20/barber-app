using System.Threading.Tasks;
using BA.Common.Models.User;
using AutoMapper;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace BA.Service.Realizations;

public class UserService : IUserService
{
    private readonly UserManager<User> userManager;
    private readonly IMapper mapper;

    public UserService(
        UserManager<User> userManager, IMapper mapper)
    {
        this.userManager = userManager;
        this.mapper = mapper;
    }

    public async Task<bool> UpdateUserAsync(string userEmail, UserUM newUserInfo)
    {
        var user = await this.userManager.FindByEmailAsync(userEmail);

        if (user is null)
        {
            return false;
        }

        user.FirstName = newUserInfo.FirstName;
        user.LastName = newUserInfo.LastName;
        user.PhoneNumber = newUserInfo.PhoneNumber; 

        await this.userManager.UpdateAsync(user);
        return true;
    }
    
    public async Task<UserVM> GetUserByIdAsync(string userId)
    {
        var user = await this.userManager.FindByIdAsync(userId);

        if (user is null)
        {
            return null;
        }

        return this.mapper.Map<UserVM>(user);
    }

}