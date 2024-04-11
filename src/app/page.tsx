import Image from "next/image";
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";

import "./styles/home.scss";



export default function Home() {
  return (
    <main className="container">
      <Header/>
       <Experience/>
        <div className="infos">
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>contact me</button>


          </div>
          <h3>Languages</h3>
          <div className="languages-info">
            <span> <Image src="/usa.jpg" alt="usa bandeira" width={12} height={12} priority></Image> EN - Fluent</span> 
            <br></br>
          <span><Image src="/br.jpg" alt="br bandeira" width={12} height={12} priority></Image> PT-BR - Native Speaker</span>
         
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span><Image src="/unifil.jpg" alt="logo unifil" width={50} height={15} priority></Image> Curso de ADS - Unifil</span>
          </div>
          <span></span>
        
        
     
         
           
    </main>
  )
}
