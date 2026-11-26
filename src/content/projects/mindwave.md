---
title: "MindWave"
description: "A Flutter app that uses Gemini to turn course material into quizzes, summaries and study resources."
tech: ["Flutter", "Dart", "Gemini", "Genkit", "Firebase", "Firestore"]
links:
  github: "https://github.com/som-sinha/mindwave"
---

MindWave is a mobile study toolkit I built with Arooz Paul Singh, Sanjay
Aadhitya and Anahita Nikaien for COMP-4768 at Memorial University. Upload a
PDF or paste in your notes, and it turns them into something you can actually
study with:

- **Quizzes:** multiple-choice questions generated from your own material.
- **Summaries:** a short, simplified version of any subtopic, before or after
  a quiz.
- **Resources:** curated links for going deeper on a topic.
- **Course structure:** everything is organised as course → topic →
  subtopic, in the shape of the class you're taking.

Under the hood:

- **App:** Flutter, structured as models, views and controllers, with
  sign-in-aware routing.
- **AI:** Google's Gemini model, called through Genkit, generates the
  quizzes, summaries and recommendations.
- **Backend:** Firebase Auth for email sign-up and login, and Cloud Firestore
  for profiles, courses, quiz results and in-app feedback.
