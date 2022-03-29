import { Response } from "express"
import {Contato} from "./models"

export const getContacts = async function(req: Request, res: Response): Promise<void>  {
    res.json({'hello': 'world'})
}

export const createContact = async function(req: Request, res: Response): Promise<void>  {
    
}

export const getContact = async function(req: Request, res: Response): Promise<void>  {
    
}

export const changeContact = async function(req: Request, res: Response): Promise<any> {
    
}

export const replaceContact = async function(req: Request, res: Response): Promise<any> {
    
}

export const removeContact = async function(req: Request, res: Response): Promise<any> {
    
}