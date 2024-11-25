using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.User;

public class UserIM
{
    [Required]
    public string FirstName { get; set; } = string.Empty;
    
    [Required]
    public string LastName { get; set; } = string.Empty;
}