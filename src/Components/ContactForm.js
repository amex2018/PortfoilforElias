const ContactForm = () => {
    return (
        <div className="FormContainer">
               <h2>Contact Me</h2>
               <form className="Forms">
               <div className="FormGroup">
               <label htmlFor="name">Name</label>
               <input type='text' placeholder='full name' />
               <label htmlFor="email">Email</label>
               <input type='text' placeholder='example@gmail.com' />
               </div>
               <div>
               <label htmlFor="name">Message</label>
               <textarea placeholder="type here....">
               </textarea>
               </div>
               <button className="btn">Send Message</button>
               </form>        
        </div>
    )
}

export default ContactForm
