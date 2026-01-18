"use client";

import Image from "next/image";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Let's connect!</p>
        <br></br>
        <br></br>
        <br></br>
        <div className="contact-grid">
          <aside className="contact-side">
            <div className="contact-icons-wrapper">
              <a className="contact-tab wide-tab" href="mailto:raimaji120@gmail.com" aria-label="Email">
                <div className="tab-head">
                  <Image src="/portfolio/email.png" alt="Email" width={36} height={36} />
                  <span className="contact-label">Email</span>
                </div>
                <div className="tab-detail">raimaji120@gmail.com</div>
              </a>

              <a className="contact-tab wide-tab" href="tel:+14375772997" aria-label="Phone">
                <div className="tab-head">
                  <Image src="/portfolio/phone.png" alt="Phone" width={36} height={36} />
                  <span className="contact-label">Phone</span>
                </div>
                <div className="tab-detail">+1 782-324-1003</div>
              </a>

              <div className="icon-row-centered">
                <a className="contact-tab icon-only" href="https://www.linkedin.com/in/ronak120" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image src="/portfolio/linkedin.png" alt="LinkedIn" width={36} height={36} />
                </a>

                <a className="contact-tab icon-only" href="https://github.com/rronak" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Image src="/portfolio/github.png" alt="GitHub" width={36} height={36} />
                </a>
              </div>
            </div>
          </aside>

          <div className="contact-or">OR</div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("I will reply you soon!");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows={5} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}