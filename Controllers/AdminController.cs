using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using Portfolio.Services;

namespace Portfolio.Controllers;

[Authorize]
public class AdminController : Controller
{
    private readonly IResumeService _resumeService;
    private readonly IConfiguration _config;

    public AdminController(IResumeService resumeService, IConfiguration config)
    {
        _resumeService = resumeService;
        _config = config;
    }

    [AllowAnonymous]
    [HttpGet]
    public IActionResult Login(string? returnUrl = null)
    {
        if (User.Identity?.IsAuthenticated == true)
            return RedirectToAction(nameof(EditResume));
        ViewData["ReturnUrl"] = returnUrl;
        return View();
    }

    [AllowAnonymous]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Login(string password, string? returnUrl, CancellationToken cancellationToken)
    {
        var expectedPassword = Environment.GetEnvironmentVariable("ADMIN_PASSWORD")
            ?? _config["Admin:Password"];
        if (string.IsNullOrEmpty(expectedPassword) || password != expectedPassword)
        {
            ModelState.AddModelError(string.Empty, "Invalid password.");
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        var claims = new List<System.Security.Claims.Claim>
        {
            new(System.Security.Claims.ClaimTypes.Name, "Admin")
        };
        var identity = new System.Security.Claims.ClaimsIdentity(claims, "Admin");
        var principal = new System.Security.Claims.ClaimsPrincipal(identity);
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal,
            new Microsoft.AspNetCore.Authentication.AuthenticationProperties
            {
                IsPersistent = true,
                ExpiresUtc = DateTimeOffset.UtcNow.AddHours(2)
            });

        return LocalRedirect(returnUrl ?? Url.Action(nameof(EditResume))!);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return RedirectToAction(nameof(Login));
    }

    [HttpGet]
    public async Task<IActionResult> EditResume(CancellationToken cancellationToken)
    {
        var resume = await _resumeService.GetResumeAsync(cancellationToken);
        var json = System.Text.Json.JsonSerializer.Serialize(resume, new System.Text.Json.JsonSerializerOptions { WriteIndented = true });
        return View(new EditResumeViewModel { ResumeJson = json });
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditResume(EditResumeViewModel model, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(model?.ResumeJson))
        {
            ModelState.AddModelError(string.Empty, "Resume JSON cannot be empty.");
            return View(model);
        }

        Resume? resume;
        try
        {
            resume = System.Text.Json.JsonSerializer.Deserialize<Resume>(model.ResumeJson,
                new System.Text.Json.JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }
        catch (Exception ex)
        {
            ModelState.AddModelError(string.Empty, "Invalid JSON: " + ex.Message);
            return View(model);
        }

        if (resume == null)
        {
            ModelState.AddModelError(string.Empty, "Failed to parse resume.");
            return View(model);
        }

        resume.Contact ??= new ContactInfo();
        resume.Skills ??= new List<SkillGroup>();
        resume.Experience ??= new List<ExperienceItem>();
        resume.Education ??= new List<EducationItem>();
        resume.Achievements ??= new List<string>();

        await _resumeService.SaveResumeAsync(resume, cancellationToken);
        TempData["Message"] = "Resume saved successfully.";
        return RedirectToAction(nameof(EditResume));
    }
}
