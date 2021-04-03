import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Jonathan', email: 'jonathan@teste.com.br' },
    { name: 'Teste', email: 'teste@teste.com.br' }
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Teste', 
                email: 'teste@teste.com.br' 
            },
            message: { 
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem vindo'
            }
        })

        return res.send();
    }
}