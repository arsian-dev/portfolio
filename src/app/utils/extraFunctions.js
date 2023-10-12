import { NextResponse } from 'next/server'

export const updateVerification = (act) => {
  if (act.matchedCount !== 0) {
    return NextResponse.json({
      response: 'actualizacion exitosa',
      status: 200
    })
  } else {
    return NextResponse.json({
      response: 'No se ha podido actualizar',
      status: 400
    })
  }
}

export const postVerification = (post) => {
  if (post) {
    return NextResponse.json({
      response: 'actualizacion exitosa',
      status: 200
    })
  } else {
    return NextResponse.json({
      response: 'No se ha podido actualizar',
      status: 400
    })
  }
}

export const httpErrorCase = (error) => {
  console.log(error)
  return NextResponse.json({
    response: 'No se ha podido eliminar',
    status: 500
  })
}
