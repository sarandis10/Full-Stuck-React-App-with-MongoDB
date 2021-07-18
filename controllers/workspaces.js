//import the model from emil
import Workspace from '../models/workspace.js'
//i have used "Workspace" as a model






//GET ONE WORKSPACE 'workspace/:id'
export const getWorkspace = async (req, res) => {
  try {
    const { id } = req.params
    const oneWorkspace = await Workspace.findById(id).populate('owner').populate('comments.owner')
    if (!oneWorkspace) throw new Error()
    return res.status(200).json(oneWorkspace)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ 'message': 'Workspace not found' })
  }
}


//GET REQUEST '/workspaces'
export const getAllWorkspaces = async (_req, res) => {
  const workspaces = await Workspace.find()
  return res.status(200).json(workspaces)
}


//ADD A NEW WORKSPACE '/workspaces'
export const addWorkspace = async (req, res) => {
  console.log('using add route')
  try {
    // const workspaceToAdd = await Workspace.create(req.body)
    const workspaceWithOwner = { ...req.body, owner: req.currentUser._id }
    // console.log(workspaceToAdd)
    console.log(workspaceWithOwner)
    const workspaceToAdd = await Workspace.create(workspaceWithOwner)
    return res.status(201).json(workspaceToAdd)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}


//! UPDATE WORKSPACE /workspaces/:id
export const updateWorkspace = async (req, res) => {
  const { id } = req.params //! use id from params
  try {
    const workspaceToUpdate = await Workspace.findOneAndUpdate({  _id: id }, { ...req.body }, { new: true }) //! find one and update with request body, showing updated one with new:true
    console.log(workspaceToUpdate) //! log workspace
    if (!workspaceToUpdate) throw new Error() //! if none, error
    return res.status(200).json(workspaceToUpdate) //! show response status with updated workspace
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: 'not found' })
  }
}


//! DELETE REQUEST /Workspaces/:id
export const deleteWorkspace = async (req, res) => {
  console.log('DELETE PATH')
  try { 
    const { id } = req.params //! use params to find workspace id
    const workspaceToDelete = await Workspace.findById(id) //! find workspace
    console.log(req.currentUser._id)
    console.log('workspaceToDelete', workspaceToDelete) //! log it
    
    if (!workspaceToDelete) throw new Error() //! if none, throw error
    if (!workspaceToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorised') //! if current user id is not matching workspace owner id, throw error
    await workspaceToDelete.remove() 
    return res.status(204).json()
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: error.message })
  }
}


// CREATE COMMENTS
export const addComment = async (req, res) => {
  try {
    const { id } = req.params //CATCH ID FROM PARAMS
    const workspace = await Workspace.findById(id) 
    if (!workspace) throw new Error('No workspace found')
    const commentToAdd = { ...req.body, owner: req.currentUser._id }
    console.log('commentToAdd ->', commentToAdd)
    console.log('actuals comment for now ->', workspace.comments)
    workspace.comments.push(commentToAdd)
    console.log('actuals comments after pushing comment into comments.array ->', workspace.comments)
    await workspace.save()
    console.log('workspace withsaved comments ->', workspace)
    return res.status(200).json(workspace)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}


// DELETE COMMENTS
export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    const workspace = await Workspace.findById(id)
    if (!workspace) throw new Error('Workspace not found')
    const commentToDelete = workspace.comments.id(commentId)
    if (!commentToDelete) throw new Error('Comment not found')
    await commentToDelete.remove() 
    await workspace.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: error.message })
  }
}