import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-slate-900/95 border-b border-slate-800 shadow-sm shadow-violet-900/20">
        <button
          onClick={onReset}
          className="text-slate-300 text-sm px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800"
        >
          ← Return
        </button>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Adventure Board</p>
          <h1 className="font-bold text-xl text-amber-100">Dungeon Bingo</h1>
        </div>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-slate-400 text-sm py-3 px-4">
        Mark a square when a fellow adventurer fulfills the quest prompt.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-amber-500/10 text-amber-200 text-center py-2 font-semibold text-sm border border-amber-500/20 mx-4 rounded-xl">
          🛡️ QUEST COMPLETE! Your party scored a line.
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
