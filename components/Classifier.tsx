import React, { useState } from 'react';
import DisclaimerGate from './diagnosis/DisclaimerGate';
import HomePage from './diagnosis/HomePage';
import Wizard from './diagnosis/Wizard';
import Definitions from './diagnosis/Definitions';
import Appendix from './diagnosis/Appendix';
import References from './diagnosis/References';
import AboutUs from './diagnosis/AboutUs';
import type { Route } from './diagnosis/routes';

// This tab reproduces the published HUS Diagnostic app
// (github.com/nncceducation-cpu/HUSDiagnostic): same disclaimer, decision tree,
// result wording, consensus-paper example figures, definitions, appendix and
// references (Mohammad et al., Front Pediatr 2021).

// Accepting the disclaimer lasts for this browser session, so switching tabs
// does not ask again. A reload asks again, as the published app does on start.
let accepted = false;

const Classifier: React.FC = () => {
  const [ok, setOk] = useState(accepted);
  const [route, setRoute] = useState<Route>('home');

  return (
    <div className="mx-auto flex max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
      {!ok ? (
        <DisclaimerGate onAccept={() => { accepted = true; setOk(true); }} />
      ) : (
        <>
          {route === 'home' && <HomePage onNavigate={setRoute} />}
          {route === 'wizard' && <Wizard onHome={() => setRoute('home')} />}
          {route === 'definitions' && <Definitions onBack={() => setRoute('home')} />}
          {route === 'appendix' && <Appendix onBack={() => setRoute('home')} />}
          {route === 'references' && <References onBack={() => setRoute('home')} />}
          {route === 'about' && <AboutUs onBack={() => setRoute('home')} />}
        </>
      )}
    </div>
  );
};

export default Classifier;
