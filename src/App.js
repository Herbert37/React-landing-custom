import React, { useState, useEffect, Suspense } from "react";
//Components
import NotFound from "./js/components/NotFound/NotFound";
import SmallLoader from "./js/components/SmallLoader/SmallLoader";
//Styles
import "./App.scss";

function App() {
  return (
    <Suspense fallback={<SmallLoader/>}>
      <NotFound/>
    </Suspense>
  );
}

export default App;
