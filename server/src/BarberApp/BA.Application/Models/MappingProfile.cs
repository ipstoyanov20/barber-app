// <copyright file="MappingProfile.cs" company="ORB">
// Copyright (c) ORB. All rights reserved.
// </copyright>

using AutoMapper;

namespace BA.WebHost.Models;

/// <summary>
/// Mapping profile.
/// </summary>
public class MappingProfile : Profile
{
    /// <summary>
    /// Initializes a new instance of the <see cref="MappingProfile"/> class.
    /// </summary>
    public MappingProfile()
    {
        // this.CreateMap<User, UserVM>();
        // this.CreateMap<UserUM, UserIM>();
        // this.CreateMap<ResumeIM, Resume>();
        // this.CreateMap<Resume, ResumeVM>()
        //     .ForMember(d => d.UserFullNames, cfg => cfg.MapFrom(s => $"{s.User.FirstName} {s.User.LastName}"));
        // this.CreateMap<PersonalInfo, PersonalInfoVM>();
        // this.CreateMap<PersonalInfoIM, PersonalInfo>();
        // this.CreateMap<CarInfoIM, CarInfo>();
        // this.CreateMap<CarInfo, CarInfoVM>();
        // this.CreateMap<Template, TemplateVM>();
        // this.CreateMap<TemplateIM, Template>();
    }
}