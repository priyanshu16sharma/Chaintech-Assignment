# Task Management API

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env` file with `MONGO_URI` and `PORT`.
4. Start the server: `npm run dev`.

## Features

- Create, read, update, delete tasks.
- Mark tasks as completed.
- Optional: Categorize tasks and add due dates.

## API Endpoints

- `POST /api/tasks` - Create a task.
- `GET /api/tasks` - List all tasks.
- `PATCH /api/tasks/:id/complete` - Mark a task as completed.
- `PUT /api/tasks/:id` - Update a task.
- `DELETE /api/tasks/:id` - Delete a task.
