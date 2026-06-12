import { Link } from "wouter";
import { useProgress } from "@/hooks/useProgress";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Home() {
  const { getLastViewed, getTotalProgress } = useProgress();
  const lastViewed = getLastViewed();
  const progress = getTotalProgress();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Welcome to CyberPath</h1>
      <p className="text-xl text-muted-foreground mb-10">Your self-paced cybersecurity journey.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Course Completion</span>
            <span className="font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {lastViewed ? (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                <BookOpen className="w-5 h-5" /> Continue Learning
              </div>
              <h3 className="text-lg font-semibold">{lastViewed.title}</h3>
            </div>
            <Link href="/learning-paths" className="mt-4 flex items-center text-sm font-medium text-blue-700 hover:underline">
              Resume Module <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ) : (
           <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
              <h3 className="font-medium mb-2">Ready to start?</h3>
              <p className="text-sm text-muted-foreground mb-4">Pick a path and begin learning.</p>
              <Link href="/learning-paths" className="px-4 py-2 bg-primary text-white rounded-lg text-sm">View Paths</Link>
           </div>
        )}
      </div>
    </div>
  );
}