import Image from "next/image";


export default function Home() {
  return (
    <main>
      
      <div className="header">
      

      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
           />
           <div>
            <h1>Hi, I'm Fernando!</h1>
            <h2>Software developer</h2>
           </div>
     
      <div className="experience">
        <h3>Experience</h3>
        <p>Java , HTML, Css, Git/Github, Ionic, Angular</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>contact me</button>


          </div>
          <h3>Languages</h3>
          <div className="languages-info">
            <span>  EN - Fluent</span>
            <span> PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>icone emoji</span>
            <span>ADS -Unifil</span>
          </div>
          <span></span>
        </div>
      </div>
         
           
    </main>
  )
}
