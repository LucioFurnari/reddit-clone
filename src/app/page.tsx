import HomeAside from "@/components/HomeAside"
import MainSection from "@/components/MainSection"

export default function Home() {
  return (
    <div className=" flex">
      {true && <HomeAside />}
      <MainSection />
    </div>  
  )
}
