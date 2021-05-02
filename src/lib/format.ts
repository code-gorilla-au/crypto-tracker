const currencyFormat = process.env.VUE_APP_CURRENCY_FORMAT;

export function formatPercent(value: number): string {
  const formatter = new Intl.NumberFormat(currencyFormat, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${formatter.format(value)}%`;
}

export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat(currencyFormat, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'AUD',
    style: 'currency',
  });
  return formatter.format(value);
}
