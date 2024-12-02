using System.Threading.Tasks;
using BA.Common.Models.Reservation;
using BA.Data.Models;
using BA.Service.Realizations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BA.Application.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]
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
    [HttpPost]
    public async Task<ActionResult<Reservation?>> CreateReservationAsync(ReservationIM reservationIm, string userId)
    {
        return await this.reservationService.CreateReservationAsync(reservationIm, userId);
    }
    
    
}