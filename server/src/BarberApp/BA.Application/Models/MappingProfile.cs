// <copyright file="MappingProfile.cs" company="ORB">
// Copyright (c) ORB. All rights reserved.
// </copyright>

using AutoMapper;
using BA.Common.Models.Reservation;
using BA.Common.Models.User;
using BA.Data.Models;

namespace BA.Application.Models;


public class MappingProfile : Profile
{
    
    public MappingProfile()
    {
        this.CreateMap<User, UserVM>();
        this.CreateMap<UserUM, User>();
        this.CreateMap<ReservationIM, Reservation>();
        this.CreateMap<Reservation, ReservationVM>();
    }
}