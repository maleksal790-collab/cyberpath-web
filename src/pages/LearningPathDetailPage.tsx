import { useParams, Link } from "wouter";
import { learningPaths } from "@/data/roadmapData";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, Clock } from "lucide-react";

export default function LearningPathDetailPage() {
  const [params] = useParams();
  const pathId = params?.pathId;
  const { completedTopics, toggleComplete } = useProgress();

  const path = learningPaths.find(p => p.id === pathId);
  if (!path) return <div className="p-8 text-center text-red-500">Path not found</div>;

  const completedCount = path.steps.filter(s => s.type === 'topic' && completedTopics.includes(s.id)).length;
  const progress = Math.round((completedCount / path.steps.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/learning-paths" className="text-sm flex items-center gap-2 mb-6 text-gray-500 hover:text-black">
        <ArrowLeft className="w-4 h-4" /> Back to Paths
      </Link>

      <h1 className="text-4xl font-bold mb-2">{path.title}</h1>
      <p className="text-xl text-gray-500 mb-6">{path.description}</p>

      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm mb-2">
          <span className="flex items-center gap-1 text-gray-500"><Clock className="w-4 h-4" /> {path.estimatedHours} hours</span>
          <span className="font-medium">{completedCount} of {path.steps.length} steps completed</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-3">
        {path.steps.map((step, index) => {
          const isCompleted = step.type === 'topic' && completedTopics.includes(step.id);
          return (
            <div key={index} className={`flex justify-between items-center p-5 rounded-2xl border ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium">{step.title}</div>
                  <div className="text-xs text-gray-500 capitalize">{step.type}</div>
                </div>
              </div>

              {step.type === 'topic' && (
                <button onClick={() => toggleComplete(step.id)} className={`px-5 py-2 rounded-xl text-sm font-medium transition-colors ${isCompleted ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  {isCompleted ? 'Completed' : 'Mark Complete'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}