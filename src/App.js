import Routing from "./config/routing";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import LoadingScreen from "./LoadingScreen";

import i18n from "./components/languageTranslator/i18n";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();
  // console.log("location", location);
  // const isRehydrating = useSelector((state) => state._persist.rehydrated); // Replace with the actual path to the rehydration status in your Redux store
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const ln = localStorage.getItem("language");
    if (ln) {
      i18n.changeLanguage(ln);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routing />
    </>
    // <div className="app">
    //   {isRehydrating ? (
    //     <LoadingScreen />
    //   ) : (
    //     <>
    //       <Routing />
    //     </>
    //   )}
    // </div>
  );
}

export default App;
