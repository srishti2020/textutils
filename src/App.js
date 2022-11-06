import './App.css';
 import Navbar from './components/navbar/navbar.component';
// import TextBox from './components/textbox/textbox.component';
import {useState} from 'react'
import Home from './components/routes/home/home.component';
import {Routes, Route} from 'react-router-dom'
import About from "./components/routes/about/about.compoonent"

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    // <>
    //   <Navbar name="TextUtils" mode={mode} toggleMode={toggleMode}/>
    //   <TextBox text="Enter the text below to Analyse" mode={mode} toggleMode={toggleMode}/>
    // </>

    <>
    <Routes>
      <Route path='/'  element={<Navbar name="TextUtils" mode={mode} toggleMode={toggleMode} />}>
        <Route index element={<Home mode={mode} toggleMode={toggleMode}/>}/>
        <Route path='about' element={<About mode={mode} toggleMode={toggleMode}/>}/>
      </Route>
    </Routes>
      

    </>
  );
}

export default App;

