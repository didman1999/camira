const numberFormat = new Intl.NumberFormat("en-US");

/** Formats a SAR price, e.g. 3250 -> "3,250 ر.س" */
export function formatPrice(value: number): string {
  return `${numberFormat.format(value)} ر.س`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
