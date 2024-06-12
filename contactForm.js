//email js
const contactForm = document.getElementById('contact-form'),
 contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()

    //serviceID -templateID- #form - publickey
    emailjs.sendForm('service_9grcb71', 'template_sjvs2ii', '#contact-form', '7xA7NkT6F18Wa75wH')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message Sent Successfully ✅'

            //remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //clear input fields
            contactForm.reset()
        }, () => {

            //show error message
            contactMessage.textContent = 'Message not sent(service error)❌'

        })


}
contactForm.addEventListener('submit', sendEmail)
