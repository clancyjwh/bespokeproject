export function formatNumberWithCommas(value: string | number): string {
  const str = String(value);

  // Check if it's a number with decimals or a range
  if (str.includes('→')) {
    // Handle range format like "988.0148 → 1965.0288"
    const parts = str.split('→').map(part => part.trim());
    return parts.map(p => formatSingleNumber(p)).join(' → ');
  }

  return formatSingleNumber(str);
}

function formatSingleNumber(value: string): string {
  // Remove any existing commas
  const cleaned = value.replace(/,/g, '');

  // Check if it's a negative number
  const isNegative = cleaned.startsWith('-');
  const absoluteValue = isNegative ? cleaned.substring(1) : cleaned;

  // Split on decimal point
  const parts = absoluteValue.split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1];

  // Only add commas if integer part has more than 4 digits
  if (integerPart.length > 4) {
    const formatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const result = decimalPart !== undefined ? `${formatted}.${decimalPart}` : formatted;
    return isNegative ? `-${result}` : result;
  }

  // Return original if 4 digits or less
  return value;
}
