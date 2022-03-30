import { Response, Request } from "express"
import {Contato} from "./models"

export const getContacts = async function(req: Request, res: Response): Promise<void>  {
    const contatos = await Contato.findAll()
    res.status(200).json(contatos)
}

export const createContact = async function(req: Request, res: Response): Promise<void>  {
    const {tipo, valor, apelido} = req.body
    let contato
    try {
        contato = await Contato.create({
            tipo,
            valor,
            apelido
        })
    } catch (err) {
        const response_payload = {errors: []}
        for (let error of err.errors) {
            response_payload.errors.push(error.message)
        }
        res.status(400).json(response_payload.errors)
        return
    }

    // esperar terminar a query
    res.status(203).json(contato)
}

export const getContact = async function(req: Request, res: Response): Promise<void>  {
    // TODO: refatorar condições
    const { id } = req.params
    const contactId = parseInt(id)
    const contactIsNumber = !isNaN(contactId)
    if (!(contactId && contactIsNumber)) {
        res.status(404).send('Contato não encontrado')
        return
    }
    const contato = await Contato.findOne({where: {id: contactId}})
    if (contato) {
        res.status(200).json(contato)
        return
    }
    // const contatos = await Contato.findOne(id)
    res.status(404).json({detail: 'Contato não encontrado'})
}

export const changeContact = async function(req: Request, res: Response): Promise<any> {
    // TODO: alterar no banco de dados um contato a partir do :id passado na URL e apenas dos campos enviados na body (json)
}

export const replaceContact = async function(req: Request, res: Response): Promise<any> {
    // TODO: substituir no banco de dados um contato a partir do :id passado na URL e de TODOS os campos enviados na body (json)
}

export const removeContact = async function(req: Request, res: Response): Promise<any> {
    const { id } = req.params
    const contactId = parseInt(id)
    const contactIsNumber = !isNaN(contactId)
    if (!(contactId && contactIsNumber)) {
        res.status(404).send('Contato não encontrado')
        return
    }
    const contato = await Contato.findOne({where: {id: contactId}})
    if (contato) {
        await contato.destroy()
        res.status(204).end()
        return
    }
    // const contatos = await Contato.findOne(id)
    res.status(404).json({detail: 'Contato não encontrado'})}
