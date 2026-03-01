using System.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Portfolio.Models;
using Portfolio.Services;

namespace Portfolio.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IResumeService _resumeService;

    public HomeController(ILogger<HomeController> logger, IResumeService resumeService)
    {
        _logger = logger;
        _resumeService = resumeService;
    }

    public async Task<IActionResult> Index(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        return View(resume);
    }

    /// <summary>Serves the profile image from wwwroot/images so it always loads.</summary>
    [ResponseCache(Duration = 3600, Location = ResponseCacheLocation.Client)]
    public IActionResult ProfileImage()
    {
        var env = HttpContext.RequestServices.GetRequiredService<IWebHostEnvironment>();
        var candidates = new[] { "profile.jpeg", "profile.jpg", "profile.png" };
        foreach (var basePath in new[] { env.WebRootPath, Path.Combine(env.ContentRootPath, "wwwroot") })
        {
            if (string.IsNullOrEmpty(basePath)) continue;
            var imagesPath = Path.Combine(basePath, "images");
            foreach (var name in candidates)
            {
                var path = Path.GetFullPath(Path.Combine(imagesPath, name));
                if (System.IO.File.Exists(path))
                {
                    var contentType = name.EndsWith(".jpeg", StringComparison.OrdinalIgnoreCase) ? "image/png" : "image/jpeg";
                    return PhysicalFile(path, contentType);
                }
            }
        }
        return NotFound();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
