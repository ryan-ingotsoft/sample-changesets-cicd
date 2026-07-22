function App() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="card bg-base-100 w-full max-w-md border border-base-300 shadow-xl">
          <div className="card-body items-center gap-4">
            <span className="status status-success" />
            <h1 className="card-title text-4xl font-bold">CI/CD Demo</h1>
            <p className="text-base-content/70">
              React · TypeScript · Changesets · Tailwind · Kubernetes
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="badge badge-ghost">v0.0.2</span>
              <span className="badge badge-ghost">main</span>
              <span className="badge badge-success">ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// [cicd-0001]