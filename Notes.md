
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