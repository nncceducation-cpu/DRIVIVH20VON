# VON DRIVE IVH 2.0

Interactive neonatal cranial ultrasound consensus tool: VON benchmarking, the Canadian Neonatal Network (CNN) outcome calculator, protocols and checklists, brain injury classification, PHVD risk stratification, family counselling, audit, screening schedule, image library and evidence.

Migrated from Google AI Studio. Two tabs reproduce the published Sarnat-NNCC apps:

- **Classification** follows [HUS Diagnostic](https://github.com/nncceducation-cpu/HUSDiagnostic): decision tree, result wording, example figures, definitions, appendix and references from Mohammad et al., *Front Pediatr* 2021;9:618236.
- **PHVD Analysis** follows [PHVD](https://github.com/nncceducation-cpu/PHVD): El-Dib et al. (2020) VI/AHW risk zones, Brouwer et al. (2012) reference curve, assessment history, trend charts, management pathway and image export.

Educational reference only, not a diagnostic device.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
```

## Publish

`.github/workflows/pages.yml` builds and deploys to GitHub Pages on every push to `main`. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
