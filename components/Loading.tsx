export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-4 text-green-400 font-mono animate-pulse">Loading Matrix...</p>
      </div>
    </div>
  );
}