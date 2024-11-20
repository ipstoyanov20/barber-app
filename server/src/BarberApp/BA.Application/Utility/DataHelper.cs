using System;
using System.Threading.Tasks;
using BA.Data.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace BA.Application.Utility;

public static class DataHelper
{
    public static async Task ManageDataAsync(IServiceProvider serviceProvider)
    {
        var dbContextSvc = serviceProvider.GetRequiredService<ApplicationDbContext>();
        
        await dbContextSvc.Database.MigrateAsync();
    }
}