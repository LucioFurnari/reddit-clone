import Image from "next/image";
import CommunityImagePlaceholder from '@/images/placeholder_image.png'

function PostPageTemplate (props: {community: string, communityImage: string,  postTitle: string, postedBy: string, totalComments: number, date: number, content: string, comments: object}) {
  return (
    <article className="bg-[var(--bg-dark-gray)] col-start-3 col-end-6 p-4">
      <div></div>
      <Image className="w-6 h-auto inline" src={props.communityImage || CommunityImagePlaceholder} alt={props.community || "Community image"} />
      <span>r/{props.community}</span>
      <span>Posted by u/{props.postedBy} {props.date} days ago</span>
      <h2>{props.postTitle}</h2>
      <p>{props.content}</p>
      <p>{props.totalComments} Comments</p>
      <fieldset>
        <p>Comment as User</p>
        <form>
          <textarea></textarea>
          <button>Comment</button>
        </form>
      </fieldset>
    </article>
  )
}

export default PostPageTemplate;