using System.Collections.Generic;
using System.Threading.Tasks;
using BA.Common.Models.Reservation;
namespace BA.Service.Abstractions;

public interface IReservationService
{
    Task<IEnumerable<ReservationVM>> GetAllReservationsAsync(string userId);
    
    Task<ReservationVM> CreateReservationAsync(ReservationIM reservationIm, string userId);
}