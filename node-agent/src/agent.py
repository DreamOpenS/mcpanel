import asyncio
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="HUMK Nexus Node Agent")

class HealthResponse(BaseModel):
    node: str
    status: str

@app.get("/health")
async def health_check():
    return HealthResponse(node="node-local", status="healthy")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=9100)
