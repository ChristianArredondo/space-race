# Libraries
* auth0/angular-jwt
* ngx-bootstrap
* alertifyjs

# Study
* Entity Framework
* Kestrel
* .NET

# Section 3: Security

## 25 - The Repository Pattern
### Formal Definition
The repository mediates between the data source layer and the business layers of the applciation. It queries the data source for the data, maps the data from the data source to a business entity, and persists changes in the business entity to the data source. A repository separates the business logic from the interactions with the underlying data source or Web service.

* Controllers are strongly tied to the Db, which make them less manageable if Db changes
* the current setup uses the Entity Framework as a level of abstraction between controllers and Db
* current setup: Kestrel => Controller => DbContext => EntityFramework => Database
* new layer of abstraction to add: Repository Pattern, which is composes of two parts:
  * Repository Interface: exposes methods that the Controller can utilize (i.e. GetUsers(), GetUser(), Login())
  * Repository Implementation: includes instructions for each exposed method which uses Entity Framework
* the main advantages of this pattern include:
  * minimized duplicate query logic (i.e. multiple Controllers that need to fetch a User can share the same single method)
  * decouples appication from persistence framework (in case it ever changes)
  * all Db queries are in the same place
  * promotes testability ()

## 26. Creating an Interface for the Repository

* interface names start with an "I"

## 27. Creating the concrete AuthRepository

## 28. Registering Services in the Startup Class

* 3 options for registering AuthRepository as a service
  * `AddTransient()` - creates new instance any time class is requested
  * `AddScoped()` - creates new instance for each Http request
  * `AddSingleton()` gives the service the same lifetime as the application (can cause concurrency problems)
* use `AddScoped()`

## 29. Creating the Register Method in our Auth Controller

Add `Register()` method to `AuthRepository` which hashes password, creates new User, and adds new User to Db.

## 30. Using DTOs (Data Transfer Objects)

Use DTOs to parse http request body data for user registration.

## 31. Validation in the API

## 32. Token Authentication (JWTs)

JWT Structure
* header
  * algorithm used for encryption (i.e. `'HS512'`)
  * type of token (i.e. `'JWT'`)
* payload
  * nameId
  * expiration
  * issued timestamp
* secret
  * used to encode/hash token

## 33. Creating the Login Method in the API

## 34. Using the Authentication Middleware

## 35. Summary
* created User class
* created new migration for Users
* learned about Repository
* created IAuthRepository with 3 methods: `Register()`, `Login()`, `UserExists()`
* added User class to DataContext so EntityFramework could create new Users table in Db
* created AuthController with `login()` and `register()` methods
* added auth protection to ValuesController
* added Authentication middleware to Startup class

# Section 4: Client Login and Register

# Section 5: Error Handling

* add API error handling for Production env by use of middleware in `Startup.cs`
* add new helper class `Extensions` for adding error-related headers

# Section 8: Extending the API!

## Overview
* extending the User class
* more migrations
* cascade delete
* seed data into Db
* create new repo
* using Automapper for DTOs

## 67. Extending the User Model

* we have to explicity describe new Db relationships to EntityFramework, otherwise it will assume
  * i.e. if a User has a collection of Photos, does deleting a User mean the Photos also get deleted?

## 68. Exploring Entity Framework Migrations
  * command `dotnet ef migrations remove` removes the most recent migration
  * `update` command not supported if columns are being removed

## 69. Entity Framework Relationships
* by adding a reference to the `User` model in the `Photo` model, we now have the intended behavior
  * `onDelete` for `Photo` is now `referentialAction.Cascade`, which means if we delete a `User`, then we also delete the photos associated with that `User`

## 70. Seeding Data to Db - Part 1

* JSON generator
  * https://www.json-generator.com/
  ```
  [
    '{{repeat(5)}}',
    {
      Username: '{{firstName("female")}}',
      Gender: 'female',
      DateOfBirth: '{{date(new Date(1950,0,1), new Date(1999, 11, 31), "YYYY-MM-dd")}}',
      Password: 'password',
      KnownAs: function(){ return this.Username; },
      Created: '{{date(new Date(2017,0,1), new Date(2017, 7, 31), "YYYY-MM-dd")}}',
      LastActive: function(){return this.DateCreated; },
      Introduction: '{{lorem(1, "paragraphs")}}',
      LookingFor: '{{lorem(1, "paragraphs")}}',
      Interests: '{{lorem(1, "sentences")}}',
      City: '{{city()}}',
      Country: '{{country()}}',
      Photos: [
          {
            url: function(num) {
            return 'https://randomuser.me/api/portraits/women/' + num.integer(1,99) + '.jpg';
          },
          isMain: true,
          description: '{{lorem()}}'
        }
      ]
    }
  ]
  ```

## 71. Seeding Data to Db - Part 2

* use `System.IO.File.ReadAllText()` to read `UserSeedData.json` file and extract all users.
* use `JsonConvert.DeserializeObject<List<User>>()` to convert json to list of User collection within .NET
* create new `Seed` class with `SeedUsers()` method
  * add new class as a Transient service to `Startup`
  * perform seeding in middleware before adding CORS headers (commented out to only use when appropriate)

## 72. Creating a New Repository for our API

* create new interface for app/users repository
* create new class implementation of ISpaceRaceRepository
* make service available by use of `services.AddScoped()` within `Startup`