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
==
NextJS -> App Router menggunakan React Server Components (RSC)
semua file .tsx dalam app/ -> otomatis Server Component
kecuali ada penulisan "use client";

SERVER COMPONENT
di jalan kan di server, bukan di browser
tidak ada interaksi langsung dengan onClick, useState, useEffect, event handler
Bisa ambil data langsung dari database / API
lebih cepat karena tidak di bundle ke browser
SEO sangat bagus
=
export default async function HomePage() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return (
    <div>
      <h1>Server Component</h1>
      <p>Data: {data.title}</p>
    </div>
  );
}
=

CLIENT COMPONENT
di jalankan di browser
harus punya "use client" di baris pertama
digunakan untuk : 
useState, useEffect, onClick, input, form, dan komponen interaktif
animation, drag & drop, local state UI

=
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
=
GABUNGKAN SERVER + CLIENT COMPONENT
Server Component (ambil data) -> Client Component (interaktif)
=
import Counter from "./Counter";

export default async function Page() {
  const res = await fetch("https://api.example.com/product");
  const product = await res.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <Counter />
    </div>
  );
}

=
"use client";
export default function Counter() {
  const [qty, setQty] = useState(1);

  return (
    <div>
      <button onClick={() => setQty(qty - 1)}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty(qty + 1)}>+</button>
    </div>
  );
}
=
menggunakan Server Component ketika:
Fetch Data
Render Halaman Statis
Render layout
Query Database (Prisma, Mongo, Supabase)
Query Heavy API di server
=
export default async function ProductPage() {
  const products = await db.product.findMany();
  return (
    <ProductList products={products} />
  );
}
=
Next.js Modern
Server-first, Client if necessary
  Semua page/layout = Server Component
  UI Interaktif = Client Component

  app/
 ├─ dashboard/
 │    ├─ page.tsx        → server
 │    ├─ ChartClient.tsx → client
 │    ├─ Card.tsx        → server

========================================

3️⃣ Data Fetching (async component) = Next.js server-first

fetch() dengan caching
fetch({ cache: "no-store" })
Revalidate ISR → export const revalidate = 10;
get data by id (API / database)

Server Component async fetch()
async function Page() {
  const data = await fetch("https://api.example.com/users").then(r => r.json());
  return <div>{data.name}</div>
}
=====================================
data - Next.js Modern

Hari 1 — Data Fetching
Hari 2 — Revalidasi & caching
Hari 3 — Server Action
Hari 4 — Dynamic Route
Hari 5 — Layouting advanced
Hari 6 — Deploy + Env
Hari 7 — Build mini project (Dashboard + Auth)

Day 1. Data Fetching
buat direktori users
app/users/page.tsx


=======================================
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
============================