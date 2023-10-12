import { Schema, Types, model, models } from 'mongoose'

const WorkSchema = new Schema(
  {
    id: {
      type: Types.ObjectId
    },
    name: {
      type: String
    },
    projectUrl: {
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
    }
  },
  {
    timestamps: false
  }
)

export default models.work || model('work', WorkSchema)
