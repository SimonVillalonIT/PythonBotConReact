from pydantic import BaseModel
from chatbot import consultaIA
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Answer(BaseModel):
    conversacion:str

@app.get("/")
def deaf_root():
    return {"Welcome": "Welcome to my REST API"}


@app.post("/api")
def answer(post:Answer):
    return consultaIA(post.conversacion)


@app.post("/api2")
def answer(post:Answer):
    return consultaIA(post.conversacion)

