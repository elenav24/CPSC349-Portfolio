import React, { useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = "4fae1b5d-5a65-422f-9f5b-8f17b0c8320f";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Website Contact Form",
      subject: "New Message from Your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setIsSubmitting(false);
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
      setIsSubmitting(false);
    },
  });

  return (
    <section id="contact" className="contact-page">
      <div className="contact-container contact-paper-sheet">
        <h1 className="contact-title">Contact Me</h1>
        
        <div className="contact-form">
          {result && (
            <div className={`contact-submit-status ${
              isSuccess ? 'contact-success' : 
              isSubmitting ? 'contact-sending' : 
              'contact-error'}`}>
              {result}
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="contact-handwritten-form">
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">Name</label>
              <input
                type="text"
                id="name"
                className="contact-form-input"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
            </div>
            
            <div className="contact-form-group">
              <label htmlFor="email" className="contact-form-label">Email</label>
              <input
                type="email"
                id="email"
                className="contact-form-input"
                placeholder="your.email@example.com"
                {...register("email", { required: true })}
              />
            </div>
            
            <div className="contact-form-group">
              <label htmlFor="message" className="contact-form-label">Message</label>
              <textarea
                id="message"
                className="contact-form-textarea"
                placeholder="Your message here..."
                rows={5}
                {...register("message", { required: true })}
              />
            </div>
            
            <input type="hidden" name="redirect" value="false" />
            
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="contact-submit-btn contact-pink-button"
            >
              {isSubmitting ? (
                <>
                  <span className="contact-spinner">✏️</span> Sending...
                </>
              ) : (
                <>
                  <span className="contact-icon">💌</span> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social Media Links Section */}
        <div className="social-links">
          <h3 className="social-title">Find Me Online</h3>
          <div className="social-icons">
            <a 
              href="https://github.com/elenav24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              <FaGithub className="social-icon" />
              <span className="social-text">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/elena-marquez-7342b6255/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <FaLinkedin className="social-icon" />
              <span className="social-text">LinkedIn</span>
            </a>
            
            <a 
              href="https://www.instagram.com/elenaavmm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <FaInstagram className="social-icon" />
              <span className="social-text">Instagram</span>
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
};