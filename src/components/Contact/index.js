// Dependencies
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineSelector } from "react-icons/hi"
import TextareaAutosize from 'react-autosize-textarea';

// React-Redux
import Field from "@/components/Field";
import Button from '../Button';

// Styles
import "./contact.scss"

// Locals
import alice from '@/assets/images/alice.png';
import manu from '@/assets/images/manu.png';
import medhy from '@/assets/images/medhy.png';
import mehdi from '@/assets/images/mehdi.png';
import matthieu from '@/assets/images/matthieu.png';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__team">
        <h2 className="contact__team__title">L'équipe</h2>
        <div className="contact__team__ctn">
          <div className="contact__team__card">
            <div className="contact__team__picture">
              <div className="contact__team__picture__border" />
              <img className="contact__team__picture__img" src={matthieu} alt="matthieu" />
            </div>
            <div className="contact__team__description">
              Matthieu M. <br />
              Développeur React.js
            </div>
            <div className="contact__team__links">
              <GrMail className="contact__team__links__mail" />
              <FaGithub className="contact__team__links__github" />
              <FaLinkedin className="contact__team__links__linkedin" />
            </div>
          </div>
          <div className="contact__team__card">
            <div className="contact__team__picture">
              <div className="contact__team__picture__border" />
              <img className="contact__team__picture__img" src={alice} alt="alice" />
            </div>
            <div className="contact__team__description">
              Alice C. <br />
              Développeuse React.js
            </div>
            <div className="contact__team__links">
              <GrMail className="contact__team__links__mail" />
              <FaGithub className="contact__team__links__github" />
              <FaLinkedin className="contact__team__links__linkedin" />
            </div>
          </div>
          <div className="contact__team__card">
            <div className="contact__team__picture">
              <div className="contact__team__picture__border" />
              <img className="contact__team__picture__img" src={manu} alt="manu" />
            </div>
            <div className="contact__team__description">
              Manu S. <br />
              Développeur React.js
            </div>
            <div className="contact__team__links">
              <GrMail className="contact__team__links__mail" />
              <FaGithub className="contact__team__links__github" />
              <FaLinkedin className="contact__team__links__linkedin" />
            </div>
          </div>
          <div className="contact__team__card">
            <div className="contact__team__picture">
              <div className="contact__team__picture__border" />
              <img className="contact__team__picture__img" src={medhy} alt="medhy" />
            </div>
            <div className="contact__team__description">
              Medhy D. <br />
              Développeur Symfony
            </div>
            <div className="contact__team__links">
              <GrMail className="contact__team__links__mail" />
              <FaGithub className="contact__team__links__github" />
              <FaLinkedin className="contact__team__links__linkedin" />
            </div>
          </div>
          <div className="contact__team__card">
            <div className="contact__team__picture">
              <div className="contact__team__picture__border" />
              <img className="contact__team__picture__img" src={mehdi} alt="mehdi" />
            </div>
            <div className="contact__team__description">
              Mehdi B. <br />
              Développeur Symfony
            </div>
            <div className="contact__team__links">
              <GrMail className="contact__team__links__mail" />
              <FaGithub className="contact__team__links__github" />
              <FaLinkedin className="contact__team__links__linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact__separator" />
      <div className="contact__form">
        <h2 className="contact__form__title">Nous contacter</h2>
        <form className="contact__form__section">
          <Field
            name="pseudo"
            type="text"
            placeholder="pseudo"
            //onChange={handleChangeField}
            value={''}
            Icon={BsPerson}
          />
          <Field
            name="email"
            type="email"
            placeholder="e-mail"
            //onChange={handleChangeField}
            value={''}
            Icon={AiOutlineMail}
          />
          <Field
            name="objet"
            type="select"
            placeholder="au sujet de"
            //onChange={handleChangeField}
            value={''}
            Icon={BsQuestionCircle}
            SecondIcon={HiOutlineSelector}
          />
          <TextareaAutosize
            placeholder="Votre message..."
            className="contact__form__section__message"
            style={{ minHeight: 50, maxHeight: 100 }}
          />

          <Button
            name="envoyer"
            classname="primary"
            type="submit"
          />
          {/*<div className="information">
        N'hésitez pas à nous envoyer un message.
        Pour nous laisser une note :
      </div> */}
        </form>
      </div>

    </div>
  );
}

export default Contact;
