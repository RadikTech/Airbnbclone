import './App.css';
import Home from './components/Home';
import TabsComp from "./Tabs";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SinglePage from './components/SinglePage';
import Checkout from './components/Checkout';
import { useState } from 'react';
import SearchDetails from './components/SearchDetails';
import SearchPageFooter from './components/SearchPageFooter';


function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={
              <>
                <Home toggle={toggle} setToggle={setToggle} />
                <TabsComp toggle={toggle} setToggle={setToggle} />
                <SearchPageFooter />
              </>
            } />

            <Route path="/:id" element={
              <>
                <Home />
                <SinglePage />
              </>
            } />

            <Route path="/checkout/:id/:days" exact element={
              <>
                <Home />
                <Checkout />
              </>
            } />

            <Route path="/location/:loc" exact element={
              <>
                <Home />
                <SearchDetails />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;







