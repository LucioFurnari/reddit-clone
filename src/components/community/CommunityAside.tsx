import { LucideCakeSlice } from "../ReactIcons";


function CommunityAside () {
  return (
    <aside className="bg-[var(--bg-dark-gray)] col-start-5 col-end-6 p-4 border-[1px] border-[var(--border-gray)] rounded">
      <h2 className="text-[var(--text-gray)] mb-4">About Community</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem obcaecati beatae eligendi cupiditate inventore ipsum voluptas quo ab perspiciatis nulla vitae enim atque, quia cumque magnam. Sapiente, laudantium mollitia.</p>
      <div className="flex items-center my-4">
        <LucideCakeSlice />
        <span className="ml-2 text-[var(--text-gray)]"> Created Aug 26, 2008</span>
      </div>
      <ul className="flex items-center py-4 border-y-[1px] border-[var(--border-gray)]">
        <li className="mr-4">
          <p>75.4k</p>
          <span>User</span>
        </li>
        <li className="mr-4">
          <p>6</p>
          <span>Users online</span>
        </li>
      </ul>
      <button className="mt-2 py-1 bg-[var(--button-bg-white)] hover:bg-[var(--button-hover-gray)] text-black w-full text-center font-semibold rounded-full">Create Post</button>
    </aside>
  )
}

export default CommunityAside;