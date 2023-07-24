import PlaceholderUserProfile from '@/images/user_profile_image.jpg'
import Image, { StaticImageData } from 'next/image'
import { SVGProps } from 'react'


function NavOnlineFeed () {
  return (
    <div className='flex items-center justify-center'>
      <CreatePostButton />
      <UserProfileMenu name='Harrow99' img={PlaceholderUserProfile} />
    </div>
  )
}

export default NavOnlineFeed

function UserProfileMenu (props: {name:string, img:StaticImageData | string}) {
  return (
    <div className='flex justify-between hover:border-[#323334] border-[1px] rounded-md border-transparent cursor-pointer p-2'>
      <div>
        <Image className='w-8 h-auto rounded-md inline mr-2' src={props.img} alt='User profile picture' />
        <span>{props.name}</span>
      </div>
      <IcBaselineKeyboardArrowDown />
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