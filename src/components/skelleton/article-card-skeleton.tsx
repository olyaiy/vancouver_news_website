import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ArticleCardSkeleton() {
  return (
    <Card className="overflow-hidden border-0 shadow-lg self-start aspect-[4/3] relative w-full bg-gray-400">
      <div className="relative w-full h-full min-h-[200px] bg-gray-400">
        <Skeleton className="absolute inset-0" bg-gray-400/>
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gray-400">
          <Skeleton className="h-4 w-20 mb-2" bg-gray-400/>
          <Skeleton className="h-6 w-3/4 mb-2" bg-gray-400/>
          <Skeleton className="h-4 w-full mb-4" bg-gray-400/>
          <Skeleton className="h-8 w-24" bg-gray-400/>
        </div>
      </div>
    </Card>
  )
}