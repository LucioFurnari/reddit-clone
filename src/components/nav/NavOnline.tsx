import NavCommunitySelect from "./NavCommunitySelect"
import NavOnlineFeed from "./NavOnlineFeed"
import NavFilter from "./NavFilter";

function NavOnline () {
  return (
    <nav className="bg-[#1a1a1b] border-b-[1px] border-[#343536] px-4 grid grid-cols-4 grid-rows-2 md:grid-rows-1 fixed  w-full h-max">
      <NavCommunitySelect />
      <NavFilter />
      <NavOnlineFeed />
    </nav> 
  )
}

export default NavOnline;