export default function Suggestion(props) {
    return <div className="sugestao">
        <div className="usuario">
            <img src={props.src} alt={props.src.split('/').pop()} />
            <div className="texto">
                <div className="nome">{props.userName}</div>
                <div className="razao">Segue você</div>
            </div>
        </div>

        <div className="seguir">Seguir</div>
    </div>
}