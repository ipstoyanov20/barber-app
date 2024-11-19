# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory inside the container
WORKDIR /src

# Copy the .csproj files for the other layers and restore dependencies
COPY ["BA.Application/BA.Application.csproj", "BA.Application/"]
COPY ["BA.Service/BA.Service.csproj", "BA.Service/"]
COPY ["BA.Data/BA.Data.csproj", "BA.Data/"]
# COPY ["BA.Common/BA.Common.csproj", "BA.Common/"]

# Restore dependencies for the Application project
RUN dotnet restore "BA.Application/BA.Application.csproj"

# Copy all source files into the container
COPY . .

# Build and publish the application from the Application project
WORKDIR /src/BA.Application
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
EXPOSE 80

# Copy the published app from the build stage
COPY --from=build /app/publish .

# Set the entry point for the application
ENTRYPOINT ["dotnet", "BA.Application.dll"]
