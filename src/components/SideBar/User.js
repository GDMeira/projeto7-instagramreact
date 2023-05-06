import { IonIcon } from "@ionic/react"
import { pencil } from 'ionicons/icons';

export default function User(props) {
    return <div className="usuario">
        <img src={props.src} alt="imagem de perfil" />
        <div className="texto">
            <span>
                <strong>{props.userName}</strong>
                <IonIcon icon={pencil}></IonIcon>
            </span>
        </div>
    </div>
}