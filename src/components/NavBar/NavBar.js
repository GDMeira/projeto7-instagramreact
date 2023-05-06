import { IonIcon } from "@ionic/react"
import { logoInstagram } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { compassOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';

export default function NavBar() {
    return (<div className="navbar">
        <div className="container">
            <div className="logo">
                <IonIcon icon={logoInstagram} />
                <div className="separador"></div>
                <img src="assets/img/logo.png" alt="logo" />
            </div>

            <div className="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div className="icones">
                <IonIcon icon={paperPlaneOutline}></IonIcon>
                <IonIcon icon={compassOutline}></IonIcon>
                <IonIcon icon={heartOutline}></IonIcon>
                <IonIcon icon={personOutline}></IonIcon>
            </div>

            <div className="icones-mobile">
                <IonIcon icon={paperPlaneOutline}></IonIcon>
            </div>
        </div>
    </div>)
}