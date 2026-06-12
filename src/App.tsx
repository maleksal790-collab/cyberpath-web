import { Route, Switch } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LearningPathsPage from "./pages/LearningPathsPage";
import LearningPathDetailPage from "./pages/LearningPathDetailPage";

export default function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/learning-paths" component={LearningPathsPage} />
          <Route path="/learning-path/:pathId" component={LearningPathDetailPage} />
          <Route>404: Page Not Found</Route>
        </Switch>
      </Layout>
      <Analytics />
    </>
  );
}
