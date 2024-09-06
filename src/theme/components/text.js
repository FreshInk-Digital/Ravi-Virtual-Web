const baseStyle = {
    color: "blue gray.700",
    fontFamily: "Inter",
  };
  const sizes = {
  texts: {
    fontSize: "14px",
    fontweight: 400,
    fontStyle: "normal",
  },
  textmd: {
    fontSize: {
      base: "13px",
      sm: "16px",
    },
    fontweight: 400,
    fontStyle: "normal",
  },
  textlg: {
    fontSize: {
      base: "17px",
      sm: "20px",
    },
    fontWeight: 400,
  },
};
const defaultProps = {
  size: "texts",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;