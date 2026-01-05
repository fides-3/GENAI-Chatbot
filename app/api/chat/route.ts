// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const result = await model.generateContent(message);
//     const reply = result.response.text();

//     return NextResponse.json({ reply });
//   } catch (error) {
//     return NextResponse.json(
//       { error:"Something went wrong" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
 const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

   ;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // ✅ Use generateText instead of generateContent
    const result = await model.generateContent(message);

    // Access the reply text correctly
    const reply = result.response.text();

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("❌ CHAT API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
