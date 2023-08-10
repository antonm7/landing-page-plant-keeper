import React from "react";
import Care from "./components/Care";
import Footer from "./components/Footer";
import GreenBar from "./components/GreenBar";
import Grow from "./components/Grow";
import Header from "./components/Header";
import Identification from "./components/Identification";
import Navbar from "./components/Navbar/Index";
import Plantastic from "./components/Plantastic";
import Users from "./components/Users";

const MemoizedHeader = React.memo(() => <Header />)
const MemoizedGreenBar = React.memo(() => <GreenBar />)
const MemoizedIdentification = React.memo(() => <Identification />)
const MemoizedCare= React.memo(() => <Care />)
const MemoizedGrow = React.memo(() => <Grow />)

function App() {
 return (
    <>
        <Navbar />
        <MemoizedHeader/>
        <MemoizedGreenBar />
        <MemoizedIdentification />
        <MemoizedCare />
        <MemoizedGrow />
        <Users />
        <Plantastic />
        <Footer /> 
    </>
 )
}

export default App
