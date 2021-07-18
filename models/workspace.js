import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 1000 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true // Create timestamps automatically on creation and update
})

//Define the schema for workspace, the schema is a blueprint for how we want each document for be formatted
const workspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  long: { type: String, required: true, unique: true },
  lat: { type: String, required: true, unique: true },
  link: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  textDescription: { type: String, required: true, unique: true, maxlength: 1000 },
  facilities: { type: Array },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
})


workspaceSchema.virtual('avgRating')
  .get(function () {
    if (!this.comments.length) return 'Not yet rated'
    const sum = this.comments.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0)
    return (sum / this.comments.length).toFixed(1)
  })

workspaceSchema.set('toJSON', {
  virtuals: true
})


export default mongoose.model('Workspace', workspaceSchema)