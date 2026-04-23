interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-950/95 rounded-3xl p-6 max-w-xs w-full text-center shadow-2xl shadow-violet-950/40 ring-2 ring-amber-300/20 animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">🐉</div>
        <h2 className="text-3xl font-bold text-amber-200 mb-2">QUEST COMPLETE</h2>
        <p className="text-slate-300 mb-6">Your fellowship completed a line of fate.</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-full active:bg-accent-light transition-colors"
        >
          Continue the Quest
        </button>
      </div>
    </div>
  );
}
