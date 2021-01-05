import React from "react";
import notes from "../notes";

function Footer() {
  return (
    <div>
    <p class= "footer footer-p" >Copyright &copy; {(new Date().getFullYear())}</p>
    </div>
  );
}

export default Footer;