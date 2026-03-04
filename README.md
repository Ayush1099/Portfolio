# Portfolio - Ayush Verma

Portfolio site with resume content stored in JSON. Public pages show experience, skills, education, achievements, and contact. An admin area allows editing the resume after logging in with a password.

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

Set the `ADMIN_PASSWORD` environment variable (takes precedence), or set `Admin:Password` in `appsettings.json`.

**Local (PowerShell):**
```powershell
$env:ADMIN_PASSWORD = "YourSecurePassword"
dotnet run
```

**Visual Studio:** Project → Properties → Debug → Open debug launch profiles → Add `ADMIN_PASSWORD` under Environment variables.

**Production:** Set `ADMIN_PASSWORD` in your hosting provider's environment/configuration.

## Update content without admin

You can edit `Data/resume.json` directly. Restart the app (or redeploy) so changes are loaded. The JSON structure must match the `Resume` model (Contact, Skills, Experience, Education, Achievements).

## Deploy on Render

1. Push your code to GitHub.
2. Go to [render.com](https://render.com) → New → Web Service.
3. Connect your repository and select it.
4. Use these settings:
   - **Build Command:** `dotnet publish -c Release -o ./publish`
   - **Start Command:** `dotnet ./publish/Portfolio.dll`
5. Add environment variables (Environment tab):
   - `ASPNETCORE_ENVIRONMENT` = `Production`
   - `ADMIN_PASSWORD` = your admin password (required)
6. Deploy. Render will give you a URL (e.g. `https://portfolio-xxx.onrender.com`).

## Deploy (general)

The app reads `Data/resume.json` from the content root. Ensure the file is deployed (it is set to `CopyToOutputDirectory: PreserveNewest` in the project file). For production, set `ADMIN_PASSWORD` as an environment variable.
