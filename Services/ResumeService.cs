using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
using Portfolio.Models;

namespace Portfolio.Services;

public class ResumeService : IResumeService
{
    private readonly string _dataPath;
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        WriteIndented = true,
        PropertyNameCaseInsensitive = true
    };

    public ResumeService(IWebHostEnvironment env)
    {
        _dataPath = Path.Combine(env.ContentRootPath, "Data", "resume.json");
    }

    public async Task<Resume> GetResumeAsync(CancellationToken cancellationToken = default)
    {
        if (!File.Exists(_dataPath))
            return new Resume();

        await using var stream = File.OpenRead(_dataPath);
        var resume = await JsonSerializer.DeserializeAsync<Resume>(stream, JsonOptions, cancellationToken);
        return resume ?? new Resume();
    }

    public async Task SaveResumeAsync(Resume resume, CancellationToken cancellationToken = default)
    {
        var dir = Path.GetDirectoryName(_dataPath);
        if (!string.IsNullOrEmpty(dir))
            Directory.CreateDirectory(dir);

        await using var stream = File.Create(_dataPath);
        await JsonSerializer.SerializeAsync(stream, resume, JsonOptions, cancellationToken);
    }
}
