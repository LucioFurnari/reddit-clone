import HomeAside from "./HomeAside"
import MainSection from "./MainSection"

function HomeOffline () {
  return (
    <main className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-4 xl:grid-cols-6 pt-12">
      <HomeAside />
      <MainSection />
    </main>  
  )
}

export default HomeOffline