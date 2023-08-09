import CommunityPostFilter from "./CommunityPostFilter"
import PostCard from "../main/PostCard";

function CommunityPostsContainer () {
  return (
    <section className="flex flex-col gap-4 col-start-3 col-end-5">
      <CommunityPostFilter />
      <PostCard votes={0} community={""} user={""} time_passed={0} title={""} content={""} />
      <PostCard votes={0} community={""} user={""} time_passed={0} title={""} content={""} />
      <PostCard votes={0} community={""} user={""} time_passed={0} title={""} content={""} />
    </section>
  )
}

export default CommunityPostsContainer;