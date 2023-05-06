import Post from "./Post";

export default function Posts() {
    return <div className="posts">
        
        <Post userSrc="assets/img/meowed.svg" userName="meowd" 
              postSrc="assets/img/gato-telefone.svg" content="gato-telefone" 
              likeSrc="assets/img/respondeai.svg" like="respondeai" likeNbr="101.523"/>
        <Post userSrc="assets/img/barked.svg" userName="barked" 
                postSrc="assets/img/dog.svg" content="dog" 
                likeSrc="assets/img/adorable_animals.svg" 
                like="adorable_animals" likeNbr="99.159"/>

        <Post userSrc="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg" userName="barked" 
                postSrc="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg" content="dog" 
                likeSrc="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg" 
                like="adorable_animals" likeNbr="99.159"/>
    </div>
}