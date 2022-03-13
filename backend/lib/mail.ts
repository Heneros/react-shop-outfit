import { createTransport, getTestMessageUrl } from "nodemailer";

const transport = createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});



function makeANiceEmail(text: string): string{
    return `
    <div
    style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px">
    <h2>Hello There</h2>
    <p>${text}</p>
    </div>
    `
}
export interface MailResponse {
    accepted?: (string)[] | null;
    rejected?: (null)[] | null;
    envelopeTime: number;
    messageTime: number;
    messageSize: number;
    response: string;
    envelope: Envelope;
    messageId: string;
  }
interface MailResponse{
    message: string;
}
export async function sendPasswordResetEmail(resetToken: string, to: string): Promise<void>{
    const info = (await transport.sendMail({
        to,
        from: 'test@example.com',
        subject: 'Your password reset token',
        html: makeANiceEmail(`
         Your password token
         <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">
         Click here
         </a>
        `),
    })) as MailResponse;
    if(process.env.MAIL_USER.includes('ethereal.email')){
        console.log(`Message Sent:  ${getTestMessageUrl(info)}`);
    }
}