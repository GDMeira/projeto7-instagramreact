import Storie from "./Storie";
import { IonIcon } from "@ionic/react"
import { chevronForwardCircle } from 'ionicons/icons';

export default function Stories() {
    return (
        <div className="stories">
            <Storie src="./assets/img/9gag.svg" user="9gag" />
            <Storie src="./assets/img/meowed.svg" user="meowed" />
            <Storie src="./assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet" />
            <Storie src="./assets/img/wawawicomics.svg" user="wawawicomics" />
            <Storie src="./assets/img/respondeai.svg" user="respondeai" />
            <Storie src="./assets/img/filomoderna.svg" user="filomoderna" />
            <Storie src="./assets/img/memeriagourmet.svg" user="memeriagourmet" />


            <div className="setinha">
                <IonIcon icon={chevronForwardCircle}></IonIcon>
            </div>
        </div>);
}