import { Schema, Types, model, models } from 'mongoose'

const AboutSchema = new Schema(
  {
    id: {
      type: Types.ObjectId
    },
    names: {
      type: String
    },
    lastName: {
      type: String
    },
    birth: {
      type: String
    },
    residence: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    aboutMe: {
      type: String
    }
  },
  {
    timestamps: false
  }
)

export default models.about || model('about', AboutSchema)
