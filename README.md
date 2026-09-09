# VaklioDent · Phase 1 demo

Calendar-first dental practice demo, built with React, Vinext and Cloudflare D1.

## Demo walkthrough

1. Enter a work email, continue, then use the displayed demo password `Friday2026!`.
2. Switch day/week/month views; filter by practitioner or appointment status.
3. Click an open time slot to book. Pick a client, treatment, practitioner, room and duration.
4. Open a booking and change its status to Arrived, Current or Completed. The patient flow and notifications update on save.
5. Open Clients, search by name/phone/email, add a client, edit a profile and book from it.
6. Mark notifications read and sign out.

## Run locally

- `npm ci`
- `npm run build`
- `npx wrangler d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_skinny_hiroim.sql`
- `npm run dev`

## Validation

- `npx tsc --noEmit`
- `node --experimental-strip-types booking.test.mjs`
- `node api.test.mjs` (requires the initialized local server at localhost:3001; creates a synthetic test booking)
- `npm run build`

## Demo boundaries

This is a private presentation demo with shared fictional records, not a production clinical system. Data is persisted in D1. The app uses server sessions with an HttpOnly cookie and a shared, explicitly displayed demo password. Email delivery and appointment reminder delivery are not connected. The reminder checkbox records intent only. Before production, replace demo login with verified email delivery, individual accounts, access controls, audit history and rate limiting. Records are shared within this one demo clinic. Concurrent stale writes are rejected. Views refresh after saves or page reload; no cross-device live subscription is implemented. Week view is an agenda per day; bookings are moved or resized using the edit form.

The reference specification is context only; implementation is deliberately limited to the requested Phase 1 modules. No regulatory, billing or clinical charting modules are included.
