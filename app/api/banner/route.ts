import { getBanner } from "@/sanity/sanity.query";
import { BannerType } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const banner: BannerType[] = await getBanner();
  return Response.json(banner)
}
