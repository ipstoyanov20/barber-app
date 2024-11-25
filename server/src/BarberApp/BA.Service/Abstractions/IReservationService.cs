using System.Threading.Tasks;
using BA.Data.Models;

namespace BA.Service.Abstractions;

public interface IReservationService
{
    Task<Reservation> GetReservationByIdAsync(string Id);
}