import PostCard from "./PostCard";
import PlaceHolderImage from "@/images/placeholder_post_image.jpg"

function PostContainer (props: {}) {
  return (
    <section className="grid grid-cols-1  md:col-start-1 lg:col-start-2 md:col-end-4 gap-4 ">
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
      <PostCard votes={27} community="Cakes" user="CakeUser" time_passed={2} title="Look this cake!" content={PlaceHolderImage}/>
    </section>
  )
}

export default PostContainer;