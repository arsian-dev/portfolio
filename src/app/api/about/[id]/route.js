import { httpErrorCase, updateVerification } from '@/app/utils/extraFunctions'
import about from '@/schemas/About'
import { dbConnect } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

dbConnect()
export const PUT = async (req, { params }) => {
  try {
    const { id } = params
    const data = await req.json()
    const act = await about.updateOne({ _id: id }, data)
    return updateVerification(act)
  } catch (error) {
    return httpErrorCase(error)
  }
}

export const DELETE = async (_req, { params }) => {
  try {
    const { id } = params
    await about.deleteOne({ _id: id })
    return NextResponse.json({
      response: 'Eliminacion exitosa'
    })
  } catch (error) {
    return httpErrorCase(error)
  }
}
