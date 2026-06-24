from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.base import get_db
from app.core.security import get_current_user
from app.api.v1.schemas import UserRead
from app.db.models import User

router = APIRouter()

@router.get("/me", response_model=UserRead)
async def get_current_user_route(current_user: User = Depends(get_current_user)):
    return current_user
