using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.Reservation;

public class ReservationIM
{
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public DateOnly Date { get; set; }
    [Required]
    public TimeSpan Time { get; set; }
    
    [Required]
    public string Email { get; set; }
    [Required]
    public string Phone { get; set; }
    
    [Required]
    public string Service 
    { get; set; }
}