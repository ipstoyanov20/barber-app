using System.Threading.Tasks;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace BA.Application.Controllers;
[ApiController]
[Route("[controller]")]
public class UserAdditionalController
{
    private readonly IUserAdditionalService userAdditionalService;
    public UserAdditionalController(IUserAdditionalService userAdditionalService)
    {
        this.userAdditionalService = userAdditionalService;
    }
    
    [HttpPost]
    public async Task<ActionResult<User?>> CreateUserAdditionalInfoAsync([FromBody] User user)
    {
        return await this.userAdditionalService.CreateUserAdditionalInfoAsync(user.FirstName, user.LastName);
    }
    
    [HttpGet("{Id}")]
    public async Task<ActionResult<User?>> GetUserAdditionalInfoAsync(string Id)
    {
        return await this.userAdditionalService.GetUserAdditionalInfoAsync(Id);
    }
}