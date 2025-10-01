import { Skeleton } from './ui/skeleton';
import { Card, CardContent, CardHeader } from './ui/card';

export function UserProfileSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="text-center pb-4 sm:pb-6">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 rounded-full" />
            <div className="space-y-1 sm:space-y-2">
              <Skeleton className="h-6 sm:h-8 w-32 sm:w-48" />
              <Skeleton className="h-4 w-24 sm:w-32" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <div className="space-y-2 px-2 sm:px-0">
            <Skeleton className="h-4 w-full max-w-md mx-auto" />
            <Skeleton className="h-4 w-3/4 max-w-sm mx-auto" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16 sm:w-20" />
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                <Skeleton className="h-5 sm:h-6 w-8 sm:w-16 mx-auto" />
                <Skeleton className="h-3 sm:h-4 w-12 sm:w-20 mx-auto" />
              </div>
            ))}
          </div>

          <Skeleton className="h-9 sm:h-10 w-full sm:w-40 mx-auto" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-4 sm:pb-6">
          <Skeleton className="h-5 sm:h-6 w-32 sm:w-40" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-3 sm:p-4 border rounded-lg">
                <div className="space-y-2 sm:space-y-3">
                  {/* Header */}
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <Skeleton className="h-4 sm:h-5 w-32 sm:w-48" />
                    </div>
                    <Skeleton className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-1">
                    <Skeleton className="h-3 sm:h-4 w-full" />
                    <Skeleton className="h-3 sm:h-4 w-3/4" />
                  </div>
                  
                  {/* Metadata */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Skeleton className="h-3 sm:h-4 w-16 sm:w-20" />
                      <Skeleton className="h-4 sm:h-5 w-8 sm:w-12" />
                    </div>
                    <Skeleton className="h-3 sm:h-4 w-20 sm:w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}