
import { Route } from "wouter";

import './App.css';
import { SearchResult } from "./pages/SearchResults";

import { Detail } from "./pages/Detail";
import { GifsContextProvider } from './context/GifsContext'
import React, { Suspense } from "react";

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
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
