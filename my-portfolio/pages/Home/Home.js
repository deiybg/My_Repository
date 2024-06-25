import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <h2>Bienvenidos!!!</h2>
    ${Divider()}
    <h1 class="backgroundImage">Portfolio.</h1>
    <div class="presentation">
    <h3 class="backgroundImagePresentation">Deiby Gorrin</h3>
    <h4 class="backgroundImagePresentation">web design and DAM student</h4>
    </div>
   
    </section>`;
};