
function AsideHomeOnline () {
  return (
    <aside className="hidden md:block rounded-md border-[1px] border-[#343536] bg-[#1a1a1b] h-max">
      <div className={`aside_bg w-full h-12 bg-no-repeat bg-contain `}></div>
      <div className="px-2 pb-2">
        <h3 className="mb-2">Home</h3>
        <p className="pb-2 mb-4 border-b-[1px] border-[#343536] text-sm">Your personal Reddit frontpage. Come here to check in with your favorite communities</p>
        <button className="block bg-white hover:bg-[#d7dadc] text-black font-semibold w-full rounded-full py-2 mt-2">Create Post</button>
        <button className="block text-white hover:bg-[#212122] font-semibold w-full border-[1px] rounded-full py-2 mt-2">Create Community</button>
      </div>
    </aside>
  )
}

export default AsideHomeOnline;