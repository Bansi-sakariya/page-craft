// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import { title } from "process";

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const { title, cssProperties, serialize, data } = await req.json(); 

//     // console.log("api",title, cssProperties, serialize, data);

//     if (!title || !cssProperties || !serialize || !data) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     const newComponent = await prisma.customComponent.create({
//       data: {
//         title,
//         cssProperties,
//         serialize,
//         data,
//       },
//     });

//     return NextResponse.json(newComponent, { status: 201 });
//   } catch (error) {
//     console.error("Error saving component:", error);
//     return NextResponse.json({ error: "Failed to save component" }, { status: 500 });
//   }
// }
// import { writeFile } from "fs/promises";
// import path from "path";

// export async function POST(req: { json: () => PromiseLike<{ fileName: any; content: any; }> | { fileName: any; content: any; }; } ) {
//   try {
//     const { fileName, content } = await req.json();

//     // Define file path (inside 'public' folder)
//     const filePath = path.join(process.cwd(), "/src/components/editor/elements/CustomComponent", fileName);

//     // Write file
//     await writeFile(filePath, content, "utf8");

//     return new Response(JSON.stringify({ success: true, filePath }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }




import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, cssProperties, serialize, data, content } = await req.json();

    if (!title || !cssProperties || !serialize || !data || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save component data to the database
    const newComponent = await prisma.customComponent.create({
      data: {
        title,
        cssProperties,
        serialize,
        data,
      },
    });

    // Define file path using title as filename (ensure it has a valid extension)
    const safeTitle = title.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, ""); // Remove unsafe characters
    const filePath = path.join(process.cwd(), "/src/components/editor/elements/CustomComponent", `${safeTitle}.tsx`);

    // Write file
    await writeFile(filePath, content, "utf8");

    return NextResponse.json({ success: true, newComponent, filePath }, { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
