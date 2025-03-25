import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const components = await prisma.customComponent.findMany();
    // console.log("Fetched components:", components);
    return NextResponse.json(components, { status: 200 });
  } catch (error) {
    console.error("Error fetching custom components:", error);
    return NextResponse.json({ error: "Failed to fetch components" }, { status: 500 });
  }
}
