import Routing from "./config/routing";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import LoadingScreen from "./LoadingScreen";

import i18n from "./components/languageTranslator/i18n";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchToken, onMessageListener } from "./firebase";
import { Button, Toast } from "react-bootstrap";
function App() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  fetchToken(setTokenFound);

  onMessageListener().then(payload => {
    setNotification({title: payload.notification.title, body: payload.notification.body})
    setShow(true);
    console.warn(payload);
  }).catch(err => console.log('failed: ', err));


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
  
  const [mode, setMode] = useState(true);
  useEffect(()=> {
    window.addEventListener('load', function(e) {
      if (navigator.onLine) {
        setMode(true)
      } else {
        setMode(false)
      }
    }, false);
    window.addEventListener(`online`, (e) => {
      setMode(true)
    })
    window.addEventListener("offline", (event) => {
      setMode(false)
    });
  },[])
  useEffect(()=> {
    if(mode){
      document.body.classList.remove("offline")
    } else{
      document.body.classList.add("offline")
    }
  },[mode])
// useEffect(()=> {
//   const msg = firebase.messaging()
//   msg.requestPermission().then(()=> {
//     return msg.getToken()
//   }).then((data)=> {
//     console.warn("token",data)
//   })
// },[])
  return (
    <>
       <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
     {mode === false && <div className="offline-mode"> You are Offline Mode</div> } 
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
