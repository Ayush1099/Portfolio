using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;

namespace Portfolio.Controllers;

public class ResumeController : Controller
{
    private readonly IResumeService _resumeService;

    public ResumeController(IResumeService resumeService)
    {
        _resumeService = resumeService;
    }

    public async Task<IActionResult> Experience(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        return View(resume);
    }

    public async Task<IActionResult> Skills(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        return View(resume);
    }

    public async Task<IActionResult> Education(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        return View(resume);
    }

    public async Task<IActionResult> Achievements(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        return View(resume);
    }

    public async Task<IActionResult> Contact(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        return View(resume);
    }
}
