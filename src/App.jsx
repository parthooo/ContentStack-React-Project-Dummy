import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getPageUrls } from "./api/getData";
import { PAGE_VERSION } from "./constants/constants";
import Layout from "./components/index";
import Page from './containers/Page';
const App = () => {
  const [pageURL, setPageURL] = useState(null);

  useEffect(() => {
    getPageUrls(PAGE_VERSION, setPageURL);
  }, []);

  return (
    <Router>
      <Layout>
        {
          pageURL !== null ? <Routes>
            {pageURL.map((page) => page.url === "*" ? (
              <Route path="*" exact element="404!" />
            ) : (
              <>
                <Route key={page.main_page_title} path={`${page.url}`} exact element={<Page locator={`${page.url}`} />} />
              </>
            ))}
          </Routes> : null
        }
      </Layout>
    </Router>
  );
}
export default App;