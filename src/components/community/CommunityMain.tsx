import CommunityAside from "./CommunityAside"
import PostContainer from "../post/PostContainer";

function CommunityMain () {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_200px_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_300px_1fr] pt-4">
      <div className="grid md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-5 xl:col-start-2 xl:col-end-5 grid-cols-1">
        <PostContainer />
      </div>
      <CommunityAside />
    </main>
  )
}

export default CommunityMain;