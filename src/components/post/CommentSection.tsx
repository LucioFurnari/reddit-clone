
function CommentSection () {
  return (
    <article className="col-start-3 col-end-6 bg-[var(--bg-dark-gray)] mt-4">
      <fieldset className="p-4">
        <p className="mb-2">Comment as User</p>
        <form className="flex flex-col">
          <textarea className="pl-4 pt-2 max-h-40 h-40 bg-transparent border-[1px] border-[var(--border-gray)] focus:border-white focus:outline-none rounded" placeholder="What are your thoughts?"></textarea>
          <button className="ml-auto bg-[var(--button-bg-white)] hover:bg-[var(--button-hover-gray)] text-black px-4 mt-4 rounded-full">Comment</button>
        </form>
      </fieldset>
    </article>
  )
}

export default CommentSection;