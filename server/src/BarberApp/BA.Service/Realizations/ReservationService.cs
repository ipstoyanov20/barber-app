using System.Threading.Tasks;
using AutoMapper;
using BA.Common.Models.Reservation;
using BA.Data.Data;
using BA.Data.Models;
using BA.Service.Abstractions;

namespace BA.Service.Realizations
{
    public class ReservationService : IReservationService
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper _mapper;

        public ReservationService(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            _mapper = mapper;
        }

        public async Task<Reservation?> GetReservationByIdAsync(string Id)
        {
            var reservation = await this.context.Reservations.FindAsync(Id);
            return reservation;
        }

        public async Task<Reservation> CreateReservationAsync(ReservationIM reservationIM, string userId)
        {
            // Use AutoMapper to map from ReservationIM to Reservation
            var reservation = _mapper.Map<Reservation>(reservationIM);
            reservation.UserId = userId;  // Set the userId manually if needed

            await this.context.Reservations.AddAsync(reservation);
            await this.context.SaveChangesAsync();

            return reservation;
        }
    }
}