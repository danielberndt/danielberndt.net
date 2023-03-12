const locale = ["en-GB", "en-US"];
const shortFormatter = new Intl.DateTimeFormat(locale, {
  year: "numeric",
  month: "short",
  day: "numeric",
});
const longFormatter = new Intl.DateTimeFormat(locale, {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const formatDate = (date: Date, {type = "short"}: {type?: "short" | "long"} = {}) => {
  switch (type) {
    case "short":
      return shortFormatter.format(date);
    case "long":
      return longFormatter.format(date);
  }
};
