using System.Linq;
using System.Threading.Tasks;
using BA.Common.Models.Reservation;
using BA.Data.Data;
using BA.Data.Models;
using BA.Service.Abstractions;

namespace BA.Service.Realizations;

public class ReservationService : IReservationService
{
    private readonly ApplicationDbContext context;
    public ReservationService(ApplicationDbContext context)
    {
        this.context = context;
    }
    public async Task<Reservation?> GetReservationByIdAsync(string Id)
    {
        var reservation = await this.context.Reservations.FindAsync(Id);
        return reservation;
    }

    public async Task<Reservation> CreateReservationAsync(ReservationIM reservationIM, string userId)
    {
        Reservation reservation = new Reservation()
        {
            FirstName = reservationIM.FirstName,
            LastName = reservationIM.LastName,
            Date = reservationIM.Date,
            Time = reservationIM.Time,
            Email = reservationIM.Email,
            Phone = reservationIM.Phone,
            Service = reservationIM.Service,
            UserId = userId
        };
        await this.context.Reservations.AddAsync(reservation);
        await this.context.SaveChangesAsync();

        return reservation;
    }
}