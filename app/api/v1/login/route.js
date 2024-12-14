import { NextResponse } from "next/server";
import { LOGIN } from "./constants";

export const GET = async (req) => {
  console.log("REQ::", req);
  return NextResponse.json(LOGIN);
};
