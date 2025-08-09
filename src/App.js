import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ShowCertificate from './components/ShowCertificate';

function App() {
  return (
    <HashRouter>
      <>
        {/* Navigation */}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="/">
              The Data Wizard
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <header className="masthead">
          <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <Routes>
                  <Route
                    path="/certificate/:username"
                    element={<ShowCertificate />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </header>

        {/* Footer */}
        <footer className="bg-light py-5">
          <div className="container px-4 px-lg-5">
            <div className="small text-center text-muted">
              Copyright © {new Date().getFullYear()} - The Data Wizard
            </div>
          </div>
        </footer>
      </>
    </HashRouter>
  );
}

export default App;
