import CommunityHeader from "@/components/community/CommunityHeader"


export default function CommunityPage ({params}: { params: { community:string} } ) {
  return (
    <>
    <CommunityHeader />
    <h1 className="pt-12">Esto es una comunidad {params.community}</h1>
    </>
  )
}