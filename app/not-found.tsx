import Link from "next/link";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__code">404</div>
        <h1 className="not-found__heading">Page Not Found</h1>
        <p className="not-found__text">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found__actions">
          <Link href="/" className="not-found__btn not-found__btn--primary">
            Back to Home
          </Link>
          <Link href="/contact-us" className="not-found__btn not-found__btn--outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
