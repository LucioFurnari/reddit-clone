import PlaceholderUserProfile from '@/images/user_profile_image.jpg'
import Image, { StaticImageData } from 'next/image'
import { SVGProps } from 'react'


function NavOnlineFeed () {
  return (
    <div className='flex items-center justify-center'>
      <CreatePostButton />
      <UserProfile name='Harrow99' img={PlaceholderUserProfile} />
    </div>
  )
}

export default NavOnlineFeed

function UserProfile (props: {name:string, img:StaticImageData | string}) {
  return (
    <div className='flex justify-between relative'>
      <button className='hover:border-[#323334] border-[1px] rounded-md border-transparent p-2 peer'>
        <Image className='w-8 h-auto rounded-md inline mr-2' src={props.img} alt='User profile picture' />
        <span>{props.name}</span>
        <IcBaselineKeyboardArrowDown />
      </button>
      <UserProfileMenu />
    </div>
  )
}

function CreatePostButton () {
  return (
    <button className='hover:bg-[#232324] p-1'>
      <IcOutlineAdd />
    </button>
  )
} 

function UserProfileMenu () {
  return (
    <div className='peer-focus:h-auto h-0 overflow-hidden absolute top-12 right-0 bg-[#1a1a1b] peer-focus:border-[1px] border-[#343536] rounded-md'>
      <button className='p-2 hover:bg-[#232324]'>
        <IcTwotoneLogIn />
        Log Out
      </button>
    </div>
  )
}



function IcBaselineKeyboardArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-6 h-auto inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"></path></svg>
  )
}

function IcOutlineAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className='w-8 h-auto inline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
  )
}

function IcTwotoneLogIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="fill-white inline" xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="auto" viewBox="0 0 24 24" {...props}><path d="M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2z"></path><path fill="currentColor" d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z"></path></svg>
  )
}