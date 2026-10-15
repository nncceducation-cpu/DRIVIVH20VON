// Render an assessment report element to a PNG and download it.
// On-device only; nothing is uploaded. (The native PHVD app saves to Photos;
// the web build downloads the PNG, which is what this app does.)
import html2canvas from 'html2canvas';

export function isSaveToPhotosAvailable(): boolean {
  return false;
}

export async function saveElementToPhotos(el: HTMLElement): Promise<void> {
  return downloadElementAsPng(el);
}

function fileName(): string {
  const d = new Date();
  const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return `PHVD_${stamp}_${Date.now()}`;
}

export async function downloadElementAsPng(el: HTMLElement): Promise<void> {
  const canvas = await html2canvas(el, { backgroundColor: '#ffffff', scale: 2, useCORS: true, logging: false });
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = `${fileName()}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
