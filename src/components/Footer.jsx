export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold">💧 Ari Water</h2>
          <p className="mt-4 text-sky-100">
            Premium purified drinking water for homes,
            offices, institutions and events.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Order Water</li>
            <li>Request Quote</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📍 Kisii, Kenya</p>
          <p>📞 +254 XXX XXX XXX</p>
          <p>✉ info@ariwater.co.ke</p>
        </div>

      </div>

      <div className="border-t border-sky-700 text-center py-5">
        © {new Date().getFullYear()} Ari Water. All Rights Reserved.
      </div>
    </footer>
  );
}