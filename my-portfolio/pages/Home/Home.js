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
    <h1 class="gradient-text">Deiby Gorrin</h1>
    <p>Actualmente, estoy cursando la Formación Profesional en Desarrollo de Aplicaciones Multiplataforma (FP DAM). Este programa me ha permitido desarrollar mis habilidades en programación y adquirir un enfoque práctico para la resolución de problemas complejos. Me apasiona crear aplicaciones robustas y eficientes que puedan hacer una diferencia en la vida cotidiana de las personas.

    Paralelamente, estoy realizando un Máster en Diseño Web. Este curso ha sido una aventura emocionante, ya que me permite combinar mi amor por la tecnología con mi sentido estético. Estoy aprendiendo a integrar la funcionalidad con un diseño atractivo y moderno, asegurándome de estar siempre al día con las últimas tendencias y tecnologías en el campo del diseño web.</p>
    <a href="mailto:deibygorrinsarmiento@gmail.com">Say hi →</a>
    </section>`;
};