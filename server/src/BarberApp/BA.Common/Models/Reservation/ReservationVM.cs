using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.Reservation;

public class ReservationVM
{
    
    [Required]
    public string FirstName { get; set; } = String.Empty;
    
    public string LastName { get; set; } = String.Empty;
    
    [Required]
    public string Date { get; set; }

    [Required]
    public int Time { get; set; }
    
    [Required]
    public string Email { get; set; } = String.Empty;
    
    [Required]
    public string Phone { get; set; } = String.Empty;
    
    [Required]
    public string Service { get; set; } = String.Empty;
}