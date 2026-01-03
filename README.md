# helpdesk-dashboard

### What it does

A frontend dashboard for viewing, filtering, and managing support tickets.

Features List:

- Ticket list (status, priority, requester, date)
- Filter by status and priority
- Search by keyword
- Ticket detail view
- Responsive layout
- Mock API (JSON server or static data file)
- Loading and error states

### Tech Stack

- NextJS, React, Tailwind

### Key decisions

- Not adding full CRUD because creation/deletion of tickets is unnecessary in this project but still adding a form and notifying that no ticket has been created.
- Not adding a 404 + error states since data is from a JSON file and not from an external database.

### What you’d improve next

- Add create tickets feature to update json database with new tickets to complete CRUD functionality
- I'd give the IT engineers, teams, and users their own pages with data, history, etc.
- I'd improve the table: letting the data be ordered by priority, date, or status just by clicking the table head titles.
- I'd give a nice looking theme matching the IT ticketing context

#### What's been done:

- Setup basic html website
- use JSON file as database
- React state for table pagination
- search function for tickets
- added filters to search
- ticket detail view
- my account page
- Better UI (geist/geistMono fonts + responsive + general tweaks)
- loading states for dashboard and analytics page
