# Space Race (Dating App)

Space Race is a dating site where users can try to find matching partners, but with an "outer space" theme.

This web application was built for learning purposes and follows the Udemy tutorial [Build an app with ASPNET Core and Angular from scratch](https://www.udemy.com/build-an-app-with-aspnet-core-and-angular-from-scratch/learn/v4/). 

While the server follows the Udemy tutorial 100%, the client application deviates from the tutorial by using Angular 6 instead of 5, and by implementing NGRX for state management. The complete tech stack and tools are as follows:

### Server:

* [Microsoft ASP.net Core 2.0](https://www.microsoft.com/net/download/dotnet-core/sdk-2.1.201) for creating the server + web APIs
* [Microsoft Entity Framework Core 2.0](https://docs.microsoft.com/en-us/ef/core/get-started/install/) as the (O/RM) for working with the Db using .NET objects
* [SQLite Browser 3.10.1](https://sqlitebrowser.org/) for inspecting the Db

### Client:

* [Angular 6](https://angular.io/) as the front-end framework (tutorial uses Angular 5)
* [NGRX 6](https://github.com/ngrx/platform) for state management (tutorial does not use NGRX)
* [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/getting-started/) for layout + styling
* [AlertifyJS 1.11](https://github.com/MohammadYounes/AlertifyJS) for alerts + dialogs
* [Auth0 Angular JWT 2.0](https://github.com/auth0/angular2-jwt) for JWT utilities
* [ngx-bootstrap 3.3.7](https://valor-software.com/ngx-bootstrap/#/getting-started) for JS-related Bootstrap requirements
* [Bootswatch 3.3.7](https://bootswatch.com/) for Bootstrap theming
* [NodeJS 9.10.1](https://nodejs.org/en/) for installing client dependencies

Client app was built with [@angular/cli](https://github.com/angular/angular-cli) and [@ngrx/schematics](https://github.com/ngrx/platform/blob/master/docs/schematics/README.md)

### Source Control
* git and Github

## Getting Started
```bash
# Clone the repository
git clone https://github.com/ChristianArredondo/space-race.git

# Go to the project directory
cd dating-app-ng-dotnet
__________________

# STARTING THE SERVER & DB

# Go to the DatingApp.API directory
cd DatingApp.API

# Build .NET project
dotnet build

# Run command to create Db
dotnet ef database update

# Adding seed data
open `Startup.cs` file
uncomment line 91: seeder.SeedUsers();
# this command clears Users table and adds seed data

# Start API server
dotnet watch run

# You should see a populated Photos and Users table if you open Db with SQLite
# Line 91 in `Startup.cs` can be re-commented out for any future server starts
__________________

# STARTING THE CLIENT

# Go to the DatingApp.SPA directory
cd DatingApp.SPA

# Install dependencies using NPM or yarn
# NPM
npm install
# yarn
yarn

# Start dev client server using NPM or yarn
# NPM
npm run start
# yarn
yarn start

```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser to visit app.

## App Registration & Login

Once you register and see a success alert, you can then sign in using your new username and password to view the protected pages.

## Disclaimer
This is the first time I ever worked with C#, .NET Core, and the Entity Framework.

## Screenshots

### Homepage
![homepage](https://i.imgur.com/SxCBEK8.png)

### Auth-Protected Members Page
![members page](https://i.imgur.com/AQDr2s8.png)