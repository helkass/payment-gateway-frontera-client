import DocTemplate, { ContentDocTemplate } from "./DocTemplate";
import "./styles.css";
import React from "react";
import data from "./data.json";

const GetStarted = () => {
   return (
      <div className="docs__content-container">
         <DocTemplate
            title={"getting started"}
            id={"get-started"}
            subtitle={
               "if you already have the amount of data needed for the transaction, copy the following url on your code"
            }
            code={"https://tiny-tie-bee.cyclic.app/api"}
         />
         <DocTemplate
            title={"create transaction"}
            id={"create-transaction"}
            subtitle={
               "to process the transaction, please navigate to the following enpoint"
            }
            code={"/order/createTransaction"}
         />
         <ContentDocTemplate
            subtitle={"Request body example"}
            code={data["create_transaction"]}
            json
         />
         <ContentDocTemplate
            subtitle={"Response example"}
            code={data["response_create_transaction"]}
            json
         />
         <DocTemplate
            title={"Pay transaction"}
            id={"pay-transaction"}
            subtitle={
               "after create transaction, you can paying on dashboard and input your 'va_number'"
            }
            code={"/order/pay/:id"}
         />
         <ContentDocTemplate
            subtitle={"request example"}
            code={data["paying"]["request"]}
            json
         />
         <ContentDocTemplate
            subtitle={"response example"}
            code={data["paying"]["response"]}
            json
         />
      </div>
   );
};

export default GetStarted;
