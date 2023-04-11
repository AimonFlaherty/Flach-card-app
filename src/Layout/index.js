import React from "react";
import Header from "./Header";
import Content from "./Content";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        
        <Content />
      </div>
    </React.Fragment>
  );
}

export default Layout;
