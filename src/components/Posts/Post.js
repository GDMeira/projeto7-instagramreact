import React from "react";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { chatbubbleOutline } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { bookmarkOutline } from 'ionicons/icons';

export default function Post( props ) {
    
    return <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userSrc} alt={props.userName} />
                    {props.userName}
                </div>
                <div className="acoes">
                    <IonIcon icon={ellipsisHorizontal}></IonIcon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postSrc} alt={props.content} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <IonIcon icon={heartOutline}></IonIcon>
                        <IonIcon icon={chatbubbleOutline}></IonIcon>
                        <IonIcon icon={paperPlaneOutline}></IonIcon>
                    </div>
                    <div>
                        <IonIcon icon={bookmarkOutline}></IonIcon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likeSrc} alt={props.like} />
                    <div className="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras {props.likeNbr} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
}