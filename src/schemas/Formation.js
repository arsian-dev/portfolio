import { Schema, Types, model, models } from 'mongoose'

const FormationSchema = new Schema(
  {
    id: {
      type: Types.ObjectId
    },
    name: {
      type: String
    },
    certificateUrl: {
      type: String
    },
    company: {
      type: String
    },
    companyUrl: {
      type: String
    },
    dateFrom: {
      type: Date
    },
    dateTo: {
      type: String
    },
    description: {
      type: String
    },
    lenguage: {
      type: String,
      enum: ['esp', 'eng'],
      default: 'esp'
    }
  },
  {
    timestamps: false
  }
)

export default models.formation || model('formation', FormationSchema)
