import { DISCLAIMER } from '../../data/diagnosis/content';

export default function DisclaimerGate({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="flex flex-col bg-white">
      <header className="bg-sky-800 px-5 py-4 text-white">
        <h1 className="text-lg font-bold tracking-tight">Disclaimer</h1>
      </header>
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="whitespace-pre-line text-[13px] leading-relaxed text-slate-700">{DISCLAIMER}</p>
      </div>
      <div className="border-t border-slate-200 p-4">
        <button
          onClick={onAccept}
          className="w-full rounded-xl bg-sky-700 py-3 text-sm font-semibold text-white active:bg-sky-800"
        >
          I understand &mdash; continue
        </button>
      </div>
    </div>
  );
}
