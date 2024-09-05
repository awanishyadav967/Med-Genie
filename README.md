
# MED-GENIE-Medical Chatbot
![Screenshot (180)](https://github.com/user-attachments/assets/c704a855-47ad-4ebe-9770-fb1401b2bb35)


## Project Overview

This project aims to develop a Medical Chatbot designed to assist patients with preliminary health assessments and provide relevant medical advice. The chatbot uses AI-driven technology to offer guidance based on user input, helping to triage symptoms and suggest possible actions.

### Team Members

- **Avanish Yadav** ( Developer)
- **Pavani Jain** (Developer)
- **Utkarsh Kesarwani** (Developer)

### Project Mentor

- **Dr. Parul** (Project Intern Mentor)

## Features

- **User Management:** Secure signup and login processes, with user data securely stored in a MongoDB database.
- **Symptom Analysis:** AI-driven chatbot for real-time symptom assessment and preliminary medical advice using the Gemini API.
- **BMI Calculation:** Automatic calculation of Body Mass Index (BMI) based on user inputs, with personalized health recommendations.
- **Medical Advice:** Offers advice on whether to seek immediate medical attention or monitor symptoms.
- **Appointment Scheduling:** Integrates with healthcare providers to schedule appointments if necessary.
- **Health Tips:** Provides general health tips and preventive care advice.

## Technology Stack

- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **API Integration:** Gemini API for natural language processing and symptom analysis

## System Architecture
The platform’s architecture is divided into three main components:

- **User Management:** Handles user signup, login, and secure data storage.
- **Symptom Analysis:** An AI-driven chatbot that processes user inputs and provides medical advice.
- **Appointment Booking:** A system that allows users to schedule doctor appointments based on chatbot recommendations.

## Installation

To set up the project locally, follow these steps:

- **Clone the repository:**

```
git@github.com:awanishyadav967/Med-Genie.git
```

- **Install dependencies:**

```
1. cd client
2. npm install(install necessary dependency)
3. npm run dev

```
- Open second terminal for backend
```
1. cd server
2. (install necessary dependency)
3. npx nodemon index.js

```



- **Set up environment variables:** Create a .env file in the server directory and add the following variables

```
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service_provider
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

- **Access the platform:** Open your browser and navigate to ```http://localhost:3000```


## Usage

- **Signup/Login:** Create an account or log in with your credentials.
- **Interact with the Chatbot:** Enter symptoms and receive real-time medical advice.
- **Calculate BMI:** Automatically compute your BMI and get personalized health advice.
- **Book Appointments:** Schedule doctor appointments based on the chatbot’s analysis.
- **Generate Reports:** Download or receive a PDF summary of your interactions.

## Future Work

- **Enhanced AI Capabilities:** Integrating newer AI models for more accurate symptom analysis.
- **Personalization:** More tailored health advice based on user profiles and historical health data.
- **EHR Integration:** Linking with Electronic Health Records for comprehensive patient care.
- **Telemedicine:** Adding features for remote consultations and real-time health monitoring.
- **Data Privacy:** Implementing advanced security measures to protect patient data.








