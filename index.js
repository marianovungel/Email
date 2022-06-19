const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "unilabtem@gmail.com",
        pass: "Mariano03/05/2000"
    }
})

let details = {
    from: "unilabtem@gmail.com",
    to: "vungemariano@gmail.com",
    subject:"Estou fazendo um teste inicial para envio de email",
    text:"O email da aplicação estará emviando uma mensagem para mim..."
}

mailTransporter.sendMail(details, (err)=>{
    if(err){
        console.log("deu erro " + err)
    }else{
        console.log("Sucesso no envio!")
    }
})