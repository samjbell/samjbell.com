import * as React from "react";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
    contact_form,
    container_contact_page,
    flat_button,
} from '../../components/layout.module.css'

const ContactPage = () => {
        
    const form = useRef();
        const sendEmail = (e) => {
              e.preventDefault();
      
              emailjs.sendForm('gmail', 'template_vclwopd', form.current, 'XmFDlE4q8z8Go85ae')
                  .then(
                        () => {
                          alert('Message successfully sent!')
                    window.location.reload(false)
                      }, 
                      () => {
                          alert('Failed to send the message, please try again ');
      });
    };
    
    return (
        <>
          <Layout pageTitle="Contact"> </Layout>
        
        <div className={container_contact_page}> 
            
        <p> 
        Feel free to reach out regarding possible opportunities or collaborations
            </p>
            </div> 
            <div className={contact_form}>
                <form ref={form} onSubmit={sendEmail}>
                    <ul> 
                    <li className="half"> 
                        <input type="text" name="name" placeholder="Name" required /> 
                    </li>
                    <li className="email"> 
                        <input type="text" name="email" placeholder="Email" required /> 
                        </li>
                    <li>
                        <input placeholder='Subject' type='text' name="subject" required />
                    </li>
                    <li>
                        <textarea placeholder="Message" name="message" required >    
                        </textarea>
                    </li>
                    <li> 
                        <input type="submit" className={flat_button}value="SEND"/>
                    </li>
                    </ul>
                        

                   
                </form>
            </div>
        </>
    )
}

export const Head = () => 
<Seo title="Contact" />

export default ContactPage