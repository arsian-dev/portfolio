import { NextResponse } from 'next/server'
import { dbConnect } from '@/utils/mongoose'
import { httpErrorCase, postVerification } from '@/app/utils/extraFunctions'
import formation from '@/schemas/Formation'

dbConnect()

export const GET = async () => {
  try {
    const data = await formation.find({})
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
    const post = await formation.create(data)
    return postVerification(post)
  } catch (error) {
    return httpErrorCase(error)
  }
}
