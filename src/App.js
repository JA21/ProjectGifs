
import { Route } from "wouter";

import React, { Suspense } from "react";

import './App.css';
import { SearchResult } from "./pages/SearchResults";

import { Detail } from "./pages/Detail";
import PageError404 from './pages/Error404/Error404'
import { GifsContextProvider } from './context/GifsContext';


const HomePage = React.lazy(() => import('./pages/Home/index.js'))


function App() {

  return (
    <div className="App">
      <Suspense fallback={null}>
        <section>
          <GifsContextProvider>
            <Route
              component={HomePage}
              path="/"
            />
            <Route
              component={SearchResult}
              path="/search/:keyword/:rating?"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
            component={PageError404}
            path="/404" />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
