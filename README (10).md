# CampusPilot

An AI-powered study hub for BTech students. CampusPilot combines secure user authentication with an interactive AI chat assistant, a library of 40 BTech subjects, and a backlog help centre that turns a failed or pending subject into a recovery plan.

**Live demo:** https://add-authentication-and-ai-chatbot.vercel.app/

## Features

- **User registration and login**: sign up and sign in (Google sign-in supported)
- **AI Study Copilot**: conversational assistant for concepts, exam planning, and backlog subjects
- **Backlog Help Centre**: pick a subject and get a focused recovery plan plus links to notes and previous-year questions
- **Subject Library**: 40 BTech subjects across 8 semesters, with PDF resource search for each
- **Secure access**: authenticated features are protected; AI API keys stay on the server
- **Responsive UI**: works on desktop and mobile, with light and dark modes

## Subjects

All 40 subjects (code, name, semester) live in [`data/subjects.json`](data/subjects.json).

## Tech stack

Generated with [v0](https://v0.app) and deployed on [Vercel](https://vercel.com). Update this section to match your code (typically Next.js, React, Tailwind CSS, and an AI SDK/provider).

## Getting started

```bash
git clone https://github.com/<your-username>/campuspilot.git
cd campuspilot
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

Open http://localhost:3000.

## Environment variables

See [`.env.example`](.env.example). Never commit real keys; `.env*` files are git-ignored.

## Deployment

Import the repo into Vercel, add the environment variables from `.env.example`, and deploy.

## Roadmap

- Save chat history per user
- Personalised backlog trackers
- Semester-wise study plans and reminders

## License

MIT
