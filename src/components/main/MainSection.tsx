import PostCard from "./PostCard"
import PlaceHolderImage from "@/images/placeholder_post_image.jpg"

function MainSection () {
  return (
    <main className="flex flex-col  items-center max-h-[calc(100vh-52px)] w-full overflow-y-scroll gap-4 pt-6">
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
    </main>
  )
}

export default MainSection