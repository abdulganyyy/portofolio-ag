import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg opacity-80">Halaman tidak ditemukan.</p>
        <Link className="cosmic-button inline-block" to="/">
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
