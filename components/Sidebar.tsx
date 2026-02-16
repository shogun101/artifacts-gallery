import { Header } from './Header'
import { Footer } from './Footer'

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between p-page-pad bg-black xl:sticky xl:top-0 xl:h-screen overflow-hidden">
      <Header />
      <Footer />
    </aside>
  )
}
