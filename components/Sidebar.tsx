import { Header } from './Header'
import { Footer } from './Footer'

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between p-page-pad overflow-hidden bg-black">
      <Header />
      <Footer />
    </aside>
  )
}
