namespace Portfolio.Models;

public class ContactInfo
{
    public string Name { get; set; } = "";
    public string Title { get; set; } = "";
    public string Email { get; set; } = "";
    public List<string> Phones { get; set; } = new();
    public string Location { get; set; } = "";
    public string? LinkedIn { get; set; }
    public string? GitHub { get; set; }
    /// <summary>URL path to profile photo, e.g. /images/profile.jpg</summary>
    public string? ProfileImageUrl { get; set; }
}
