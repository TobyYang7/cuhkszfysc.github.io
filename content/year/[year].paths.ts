import METADATA from "../../src/metadata";

export const YEARS = Object.keys(METADATA.year)
  .map((year) => Number(year))
  .sort((a, b) => a - b);

export default {
  paths() {
    return YEARS.map((year) => ({ params: { year: String(year) } }));
  },
};
