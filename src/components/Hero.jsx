import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-cyan-100 via-sky-100 to-blue-200 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-sky-600 font-semibold uppercase tracking-widest">
              Welcome to Ari Water
            </p>

            <h1 className="text-6xl font-extrabold text-gray-800 leading-tight mt-4">
              Pure Water.
              <br />
              Delivered with Care.
            </h1>

            <p className="text-xl text-gray-600 mt-8">
              Premium purified drinking water for
              homes, offices, schools, institutions,
              events and businesses across Kenya.
            </p>

            <div className="flex gap-4 mt-10">

              <Button>
                Order Water
              </Button>

              <Button variant="secondary">
                Request Quote
              </Button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="text-[220px] animate-bounce">
              💧
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}