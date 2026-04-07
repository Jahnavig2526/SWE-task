# Wall Calendar Range Planner

A polished, interactive wall-calendar inspired by a physical hanging calendar design.  
Built with Next.js + React + Tailwind, with a strong visual hierarchy, date-range interaction, and notes that persist in localStorage.

## Features

- Wall calendar aesthetic with a hero image panel and wire-binding detail
- Monthly calendar grid with full date-range selection
- Distinct visual states for range start, range end, and in-between dates
- Integrated notes panel
- Range-specific notes when a date range is selected
- Month-specific notes when no range is selected
- localStorage persistence (frontend-only, no backend)
- Holiday markers for selected common dates
- Fully responsive layout for desktop and mobile

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Validation

```bash
npm run lint
```

## Key Files

- `src/components/WallCalendar.tsx` : Main interactive calendar component
- `src/app/page.tsx` : Page entry rendering the component
- `src/app/globals.css` : Global atmosphere and motion styles
- `src/app/layout.tsx` : Metadata and font setup

## Submission Checklist

- Public repository URL
- Video walkthrough demonstrating:
	- Date-range selection
	- Notes behavior (month note and range note)
	- Desktop and mobile responsiveness
- Optional deployed link (Vercel recommended)
