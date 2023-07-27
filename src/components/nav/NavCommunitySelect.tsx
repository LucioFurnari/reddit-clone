import Image, { StaticImageData } from "next/image"
import { IonMdHome, IcBaselineKeyboardArrowDown, IcOutlineAdd } from "../ReactIcons"
import CommunityImagePlaceholder from "@/images/placeholder_image.png"
import { useState } from "react"

function NavCommunitySelect () {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = () => setMenuActive(!menuActive);

  return (
    <div className="mr-4 relative">
      <button onClick={handleMenu} className="flex w-full justify-between items-center hover:border-[#323334] border-transparent border-[1px] rounded-md p-2">
        <div>
          <IonMdHome />
          <span className="text-sm ml-2 align-middle">
            Home
          </span>
        </div>
        <IcBaselineKeyboardArrowDown />
      </button>
      <CommunitiesList isFocus={menuActive} />
    </div>
  )
}

export default NavCommunitySelect

function CommunityFilter () {
  return (
    <input className="border-[1px] border-[#323334] bg-[#272729] hover:bg-[#1d1d1f] hover:border-white my-1 mx-4 mt-2 p-1 focus:outline-none focus:border-white focus:bg-[#1d1d1f]" placeholder="Filter"></input>
  )
}

function CommunitiesList (props: {isFocus: boolean}) {
  return (
    <div className={`${props.isFocus && 'h-auto border-[#595b5e]'} flex flex-col w-full bg-[#1a1a1b] border-[1px] rounded-b-md border-transparent h-0 overflow-hidden absolute left-0`}>
      <CommunityFilter />
      <span className="my-4 pl-4 text-[#818384]">Your communities</span>
      <CreateCommunityButton />
      <ul>
        <CommunityLink img_src={CommunityImagePlaceholder} community_name="feedthebeast"/>
      </ul>
    </div>
  )
}

function CreateCommunityButton () {
  return (
    <button className="text-start text-sm py-2 px-4 hover:bg-[#232324]">
      <IcOutlineAdd />
      <span className="ml-2">Create Community</span>
    </button>
  )
}

function CommunityLink (props: { community_name: string, img_src: StaticImageData | string}) { // WIP
  return (
    <li>
      <a className="py-2 px-4 hover:bg-[#232324] block">
        <Image className="w-6 h-auto rounded-full inline mr-2" src={props.img_src} alt={"Community image"}></Image>
        {props.community_name}
      </a>
    </li>
  )
}