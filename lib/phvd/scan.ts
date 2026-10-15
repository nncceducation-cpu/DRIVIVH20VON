// The published PHVD app reads caliper measurements from a photo using ML Kit,
// a native module that only exists in its iOS/Android builds. In this web app
// the scan button stays hidden, exactly as it does in the PHVD web build.
export interface DetectedNumber {
  id: string;
  raw: string;
  value: number;
  valueMm: number;
  unit: 'cm' | 'mm' | '';
  kind: 'measure' | 'ri';
  seq?: number;
}

export function isScanAvailable(): boolean {
  return false;
}

export async function captureAndDetect(): Promise<DetectedNumber[]> {
  throw new Error('Scanning is only available in the native PHVD app.');
}
