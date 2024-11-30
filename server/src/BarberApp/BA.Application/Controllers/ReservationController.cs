using System.Threading.Tasks;
using BA.Data.Models;
using BA.Service.Realizations;
using Microsoft.AspNetCore.Mvc;

namespace BA.Application.Controllers;
[ApiController]
[Route("[controller]")]
public class ReservationController: ControllerBase
{
    private readonly ReservationService reservationService;

    public ReservationController(ReservationService reservationService)
    {
        this.reservationService = reservationService;
    }

    [HttpGet("Id")]

    public async Task<ActionResult<Reservation?>> GetReservationByIdAsync(string? Id)
    {
        return await this.reservationService.GetReservationByIdAsync(Id);
    }
    
    
}