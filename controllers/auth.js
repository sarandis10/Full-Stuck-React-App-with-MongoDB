import User from '../models/user.js'

import jwt from 'jsonwebtoken'

import { secret } from '../config/environment.js'

//! user registerring

export const registerUser = async (req, res) => { //! wait for response 
  try {
    const newUser = await User.create(req.body) //!  req.body - new user
    console.log('new user ==>', newUser) //! sanity check
    return res.status(202).json({ message: `Welcome in, ${newUser.username}` })
  } catch (error) {
    console.log(error)
    return res.status(422).json(error) //! display error
  }
}

//! user logging in

export const loginUser = async (req,res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email }) //! find a DB user, that matches the email
    console.log('userToLogin ===>', userToLogin) //! see user
    console.log('password validation', userToLogin.validatePassword(req.body.password)) //! see validation story ture or false
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Error() //! if user one OR another doent match - error
    }
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' }) //! make token from DB user ID, secret and expiry
    return res.status(200).json({ message: `Welcome back, ${userToLogin.username}`, token })
  } catch (error) {
    console.log(error)
    return res.status(422).json({ message: 'Unauthorized' })
  }
}