1️⃣ Routing & Layouting
app/layout.tsx
app/page.tsx
Folder-based routing
Dynamic routing: [id]
Catch-all routing: [...slug]
Nested layout
======
app/
 ├─ layout.tsx              → Global layout
 ├─ page.tsx                → Homepage
 ├─ dashboard/
 │    ├─ layout.tsx         → Dashboard layout
 │    ├─ page.tsx           → Dashboard home
 │    ├─ settings/
 │    │     ├─ layout.tsx   → Settings layout
 │    │     └─ page.tsx     → Settings page

======
2️⃣ Server Component & Client Component

Perbedaan use client

Kapan pakai server component (default)

Kapan butuh client component (useState, useEffect)

3️⃣ Data Fetching (async component)

fetch() dengan caching

fetch({ cache: "no-store" })

Revalidate ISR → export const revalidate = 10;

get data by id (API / database)

4️⃣ API Route (optional)

app/api/.../route.ts

GET, POST, PUT, DELETE

5️⃣ Styling

CSS modules

Tailwind (opsional tapi kuat)

6️⃣ State Management (Next.js + Client Component)

Zustand

Redux Toolkit (opsional)

7️⃣ Deployment

Vercel