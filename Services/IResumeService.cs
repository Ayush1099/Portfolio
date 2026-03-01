using Portfolio.Models;

namespace Portfolio.Services;

public interface IResumeService
{
    Task<Resume> GetResumeAsync(CancellationToken cancellationToken = default);
    Task SaveResumeAsync(Resume resume, CancellationToken cancellationToken = default);
}
