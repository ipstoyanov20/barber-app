using System.Linq;
using System.Threading.Tasks;
using BA.Data.Data;
using BA.Data.Models;

namespace BA.Service.Realizations;

public class ReservationService
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
    
}