
import "./information.scss";

export function Info(){
    return(
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span><img src="/usa.jpg" alt="usa bandeira" width={12} height={12} ></img> EN - Fluent</span> 
            <span><img src="/br.jpg" alt="br bandeira" width={12} height={12} ></img> PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span><img src="/unifil.jpg" alt="logo unifil" width={50} height={15}></img> Curso de ADS - Unifil</span>
          </div>
          </div>
    )
}