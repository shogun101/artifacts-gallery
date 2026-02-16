import { Header } from './Header'
import { Footer } from './Footer'

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-full xl:w-[565px] h-screen flex flex-col justify-between p-page-pad bg-black z-30">
      <Header />
      <Footer />
    </aside>
  )
}
