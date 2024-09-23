import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Newspaper, Search, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
          <Link className="flex items-center space-x-2" href="/">
            <Newspaper className="h-8 w-8" />
            <span className="font-bold text-2xl">PULSE</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/world" className="text-red-600 hover:text-red-800">World</Link>
          <Link href="/tech" className="hover:text-red-600">Tech</Link>
          <Link href="/culture" className="hover:text-red-600">Culture</Link>
          <Link href="/politics" className="hover:text-red-600">Politics</Link>
          <Link href="/science" className="hover:text-red-600">Science</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] bg-gray-100 focus:bg-white"
              />
            </div>
          </form>
          <Button className="bg-red-600 text-white hover:bg-red-700">Subscribe</Button>
        </div>
      </div>
    </header>
  )
}