import { SVGProps } from "react"
import PlaceholderImage from '@/images/placeholder_image.png'
import Image from "next/image"


function HomeAside () {
  return (
    <aside className=" w-[270px] bg-[#1a1a1b]">
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
          <h3 className="pl-2 mb-2 text-xs">RECENT</h3>
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
          <h3 className="pl-2 mb-2 text-xs">TOPICS</h3>
          <li>
            <button className="flex items-center hover:bg-[#232324] p-2">
              <MaterialSymbolsStadiaControllerOutline />
              <span>Gaming</span>
            </button>
          </li>
          <li>
          <button>
              <span>Sports</span>
            </button>
          </li>
          <li>
            <button>
              <span>Crypto</span>
            </button>
          </li>
          <li>
            <button>
              <span>Celebrity</span>
            </button>
          </li>
        </ul>
      </aside>
  )
}

export default HomeAside

function PhHouseLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="m217.47 105.24l-80-75.5l-.09-.08a13.94 13.94 0 0 0-18.83 0l-.09.08l-80 75.5A14 14 0 0 0 34 115.55V208a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-92.45a14 14 0 0 0-4.53-10.31ZM210 208a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-48a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v48a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-92.45a2 2 0 0 1 .65-1.48l.09-.08l79.94-75.48a2 2 0 0 1 2.63 0L209.26 114l.08.08a2 2 0 0 1 .66 1.48Z"></path></svg>
  )
}

function PhArrowCircleUpRightFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm40 120a8 8 0 0 1-16 0v-28.69l-50.34 50.35a8 8 0 0 1-11.32-11.32L140.69 104H112a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z"></path></svg>
  )
}

function MaterialSymbolsStadiaControllerOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4.725 20q-1.5 0-2.562-1.075t-1.113-2.6q0-.225.025-.45t.075-.45l2.1-8.4q.35-1.35 1.425-2.188T7.125 4h9.75q1.375 0 2.45.838t1.425 2.187l2.1 8.4q.05.225.088.463t.037.462q0 1.525-1.088 2.588T19.276 20q-1.05 0-1.95-.55t-1.35-1.5l-.7-1.45q-.125-.25-.375-.375T14.375 16h-4.75q-.275 0-.525.125t-.375.375l-.7 1.45q-.45.95-1.35 1.5t-1.95.55Zm.075-2q.475 0 .863-.25t.587-.675l.7-1.425q.375-.775 1.1-1.213T9.625 14h4.75q.85 0 1.575.45t1.125 1.2l.7 1.425q.2.425.588.675t.862.25q.7 0 1.2-.463t.525-1.162q0 .025-.05-.475l-2.1-8.375q-.175-.675-.7-1.1T16.875 6h-9.75q-.7 0-1.238.425t-.687 1.1L3.1 15.9q-.05.15-.05.45q0 .7.513 1.175T4.8 18Zm8.7-7q.425 0 .713-.288T14.5 10q0-.425-.288-.713T13.5 9q-.425 0-.713.288T12.5 10q0 .425.288.713T13.5 11Zm2-2q.425 0 .713-.288T16.5 8q0-.425-.288-.713T15.5 7q-.425 0-.713.288T14.5 8q0 .425.288.713T15.5 9Zm0 4q.425 0 .713-.288T16.5 12q0-.425-.288-.713T15.5 11q-.425 0-.713.288T14.5 12q0 .425.288.713T15.5 13Zm2-2q.425 0 .713-.288T18.5 10q0-.425-.288-.713T17.5 9q-.425 0-.713.288T16.5 10q0 .425.288.713T17.5 11Zm-9 1.5q.325 0 .537-.213t.213-.537v-1h1q.325 0 .537-.213T11 10q0-.325-.213-.537t-.537-.213h-1v-1q0-.325-.213-.537T8.5 7.5q-.325 0-.537.213t-.213.537v1h-1q-.325 0-.537.213T6 10q0 .325.213.537t.537.213h1v1q0 .325.213.537t.537.213ZM12 12Z"></path></svg>
  )
}