const scriptURL ='https://script.google.com/macros/s/AKfycbx9r35fGrAFKABqWR4PJnC8GYmf6Mj6PjTiG0vBW90IFOgWhWjHQNHJB3uuEuX-H7iY/exec'

const form = document.forms['contact-form']

form.addEventlistener('submit', e=> {
    e.preventDefault()
fetch(scriptURL, {method:'POST' , body: new FormData(form)})
.then(response=>alert("Thank you for your message. Our Team will get back to you soon." ))
.then(() => {window.location.reload(); } ) 
.catch(error=>console.error('Error!' , error.message))
})
 