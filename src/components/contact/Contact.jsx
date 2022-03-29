import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_pylkeof", 
            "template_arqlze1", 
            formRef.current, 
            'user_Yvhu13HfLxTcK6n297FDF')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
            
        });
    }
    return(
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>Contact Me!</h1>
                    <div className='c-info'>
                        <div className="c-info-item">
                            <img 
                                src={Phone}
                                alt=""
                                className='c-icon'
                            />
                            +1 965 479 9460
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email}
                                alt=""
                                className='c-icon'
                            />
                            crosbieybarra5@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address}
                                alt=""
                                className='c-icon'
                            />
                            Brownsville, Texas
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>Get in touch.</b> Please feel free to use the inputs below if you wish to contact or use the information below.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='Message' name="message"/>
                        <button>Send Message</button>
                        {done && "  Got it!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;