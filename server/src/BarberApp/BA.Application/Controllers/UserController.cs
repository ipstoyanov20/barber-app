using System.Threading.Tasks;
using BA.Common.Models.User;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BA.Application.Controllers;
[Route("[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService userService;
    private readonly ICurrentUser currentUser;
    public UserController(IUserService userService, ICurrentUser currentUser)
    {
        this.userService = userService;
        this.currentUser = currentUser;
    }
    
    [HttpPut]
    public async Task<ActionResult<bool>> CreateUserInfoAsync(string userEmail, UserUM userUm)
    {
        return await this.userService.UpdateUserAsync(userEmail, userUm);
    }
    
    [HttpGet("current")]
    [Authorize]
    public async Task<ActionResult<UserVM?>> GetUserMeAsync()
    {
        var result = await this.userService.GetUserByIdAsync(this.currentUser.UserId);

        if (result is null)
        {
            return this.NotFound();
        }

        return result;
    }
    
}