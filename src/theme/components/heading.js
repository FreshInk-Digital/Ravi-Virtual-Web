const baseStyle = {
    color: "teal.800",
    fontFamily: "Inter",
  };
  const sizes = {
    textxs: {
      fontSize: "12px",
      fontweight: 500,
      fontStyle: "bold",
    },
    textlg: {
      fontSize: {
      base: "17px",
      sm: "20px",
    },
    fontweight: 500,
    fontStyle: "bold",
  },
  headingxs: {
    fontSize: "9px",
    fontweight: 700,
    fontStyle: "bold",
  },
  headings: {
    fontSize: "14px",
    fontweight: 600,
    fontStyle: "bold",
  },
  headingmd: {
    fontSize: {
        base: "15px",
        sm: "18px",
      },
      fontweight: 600,
      fontStyle: "bold",
    },
    headinglg: {
      fontSize: {
        base: "17px",
        sm: "20px",
      },
      fontWeight: 600,
      fontStyle: "bold",
    },
    headingxl: {
      fontSize: {
        md: "35px",
        base: "29px",
        sm: "33px",
      },
      fontWeight: 600,
      fontStyle: "bold",
    },
    heading2xl: {
      fontSize: {
        md: "48px",
        base: "40px",
        sm: "44px",
      },
      fontweight: 600,
      fontStyle: "bold",
    },
  };
  const defaultProps = {
    size: "textxs",
  };

  const Heading = {
    baseStyle,
    sizes,
    defaultProps,
  };
  export default Heading;