import Image from "next/image";
import "./header.scss"
export function Header (){
    return(
        <div className="header">
      <span><Image src="/f.png" alt="perfil fer" width={120} height={100} priority></Image></span>
            
           <div>
            <h1>Hi, I'm Fernando!</h1>
            <h2>Software developer</h2>
           </div>
           </div>
     
    )
}