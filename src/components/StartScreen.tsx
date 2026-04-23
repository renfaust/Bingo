interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-slate-950 text-slate-100">
      <div className="text-center max-w-sm">
        <div className="inline-flex items-center justify-center rounded-full border border-violet-500 bg-violet-950/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-violet-200 mb-4">
          Quest Bingo
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-amber-100 mb-2">Dungeon Bingo</h1>
        <p className="text-base text-slate-300 mb-8">Gather your party and mark the quest traits your fellow adventurers share.</p>

        <div className="bg-slate-900/90 rounded-3xl p-6 shadow-xl border border-slate-800 mb-8">
          <h2 className="font-semibold text-amber-200 mb-3">How to play</h2>
          <ul className="text-left text-slate-300 text-sm space-y-2">
            <li>• Tap a square when a teammate matches the story prompt</li>
            <li>• Seek out five connected traits to complete the quest</li>
            <li>• Score a line and claim your party's victory</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg shadow-violet-500/20 active:bg-accent-light transition-colors"
        >
          Begin the Adventure
        </button>
      </div>
    </div>
  );
}
