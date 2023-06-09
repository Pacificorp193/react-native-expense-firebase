export function getFormattedDate(date) {
  return date.toLocaleDateString();
}

export function getDateMinusDays(date, days) {
  return new Date(date.getMonth(), date.getDate(), date.getFullYear() - days);
}
