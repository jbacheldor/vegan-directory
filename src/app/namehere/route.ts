import type { NextApiRequest, NextApiResponse } from 'next'
 
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
 
export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return Response.json(posts)
}