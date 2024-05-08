import { getSingleProduct } from "@/sanity/sanity.query";
import { Products } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req:NextApiRequest, res: NextApiResponse){
    const product: Products = await getSingleProduct()
}