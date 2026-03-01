# Portfolio - Ayush Verma

ASP.NET Core 8 MVC portfolio site with resume content stored in JSON. Public pages show experience, skills, education, achievements, and contact. An admin area allows editing the resume after logging in with a password.

## Run locally

```bash
dotnet run
```

Open https://localhost:5001 (or the URL shown in the console).

## Admin

- **Login**: Go to **Admin** in the nav (or `/Admin/Login`). Enter the password from `appsettings.json`.
- **Edit resume**: After login, click **Edit Resume**. The page shows the resume as JSON; edit and click **Save** to update `Data/resume.json`. Public pages reflect changes immediately.
- **Logout**: Click **Logout** in the nav.

## Change admin password

In `appsettings.json`, set:

```json
"Admin": {
  "Password": "YourSecurePassword"
}
```

**Important**: Do not commit a real password to a public repository. Use User Secrets in development or environment variables in production.

## Update content without admin

You can edit `Data/resume.json` directly. Restart the app (or redeploy) so changes are loaded. The JSON structure must match the `Resume` model (Contact, Skills, Experience, Education, Achievements).

## Deploy

The app reads `Data/resume.json` from the content root. Ensure the file is deployed (it is set to `CopyToOutputDirectory: PreserveNewest` in the project file). For production, set a strong admin password via configuration or environment variables.
