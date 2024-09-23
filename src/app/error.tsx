'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, RefreshCcw, Home } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100 px-4 py-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Newspaper className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Oops! Something went wrong</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              We apologize for the inconvenience. Our team has been notified and is working on resolving the issue.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Error: {error.message || "An unexpected error occurred"}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button 
              onClick={reset}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <RefreshCcw className="mr-2 h-4 w-4" /> Try again
            </Button>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">
                <Home className="mr-2 h-4 w-4" /> Return to homepage
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}