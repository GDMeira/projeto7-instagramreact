import Stories from "../Stories/Stories";
import SideBar from "../SideBar/SideBar";
import Posts from "../Posts/Posts";

export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      
      <SideBar />
    </div>
  )
}