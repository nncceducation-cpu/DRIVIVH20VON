import React, { useState } from 'react';
import PhvdTab from './phvd/PhvdTab';
import PhvdReferences from './phvd/PhvdReferences';

// This tab reproduces the published PHVD app (github.com/nncceducation-cpu/PHVD):
// same disclaimer, risk logic (El-Dib 2020, VI/AHW only), history, charts,
// management pathway and references. Only native-only features (camera scan,
// save to Photos) are swapped for their web-build equivalents.

// Accepting the disclaimer lasts for this browser session, so switching tabs
// does not ask again. A reload asks again, as the published app does on start.
let accepted = false;

function DisclaimerGate({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="flex items-center justify-center p-2 md:p-6">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 max-w-md">
        <h2 className="text-xl font-bold text-slate-800 mb-3">Before you continue</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          PHVD is an{' '}
          <strong className="text-slate-800">
            educational and reference tool for qualified healthcare professionals
          </strong>
          . It is not a medical device, does not provide a diagnosis, and does not replace
          clinical assessment or your local protocol.
        </p>
        <ul className="list-disc ml-5 mt-3 space-y-1 text-sm text-slate-600">
          <li>All outputs are indicative and must be independently verified.</li>
          <li>Do not use it as the sole basis for any treatment decision.</li>
          <li>No patient data is transmitted off this device.</li>
        </ul>
        <p className="text-xs text-slate-400 mt-4">
          Risk stratification adapted from El-Dib et al. (2020); reference curve from Brouwer et
          al. (2012).
        </p>
        <button
          onClick={onAccept}
          className="w-full mt-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
        >
          I understand and accept
        </button>
      </div>
    </div>
  );
}

const PHVD: React.FC = () => {
  const [ok, setOk] = useState(accepted);

  if (!ok) {
    return <DisclaimerGate onAccept={() => { accepted = true; setOk(true); }} />;
  }

  return (
    <div className="space-y-6">
      <PhvdTab />
      <PhvdReferences />
      <div className="text-center pb-2">
        <p className="text-[11px] text-slate-400">
          Educational reference only &mdash; not a diagnostic device. Clinical judgment required.
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          A <span className="font-semibold text-slate-600">Sarnat&#8209;NNCC</span> program tool
        </p>
      </div>
    </div>
  );
};

export default PHVD;
