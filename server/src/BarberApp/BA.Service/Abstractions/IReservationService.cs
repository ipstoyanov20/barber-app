using System.Threading.Tasks;
using BA.Data.Models;
using BA.Common.Models.Reservation;
namespace BA.Service.Abstractions;

public interface IReservationService
{
    Task<Reservation> GetReservationByIdAsync(string Id);
    
    Task<Reservation> CreateReservationAsync(ReservationIM reservationIM, string userId);
}