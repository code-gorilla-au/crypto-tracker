export function formatPercent(value: number): string {
  const formatter = new Intl.NumberFormat('en-AU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${formatter.format(value)}%`;
}

export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat('en-AU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'AUD',
    style: 'currency',
  });
  return formatter.format(value);
}
