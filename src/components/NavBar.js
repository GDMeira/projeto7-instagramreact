import React from "react";
import { IonIcon } from "@ionic/react"
import { logoInstagram } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { compassOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';

export default function NavBar() {
    return (<div class="navbar">
        <div class="container">
            <div class="logo">
                <IonIcon icon={logoInstagram} />
                <div class="separador"></div>
                <img src="assets/img/logo.png" alt="logo" />
            </div>

            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div class="icones">
                <IonIcon icon={paperPlaneOutline}></IonIcon>
                <IonIcon icon={compassOutline}></IonIcon>
                <IonIcon icon={heartOutline}></IonIcon>
                <IonIcon icon={personOutline}></IonIcon>
            </div>

            <div class="icones-mobile">
                <IonIcon icon={paperPlaneOutline}></IonIcon>
            </div>
        </div>
    </div>)
}