import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-8 px-4 ">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-4">About PULSE</h3>
            <p className="text-sm text-gray-600">
              PULSE is your source for hard-hitting journalism and cutting-edge stories that matter.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/world" className="hover:text-red-600">World</Link></li>
              <li><Link href="/tech" className="hover:text-red-600">Tech</Link></li>
              <li><Link href="/culture" className="hover:text-red-600">Culture</Link></li>
              <li><Link href="/politics" className="hover:text-red-600">Politics</Link></li>
              <li><Link href="/science" className="hover:text-red-600">Science</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-600">Facebook</Link></li>
              <li><Link href="#" className="hover:text-red-600">Twitter</Link></li>
              <li><Link href="#" className="hover:text-red-600">Instagram</Link></li>
              <li><Link href="#" className="hover:text-red-600">YouTube</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-2">Get the latest news delivered to your inbox.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none bg-red-600 hover:bg-red-700">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500 w-full">
          <div className="flex justify-center gap-2">
            <p>© {new Date().getFullYear()} PULSE News. All rights reserved.</p>
            <p><Link href="/privacy-policy" className="text-gray-500 underline">Privacy Policy</Link></p>
            <p><Link href="/terms-of-service" className="text-gray-500 underline">Terms of Service</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}