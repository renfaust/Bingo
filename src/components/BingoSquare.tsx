import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border rounded-2xl transition-all duration-150 select-none min-h-[68px] text-[0.75rem] leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-amber-200 via-orange-100 to-amber-100 border-amber-300 text-amber-950 shadow-inner shadow-amber-300/20'
      : 'bg-slate-900 border-amber-500 text-amber-100 shadow-sm shadow-slate-950/50'
    : 'bg-slate-900/80 border-slate-700 text-slate-100 hover:bg-slate-800 active:bg-slate-700';

  const freeSpaceClasses = square.isFreeSpace ? 'font-semibold text-amber-100' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-amber-300 text-xs">✦</span>
      )}
      {square.isFreeSpace && (
        <span className="absolute -top-1 right-1 text-amber-300 text-xs">★</span>
      )}
    </button>
  );
}
