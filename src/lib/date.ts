// Shared long-date formatter used across cards and detail headers.
export const longDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Month + year only — used by the gallery sections.
export const monthYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
});
