function Badge({ children }) {
  return (
    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm text-slate-300">
      {children}
    </span>
  );
}

export default Badge;