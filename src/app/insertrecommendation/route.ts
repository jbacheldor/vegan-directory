import type {  NextApiResponse } from 'next'
import { createClient } from '../utils/apiServer';
import {NextResponse} from 'next/server'


export const revalidate = 60
 
// export async function POST(req: NextApiRequest, res: NextApiResponse<Response>) {
export async function POST(request: Request, res: NextApiResponse<Response>) {
  try {
    const supabase = await createClient();
    const req = await request.json()

    const { error } = await supabase
    .from("creators")
    .insert(req)

    if(error){
      throw new Error(error.message)
    }

    return NextResponse.json({message: "mama mia it's a success"})
    }
    catch(e){
      console.log('hark, an error is occuring', e)
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}