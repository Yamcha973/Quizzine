import React from 'react';
import './App.css';
import FAQ from'./components/FAQ';
import FAQB from './components/FAQB'
function App() {
  return (
    <div className="App">
      <FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      />
      <FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      />
      <FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      /><FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      /><FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      /><FAQ 
        question="lorem Ipsum"
        answer= "La réponse a ces questions vous sera apporté dans les plus brefs delais en fonction de la vitesse de creation du site"
      />
      <FAQB/>
    </div>
  );
}

export default App;
