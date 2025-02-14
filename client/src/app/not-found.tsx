import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        {`The page you're looking for doesn't exist.`}
      </p>
      <Link href="/">
        <Button variant="default">Return Home</Button>
      </Link>
    </div>
  );
}
