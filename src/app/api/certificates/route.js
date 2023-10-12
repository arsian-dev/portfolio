import { httpErrorCase, postVerification } from '@/app/utils/extraFunctions'
import certificate from '@/schemas/Certificate'
import { dbConnect } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

dbConnect()
export const GET = async () => {
  try {
    const data = await certificate.find({})
    return NextResponse.json(
      {
        response: data
      },
      {
        status: 500
      }
    )
  } catch (error) {
    return httpErrorCase(error)
  }
}

export const POST = async (req) => {
  try {
    const data = await req.json()
    const post = await certificate.create(data)
    return postVerification(post)
  } catch (error) {
    return httpErrorCase(error)
  }
}
