import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report, accuracy_score
import joblib

# Load datasets
train = pd.read_csv("train.csv")
val = pd.read_csv("validation.csv")
test = pd.read_csv("test.csv")

# Pipeline
model = Pipeline([
    ("tfidf", TfidfVectorizer(
    ngram_range=(1,2),
    stop_words="english",
    max_features=5000
)
),
    ("clf", LinearSVC())
])

# Train
model.fit(train["text"], train["emotion"])

# Validation evaluation
val_preds = model.predict(val["text"])
print("\nValidation Accuracy:", accuracy_score(val["emotion"], val_preds))
print(classification_report(val["emotion"], val_preds))

# Test evaluation
test_preds = model.predict(test["text"])
print("\nTest Accuracy:", accuracy_score(test["emotion"], test_preds))
print(classification_report(test["emotion"], test_preds))

# Save model
joblib.dump(model, "model.pkl")

print("\nModel saved as model.pkl")
