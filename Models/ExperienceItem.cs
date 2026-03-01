namespace Portfolio.Models;

public class ExperienceItem
{
    public string Company { get; set; } = "";
    public string Role { get; set; } = "";
    public string Location { get; set; } = "";
    public string Period { get; set; } = "";
    public List<string> BulletPoints { get; set; } = new();
}
