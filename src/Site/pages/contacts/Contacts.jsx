import { useEffect, useState } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import { InputField } from "../../../components/inputField/InputField";
import { ButtonSecondary } from "../../../components/Button/Button";
import { DividerOnOtherPages } from "../../../components/divider/Divider";


import ContactsPage from '../../../assets/images/restaurant-on-page.jpg';

import './Contacts.css';

const Contacts = () => {
  const currentWith = UseWindowSize().width;

  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Envoi en cours...');

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch('https://trattoria-site-web-v2.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        console.log('All good !')
        event.target.reset(); // Vide le formulaire
      } else {
        const data = await response.json();
        setStatus(`Erreur : ${data.error || 'Une erreur est survenue.'}`);
      }
    } catch (error) {
      setStatus('Erreur réseau. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    document.title = 'Contacts | Trattoria Da Alex';
  }, []);


  return (
    <>
      <PageHeader
        img={ContactsPage}
        title="Contacts"
        description="Une envie, une question, une réservation ? On est toujours là pour vous répondre."

      />
      <main className="menu-body-main-wrapper">
        <section className="contacts-wrapper">

          {/* <form className="left-content" onSubmit={handleSubmit}>
            <div className="user-inputs">
              <div className="grouped-inputs">
                <InputField typeOfInput="Field" label="Nom" htmlFor="lastName" id="lastName" name="lastName" type="text" />
                <InputField typeOfInput="Field" label="Prénom" htmlFor="firstName" id="firstName" name="firstName" type="text" />
              </div>
              <InputField typeOfInput="Field" label="Email" htmlFor="email" id="email" name="email" type="email" />
              <InputField label="Message" htmlFor="message" id="message" name="message" />
            </div>
            <ButtonSecondary type="submit" content="Envoyer" />
            {status && <p className="status-message">{status}</p>}
          </form> */}

          {/* {
            currentWith < 780
              ? <DividerOnOtherPages />
              : null
          } */}

          <div className="right-content">

            <div className="contact-content-wrapper">
              <p className="heading">Localisez le restaurant</p>
              <a
                href="https://www.google.com/maps/place/Trattoria+da+Alex/@14.6949747,-17.4582078,21z/data=!4m6!3m5!1s0xec1728d6282c7db:0xbe593fe37536a37e!8m2!3d14.6949747!4d-17.4579342!16s%2Fg%2F11bwm5njlw?entry=tts&g_ep=EgoyMDI1MDgyNS4wIPu8ASoASAFQAw%3D%3D&skid=fc09bffb-03d7-41a3-ba69-94ffc0b0f4cc"
                target="blank"
                className="content"
              >Point E Boulevard de l'Est, Dakar Sénégal</a>
            </div>

            <div className="contact-content-wrapper">
              <p className="heading">Passez une commande</p>
              <a href="tel:+221766446404" className="content">76 644 64 04</a>
            </div>

            <div className="contact-content-wrapper">
              <p className="heading">Réservez votre table</p>
              <a href="tel:+221766446405" className="content">76 644 64 05</a>
            </div>

            <div className="contact-content-wrapper">
              <p className="heading">Email et réseaux sociaux</p>
              <a href="mailto:info@trattoriadaalex.com" className="content">info@trattoriadaalex.com </a>
              <a href="https://www.instagram.com/trattoriadaalex/" className="content">Instagram / @Trattoriadaalex</a>
              <a href="https://web.facebook.com/trattoriadalex/?_rdc=1&_rdr#" className="content">Facebook / @Trattoriadaalex</a>
            </div>

          </div>

        </section>
      </main>
    </>
  );
};

export default Contacts;