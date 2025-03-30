---
title: Host Glossia
titleTemplate: :title | Quick Start | Hosters | Glossia Documentation
---

# Host Glossia

Glossia is licensed under the [Mozilla Public License](https://github.com/glossia/glossia/src/branch/main/LICENSE.md) and can be self-hosted.
It's designed to ease self-hosting and scaling through minimizing infrastructure dependencies and allowing vertical scaling.

If you plan to self-host Glossia, you'll need:
- An environment from where you can run virtualized OCI-compliant images
- A Postgres database that the server can connect to
- S3-compatible storage

New versions of Glossia are continuously [released](https://github.com/glossia/glossia/releases) with a changelog, and a companion OCI image published to the [GitHub Registry](https://github.com/glossia/glossia/pkgs/container/glossia).

> [!TIP] SEMVER
> The server follows [Semantic Versioning](https://semver.org/). Upgrading to versions that match your current major version can be incrementally rolled out automatically. Manual work (i.e., breaking changes) will be flagged with the major version.
