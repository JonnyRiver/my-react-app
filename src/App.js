import React, { useState } from "react";
import Nav from "./components/Navigation/index";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState("About");
  const returnCategory = () => {
    if (currentCategory === "About") {
      return <About />;
    }
    if (currentCategory === "Contact") {
      return <ContactForm />;
    }
    // if (currentCategory === "Project") {
    //   return <Project />;
    // }
    if (currentCategory === "Resume") {
      return <Resume />;
    }
  };
  const CategoryChange = (category) => setCurrentCategory(category);

  return (
    <div>
      <header>
        {/* <h1>Jonathan Martin</h1> */}
        <Nav
          currentCategory={currentCategory}
          CategoryChange={CategoryChange}
        />
      </header>
      <main>{returnCategory()}</main>
      <footer></footer>
    </div>
  );
}

// export default App;
