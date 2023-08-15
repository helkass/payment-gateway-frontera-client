import { useState } from "react";
import Docs from "../components/docs/Docs";
import { docsNav } from "../constants/docs";
import "./styles/docsStyle.css";
import { HiBars3BottomRight } from "react-icons/hi2";

const DocsLayout = () => {
   const [active, setActive] = useState(false);

   const handleActive = () => {
      setActive(!active);
   };
   return (
      <section>
         <div className="docs-container">
            <button onClick={handleActive} className="btn-bars-docs">
               <HiBars3BottomRight size={22} />
            </button>
            <div className={`docs__nav ${active && "active"}`}>
               {docsNav.map((nv) => (
                  <a href={nv.id} key={nv.id}>
                     {nv.title}
                  </a>
               ))}
            </div>
            <div className="docs__contents">
               <Docs />
            </div>
         </div>
      </section>
   );
};

export default DocsLayout;
