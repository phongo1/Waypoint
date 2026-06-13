# Waypoint

# Tech Stack:
- React
- Vite
- ASP.NET Core
- Entity Framework Core
- PostgreSQL

# Development

Run the backend:

```sh
dotnet run --project src/Trace.Web
```

Run the frontend in a second terminal:

```sh
cd src/Trace.Web/ClientApp
npm install
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://127.0.0.1:5173`.
The React dev server proxies `/api` requests to `http://localhost:5030`.

# Production

Publishing the ASP.NET Core project builds the React app and serves the generated files from `wwwroot`.
