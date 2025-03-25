import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { writeFile } from "fs/promises";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id; // ✅ Extract `id` from dynamic route
    console.log("id", id);
    
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Fetch component by ID
    const component = await prisma.customComponent.findUnique({
      where: { id: Number(id) }, // ✅ Ensure `id` is a number
    });

    if (!component) {
      return NextResponse.json({ error: "Component not found" }, { status: 404 });
    }

    return NextResponse.json(component, { status: 200 });
  } catch (error) {
    console.error("Error fetching component by ID:", error);
    return NextResponse.json({ error: "Failed to fetch component" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
//update component
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id; // ✅ Extract `id` from dynamic route
    const { cssProperties, serialize, data ,content} = await req.json();
    console.log("body",cssProperties, serialize, data); 

    
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Fetch component by ID
    const component = await prisma.customComponent.findUnique({
      where: { id: Number(id) }, // ✅ Ensure `id` is a number
    });

    if (!component) {
      return NextResponse.json({ error: "Component not found" }, { status: 404 });
    }

    // Update component data
    const updatedComponent = await prisma.customComponent.update({
      where: { id: Number(id) }, // ✅ Ensure `id` is a number
      data: {
        cssProperties,
        serialize,
        data,
      },
    });

    // Define file path using title as filename (ensure it has a valid extension)
    
 
    const filePath = path.join(process.cwd(), "/src/components/editor/elements/CustomComponent", `${component.title}.tsx`);

    // Write file
    await writeFile(filePath, content, "utf8")
    return NextResponse.json(updatedComponent, { status: 200 });

  } catch (error) {
    console.error("Error fetching component by ID:", error);
    return NextResponse.json({ error: "Failed to fetch component" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
  
  


}