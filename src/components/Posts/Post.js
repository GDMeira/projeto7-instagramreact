import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { heart } from 'ionicons/icons';
import { chatbubbleOutline } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { bookmarkOutline } from 'ionicons/icons';
import { bookmark } from 'ionicons/icons';

export default function Post( props ) {
    const [saveIcon, setSaveIcon] = useState(bookmarkOutline);
    const [likeIcon, setLikeIcon] = useState(heartOutline);
    const [colorLikeIcon, setColorLikeIcon] = useState("dark");
    const [likeNumber, setLikeNumber] = useState(Number(props.likeNbr));

    return <div className="post" data-test="post">
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
                <img src={props.postSrc} alt={props.content} onClick={() => {
                    if (likeIcon === heartOutline) {
                        like();
                    }
                }} data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <IonIcon icon={likeIcon} color={colorLikeIcon} onClick={() => likeIcon === heart ? dislike() : like()} 
                        data-test="like-post" ></IonIcon>
                        <IonIcon icon={chatbubbleOutline}></IonIcon>
                        <IonIcon icon={paperPlaneOutline}></IonIcon>
                    </div>
                    <div>
                        <IonIcon icon={saveIcon} onClick={() => (
                        setSaveIcon(saveIcon === bookmarkOutline ? bookmark : bookmarkOutline) )}
                        data-test="save-post"></IonIcon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likeSrc} alt={props.like} />
                    <div className="texto">
                        Curtido por <strong>{props.like}</strong> e outras <strong data-test="likes-number">{likeNumber}</strong> pessoas
                    </div>
                </div>
            </div>
        </div>

        function like() {
            setLikeIcon(heart);
            setColorLikeIcon("like");
            setLikeNumber(likeNumber + 1);
        }

        function dislike() {
            setLikeIcon(heartOutline);
            setColorLikeIcon("dark");
            setLikeNumber(likeNumber - 1);
        }
}