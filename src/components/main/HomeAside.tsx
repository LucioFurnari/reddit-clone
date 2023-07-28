import { PhHouseLight, PhArrowCircleUpRightFill, MaterialSymbolsSportsBaseballOutline, IcRoundKeyboardArrowDown, MaterialSymbolsStadiaControllerOutline, RiMoneyDollarCircleLine, SolarStarCircleLinear } from '../ReactIcons'
import PlaceholderImage from '@/images/placeholder_image.png'
import Image from "next/image"


function HomeAside () {
  return (
    <aside className="w-[270px] bg-[#1a1a1b] min-h-[calc(100vh-52px)] flex flex-col justify-between px-4">
      <div>
        <ul className="py-4 ">
          <h3 className="pl-2 mb-2 text-xs">FEEDS</h3>
          <li>
            <a className="flex items-center hover:bg-[#232324] p-2" href="/">
              <PhHouseLight />
              <span className="ml-2">Home</span>
            </a>
          </li>
          <li>
            <a className="flex items-center hover:bg-[#232324] p-2" href="/">
              <PhArrowCircleUpRightFill />
              <span className="ml-2">Popular</span>
            </a>
          </li>
        </ul>
        <ul>
          <h3 className="pl-2 mb-2 text-xs mt-4">RECENT</h3>
          <li>
            <a className="flex items-center hover:bg-[#232324] p-2">
              <Image className="w-6 h-auto" src={PlaceholderImage} alt={"Community image"} />
              <span className="ml-2">r/feedthebeast</span>
            </a>
          </li>
          <li>
            <a className="flex items-center hover:bg-[#232324] p-2">
              <Image className="w-6 h-auto" src={PlaceholderImage} alt={"Community image"} />
              <span className="ml-2">r/feedthebeast</span>
            </a>
          </li>
        </ul>
        <ul>
          <h3 className="pl-2 mb-2 text-xs mt-4">TOPICS</h3>
          <li>
            <button className="flex items-center w-full hover:bg-[#232324] p-2">
              <MaterialSymbolsStadiaControllerOutline />
              <span className="ml-2">Gaming</span>
              <IcRoundKeyboardArrowDown />
            </button>
          </li>
          <li>
          <button className="flex items-center w-full hover:bg-[#232324] p-2">
              <MaterialSymbolsSportsBaseballOutline />
              <span className="ml-2">Sports</span>
              <IcRoundKeyboardArrowDown />
            </button>
          </li>
          <li>
            <button className="flex items-center w-full hover:bg-[#232324] p-2">
              <RiMoneyDollarCircleLine />
              <span className="ml-2">Crypto</span>
              <IcRoundKeyboardArrowDown />
            </button>
          </li>
          <li>
            <button className="flex items-center w-full hover:bg-[#232324] p-2">
                <SolarStarCircleLinear />
                <span className="ml-2">Celebrity</span>
                <IcRoundKeyboardArrowDown />
            </button>
          </li>
        </ul>
      </div>
      <AsideJoinSection />
      </aside>
  )
}

export default HomeAside

function AsideJoinSection () {
  return (
    <div>
      <p className="text-sm">
        Create a account to follow your favorite communities and start taking part in conversations.
      </p>
      <button className="bg-[#ff4500] hover:bg-[#ff5415] text-[#ffffff] w-full py-2 text-center my-6 rounded-full font-semibold">Join Reddit</button>
    </div>
  )
}