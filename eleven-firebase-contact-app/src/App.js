import React, { useReducer, useEffect } from "react";

import { Container, Col, Row } from "reactstrap";

// react-router-dom3
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// react toastify stuffs
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// firebase stuffs
//TODO: import firebase config and firebase database
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// components
import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ViewContact from "./pages/ViewContact";
import PageNotFound from "./pages/PageNotFound";

// context api stuffs
//TODO: import reducers and contexts
import contactReducer from "./context/reducer";
import ContactContext from "./context/Context";
import {SET_CONTACT, SET_LOADING} from "./context/action.types";

//initlizeing firebase app with the firebase config which are in ./utils/firebaseConfig
//TODO: initialize FIREBASE
import firebaseApp from "./utils/firebaseConfig";

// first state to provide in react reducer
const initialState = {
  contacts: [],
  contact: {},
  contactToUpdate: null,
  contactToUpdateKey: null,
  isLoading: false
};

const App = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // will get contacts from firebase and set it on state contacts array
  const getContacts = async () => {
    // TODO: load existing data
    
    dispatch({
      type: SET_LOADING,
      payload: true
    });

    const db = getDatabase(firebaseApp);
    const contactsRef = ref(db, '/contacts');
    onValue(contactsRef, (snapshot) => {
      
      const data = snapshot.val();
      dispatch({
        type: SET_CONTACT,
        payload: data
      });

      dispatch({
        type: SET_LOADING,
        payload: false
      });

    });

  };

  // getting contact  when component did mount
  useEffect(() => {
    
    getContacts();

  }, []);

  return (
    <Router>
      <ContactContext.Provider value={{state, dispatch}}>
        <ToastContainer />
        <Header />
        <Container>
          <Routes>
            <Route exact path="/contact/add" element={<AddContact />} />
            <Route exact path="/contact/view" element={<ViewContact />} />
            <Route exact path="/" element={<Contacts />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </Container>

        <Footer />
      </ContactContext.Provider>
    </Router>
  );
};

export default App;
