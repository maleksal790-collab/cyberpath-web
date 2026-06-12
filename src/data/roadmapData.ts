export const domains = [
  {
    id: "domain-1",
    title: "Networking Basics",
    topics: ["topic-1", "topic-2"]
  },
  {
    id: "domain-2",
    title: "Security Fundamentals",
    topics: ["topic-3", "topic-4"]
  }
];

export const learningPaths = [
  {
    id: "path-1",
    title: "Cybersecurity Fundamentals",
    description: "The perfect starting point. Learn the absolute basics of networking, security principles, and safe practices.",
    icon: "Shield",
    difficulty: "Beginner",
    estimatedHours: 12,
    steps: [
      { id: "topic-1", title: "Introduction to Networking", type: "topic" },
      { id: "topic-2", title: "OSI Model Deep Dive", type: "topic" },
      { id: "topic-3", title: "The CIA Triad", type: "topic" },
      { id: "topic-4", title: "Basic Encryption", type: "topic" }
    ]
  },
  {
    id: "path-2",
    title: "Cloud Security Posture",
    description: "Understand how to secure modern cloud environments, focusing on IAM, data protection, and compliance.",
    icon: "Cloud",
    difficulty: "Intermediate",
    estimatedHours: 25,
    steps: [
      { id: "topic-5", title: "Identity and Access Management", type: "topic" },
      { id: "topic-6", title: "VPC and Network Security", type: "topic" }
    ]
  }
];