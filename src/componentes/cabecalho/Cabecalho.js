import Link from '../../Link/Link'
import '../../index.css'
import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <header>
            <div className="cabecalho">
                <h2><a>CEP.com</a></h2>
                <div className="lista">
                    <Link to="/Home" label="Home"></Link>
                    <Link to="/Experiencia" label="Experiência"></Link>
                    <Link to="/Formacao" label="Formação"></Link>
                    <Link to="/Hobbies" label="Hobbies">Hobbies</Link>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho