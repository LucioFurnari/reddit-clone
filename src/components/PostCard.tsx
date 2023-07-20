import { StaticImageData } from "next/image"
import { SVGProps } from "react"
import Image  from "next/image"

function PostCard (props: { votes: number, community: string, user: string, time_passed: number, title: string, content: string | StaticImageData }) {
  return (
    <section className="flex bg-[#1a1a1b] rounded-md border-[1px] border-[#343536] hover:border-gray-400 ">
      <div className="px-2 pt-2 bg-[#151516] rounded-l-md">
        <button className="p-1 block hover:bg-[#272729] group">
          <MdiArrowUpBoldOutline />
        </button>
        <span className=" block text-center text-sm">{props.votes}</span>
        <button className="p-1 block hover:bg-[#272729] group">
          <MdiArrowDownBoldOutline />
        </button>
      </div>
      <div className="flex flex-col pt-2 rounded-r-md">
        <div className="px-2">
          <span className="text-sm mr-2">{`r/${props.community}`}</span>
          <span className="text-xs text-[#77797a]">•</span>
          <span className="text-xs text-[#77797a] ml-2">Posted by {`u/${props.user} ${props.time_passed} hours ago`}</span>
        </div>
        <h2 className="px-2 mb-4">{props.title}</h2>
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

function MdiArrowUpBoldOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="group-hover:fill-[#d93a00] fill-[#6d6e6f]"  xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="auto" viewBox="0 0 24 24" {...props}><path d="M16 13v8H8v-8H2L12 3l10 10h-6m-9-2h3v8h4v-8h3l-5-5l-5 5Z"></path></svg>
  )
}

function MdiArrowDownBoldOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="group-hover:fill-[#6a5cff] fill-[#6d6e6f]" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="auto" viewBox="0 0 24 24" {...props}><path d="M22 11L12 21L2 11h6V3h8v8h6m-10 7l5-5h-3V5h-4v8H7l5 5Z"></path></svg>
  )
}

function MdiCommentOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="inline mr-2 fill-[#6d6e6f]" xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="auto" viewBox="0 0 24 24" {...props}><path d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6Z"></path></svg>
  )
}