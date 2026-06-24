# HUMK Nexus Architecture

## Overview

HUMK Nexus uses a distributed control plane and node-based execution model:

- **Frontend**: Next.js handles UI and user workflows.
- **Backend**: FastAPI provides REST APIs, authentication, scheduling, and control-plane logic.
- **Node agents**: deployed on each host to manage Minecraft process lifecycle and local file operations.
- **PostgreSQL**: stores users, organizations, servers, nodes, and audit logs.
- **Redis**: caches sessions, rate limits, locks, and pub/sub events.
- **Nginx**: reverse proxy for HTTP, WebSockets, and static content.
- **Prometheus / Grafana**: observability, metrics, alerting.
