const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bhsuhkr@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}. \nLet me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bhsuhkr@gmail.com',
        subject: 'Cancellation Confirmation',
        text: `Confirming your cancellation, ${name}. \n Thank you for choosing our app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}