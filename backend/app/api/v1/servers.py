from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.base import get_db
from app.db.models import ServerInstance
from app.api.v1.schemas import ServerSummary

router = APIRouter()

@router.get("", response_model=list[ServerSummary])
async def list_servers(db: AsyncSession = Depends(get_db)):
    query = select(ServerInstance)
    result = await db.scalars(query)
    return [ServerSummary.from_orm(server) for server in result.all()]
