import { SVGProps } from "react"
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

function MaterialSymbolsSportsBaseballOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5.6 16.8q1.125-.875 1.763-2.125T8 12q0-1.425-.638-2.675T5.6 7.2q-.775 1.05-1.187 2.275T4 12q0 1.3.413 2.525T5.6 16.8ZM12 20q1.375 0 2.663-.438T17 18.25q-1.425-1.15-2.212-2.788T14 12q0-1.825.788-3.463T17 5.75q-1.05-.875-2.337-1.313T12 4q-1.375 0-2.663.438T7 5.75Q8.425 6.9 9.212 8.538T10 12q0 1.825-.788 3.463T7 18.25q1.05.875 2.337 1.313T12 20Zm6.4-3.2q.775-1.05 1.188-2.275T20 12q0-1.3-.413-2.525T18.4 7.2q-1.125.875-1.762 2.125T16 12q0 1.425.638 2.675T18.4 16.8ZM12 12Zm0 10q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path></svg>
  )
}


function RiMoneyDollarCircleLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-3.5-6h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2Z"></path></svg>
  )
}


function SolarStarCircleLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M10.577 8.204C11.21 7.068 11.527 6.5 12 6.5c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59c.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888c.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59c-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253c-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226c-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504c-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73c-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941c.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225c.14-.107.23-.268.41-.59l.164-.295Z"></path></g></svg>
  )
}

function IcRoundKeyboardArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto ml-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"></path></svg>
  )
}

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