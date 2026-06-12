import { Link } from "wouter";
import { learningPaths } from "@/data/roadmapData";
import { useProgress } from "@/hooks/useProgress";
import { Shield, Eye, Cloud, Sword, ArrowRight, Clock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-8 h-8" />,
  Eye: <Eye className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Sword: <Sword className="w-8 h-8" />,
};

export default function LearningPathsPage() {
  const { completedTopics } = useProgress();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-xl text-gray-500 mt-3">Structured journeys for self-paced learners.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningPaths.map((path) => {
          const completed = path.steps.filter(s => s.type === 'topic' && completedTopics.includes(s.id)).length;
          const total = path.steps.filter(s => s.type === 'topic').length;
          const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <Link key={path.id} href={`/learning-path/${path.id}`}>
              <div className="group bg-white border hover:border-blue-500 rounded-3xl p-8 transition-all hover:shadow-xl h-full flex flex-col cursor-pointer">
                <div className="flex justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-blue-600">
                    {iconMap[path.icon] || <Shield className="w-8 h-8" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${path.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 
                      path.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    {path.difficulty}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">{path.title}</h3>
                <p className="text-gray-500 mt-3 flex-1">{path.description}</p>

                <div className="mt-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500 flex items-center gap-1"><Clock className="w-4 h-4" /> {path.estimatedHours} hours</span>
                    <span className="font-medium text-blue-600">{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end text-sm font-medium text-blue-600">
                  Start Journey <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}