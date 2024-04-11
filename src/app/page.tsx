import Image from "next/image";
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";

import "./styles/home.scss";
import { Info } from "./components/information/information";



export default function Home() {
  return (
    <main className="container">
      <Header/>
       <Experience/>
        <Info/>
        
          <div className="buttons">
            <div className="social">

            </div>
            <button>contact me</button>
</div>
    
    </main>
  )
}
