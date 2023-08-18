import PostContainer from "../post/PostContainer"
import AsideHomeOnline from "./AsideHomeOnline"

function HomeOnline () {
  return (
    <main className="grid grid-cols-1  md:grid-cols-[1fr_1fr_1fr_200px_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr_300px_1fr] pt-32 lg:pt-20 gap-x-4">
      <div className=" col-start-1  md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-4 xl:col-start-2 xl:col-end-5">
        <PostContainer />
      </div>
      <AsideHomeOnline />
    </main>  
  )
}

export default HomeOnline
