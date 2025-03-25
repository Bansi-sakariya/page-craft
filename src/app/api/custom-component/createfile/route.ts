import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: { json: () => PromiseLike<{ fileName: any; content: any; }> | { fileName: any; content: any; }; } ) {
  try {
    const { fileName, content } = await req.json();

    // Define file path (inside 'public' folder)
    const filePath = path.join(process.cwd(), "/src/components/editor/elements/CustomComponent", fileName);

    // Write file
    await writeFile(filePath, content, "utf8");

    return new Response(JSON.stringify({ success: true, filePath }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
