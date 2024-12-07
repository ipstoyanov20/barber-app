using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.Reservation;

public class ReservationIM
{
    [Required]
    public string Date { get; set; }
    [Required]
    public int Time { get; set; }
    [Required]
    public string? Service { get; set; }
}