const users = [
  { id: "1", name: "John DOe", email: "john@mail.com" },
  { id: "2", name: "Sarah DOe", email: "sarah@mail.com" },
  { id: "3456", name: "sinaga", email: "naga@mail.com" },
  { id: "7890", name: "dika", email: "dika@mail.com" },
]

export async function GET() {
  return Response.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newUser = {
    id: String(Date.now()),
    name: body.name,
    email: body.email,
  }

  users.push(newUser);

  return Response.json(newUser, { status: 201 })
}
