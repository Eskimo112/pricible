export const formatPrice = (value: number): string => {
  const formattedValue = value.toLocaleString("en-US");
  return `${formattedValue}₫`;
};

export function calculateDiscountPercent(
  discountedPrice: number,
  originalPrice: number
) {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercent = (discountAmount / originalPrice) * 100;
  const roundedPercent = Math.round(discountPercent);
  return roundedPercent;
}
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
