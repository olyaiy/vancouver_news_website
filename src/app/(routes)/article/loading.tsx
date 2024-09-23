import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ArticleLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="lg:w-2/3">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <div className="flex items-center space-x-4 mb-6">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
          <Skeleton className="h-6 w-24 mb-6" />
          <Skeleton className="w-full h-[50vh] mb-6 rounded-lg" />
          <div className="space-y-4 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <Skeleton className="h-4 w-48" />
            <div className="flex space-x-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        </article>
        <aside className="lg:w-1/3">
          <div className="sticky top-20">
            <Card>
              <CardContent className="p-4">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Skeleton className="h-16 w-16 rounded" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  )
}