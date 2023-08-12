import { StaticImageData } from "next/image"
import Image  from "next/image"
import { MdiCommentOutline } from "../ReactIcons"
import VotesCount from "./VotesCount"

function PostCard (props: { votes: number, community: string, user: string, time_passed: number, title: string, content: string | StaticImageData }) {
  return (
    <section className="flex bg-[#1a1a1b] rounded-md border-[1px] border-[#343536] hover:border-gray-400 ">
      <VotesCount votes={0} />
      <div className="flex flex-col pt-2 rounded-r-md">
        <div className="px-2">
          <span className="text-sm mr-2">{`r/${props.community}`}</span>
          <span className="text-xs text-[#77797a]">•</span>
          <span className="text-xs text-[#77797a] ml-2">Posted by {`u/${props.user} ${props.time_passed} hours ago`}</span>
        </div>
        <h2 className="px-2 mb-4 text-xl">{props.title}</h2>
        <Image src={props.content} alt={"Placeholder image"}/>
        <div className="px-2">
          <button className="p-2 text-xs text-[#6d6e6f] hover:bg-[#272729]">
            <MdiCommentOutline />
            100 Comments
          </button>
        </div>
      </div>
    </section>
  )
}

export default PostCard
