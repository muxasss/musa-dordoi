import React from 'react';
import './News.css';
const membersData = [
    { name: "ОАО «Кыргызмебель»", description: "Производство и продажа мебели для дома и офиса." },
    { name: "ОсОО «Ак-Таш Дордой»", description: "Оптовая торговля продуктами питания." },
    { name: "ОсОО Охранно-детективное агентство «Дордой - Секьюрити»", description: "Услуги безопасности и защиты бизнеса." },
    { name: "Медицинский центр микрохирургии глаза «Дордой - Офтальмик Сервис» и «Окулюс»", description: "Медицинская помощь в области офтальмологии." },
    { name: "Юридическая компания «Status Quo»", description: "Юридические услуги для бизнеса и частных клиентов." },
    { name: "Центр отдыха «Кой-Таш»", description: "Отдых в живописном месте с комфортными условиями." },
    { name: "Образовательный центр «Умай-Нур»", description: "Образовательные курсы и тренинги для детей и взрослых." },
    { name: "РЦ «Космопарк»", description: "Развлекательный центр для всей семьи." },
    { name: "Гостевой Дом «Кипр»", description: "Уютный гостевой дом с видом на природу." },
    { name: "Гостевой комплекс «Татыр»", description: "Место для отдыха с множеством удобств." },
  ];
function News() {
  return (
    <section className="members-container">
      <h2 className="members-title">Члены Ассоциации</h2>
      <div className="members-grid">
        {membersData.map((member, index) => (
          <div key={index} className="member-card">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
