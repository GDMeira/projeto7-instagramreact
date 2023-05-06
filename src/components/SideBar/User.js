import { IonIcon } from "@ionic/react"
import { pencil } from 'ionicons/icons';

export default function User(props) {
    return <div className="usuario">
        <img src={props.src} alt="imagem de perfil" onClick={changeImage} data-test="profile-image"/>
        <div className="texto">
            <span>
                <strong data-test="name">{props.userName}</strong>
                <IonIcon icon={pencil} onClick={changeName} data-test="edit-name"></IonIcon>
            </span>
        </div>
    </div>

    function changeName() {
        const name = prompt('Qual nome deseja exibir?');

        if (!name) {
            return 
        } else {
            props.setName(name);
        }
    }

    function changeImage() {
        const src = prompt('Qual imagem deseja exibir?');

        if (!src) {
            return 
        } else {
            props.setSrc(src);
        }
    }
}

