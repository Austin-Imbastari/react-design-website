import React from "react";
//styles
import GlobalStyles from "./Global.styles";
//components
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <HeroPage />
        </>
    );
}

export default App;
