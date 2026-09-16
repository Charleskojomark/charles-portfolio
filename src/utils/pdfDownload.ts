export function triggerRateSheetDownload(): void {
  const link = document.createElement('a');
  link.href = '/assets/charles-kojo-mark-rate-sheet.pdf';
  link.download = 'Charles-Kojo-Mark-Rate-Sheet-2026.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
