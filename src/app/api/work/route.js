import work from '@/schemas/Work'
import { dbConnect } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

dbConnect()
export const GET = async () => {
  try {
    const data = await work.find({})
    if (data) {
      return NextResponse.json({
        response: data
      })
    } else {
      return NextResponse.json(
        {
          response: 'No Hay nada'
        },
        { status: 404 }
      )
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        response: 'Ha ocurrido un error'
      },
      { status: 500 }
    )
  }
}

export const POST = async (req) => {
  try {
    const data = await req.json()
    const post = await work.create(data)
    if (post) {
      return NextResponse.json({
        response: 'Experiencia posteada con exito'
      })
    } else {
      return NextResponse.json(
        {
          response: 'No se ha podido realizar el posteo'
        },
        {
          status: 400
        }
      )
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        response: 'Ha ocurrido un error'
      },
      {
        status: 500
      }
    )
  }
}
