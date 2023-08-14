import { SVGProps } from "react"

function UserMenuOffline () {
  return (
    <div className="h-0 peer-focus:h-auto overflow-hidden absolute top-11 right-0 bg-[#1a1a1b] rounded-b-md peer-focus:border-[1px] border-b-[#343536] border-x-[#343536] border-t-transparent">
      <button className="hover:bg-[#232324] p-2">
        <IcTwotoneLogIn />
        <span className="ml-2">Log In / Sign Up</span>
      </button>
    </div>
  )
}

function NavOfflineFeed () {
  return (
    <div className="flex justify-end items-center relative md:col-start-5 md:col-end-7">
      <button className="bg-[#ff4500] hover:bg-[#ff5415] text-[#ffffff] px-10 py-1 text-center  rounded-full font-semibold hidden lg:block">Log In</button>
      <button className="flex items-center ml-5 py-1 px-2 rounded-md border-[1px] border-transparent hover:border-[#323334] peer">
          <ClarityUserLine />
          <IcBaselineKeyboardArrowDown />
      </button>
      <UserMenuOffline />
    </div>
  )
}

export default NavOfflineFeed

function IcTwotoneLogIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="fill-white inline" xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="auto" viewBox="0 0 24 24" {...props}><path d="M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2z"></path><path fill="currentColor" d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z"></path></svg>
  )
}

function ClarityUserLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="currentColor" d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37ZM29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
  )
}

function IcBaselineKeyboardArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto inline" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"></path></svg>
  )
}