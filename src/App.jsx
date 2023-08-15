import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Home from "./components/Home";
import DocsLayout from "./Layout/DocsLayout";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="docs" element={<DocsLayout />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
