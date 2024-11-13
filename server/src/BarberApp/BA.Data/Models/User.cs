using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace BA.Data.Models;

public class User : IdentityUser
{
    
    [Required]
    public string FirstName { get; set; } = string.Empty;
    
    [Required]
    public string LastName { get; set; } = string.Empty;
}