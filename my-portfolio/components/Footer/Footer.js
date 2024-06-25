import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/facebook.png", "Facebook","https://www.facebook.com/profile.php?id=100066990724753")}
${Button("/icons/github1.png", "GitHub", "https://github.com/deiybg")}
${Button("/icons/linkedln.png", "LinkedIn", "https://www.linkedin.com/in/deibygorrin/")}
${Button("/icons/instagram.png", "Instagram", "https://www.instagram.com/deibyg_s/")}
${Button("/icons/twitter.png", "Twitter", "https://x.com/Deiby_G")}
</div>
`;

