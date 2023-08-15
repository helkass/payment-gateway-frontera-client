import "./styles/code.css";
const Code = ({ children }) => {
   return (
      <pre>
         <code>{children}</code>
      </pre>
   );
};

export default Code;
