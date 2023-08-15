import { Link } from "react-router-dom";
import "./styles/home.css";
import { useEffect, useReducer, useState } from "react";
import { ContentDocTemplate } from "./docs/DocTemplate";

const initialState = {
   status: false,
   message: null,
   data: null,
};

function reducereFn(state, action) {
   switch (action.type) {
      case "show":
         return (state = { ...state, ...action.payload });
      case "reset":
         return (state = {
            ...state,
            status: false,
            message: null,
            data: null,
         });
      default:
         break;
   }
}

const Home = () => {
   const [state, dispatch] = useReducer(reducereFn, initialState);
   const [vaNumber, setVaNumber] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [isAlert, setIsAlert] = useState(false);

   function RenderResponse() {
      return (
         <ContentDocTemplate
            json
            code={state?.data}
            subtitle={"full response"}
         />
      );
   }

   function handleReset() {
      dispatch({ type: "reset" });
   }

   const handleChecking = (e) => {
      e.preventDefault();
      setIsLoading(true);

      if (state?.status) {
         fetch(`https://tiny-tie-bee.cyclic.app/order/pay/${state?.data._id}`, {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ gross_amount: state?.data.gross_amount }),
         })
            .then((data) => data.json())
            .then((json) => {
               if (json.status == false) {
                  dispatch({ type: "show", payload: { ...json, data: null } });
               } else {
                  dispatch({
                     type: "show",
                     payload: json,
                  });
               }
            })
            .finally(() => {
               setIsLoading(false);
               setIsAlert(true);

               setTimeout(() => {
                  setIsAlert(false);
               }, 3000);
            });
      } else {
         fetch(`https://tiny-tie-bee.cyclic.app/order/va-number/${vaNumber}`)
            .then((data) => data.json())
            .then((json) => {
               if (json.status == false) {
                  dispatch({ type: "show", payload: { ...json, data: null } });
               } else {
                  dispatch({
                     type: "show",
                     payload: {
                        data: json.data,
                        status: json.status,
                        message: "transaction code verified",
                     },
                  });
               }
            })
            .finally(() => {
               setIsLoading(false);
               setIsAlert(true);

               setTimeout(() => {
                  setIsAlert(false);
               }, 3000);
            });
      }
   };

   useEffect(() => {
      RenderResponse();
   }, [isLoading]);
   return (
      <section>
         <div className="container home-container">
            <img src="/hero.jpg" alt="image-banner" className="home-banner" />
            <form onSubmit={handleChecking}>
               <p className="form-title">Paste your va number in here</p>
               <label htmlFor="paying">
                  <input
                     name="paying"
                     placeholder="va number"
                     value={state?.status ? state?.data.gross_amount : vaNumber}
                     required
                     onChange={(e) => setVaNumber(e.target.value)}
                  />
                  <button type="submit" disabled={isLoading}>
                     {isLoading
                        ? "loading..."
                        : state?.status
                        ? "Paying"
                        : "Check"}
                  </button>
                  <button
                     disabled={!state?.status}
                     style={{ background: "red" }}
                     onClick={() => handleReset()}>
                     reset
                  </button>
               </label>
               {/* alert here*/}
               {isAlert && (
                  <div
                     className={`alert-container ${
                        state?.status ? "success" : "error"
                     }`}>
                     <span className="alert-content">{state?.message}</span>
                  </div>
               )}

               {/* end alert */}
            </form>
            {state?.status && (
               <div style={{ position: "relative" }}>
                  <RenderResponse />
               </div>
            )}
            <p className="home-title">
               frontera payment gateway is an api platform that is free to use
               to assist in the process of developing e-commerce based
               applications
            </p>
            <Link to="/docs">
               <button className="btn-primary">Get Started</button>
            </Link>
         </div>
      </section>
   );
};

export default Home;
