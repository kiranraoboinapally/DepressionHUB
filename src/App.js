import React from 'react';
import { Footer , Blog ,Possible,Features,whatDepressionHUB,Header} from './containers';
import { CTA,Article,Brand,Feature,Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <div className="gradient__bg2">
        <Header />
        <Brand />
      <whatDepressionHUB />
      <Features />
      <Possible />
      <CTA />
      <Blog />
      <Footer />
      </div>
    </div>
    </div>
  )
}

export default App