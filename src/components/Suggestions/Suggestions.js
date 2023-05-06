import Suggestion from "./Suggestion";


export default function Suggestions() {
    return <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Suggestion src="assets/img/bad.vibes.memes.svg" userName="bad.vibes.memes" />

            <div className="sugestao">
                <div className="usuario">
                    <img src="./assets/img/chibirdart.svg" alt="chibirdart" />
                    <div className="texto">
                        <div className="nome">chibirdart</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="./assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
                    <div className="texto">
                        <div className="nome">razoesparaacreditar</div>
                        <div className="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="./assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div className="texto">
                        <div className="nome">adorable_animals</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            <div className="sugestao">
                <div className="usuario">
                    <img src="./assets/img/smallcutecats.svg" alt="smallcutecats" />
                    <div className="texto">
                        <div className="nome">smallcutecats</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>
        </div>
}