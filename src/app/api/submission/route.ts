import { ApiError, ApiResponse } from "@/utils/util";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { source_code, language_id } = reqBody;

    if (!source_code || !language_id) {
      return NextResponse.json(new ApiError(400, "Code is required"), {
        status: 400,
      });
    }

    const url =
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true&fields=*";

    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": process.env.JUDGE_ZERO_API_KEY,
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_id,
        source_code,
      }),
    };

    const response = await fetch(url, options as RequestInit); // Send the request
    const result = await response.json(); // Parse the response as JSON
    console.log(result);

    return NextResponse.json(
      new ApiResponse(
        200,
        {
          ...result,
          message: "Code submitted",
        },
        "Code submitted!"
      )
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"), {
      status: 500,
    });
  }
}
