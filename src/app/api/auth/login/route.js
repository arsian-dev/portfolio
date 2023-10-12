import admin from '@/schemas/Admin'
import { dbConnect } from '@/utils/mongoose'
import { NextResponse } from 'next/server'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

dbConnect()

export const POST = async (req) => {
  const data = await req.json()
  const foundAdmin = await admin.findOne({ email: data.email })
  if (foundAdmin) {
    const loginAdmin = await compare(data.password, foundAdmin.password)
    if (loginAdmin) {
      const token = await jwt.sign(
        {
          id: foundAdmin._id,
          name: foundAdmin.name,
          type: 'ADMIN'
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '10h'
        }
      )
      return NextResponse.json({
        response: token
      })
    }
  }
}
