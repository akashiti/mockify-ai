from flask import Flask, request, jsonify
from .models.resume_analyzer import ResumeAnalyzer

app = Flask(__name__)
analyzer = ResumeAnalyzer()

@app.route('/api/inference', methods=['POST'])
def run_inference():
    data = request.json
    if 'resume_text' not in data:
        return jsonify({'error': 'No resume text provided'}), 400
    
    resume_text = data['resume_text']
    analysis_result = analyzer.analyze(resume_text)
    
    return jsonify(analysis_result), 200

if __name__ == '__main__':
    app.run(debug=True)