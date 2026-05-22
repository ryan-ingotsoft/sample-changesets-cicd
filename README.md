# CI/CD Demo

A React + Vite UI app served via nginx in a multi-stage Docker image. Uses [Changesets](https://github.com/changesets/changesets) for semantic versioning on `main` and ephemeral PR-specific Docker tags for pre-merge testing.

## Workflows

### PR Build

```mermaid
sequenceDiagram
    actor Dev
    participant PR as PR #42 (fix-header)
    participant CI as CI
    participant GHCR as GHCR

    Dev->>PR: Open / push to PR
    PR->>CI: pull_request trigger
    CI->>CI: lint + build
    CI->>GHCR: push pr-42-fix-header
```

### Merge to Main

```mermaid
sequenceDiagram
    actor Dev
    participant PR as PR #42 (fix-header)
    participant Main as main
    participant CI as CI
    participant Rel as Release
    participant GHCR as GHCR
    participant CR as changeset-release PR

    Dev->>PR: Merge PR
    PR->>Main: merge commit
    Main->>CI: push trigger
    CI->>CI: lint + build
    Main->>Rel: push trigger
    Rel->>Rel: changesets detects changesets
    Rel->>CR: creates version PR
    Rel->>GHCR: push {version} + latest
```

### Release (changeset-release merge → deploy)

```mermaid
sequenceDiagram
    participant CR as changeset-release PR
    participant Main as main
    participant Rel as Release
    participant GHCR as GHCR
    participant K8s

    CR->>Main: merge version PR
    Main->>Rel: push trigger
    Rel->>Rel: changesets: publish (build)
    Rel->>GHCR: re-tag latest → {newVersion}
    Rel->>K8s: deploy {newVersion}
```
