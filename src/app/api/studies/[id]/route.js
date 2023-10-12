import { httpErrorCase, updateVerification } from '@/app/utils/extraFunctions'
import formation from '@/schemas/Formation'
import { dbConnect } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

dbConnect()
export const PUT = async (req, { params }) => {
  try {
    const { id } = params
    const data = await req.json()
    const act = await formation.updateOne({ _id: id }, data)
    return updateVerification(act)
  } catch (error) {
    return httpErrorCase(error)
  }
}

export const DELETE = async (_req, { params }) => {
  try {
    const { id } = params
    await formation.deleteOne({ _id: id })
    return NextResponse.json({
      response: 'Eliminacion exitosa'
    })
  } catch (error) {
    return httpErrorCase(error)
  }
}
