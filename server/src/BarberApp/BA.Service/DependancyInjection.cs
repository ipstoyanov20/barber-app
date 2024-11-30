using BA.Service.Abstractions;
using BA.Service.Realizations;
using Microsoft.Extensions.DependencyInjection;

namespace BA.Service;

public static class DependancyInjection
{
    public static void AddServices(this IServiceCollection service)
    {
        service
            .AddScoped<ICurrentUser, CurrentUser>()
            .AddScoped<IUserService, UserService>()
            .AddScoped<IReservationService, ReservationService>();
    }
}