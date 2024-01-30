import "./App.css";
// import "./locomotive.css";
import React from "react";
// import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/Body/Body";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  // const scrollRef = React.useRef(null);
  // React.useEffect(()=>{
  //   const scroll = new LocomotiveScroll({
  //     el : scrollRef.current,
  //     smooth:true,
  //   })

  //   return () =>{
  //     scroll.destroy();
  //   }
  // },[]);
  return (
    <div className="App">
      <Navbar />
      <Body/>
      <Intro/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
