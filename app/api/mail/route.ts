import { NextResponse } from "next/server";
import { sendMail } from "@/utils/mail";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        name: "Mangoes",
      },
    ],
  });
}

export async function POST(req: Request) {
  const data = await req.json();
  
  return NextResponse.json(data);
}
