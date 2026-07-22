import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Ari Water Logo"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-2xl font-bold text-sky-700">
              Ari Water
            </h1>

            <p className="text-xs text-gray-500">
              Pure Water. Delivered with Care.
            </p>
          </div>
        </Link>

        <div className="flex gap-8 font-medium">

          <Link to="/" className="hover:text-sky-600">
            Home
          </Link>

          <Link to="/about" className="hover:text-sky-600">
            About
          </Link>

          <Link to="/products" className="hover:text-sky-600">
            Products
          </Link>

          <Link to="/order" className="hover:text-sky-600">
            Order
          </Link>

          <Link to="/contact" className="hover:text-sky-600">
            Contact
          </Link>

          <Link
            to="/login"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}