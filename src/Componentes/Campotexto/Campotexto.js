import './Campotexto.css'

export const Campotexto = (props) => {

    const placeholdermodificado = `${props.placeholder}...`

    return (
        <div>
            <label>{props.label}</label>
            <input placeholder={placeholdermodificado}/>
        </div>
    )
}
