import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    // const { loggedInAs, isCreditCardHolder  } = this.state;
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
