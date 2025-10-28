export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <p className="text-foreground text-center mb-8">You have nothing to do right now.</p>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-12"
      >
        <path d="M20 40L35 55L60 30" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="70" y="35" width="30" height="6" rx="3" fill="#4ade80" />
        <path d="M20 70L35 85L60 60" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="70" y="65" width="30" height="6" rx="3" fill="#4ade80" />
        <path d="M20 100L35 115L60 90" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="70" y="95" width="30" height="6" rx="3" fill="#4ade80" />
      </svg>
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
          <p className="text-xs text-foreground text-center leading-relaxed">
            You can add new task by clicking plus button
          </p>
        </div>
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
      </div>
    </div>
  )
}
