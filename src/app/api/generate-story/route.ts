import { NextRequest, NextResponse } from "next/server";

const API_URL =
  "https://flow.kata.ai/api/v1/prediction/e5748b97-aad2-42aa-8fbc-44e820874942";
const API_KEY = "JxKshJ+kHVG8ZqzvloQ+60uwShWEDpi+Z5KGjRxrJkE=";

export async function POST(request: NextRequest) {
  try {
    const {
      question = "",
      imageData = "",
      fileName = "image.jpeg",
      mime = "image/jpeg",
    } = await request.json();

    const payload = {
      question,
      uploads: [
        {
          data: imageData || "data:image/jpeg;base64,{DEFAULT_BASE64_IMAGE}",
          type: "file",
          name: fileName,
          mime: mime,
        },
      ],
      streaming: false,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/generate-story:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
