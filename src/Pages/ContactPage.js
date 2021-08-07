import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import ContactForm from '../Components/ContactForm';
function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.697544903652!2d38.745633314171315!3d8.999953291922763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTknNTkuOCJOIDM4wrA0NCc1Mi4yIkU!5e0!3m2!1sen!2set!4v1628368530823!5m2!1sen!2set" width="700" height="550" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+251 975611070'} text2={'+011 6782 8792'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'loremipusum@hmail.com'} text2={'example@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Kera, Addis Ababa Ethiopia'} text2={'Ethiopia'} title={'Address'}/>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactPage;
