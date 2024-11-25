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
    public DateOnly Date { get; set; } = DateOnly.FromDateTime(DateTime.Now);

    [Required]
    public TimeSpan Time { get; set; } = DateTime.Now.TimeOfDay;
    
    
    public string Email { get; set; } = String.Empty;
    
    [Required]
    public string Phone { get; set; } = String.Empty;
    
    [Required]
    public string Service { get; set; } = String.Empty;
    
    public string UserId { get; set; } = String.Empty;
}