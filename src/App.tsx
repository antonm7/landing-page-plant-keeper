import { Suspense } from "react";
import Care from "./components/Care";
import Footer from "./components/Footer";
import GreenBar from "./components/GreenBar";
import Grow from "./components/Grow";
import Header from "./components/Header";
import Identification from "./components/Identification";
import Navbar from "./components/Navbar/Index";
import Plantastic from "./components/Plantastic";
import Users from "./components/Users";

function App() {
 return (
    <Suspense fallback={null}>
        <>
            <Navbar />
            <Header />
            <GreenBar />
            <Identification />
            <Care />
            <Grow />
            <Users />
            <Plantastic />
            <Footer /> 
        </>
    </Suspense>
 )
}

export default App
