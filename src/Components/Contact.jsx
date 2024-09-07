import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Styles } from "../utils/style";
import ContactImg from "../assests/contact.png";
import "../App.css";
import { toast } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm("service_v9fom4x", "template_0vo3ktp", e.target, {
        publicKey: "DaUROQKNrawsNDICA",
      })
      .then(
        () => {
          toast.success('🦄 Message Sent Successfully!');
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Contact"
      >
        <span className={Styles.sectionHeadText}>Contact</span>
        <hr className="w-[25%] ml-8" />
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap flex-row justify-around">
          <div className="lg:h-[100%]">
            <img src={ContactImg} className="element" alt="any image" />
          </div>
          <div className="lg:w-[40%]">
            <form className="m-5 flex flex-col gap-3" onSubmit={sendEmail}>
              <label className="flex flex-col gap-3">
                <span className="text-white font-medium mt-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What is your good name?"
                  className="bg-slate-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
               required />
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-white font-medium mt-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email please."
                  className="bg-slate-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                required/>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-white font-medium mt-2">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please write your message here..."
                  className="bg-slate-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
             required   ></textarea>
              </label>

              <button
                type="submit"
                className="bg-orange-400 hover:shadow-slate-100 py-3 px-8 mb-4 rounded-xl outline-none w-[100%] text-grey font-bold shadow-md shadow-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
