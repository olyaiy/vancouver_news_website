import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import { ArticleCardSkeleton } from "@/components/skelleton/article-card-skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="container py-8 px-4">
          <div className="grid gap-8 lg:grid-cols-3 flex-col">
            <div className="lg:col-span-2 gap-4">
              <Card className="overflow-hidden border-0 shadow-lg self-start aspect-video relative">
                <Skeleton className="w-full h-full bg-gray-200" />
              </Card>
              <div className="flex flex-row w-full h-full gap-4 mt-4">
                <ArticleCardSkeleton  />
                <ArticleCardSkeleton />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="w-full h-8 bg-gray-200" />
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-full h-24 bg-gray-200" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}