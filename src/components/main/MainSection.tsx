import PostCard from "./PostCard"
import PlaceHolderImage from "@/images/placeholder_post_image.jpg"

function MainSection () {
  return (
    <div className="grid grid-cols-1 col-start-3 col-end-5 gap-4 pt-6">
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
    </div>
  )
}

export default MainSection