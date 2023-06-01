import { useState } from "react";
import { Navbar, Footer } from "../components";
import Head from "next/head";

function Contact() {
  const [inputName, setInputName] = useState();
  const [inputTopic, setInputTopic] = useState();
  const [inputText, setInputText] = useState();
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <div id="contact" className="part">
          <form action="https://formsubmit.co/bsdenizkaya@gmail.com" method="POST">
            <input 
              type="text" 
              className="contact-input mt-8"
              placeholder="your name"
              value={inputName} 
              onChange={e => setInputName(e.target.value)}
            />
            <input 
              type="text" 
              className="contact-input mt-4"
              placeholder="topic"
              value={inputTopic} 
              onChange={e => setInputTopic(e.target.value)}
            />
            <textarea 
              type="text"
              className="mt-4 relative left-8"
              placeholder="contact me!"
              value={inputText} 
              onChange={e => setInputText(e.target.value)}
              rows={6}
              cols={10}
              maxLength={200}
              minLength={10}
            />
            {/* activate the form */}
            <button 
              type="submit"
              className="contact-button"
              onClick={() => {}}
            >
              Send 
            </button>
          </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
