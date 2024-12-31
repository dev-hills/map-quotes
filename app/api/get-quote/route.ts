import { NextResponse } from "next/server";
import data from "../../../utils/quoteDetails.json";

export async function GET() {
  if (data) {
    return NextResponse.json({
      status: 200,
      data: data,
    });
  } else {
    console.error("unable to get data");
    return NextResponse.json({
      error: "Failed to get data",
      status: 500,
    });
  }
}
