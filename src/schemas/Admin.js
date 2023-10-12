import { Schema, Types, model, models } from 'mongoose'

const AdminSchema = new Schema(
  {
    id: {
      type: Types.ObjectId
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: false
  }
)

export default models.admin || model('admin', AdminSchema)
