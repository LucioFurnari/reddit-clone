import PlaceholderUserProfile from '@/images/user_profile_image.jpg'
import Image, { StaticImageData } from 'next/image'
import { IcBaselineKeyboardArrowDown, IcOutlineAdd, IcTwotoneLogIn } from '../ReactIcons'
import { useState } from 'react'


function NavOnlineFeed () {
  return (
    <div className='flex items-center justify-center col-start-3 col-end-5 xl:col-start-6'>
      <CreatePostButton />
      <UserProfile name='Harrow99' img={PlaceholderUserProfile} />
    </div>
  )
}

export default NavOnlineFeed

function UserProfile (props: {name:string, img:StaticImageData | string}) {
  const [activeMenu, setActiveMenu] = useState(false)

  const openMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className='flex flex-col justify-between'>
      <button onClick={openMenu} className='hover:border-[#323334] border-[1px] rounded-md border-transparent p-2'>
        <Image className='w-7 md:w-8 h-auto rounded-md inline md:mr-2' src={props.img} alt='User profile picture' />
        <span className='hidden md:inline'>{props.name}</span>
        <IcBaselineKeyboardArrowDown />
      </button>
      <div className=' relative '>
        <UserProfileMenu isActive={activeMenu} />
      </div>
    </div>
  )
}

function CreatePostButton () {
  return (
    <button className='hover:bg-[#232324] p-1 md:mr-2 block md:hid'>
      <IcOutlineAdd />
    </button>
  )
} 

function CreateCommunityButton () {
  return (
    <button className='hover:bg-[#232324] p-2 text-sm  text-start'>
      <IcOutlineAdd />
      <span className='ml-2'>Create Community</span>
    </button>
  )
}

function UserProfileMenu (props: {isActive: boolean}) {
  return (
    <div className={`flex flex-col min-w-[12rem] ${props.isActive ? 'h-auto border-[1px]' : 'h-0'}  overflow-hidden absolute top-1 right-0 bg-[#1a1a1b] border-[#343536] rounded-md`}>
      <button className='p-2 hover:bg-[#232324] text-sm text-start'>
        <IcTwotoneLogIn />
        <span className='ml-2'>Log Out</span>
      </button>
      <CreateCommunityButton />
    </div>
  )
}