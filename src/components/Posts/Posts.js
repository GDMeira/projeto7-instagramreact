import Post from "./Post";

const posts = [{userSrc:"assets/img/meowed.svg", userName:"meowd",
                postSrc:"assets/img/gato-telefone.svg", content:"gato-telefone", 
                likeSrc:"assets/img/respondeai.svg", like:"respondeai", likeNbr:"101523"},
                {userSrc:"assets/img/barked.svg", userName:"barked",
                postSrc:"assets/img/dog.svg", content:"dog", 
                likeSrc:"assets/img/adorable_animals.svg", 
                like:"adorable_animals", likeNbr:"99159"},
                {userSrc:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg", userName:"Aphelios", 
                postSrc:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg", content:"Aphelios",
                likeSrc:"assets/img/respondeai.svg", 
                like:"respondeai", likeNbr:"10101010"}];

export default function Posts() {
    return <div className="posts">

        {posts.map(e => <Post key={e.userName}  userSrc={e.userSrc} userName={e.userName} 
              postSrc={e.postSrc} content={e.content} likeSrc={e.likeSrc} like={e.like} likeNbr={e.likeNbr} />)}
    </div>
}