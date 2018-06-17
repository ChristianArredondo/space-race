using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
  /*
    Statis class definition: A static class can contain only static members
    (static data members and static methods). You can‘t create an object for
    the static class.
  */
  public static class Extensions
  {
    /*
      - `this` is an extension method
      - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods
    */
    public static void AddApplicationError(this HttpResponse response, string message)
    {
      response.Headers.Add("Application-Error", message);
      response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
      response.Headers.Add("Access-Control-Allow-Origin", "*");
    }

    public static int CalculateAge(this DateTime theDateTime)
    {
      var age = DateTime.Today.Year - theDateTime.Year;
      if (theDateTime.AddYears(age) > DateTime.Today)
      {
        age--;
      }
      return age;
    }
  }
}