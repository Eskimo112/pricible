export const formatPrice = (value: number): string => {
  const formattedValue = value.toLocaleString("en-US");
  return `${formattedValue}₫`;
};
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
