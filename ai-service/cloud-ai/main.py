from fastapi import FastAPI

app = FastAPI(title="FitFlow Cloud AI")


@app.get("/health")
def health():
    return {"status": "ok"}