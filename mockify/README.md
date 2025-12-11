# Mockify AI Project

Mockify AI is a comprehensive platform designed to revolutionize the way job seekers prepare for interviews. This project consists of three main modules: **Frontend**, **Backend**, and **AI Module**. Below are the details for each module, including setup instructions and usage guidelines.

## Project Structure

```
mockify
├── frontend          # Frontend application built with React
│   ├── public
│   ├── src
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── backend           # Backend application built with Node.js and Express
│   ├── src
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
├── ai                # AI module for resume analysis
│   ├── src
│   └── Dockerfile
├── .github
├── docker-compose.yml
├── scripts
├── .gitignore
└── README.md
```

## Frontend

The frontend is built using React and Vite. It provides a user-friendly interface for job seekers to access various features.

### Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Features

- **About Us Page**: Accessible at `/aboutus`, showcasing the mission and vision of Mockify AI.
- **Responsive Design**: The application is designed to be mobile-friendly.

## Backend

The backend is built using Node.js and Express. It handles authentication and serves API endpoints for the frontend.

### Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Features

- **Authentication**: Handles user login and registration.
- **API Endpoints**: Provides endpoints for frontend communication.

## AI Module

The AI module is responsible for analyzing resumes and providing insights to users.

### Setup

1. Navigate to the `ai` directory:
   ```bash
   cd ai
   ```

2. Install dependencies:
   ```bash
   pip install -r src/requirements.txt
   ```

### Features

- **Resume Analysis**: Uses machine learning techniques to analyze resumes.
- **Inference Service**: Provides an interface for running inference on the resume analysis model.

## Docker Setup

To run the entire application stack using Docker, use the following command from the root directory:

```bash
docker-compose up --build
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries, please reach out to the project maintainers.