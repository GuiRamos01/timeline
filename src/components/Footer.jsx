import { Link } from "react-router-dom";

import Logo from "../img/timeline.png"
import InstaSVG from "../img/instagram.svg"
import xSVG from "../img/x-social.svg"
import youtubeSVG from "../img/youtube.svg"

function Footer() {
  return (
    <aside id="Footer">
        <div className="flex flex-col gap-5">
          <img width="180px" src={Logo} alt="" />
          <p>Informação para leitores exigentes. <br/> Desenvolvido por <Link target="_blank" to='https://github.com/GuiRamos01'>Guilherme Ramos</Link> </p>
        </div>

        <div className="group2">
          <div className="socialMedia">
            <Link target="_blank" to='https://www.youtube.com/@ConversaTimeline'>
              <img width="33px" height="33px" src={youtubeSVG} alt="" />
            </Link>

            <Link target="_blank" to='https://x.com/RevistaTL'>
              <img width="22px" height="23px" src={xSVG} alt="" />
            </Link>

            <Link target="_blank" to='https://www.instagram.com/revista.timeline2'>
              <img width="27x" height="23px" src={InstaSVG} alt="" />
            </Link>
          </div>

          <Link to="/politicas-privacidade">Políticas de Privacidade</Link>
        </div>
    </aside>
  )
}

export default Footer;
