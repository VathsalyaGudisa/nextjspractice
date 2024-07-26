import Link from "next/link";
import "@/app/NotFound/Notfound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">Go Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
