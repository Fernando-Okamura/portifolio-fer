import Image from "next/image";
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";

import "./styles/home.scss";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";



export default function Home() {
  return (
    <main className="container">
      <Header/>
       <Experience/>
        <Info/>
        
          <div className="buttons">
            <SocialBtns/>
            </div>
            <a className="btn-primary" href="mailto:fokamura10@gmail.com"></a>
              contact me
              <img src= "/email-icon.svg" alt="email icon" width={22} height={22} ></img>
           

    
    </main>
  )
}
