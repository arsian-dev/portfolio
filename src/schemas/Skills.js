import { Schema, Types, model, models } from 'mongoose'

const SkillSchema = new Schema({
  id: {
    type: Types.ObjectId
  },
  name: {
    type: String
  },
  image: {
    type: String
  }
})

export default models.skill || model('skill', SkillSchema)
