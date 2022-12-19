import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Trains from "./components/admin/Trains";
import Login from "./components/Login";
import Register from "./components/Register";
import Book from "./components/Book";
//Admin Components import
import AddTrain from "./components/admin/AddTrain";
import AdminPanel from "./components/admin/AdminPanel";
import SearchTrainList from "./components/SearchTrainList";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/trains" element={<SearchTrainList />} />
        <Route path="/search/trains/book" element={<Book />} />
        //Admin Routes
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/trains" element={<Trains />} />
        <Route path="/admin/addtrain" element={<AddTrain />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
