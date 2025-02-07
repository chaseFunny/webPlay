import { demosList } from "@/constants/data";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "@tanstack/react-router";

export default function DemosListComponent() {
  return (
    <div className="demosList flex justify-center my-3">
      {demosList.map((ele) => (
        <Link key={ele.id} to={`/demos/${ele.id}`}>
          <Card className="w-9/12">
            <CardHeader>
              <CardTitle>{ele.name}</CardTitle>
              <CardDescription className="w-full truncate">{ele.desc}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
