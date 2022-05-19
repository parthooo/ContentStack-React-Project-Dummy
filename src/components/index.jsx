import React from "react";

const Layout = (props) => {

  return (
    <>
      <header className="text-center bg-secondary text-white fs-1 p-4 mb-5">
        Header Area
      </header>
      {props.children}
      <footer className="text-center bg-secondary text-white fs-1 p-4 mt-5">
        Footer Area
      </footer>
    </>
  );
};

export default Layout;
