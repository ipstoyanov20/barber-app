using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices.JavaScript;
using NpgsqlTypes;

namespace BA.Data.Models;

public class Reservation
{
    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();
    
    [Required]
    public string FirstName { get; set; } = String.Empty;
    
    public string LastName { get; set; } = String.Empty;
    
    [Required]
    public DateOnly DateReserved { get; set; }
    
}