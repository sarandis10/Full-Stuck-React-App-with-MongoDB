import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.virtual('createdWorkspaces', {
  ref: 'Workspace',
  localField: '_id',
  foreignField: 'owner'
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    return json
  }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })


userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })


userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema)