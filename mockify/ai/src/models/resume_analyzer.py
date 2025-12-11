from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

class ResumeAnalyzer:
    def __init__(self, job_description, resumes):
        self.job_description = job_description
        self.resumes = resumes
        self.vectorizer = TfidfVectorizer()

    def analyze_resumes(self):
        # Combine job description and resumes for vectorization
        documents = [self.job_description] + self.resumes
        tfidf_matrix = self.vectorizer.fit_transform(documents)

        # Calculate cosine similarity between job description and resumes
        cosine_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()

        # Create a DataFrame to hold the results
        results = pd.DataFrame({
            'Resume': self.resumes,
            'Similarity Score': cosine_similarities
        })

        # Sort results by similarity score in descending order
        results = results.sort_values(by='Similarity Score', ascending=False).reset_index(drop=True)
        return results

# Example usage:
# job_desc = "Looking for a software engineer with experience in Python and machine learning."
# resumes = ["Resume 1 content...", "Resume 2 content...", "Resume 3 content..."]
# analyzer = ResumeAnalyzer(job_desc, resumes)
# analysis_results = analyzer.analyze_resumes()
# print(analysis_results)