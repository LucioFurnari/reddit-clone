import HomeAside from "./HomeAside"
import MainSection from "./MainSection"

function HomeOffline () {
  return (
    <main className="grid grid-cols-6 pt-12">
      <HomeAside />
      <MainSection />
    </main>  
  )
}

export default HomeOffline