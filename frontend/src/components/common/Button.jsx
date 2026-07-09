function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-yellow-400 hover:bg-yellow-300 text-black",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;