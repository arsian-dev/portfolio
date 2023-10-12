import admin from '@/schemas/Admin'
import { dbConnect } from '@/utils/mongoose'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

dbConnect()
export const POST = async (req) => {
  const data = await req.json()
  data.password = await bcrypt.hash(
    data.password,
    Number(process.env.SALT_ROUND)
  )
  await admin.create(data)
  return NextResponse.json(
    {
      response: 'Admin Creado'
    },
    {
      status: 201
    }
  )
}
