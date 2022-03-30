import React from "react";

import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex justify-between ">
      <div className="flex flex-col">
        <span>Chainkart</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quod quasi quae voluptas, sequi magnam adipisci repellendus blanditiis
          necessitatibus aut inventore mollitia libero beatae fugit laboriosam
          autem veritatis accusantium voluptate?
        </p>
        <div>
          <div>
            <Facebook />
          </div>

          <div>
            <Twitter />
          </div>

          <div>
            <Instagram />
          </div>

          <div>
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
