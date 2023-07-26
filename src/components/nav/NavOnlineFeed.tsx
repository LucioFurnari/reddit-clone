import PlaceholderUserProfile from '@/images/user_profile_image.jpg'
import Image, { StaticImageData } from 'next/image'
import { IcBaselineKeyboardArrowDown, IcOutlineAdd, IcTwotoneLogIn } from '../ReactIcons'


function NavOnlineFeed () {
  return (
    <div className='flex items-center justify-center col-start-6'>
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
    <button className='hover:bg-[#232324] p-1 mr-2'>
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

function UserProfileMenu () {
  return (
    <div className='flex flex-col min-w-[12rem] peer-focus:h-auto h-0 overflow-hidden absolute top-12 right-0 bg-[#1a1a1b] peer-focus:border-[1px] border-[#343536] rounded-md'>
      <button className='p-2 hover:bg-[#232324] text-sm text-start'>
        <IcTwotoneLogIn />
        <span className='ml-2'>Log Out</span>
      </button>
      <CreateCommunityButton />
    </div>
  )
}