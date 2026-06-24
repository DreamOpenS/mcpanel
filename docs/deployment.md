# Deployment Guide

## Prerequisites

- Docker Engine
- Docker Compose
- Git

## Local deployment

1. Clone repository.
2. Copy `.env.example` to `.env` and set values.
3. Run:

```bash
docker compose up -d --build
```

4. Access:
   - `http://localhost` for the UI
   - `http://localhost:9090` for Prometheus
   - `http://localhost:3000` for Grafana

## Production considerations

- Use a managed PostgreSQL cluster or high-availability primary/replica.
- Deploy Redis in cluster mode or Sentinel.
- Use an ingress controller or Nginx on bare-metal for TLS.
- Run nodes behind secure network boundaries.
- Implement secure secrets management.
