<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/Aen-OS/ticketflow/main/public/logo.png" width="200" />
</div>
<h1 align="center">
  TicketFlow
</h1>
<p align="center">
  A frontend dashboard sim<a href="https://ticketflow-an.netlify.app" target="_blank">ticketflow-an.netlify.app</a> built with <a href="https://www.nextjs.org/" target="_blank">NextJS</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
  <img src="https://api.netlify.com/api/v1/badges/4d997a0b-cc18-4a91-8029-cd158c66b878/deploy-status" alt="Netlify Status" />
</p>

![frontpage](https://raw.githubusercontent.com/Aen-OS/ticketflow/main/public/frontpage.png)

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

### What you’d improve next

- Add create tickets feature to update json database with new tickets to complete CRUD functionality
- I'd give the IT engineers, teams, and users their own pages with data, history, etc.
- Improve the table: letting the data be ordered by priority, date, or status just by clicking the table head titles.
- Implement a theme matching the IT ticketing context
