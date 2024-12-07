using System.Threading.Tasks;
using BA.Data.Models;
using BA.Common.Models.Reservation;
namespace BA.Service.Abstractions;

public interface IReservationService
{
    Task<Reservation?> GetReservationByIdAsync(string id);
    
    Task<ReservationVM> CreateReservationAsync(ReservationIM reservationIm, string userId);
}