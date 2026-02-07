from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

class TextInput(BaseModel):
    text: str

@app.post("/predict")
def predict(data: TextInput):
    emotion = model.predict([data.text])[0]
    return {"emotion": emotion}
