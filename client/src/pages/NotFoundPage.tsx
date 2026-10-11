
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <AlertCircle className="h-16 w-16 text-gray-400 mb-4" />

      <h1 className="text-6xl font-bold text-gray-800">
        404
      </h1>

      <h2 className="mt-3 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        Sorry, the page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
}
