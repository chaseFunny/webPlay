import DemosListComponent from "@/components/demosList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3>记录前端开发过程中一些示例</h3>
      {/* demos 列表 */}
      <DemosListComponent />
    </div>
  );
}
