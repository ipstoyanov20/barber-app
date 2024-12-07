using System.Threading.Tasks;
using BA.Common.Models.Reservation;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BA.Application.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]
public class ReservationController : ControllerBase
{
    private readonly IReservationService reservationService;
    private readonly ICurrentUser currentUser;

    public ReservationController(IReservationService reservationService,  ICurrentUser currentUser)
    {
        this.reservationService = reservationService;
        this.currentUser = currentUser;
    }

    [HttpGet("Id")]

    public async Task<ActionResult<Reservation?>> GetReservationByIdAsync(string Id)
    {
        return await this.reservationService.GetReservationByIdAsync(Id);
    }
    [HttpPost]
    public async Task<ActionResult<ReservationVM?>> CreateReservationAsync([FromBody] ReservationIM reservationIm)
    {
        return await this.reservationService.CreateReservationAsync(reservationIm, this.currentUser.UserId);
    }
    
    
}