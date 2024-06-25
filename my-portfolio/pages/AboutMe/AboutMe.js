import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const AboutMe = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML= `
<div class="container">
<h2>About Me</h2>
${Divider()}
<section  id="AboutMePerfil">
<div class="imgContainer">
<img src="https://res.cloudinary.com/dhawfyfsv/image/upload/v1719232301/My%20portfolio%7D/IMG_2137_xf88e1.jpg" class= "ImgPerfil" alt="Imagen perfil Deiby">
</div>
<article id="articleMe">
<p>¡Hola! Soy Deiby, un apasionado del diseño web y del desarrollo de aplicaciones multiplataforma (DAM). A mis 32 años, he decidido dar un giro significativo en mi carrera profesional y aventurarme en el fascinante mundo de la programación.</p>

<p>Actualmente, me encuentro trabajando en el sector de la hostelería, una industria que me ha enseñado la importancia de la atención al detalle, la gestión del tiempo y el servicio al cliente. Sin embargo, mi verdadera pasión siempre ha sido la tecnología y el diseño. Esta pasión me ha llevado a iniciar estudios en Diseño Web y Desarrollo de Aplicaciones Multiplataforma, con el firme objetivo de transformar mi carrera y dedicarme a lo que realmente me apasiona.</p>

<h4 class="titleAbout toggleButton">Formación y Habilidades +</h4>
<div class="moreContent hidden">
<p>Estoy en las etapas iniciales de mi formación en Diseño Web y DAM, pero ya he adquirido una sólida comprensión de las basesde HTML5, CSS3 y JavaScript. También estoy profundizando en frameworks y herramientas modernas como React, Vue.js y Node.js, así como en conceptos esenciales de UX/UI. Mi objetivo es seguir ampliando mis habilidades y conocimientos para convertirme en un desarrollador competente y versátil.</p>
</div>
<h4 class="titleAbout toggleButton">Objetivos Profesionales +</h4>
<div class="moreContent hidden">
<p>Al finalizar mis estudios, mi meta es cambiar de rubro y dedicarme por completo a la programación y al diseño web. Aspiro a trabajar en proyectos que no solo me desafíen técnicamente, sino que también me permitan crear experiencias digitales impactantes y funcionales para los usuarios.</p>
</div>
</article>
</section>
${Divider()}
</div>
<h4 class="titleAbout toggleButton">Tecnologías +</h4>
<div class="moreContent hidden">
<ul>
  <li>
  <img src="https://res.cloudinary.com/dhawfyfsv/image/upload/v1719345178/My%20portfolio%7D/html-5_qva5px.png" alt="Logo HTML5">
  </li>
  <li>
  <img src="https://res.cloudinary.com/dhawfyfsv/image/upload/v1719345178/My%20portfolio%7D/css-3_sk0kjm.png" alt="Logo CSS3">
  </li>
  <li>
  <img src="https://res.cloudinary.com/dhawfyfsv/image/upload/v1719345178/My%20portfolio%7D/js_qvuzow.png" alt="Logo JS">
  </li>
</ul>
</div>
`;
const toggleButtons = document.querySelectorAll('.toggleButton');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
};



