import { IonMdHome, IcBaselineKeyboardArrowDown } from "../ReactIcons"

function NavCommunitySelect () {
  return (
    <div className="mr-4">
      <button className="flex w-full justify-between items-center hover:border-[#323334] border-transparent border-[1px] rounded-md p-2">
        <div>
          <IonMdHome />
          <span className="text-sm ml-2 align-middle">
            Home
          </span>
        </div>
        <IcBaselineKeyboardArrowDown />
      </button>
    </div>
  )
}

export default NavCommunitySelect