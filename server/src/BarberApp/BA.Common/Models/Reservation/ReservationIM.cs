using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.Reservation;

public class ReservationIM
{
    [Required]
    public string FirstName { get; set; } = String.Empty;
    [Required]
    public string LastName { get; set; } = String.Empty;
    [Required]
    public DateOnly Date { get; set; }
    [Required]
    public TimeSpan Time { get; set; }
    
    public string Email { get; set; } = String.Empty;
    [Required]
    public string Phone { get; set; } = String.Empty;
}