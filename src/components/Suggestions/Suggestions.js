import Suggestion from "./Suggestion";

const suggestions = [{src: "assets/img/bad.vibes.memes.svg",userName: "bad.vibes.memes"},
                     {src: "assets/img/chibirdart.svg",userName: "chibirdart"},
                     {src: "assets/img/razoesparaacreditar.svg",userName: "razoesparaacreditar"},
                     {src: "assets/img/adorable_animals.svg",userName: "adorable_animals"},
                     {src: "assets/img/smallcutecats.svg",userName: "smallcutecats"}];

export default function Suggestions() {
    return <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map(e => <Suggestion key={e.src} src={e.src} userName={e.userName}/>)}
        </div>
}