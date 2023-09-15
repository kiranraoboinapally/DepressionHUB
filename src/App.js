import React from 'react';
import { Footer , Blog ,Possible,Features,whatDepressionHUB,Header} from './containers';
import { CTA,Article,Brand,Feature,Navbar} from './components';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatDepressionHUB />
      <Features />
      <Possible />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App