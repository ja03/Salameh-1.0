import React from "react";

// Importing Components
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    document.addEventListener("click", (event) => {
        if (
            event.target.tagName === "A" &&
            event.target.getAttribute("href").startsWith("#")
        ) {
            event.preventDefault();
            smoothScroll(event.target.getAttribute("href"));
        }
    });
    return (
        <div className="App flex flex-col gap-[128px]">
            <Hero />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
