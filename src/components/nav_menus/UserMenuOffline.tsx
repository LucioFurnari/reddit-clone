import { SVGProps } from "react"

function UserMenuOffline () {
  return (
    <div className="h-0 peer-focus:h-auto overflow-hidden absolute top-11 right-0 bg-[#1a1a1b] rounded-b-md peer-focus:border-[1px] border-b-[#343536] border-x-[#343536] border-t-transparent">
      <button className="hover hover:bg-[#232324] p-2">
        <IcTwotoneLogIn />
        <span className="ml-2">Log In / Sign Up</span>
      </button>
    </div>
  )
}

export default UserMenuOffline

function IcTwotoneLogIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="fill-white inline" xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="auto" viewBox="0 0 24 24" {...props}><path d="M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2z"></path><path fill="currentColor" d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z"></path></svg>
  )
}