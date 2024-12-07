﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BA.Common.Models.Reservation;
using BA.Data.Data;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BA.Service.Realizations;

public class ReservationService : IReservationService
{
    private readonly ApplicationDbContext context;
    private readonly IMapper mapper;
    private readonly UserManager<User> userManager;

    public ReservationService(ApplicationDbContext context, UserManager<User> userManager, IMapper mapper)
    {
        this.context = context;
        this.userManager = userManager;
        this.mapper = mapper;
    }

    public async Task<IEnumerable<ReservationVM>> GetAllReservationsAsync(string userId)
    {
        var reservation = await this.context.Reservations.Where(r=>r.UserId == userId).ToListAsync();
        return this.mapper.Map<IEnumerable<ReservationVM>>(reservation);
    }

    public async Task<ReservationVM> CreateReservationAsync(ReservationIM reservationIm, string userId)
    {
        var user = await this.userManager.FindByIdAsync(userId);
        if (user == null)
        {
            throw new Exception("User not found."); // Handle error if user is not found
        }

        var reservation = this.mapper.Map<Reservation>(reservationIm);


        reservation.UserId = userId; 
        reservation.FirstName = user.FirstName;
        reservation.LastName = user.LastName;
        reservation.Email = user.Email ?? "";
        reservation.Phone = user.PhoneNumber ?? "";

        await this.context.Reservations.AddAsync(reservation);
        await this.context.SaveChangesAsync();

        return this.mapper.Map<ReservationVM>(reservation);
    }
}