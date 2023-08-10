import PostPageTemplate from "@/components/post/PostPageTemplate"

export default function PostPage ( {params}: { params: { post:string} } ) {

  return (
    <section className="pt-20 grid grid-cols-7">
      <PostPageTemplate community={"Testing"} postTitle={"Esto es un post"} postedBy={"UserTest75"} totalComments={100} date={9} content={"pim pam pum"} communityImage={""} comments={{}} ></PostPageTemplate>
    </section>
  )
}