using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace DatingApp.API
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      /*
        - connection string should match with connection string in `appsettings.json`
        - order doesn't matter (according to tutorial)
      */
      services.AddDbContext<DataContext>(CotextOptionsBuilder => CotextOptionsBuilder.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
      services.AddMvc();
      services.AddCors();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      /*
        - order DOES matter here
        - we need CORS policy to be evaluated before `UseMVC`
        - keep `UseMVC` last because this is what returns the request to the client
      */
      app.UseCors(CorsPolicyBuilder => CorsPolicyBuilder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
      app.UseMvc();
    }
  }
}
