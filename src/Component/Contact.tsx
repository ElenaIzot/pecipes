import instagram from "../img/icons/instagram.png";
import telegram from "../img/icons/telegram.png";
import vk from "../img/icons/vk.png";
import whatsapp from "../img/icons/whatsapp.png";

function Contact(): JSX.Element {

    return (<section className="section-feedback">
        <h2 className="section-feedback__title">
            Наши контакты
        </h2>
        <p className="section-feedback__text">
            Вы можете связаться с нами в любых социальных сетях.
        </p>
        <div className="feedback ">
            <div className="feedback-item">
                <div></div>
                <a className="feedback-name__link" href="#">
                    <img className="feedback-name__img"
                        src={instagram}
                        alt="icon"
                    />
                </a>
                <div className="feedback-name">
                    <a className="feedback-name__link" href="#">
                        Instagram
                    </a>
                    <p className="feedback-name__about">
                        recipes
                    </p>
                </div>
            </div>
            <div className="feedback-item">
                <div></div>
                <a className="feedback-name__link" href="#">
                    <img src={telegram} alt="icon" /></a>
                <div className="feedback-name">
                    <a className="feedback-name__link" href="#">
                        Telegram
                    </a>
                    <p className="feedback-name__about">
                        @recipes
                    </p>
                </div>
            </div>
            <div className="feedback-item">
                <div></div>
                <a className="feedback-name__link" href="#">
                    <img src={whatsapp} alt="icon" /></a>
                <div className="feedback-name ">
                    <a className="feedback-name__link " href="#">
                        WhatsApp
                    </a>
                    <p className="feedback-name__about ">
                        WhatsApp
                    </p>
                </div>
            </div>
            <div className="feedback-item ">
                <div></div>
                <a className="feedback-name__link" href="#">
                    <img src={vk} alt="icon" />
                </a>
                <div className="feedback-name ">
                    <a className="feedback-name__link" href="#"
                    >ВКонтакте
                    </a>
                    <p className="feedback-name__about">
                        ВКонтакте
                    </p>
                </div>
            </div>
        </div>
    </section >
    )
}

export default Contact;