import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demos/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<title>Demos List</title>
			<div>这里是 demo 页面!1</div>
		</>
	);
}
