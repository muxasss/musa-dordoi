import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-container">
      <h2 className="contact-title">О Ассоциации Дордой</h2>
      <p className="contact-description">
        Ассоциация Дордой — это организация, поддерживающая предпринимателей и развивающая экономику региона. Мы предоставляем платформу для роста бизнеса, сотрудничества и инноваций.
      </p>
      
      <h3 className="contact-title">Контакты</h3>
      <div className="contact-info">
        <p className="address">
          <strong>Адрес:</strong> ул. Токтогула, 123, Бишкек, Кыргызстан
        </p>
        <p className="phone">
          <strong>Телефон:</strong> <a href="tel:+996312123456">+996 (312) 123-456</a>
        </p>
        <p className="email">
          <strong>Электронная почта:</strong> <a href="mailto:info@dordoi.kg">info@dordoi.kg</a>
        </p>
        
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
