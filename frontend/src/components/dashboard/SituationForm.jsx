function SituationForm() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      <textarea
        rows="6"
        placeholder="Describe your situation..."
        className="w-full rounded-2xl bg-slate-900 border border-slate-700 p-6 text-white outline-none"
      />

    </div>
  );
}

export default SituationForm;