import './Cabecalho.css'

const Cabecalho = () =>{
     return(
        <header>
            <div className="cabecalho">
                <h2><a>CEP.com</a></h2>
                <ul>
                    <li><a target='_blank'>Home</a></li>
                    <li><a target='_blank'>Formação</a></li>
                    <li><a target='_blank'>Experiência</a></li>
                    <li><a target='_blank'>Hobbies</a></li>
                </ul>
            </div>
        </header>
     )
}

export default Cabecalho