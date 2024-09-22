const colors = {
  primary_1: "#65a4ec",
  primary_2: "#4f738b",
  dark: "#2c3942",
  plain: "#1a1a1a",
  fill_1: "#e4e4e4",
  fill_2: "silver",
  fill_3: "#949494",
  fill_4: "#777",
  fill_5: "#505050",
  fill_6: "#333",
  border: "#414141",

  // Statuses
  green: "#2ed853",
  red: "#e67070",
  orange: "#dd952a",
  yellow: "#ebda49",
  // default
  white: "#fff",
  black: "#000",
  transparent: "transparent",
};

export default colors;

export type ColorKey = keyof typeof colors;
