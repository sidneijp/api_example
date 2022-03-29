import { Router } from "express"
import * as controllers from "./controllers"

export const routes = Router()

routes.get('/', controllers.getContacts)
routes.post('/', controllers.createContact)
routes.get('/:id', controllers.getContact)
routes.patch('/:id', controllers.changeContact)
routes.put('/:id', controllers.replaceContact)
routes.delete('/:id', controllers.removeContact)

export default routes;