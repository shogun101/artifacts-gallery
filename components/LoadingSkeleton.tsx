'use client'

/* ─────────────────────────────────────────────────────────
 * LOADING SKELETON
 *
 * Shows pulsing placeholder cards while content loads.
 * Matches card aspect ratio and grid layout.
 * ───────────────────────────────────────────────────────── */

export function LoadingSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i}
          className="relative border border-dashed border-card-border aspect-card bg-black overflow-hidden animate-pulse"
        >
          {/* Shimmer gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          
          {/* Fake label row */}
          <div className="absolute bottom-label-bottom left-card-label-px right-card-label-px flex justify-between items-center">
            <div className="h-4 w-24 bg-white/10 rounded" />
            <div className="h-4 w-20 bg-white/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
