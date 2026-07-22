export default function Button({
  children,
  variant = "primary",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-sky-600 hover:bg-sky-700 text-white",

    secondary:
      "bg-white border border-sky-600 text-sky-600 hover:bg-sky-50",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}