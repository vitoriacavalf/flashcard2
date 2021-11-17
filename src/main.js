import React from "react";

import Home from "./components/home/home";

import Cursos from "./components/cursos/cursos";

import Form from "./components/cursos/form"

import { Container } from 'react-materialize';

import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route path='/cursos' element={ <Cursos coursesData={props.coursesData}/> }/>
        <Route path='/adicionar' element={ <Form/> }/>
      </Routes>
    </Container>
  </main>  
);
 
export default Main;