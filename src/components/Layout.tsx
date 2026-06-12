import { ReactNode } from "react";
import { Link, useRoute } from "wouter";
import { Home, Map } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  const [isHome] = useRoute("/");
  const [isPaths] = useRoute("/learning-paths");

  return (
    <div className="flex h-screen bg-gray-50">
      <nav className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">CyberPath</h1>
        </div>
        
        <div className="flex-1 px-4 space-y-2">
          <Link href="/">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${isHome ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Home className="w-5 h-5" />
              Dashboard
            </div>
          </Link>
          
          <Link href="/learning-paths">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${isPaths ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Map className="w-5 h-5" />
              Learning Paths
            </div>
          </Link>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}