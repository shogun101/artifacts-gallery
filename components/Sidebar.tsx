import { Header } from './Header'
import { Footer } from './Footer'

export function Sidebar() {
  return (
    <aside className="relative xl:fixed xl:top-0 xl:left-0 w-full xl:w-[565px] xl:h-screen flex flex-col gap-8 xl:gap-0 xl:justify-between p-page-pad bg-black z-30">
      <Header />
      <Footer />
    </aside>
  )
}
