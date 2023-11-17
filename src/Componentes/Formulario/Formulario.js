import './Formulario.css'
import { Campotexto } from "../Campotexto/Campotexto";

export const Formulario = () => {
    return (
        <section>
            <form className="Formulario">
                <h2>Digite os seus dados:</h2>
                <Campotexto label="Nome" placeholder="Digite seu nome"/>
                <Campotexto label="CPF" placeholder="Digite seu CPF"/>
                <Campotexto label="CEP" placeholder="Digite seu CEP"/>
                <Campotexto label="Endereco" placeholder="Digite seu endereço"/>
                <Campotexto label="Numero" placeholder="Digite o número da casa"/>
            </form>
        </section>
    )
}