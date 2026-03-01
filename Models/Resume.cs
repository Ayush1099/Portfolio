namespace Portfolio.Models;

public class Resume
{
    public ContactInfo Contact { get; set; } = new();
    public List<SkillGroup> Skills { get; set; } = new();
    public List<ExperienceItem> Experience { get; set; } = new();
    public List<EducationItem> Education { get; set; } = new();
    public List<string> Achievements { get; set; } = new();
}
