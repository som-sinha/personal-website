// Content dates (e.g. `2026-10-18`) parse as UTC midnight, so format in UTC too.
// Otherwise a build machine west of UTC would print the previous day.

// Shared long-date formatter used across cards and detail headers.
export const longDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

// Month + year only — used by the gallery sections.
export const monthYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
});
