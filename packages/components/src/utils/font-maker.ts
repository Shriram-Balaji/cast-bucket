// we define available font weight and styles for each font here
import { Platform } from "react-native";

const font = {
  Inter: {
    weights: {
      Thin: "100",
      UltraLight: "200",
      Light: "300",
      Regular: "400",
      Medium: "500",
      Semibold: "600",
      Bold: "700",
      Heavy: "800",
      Black: "900"
    },
    styles: {
      Italic: "italic"
    }
  }
};

const defaultFontOptions = {
  weight: null,
  style: null,
  family: "Inter"
};
// generate styles for a font with given weight and style
export const fontMaker = (options: any = defaultFontOptions) => {
  const { family } = options;
  let { weight, style } = options;
  
  const { weights, styles } = font[family];
  if (Platform.OS === "android" || Platform.OS === "ios") {
    weight = weights[weight] ? weight : "";
    style = styles[style] ? style : "";

    const suffix = weight + style;

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : "")
    };
  } else {
    weight = weights[weight] || weights.Medium;
    style = styles[style] || null;
    return {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style
    };
  }
};
