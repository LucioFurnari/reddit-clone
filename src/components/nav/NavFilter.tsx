import { PhMagnifyingGlassLight } from "../ReactIcons"

function NavFilter () {
  return (
    <fieldset className="flex items-center bg-[#272729] rounded-full border-[#323334] border-[1px] px-4 my-1 col-start-3 col-end-5 hover:bg-[#1c1c1d] hover:border-white">
      <PhMagnifyingGlassLight />
      <input className=" bg-inherit text-sm  w-full ml-1 outline-none " placeholder="Search Reddit"></input>
    </fieldset>
  )
}

export default NavFilter
