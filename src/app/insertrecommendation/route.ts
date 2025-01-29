// import { CreatorProps } from "@/app/types/searchResults";
// import { createClient } from "@/app/utils/apiServer";
// import type { NextApiRequest, NextApiResponse } from 'next'

// // export default async function GET(  
// //     req: NextApiRequest,
// //     res: NextApiResponse<Response>
// //     ) {
   
// //     try{
// //         // const supabase = await createClient()
// //         // const { error } = await supabase.from("creators").insert({data})
// //             const data = await fetch('https://api.vercel.app/blog')
// //             const posts = await data.json()
// //             return Response.json(posts)
// //     }
// //     catch(error){
// //         console.log(error)
// //     }
// //     // res.status(200).json({ message: 'Hello' });
// //   }


 
// export async function GET(    
//     // req: NextApiRequest,
//     // res: NextApiResponse<Response>
//     ) {
//     const data = await fetch('https://api.vercel.app/blog')
//     const posts = await data.json()
   
//     return Response.json(posts)
//   }


// 
// 
// 
// 

import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '../utils/apiServer';
 
type ResponseData = {
  message: string
}
 
// req = HTTP incoming message, res = HTTP server response
// export async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }


export const revalidate = 60
 
export async function POST(req: NextApiRequest, res: NextApiResponse<Response>) {
    try {
        const supabase = await createClient();
        const { error } = await supabase
        .from("creators")
        .insert(req.body)
    }
    catch(error){

    }

    return Response.json("e")
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()
 
//   return Response.json(posts)
}