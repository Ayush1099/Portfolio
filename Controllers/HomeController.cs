using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
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

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
