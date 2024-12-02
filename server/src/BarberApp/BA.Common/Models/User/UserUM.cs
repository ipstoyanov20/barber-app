using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.User;

public class UserUM
{
    [Required]
    public string FirstName { get; set; } = string.Empty;
    
    [Required]
    public string LastName { get; set; } = string.Empty;
    
    [Required]
    public string PhoneNumber { get; set; } = string.Empty;
}
