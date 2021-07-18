import express from 'express'
import { getAllWorkspaces , addWorkspace, getWorkspace, updateWorkspace, deleteWorkspace, addComment, deleteComment } from '../controllers/workspaces.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getUserProfile } from '../controllers/users.js'


const router = express.Router()

router.route('/workspaces')
  .get(getAllWorkspaces)
  .post(secureRoute, addWorkspace)

router.route('/workspaces/:id')
  .get(getWorkspace)
  .put(secureRoute, updateWorkspace)
  .delete(secureRoute, deleteWorkspace)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/workspaces/:id/comments')
  .post(secureRoute, addComment)

router.route('/workspaces/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)

router.route('/profile')
  .get(secureRoute, getUserProfile) 

export default router