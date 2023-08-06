import BannerImage from '@/images/girl-phone.jpg'
import Image from 'next/image';
import CommunityImage from '@/images/placeholder_image.png'

function CommunityHeader () {
  return (
    <header>
      <div className={`w-full h-[180px] py-2  bg-no-repeat bg-contain bg-center bg-origin-content`} style={{ backgroundImage: `url(${BannerImage.src})` }}></div> 
      <article className='bg-[var(--bg-dark-gray)]'>
        <div className='mx-auto w-1/2 flex items-center h-20'>
          <Image className='mb-8 w-20 h-auto mr-6 border-4 border-white rounded-full inline-block bg-gray-600' src={CommunityImage} alt={''} />
          <div className='inline-block'>
            <h1 className='text-3xl font-semibold'>Community name</h1>
            <span className='text-[var(--text-gray)]'>r/Community</span>
          </div>
          <button className='ml-6 px-6 py-1 rounded-full bg-[var(--button-bg-white)] hover:bg-[var(--button-hover-gray)] text-[var(--text-black)]'>Join</button>
        </div>
      </article>
    </header>
  )
}

export default CommunityHeader;