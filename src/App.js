
import './App.css';
import './animations.css'
import DashboardComp from './components/DashboardComp';
import NavbarComp from './components/NavbarComp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginComp from './components/LoginComp';
import RegisterComp from './components/RegisterComp';
import FooterComp from './components/FooterComp';
import MobilenavComp from './components/MobilenavComp';
import SearchComp from './components/SearchComp';
import HomeComp from './components/HomeComp';
import DoctorpageComp from './components/DoctorpageComp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutComp from './components/AboutComp';
import { useState, useEffect } from 'react'
import wavelight from './img/Wave.svg'
import wavedark from './img/WaveDark.svg'
import customerWhite from './img/customerWhite.svg'
import customerDark from './img/customer.svg'
import sethoscopeDark from './img/sethoscope.svg'
import sethoscopeWhite from './img/sethoscopeWhite.svg'
import citiesDark from './img/cities.png'
import citiesLight from './img/citiesLight.png'
import waveDoctorLight from './img/WaveDoctorLight.png'
import waveDoctorDark from './img/WaveDoctorDark.png'



function App() {
  AOS.init();

  const themes = {
    dark: {
      bg: "bg-themedark",
      footer: "bg-themedark",
      card: "bg-themedark",
      color: "white",
      logintext: "text-themegreen",
      text: "text-white",
      wave: wavedark,
      logincolor: "bg-themegray",

      customerIcon: customerWhite,
      scopeIcon: sethoscopeWhite,
      cityIcon: citiesLight,
      waveDoctor: waveDoctorDark,
      mobilenav: "bg-themedark",
      textfield: "bg-themegray"

    },
    light: {
      bg: "bg-themegreen",
      footer: "bg-themegray",
      card: "bg-white",
      color: "#393E46",
      logintext: "text-white",
      text: "text-themegray",
      wave: wavelight,
      logincolor: "bg-white",

      customerIcon: customerDark,
      scopeIcon: sethoscopeDark,
      cityIcon: citiesDark,
      waveDoctor: waveDoctorLight,
      mobilenav: "bg-white",
      textfield: "bg-gray-100"
    }
  }

  const [selectedTheme, setSelectedTheme] = useState({ theme: themes.light })

  const themeChangeHandeler = () => {

    if (localStorage.getItem('userTheme') === "dark") {
      setSelectedTheme({ theme: themes.light })
      document.body.style.color = themes.light.color
      localStorage.setItem('userTheme', 'light');
      document.querySelector(':root').style.setProperty("--shadow", "rgba(149, 157, 165, 0.2)")
      document.body.style.backgroundColor = "white";
    }
    else if (localStorage.getItem('userTheme') === "light") {
      setSelectedTheme({ theme: themes.dark })
      document.body.style.color = themes.dark.color
      localStorage.setItem('userTheme', 'dark');
      document.querySelector(':root').style.setProperty("--shadow", "rgb(0 0 0 / 20%)")
      document.body.style.backgroundColor = "#393E46";

    }

  }

  useEffect(() => {

    if (localStorage.getItem('userTheme') === "dark") {
      setSelectedTheme({ theme: themes.dark })
      document.body.style.color = themes.dark.color
      document.querySelector(':root').style.setProperty("--shadow", "rgb(0 0 0 / 20%)")

      document.body.style.backgroundColor = "#393E46";



    }

    else if (localStorage.getItem('userTheme') === "light") {
      setSelectedTheme({ theme: themes.light })
      document.body.style.color = themes.light.color
      document.querySelector(':root').style.setProperty("--shadow", "rgba(149, 157, 165, 0.2)")
      document.body.style.backgroundColor = "white";





    }
    else {
      localStorage.setItem('userTheme', "light")
      setSelectedTheme({ theme: themes.light })
      document.body.style.color = themes.light.color
      document.querySelector(':root').style.setProperty("--shadow", "rgba(149, 157, 165, 0.2)")
      document.body.style.backgroundColor = "white";


    }
  }, []);


  return (

    <>
      <BrowserRouter>
        <NavbarComp theme={selectedTheme.theme} changeTheme={themeChangeHandeler} />
        <MobilenavComp theme={selectedTheme.theme} />
        <Routes>
          <Route exact path="/" element={<HomeComp theme={selectedTheme.theme} />} />
          <Route path="/dashboard" element={<DashboardComp theme={selectedTheme.theme} />} />
          <Route path="/login" element={<LoginComp theme={selectedTheme.theme} />} />
          <Route path="/register" element={<RegisterComp theme={selectedTheme.theme} />} />
          <Route path="/doctors" element={<SearchComp theme={selectedTheme.theme} />} />
          <Route path="/about" element={<AboutComp theme={selectedTheme.theme} />} />

          <Route path="/doctors/1" element={<DoctorpageComp theme={selectedTheme.theme} />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}

        </Routes>
        <FooterComp theme={selectedTheme.theme} />

      </BrowserRouter>

    </>

  );
}

export default App;
