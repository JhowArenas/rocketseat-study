interface IMailTo{
    name: string;
    email: string;
}
interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO{ //Data Transfer Object (DTO)
    to: IMailTo;
    message: IMailMessage;
}

interface IMailService{
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IMailService {
    sendMail({to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name} : ${message.subject}`);
    }
}

export default EmailService