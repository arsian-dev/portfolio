import { Schema, Types, model, models } from 'mongoose'

const CertificateSchema = new Schema(
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
    date: {
      type: Date
    },
    image: {
      type: String
    },
    important: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: false
  }
)

export default models.certificate || model('certificate', CertificateSchema)
