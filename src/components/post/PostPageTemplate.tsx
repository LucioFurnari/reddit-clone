import Image from "next/image";
import CommunityImagePlaceholder from '@/images/placeholder_image.png'
import { IonChatboxOutline } from "../ReactIcons";
import VotesCount from "./VotesCount";

function PostPageTemplate (props: {community: string, communityImage: string,  postTitle: string, postedBy: string, totalComments: number, date: number, content: string, comments: object}) {
  return (
    <article className="bg-[var(--bg-dark-gray)] col-start-3 col-end-6 flex ">
      <VotesCount votes={0} />
      <div className="py-2 px-2">
        <Image className="w-6 h-auto inline" src={props.communityImage || CommunityImagePlaceholder} alt={props.community || "Community image"} />
        <span className="ml-2">r/{props.community}</span>
        <span className="ml-2 text-xs text-[#77797a]">•</span>
        <span className="ml-2 text-xs text-[var(--text-gray)]">Posted by u/{props.postedBy} {props.date} days ago</span>
        <h2 className="text-xl mt-4">{props.postTitle}</h2>
        <p>{props.content}</p>
        <p className="mt-4"><IonChatboxOutline/> {props.totalComments} Comments</p>
      </div>
    </article>
  )
}

export default PostPageTemplate;