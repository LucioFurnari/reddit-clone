import HomeAside from "./AsideHomeOffline"
import PostContainer from "../post/PostContainer"

function HomeOffline () {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 pt-32 lg:pt-20">
      <HomeAside />
      <div className=" md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-4 xl:col-start-3 xl:col-end-5">
        <PostContainer />
      </div>
    </main>  
  )
}

export default HomeOffline