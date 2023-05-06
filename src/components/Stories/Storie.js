export default function Storie(props) {
    return <div className="story">
        <div className="imagem">
            <img src={props.src} alt={props.src.split('/').pop()} />
        </div>
        <div className="usuario">
            {props.user}
        </div>
    </div>
}