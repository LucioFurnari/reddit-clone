import HomeAside from "./HomeAside"
import PostContainer from "../post/PostContainer"

function HomeOffline () {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 pt-32 lg:pt-20">
      <HomeAside />
      <PostContainer />
    </main>  
  )
}

export default HomeOffline