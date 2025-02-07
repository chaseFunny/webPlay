import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/$demoId/$demoId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/demo/$id"!</div>
}
