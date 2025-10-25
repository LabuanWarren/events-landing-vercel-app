import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center ">
      <div className="h-auto w-full flex items-center justify-center rounded mb-20">
              <img 
                src="/404-icon.svg" 
                alt="404" 
                className="h-auto w-[300px] object-contain"
              />
            </div>
      <h1 className="mt-2 text-2xl font-semibold text-gray-950">Page Not Found</h1>
      <p className="mt-4 text-gray-cool-700">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 text-sm font-medium text-white bg-brand-700 rounded-lg hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  );
}

