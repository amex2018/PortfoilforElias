const ContactForm = () => {
    return (
        <div className="FormContainer">
               
               <form className="Forms">
               <h2>Contact Me</h2>
               <div className="FormGroup">
           
               <input type='text' placeholder='full name' />
               
               <input type='text' placeholder='example@gmail.com' />
               </div>
               <div>
          
               <textarea placeholder="type here....">
               </textarea>
               </div>
               <button className="send-btn">Send Message</button>
               </form>        
        </div>
    )
}

export default ContactForm
