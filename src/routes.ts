import { Router } from "express"
import contacts from "./contacts"

const routes = Router()

routes.use('/contacts', contacts.routes)

export default routes