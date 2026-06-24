# Security Model

## Authentication

- JWT access and refresh tokens
- OAuth2 and PKCE
- MFA via TOTP
- Email verification and password reset

## Authorization

- RBAC with roles and permissions
- Organization and team boundaries
- API key scope enforcement

## Protections

- CSRF headers and same-site cookies
- Strict CSP and secure cookies
- Input validation through Pydantic
- ORM-based queries to prevent SQL injection
- Rate limiting using Redis
- Login anomaly detection and audit logging
