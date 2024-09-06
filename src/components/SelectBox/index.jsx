import React from "react";
import { Select } from "chakra-react-select";
import PropTypes from "prop-types";

const shapes = {
  square: {
    borderRadius: "0px",
  },
};

const sizes = {
  xs: {
    h: "24px",
    fontSize: "14px",
    px: "12px",
  },
};

const SelectBox = React.forwardRef(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "",
      size = "xs",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
            ref={ref}
            options={options}
            isSearchable={isSearchable}
            isMulti={isMulti}
            components={{
              IndicatorSeparator: () => null,
              ...(indicator && { DropdownIndicator: () => indicator }),
            }}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: 999999}),
            }}
            chakraStyles={{
              container: (provided) => ({
                ...provided,
                ...sizes[size],
                ...shapes[shape],

                ...style,
                zIndex: 0,
                display: "flex",
            }),
            control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "0 !important",
            boxShadow: "none",
            minHeight: "auto",
            width: "100%",
            color: "inherit !important",
            "&:hover": {
              border: "0 !important",
            },
            "&: focus-visible, & [data-focus-visible]": {
              boxShadow: "none !important",
            },
            "&>div": {
              padding: "0 !important",
            },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#007aff !important",
              color: state.isSelected && "#ffffff !important",
              "&:hover": {
                backgroundColor: "#007aff",
                color: "#ffffff",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            menu: ({ width, ...css}) => ({ ...css}),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

SelectBox.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onchange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
};

export { SelectBox };