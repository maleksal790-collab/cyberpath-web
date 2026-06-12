import { useState, useEffect, useCallback } from 'react';
import { domains } from '@/data/roadmapData';

interface LastViewed {
  type: 'domain' | 'topic';
  id: string;
  title: string;
  domainId?: string;
}

interface ProgressState {
  completed: string[];
  bookmarked: string[];
  status: Record<string, "known" | "in-progress" | "to-learn">;
  lastViewed?: LastViewed;
}

const STORAGE_KEY = 'cyberpath-progress';

function loadProgress(): ProgressState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { completed: [], bookmarked: [], status: {} };
  } catch {
    return { completed: [], bookmarked: [], status: {} };
  }
}

function saveProgress(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  const toggleComplete = useCallback((topicId: string) => {
    setState(prev => {
      const isCompleted = prev.completed.includes(topicId);
      return {
        ...prev,
        completed: isCompleted
          ? prev.completed.filter(id => id !== topicId)
          : [...prev.completed, topicId]
      };
    });
  }, []);

  const isCompleted = useCallback((topicId: string) => state.completed.includes(topicId), [state.completed]);

  const setLastViewed = useCallback((item: LastViewed) => {
    setState(prev => ({ ...prev, lastViewed: item }));
  }, []);

  const getLastViewed = useCallback(() => state.lastViewed, [state.lastViewed]);

  const getTotalProgress = useCallback(() => {
    const total = domains.reduce((sum, d) => sum + d.topics.length, 0);
    return total > 0 ? Math.round((state.completed.length / total) * 100) : 0;
  }, [state.completed]);

  return {
    completedTopics: state.completed,
    toggleComplete,
    isCompleted,
    setLastViewed,
    getLastViewed,
    getTotalProgress,
  };
}