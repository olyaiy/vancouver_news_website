import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Search, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Newspaper className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">404 - Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link href="/" className="w-full">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Home className="mr-2 h-4 w-4" /> Return to homepage
            </Button>
          </Link>
          <Link href="/search" className="w-full">
            <Button variant="outline" className="w-full">
              <Search className="mr-2 h-4 w-4" /> Search for content
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}