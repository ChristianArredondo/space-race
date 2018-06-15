namespace DatingApp.API.Dtos

/*
  - DataTransferObjects are used when we want to pass information
    from one type of system to another type of sytem
*/
{
    public class UserForRegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}