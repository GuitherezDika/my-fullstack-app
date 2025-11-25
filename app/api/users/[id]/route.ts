const users = [
  { id: "1", name: "John DOe", email: "john@mail.com" },
  { id: "2", name: "Sarah DOe", email: "sarah@mail.com" },
  { id: "3456", name: "sinaga", email: "naga@mail.com" },
  { id: "7890", name: "dika", email: "dika@mail.com" },
]

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const user = users.find(u => u.id === id);

  if (!user) {
    return Response.json({ error: "User not found!" }, { status: 404 })
  }

  return Response.json(user);
}


export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();

  const index = users.findIndex(u => u.id === id);
  console.log({ index });
  if (index == -1) {
    return Response.json({ error: "User not found!" }, { status: 404 })
  }
  users[index] = { id, ...body };
  return Response.json(users[index]);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return Response.json({ error: "User not found" }, { status: 404 })
  }

  const deleted = users[index];
  users.splice(index, 1);

  return Response.json({ message: "User deleted successfully", deleted: deleted },);
}