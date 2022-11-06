// import Navbar from "../../navbar/navbar.component"
import TextBox from '../../textbox/textbox.component';
// import {useState} from 'react'

function Home(props) {
    // const [mode, setMode] = useState("light");
    // const toggleMode = () => {
    //   if (mode === "light"){
    //     setMode("dark")
    //     console.log("here")
    //     document.body.style.backgroundColor = "black"
    //   }
    //   else{
    //     setMode("light")
    //     document.body.style.backgroundColor = "white"
    //   }
    // }
  
    return (
      <>
        {/* <Navbar name="TextUtils" mode={mode} toggleMode={toggleMode}/> */}
        <TextBox text="Enter the text below to Analyse" mode={props.mode} toggleMode={props.toggleMode}/>
      </>
    );
  }
  
  export default Home;