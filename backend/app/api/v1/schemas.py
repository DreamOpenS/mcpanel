from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    sub: Optional[UUID] = None

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserRead(BaseModel):
    id: UUID
    email: EmailStr
    is_active: bool

    class Config:
        orm_mode = True

class ServerOut(BaseModel):
    id: UUID
    name: str
    status: str
    node_id: UUID
    port: int
    max_players: int
    allocated_ram_mb: int
