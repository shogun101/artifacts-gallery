import { Header } from './Header'
import { Footer } from './Footer'

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between p-page-pad bg-black 2xl:sticky 2xl:top-0 2xl:h-screen overflow-hidden">
      <Header />
      <Footer />
    </aside>
  )
}
