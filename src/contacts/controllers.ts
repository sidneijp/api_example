import { Response, Request } from "express"
import {Contato} from "./models"

export const getContacts = async function(req: Request, res: Response): Promise<void>  {
    res.json({hello: 'world'})
    // TODO: obter do banco de dados uma lista de todos os contatos
}

export const createContact = async function(req: Request, res: Response): Promise<void>  {
    const {tipo, valor, apelido} = req.body
    // TODO: crie no banco de dados um contato
}

export const getContact = async function(req: Request, res: Response): Promise<void>  {
    // TODO: obter do banco de dados um contato a partir do :id passado na URL
}

export const changeContact = async function(req: Request, res: Response): Promise<any> {
    // TODO: alterar no banco de dados um contato a partir do :id passado na URL e apenas dos campos enviados na body (json)
}

export const replaceContact = async function(req: Request, res: Response): Promise<any> {
    // TODO: substituir no banco de dados um contato a partir do :id passado na URL e de TODOS os campos enviados na body (json)
}

export const removeContact = async function(req: Request, res: Response): Promise<any> {
    // TODO: remover do banco de dados um contato a partir do :id passado na URL
}
