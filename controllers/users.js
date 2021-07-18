//! USER INFO SECTION

import User from '../models/user.js'

//! Create a controller that will return profile info

export const getUserProfile = async (req, res) => {
  try {
    // const user = await User.findById(req.currentUser._id) //* find a user by in from request.
    //! make sure the route is set up 35.1
    //! 38.0 POPULATE USER JSON OBJECT WITH CHARACTERS THAT USER CREATED
    const user = await User.findById(req.currentUser._id).populate('createdWorkspaces') //!!!! BIGFATMARK
    if (!user) throw new Error('User does not exist') //* sanity check
    return res.status(200).json(user) //* see user as response
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: 'Not found' }) 
  }
}