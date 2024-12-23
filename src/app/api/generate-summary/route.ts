import { NextRequest, NextResponse } from "next/server";

const API_URL =
  "https://flow.kata.ai/api/v1/prediction/7440ad61-d17c-4e91-8fd0-faec8bff1090";
const API_KEY = "JxKshJ+kHVG8ZqzvloQ+60uwShWEDpi+Z5KGjRxrJkE=";

export async function POST(request: NextRequest) {
  try {
    // Get the question from the request body
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    // Make the request to the Kata.ai API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data.json);
  } catch (error) {
    console.error("Error in /api/generate-summary:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
