import React from "react";

// Importing Components
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const Home = () => {
    return (
        <div className="App flex flex-col gap-[128px]">
            <Hero />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
