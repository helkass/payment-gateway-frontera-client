import Code from "../Code";
import "./styles.css";

const DocTemplate = ({ id, title, subtitle, code }) => {
   return (
      <div id={id}>
         <h2 className="docs__content-title">{title}</h2>
         <ContentDocTemplate subtitle={subtitle} code={code} />
      </div>
   );
};

export const ContentDocTemplate = ({ subtitle, code, json }) => {
   return (
      <>
         <span className="docs__content-subtitle">{subtitle}</span>
         <Code>{json ? JSON.stringify(code, undefined, 2) : code}</Code>
      </>
   );
};

export default DocTemplate;
