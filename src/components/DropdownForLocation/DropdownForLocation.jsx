import React, { useRef, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Select, { components, OptionProps } from "react-select";
const DropDownControlForLocations = ({
  label,
  options,
  error,
  control,
  name,
  showLabel = true,
  getCountry = () => {},
  id,
}) => {
  const { Option } = components;

  const IconOption = (props) => {
    const { label, name } = props.data;
    return (
      <Option {...props}>
        <div className="react-select-option">{name}</div>
      </Option>
    );
  };
  const validateString = (value) => {
    try {
      if (!!JSON.parse(value).name) {
        return JSON.parse(value).name;
      } else {
        return label;
      }
    } catch (error) {
      return value;
    }
  };

  const refReactSelect = useRef(null);
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? "#002a3a" : null,
        color: isFocused ? "white" : "black",
        ":active": {
          backgroundColor: "#002a3a",
        },
      };
    },
  };
  return (
    <>
      <div className="custom-select ">
        {showLabel ? <Form.Label className="lcontrol">{label}</Form.Label> : ""}
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <Select
                value={!!value?.name && !!value?._id ? value : null}
                backspaceRemovesValue={false}
                isClearable={false}
                isDisabled={id ? false : true}
                isSearchable={true}
                styles={{
                  indicatorSeparator: (base) => ({
                    ...base,
                    display: "none",
                  }),
                  ...colourStyles,
                }}
                onChange={(e) => {
                  onChange(e);
                }}
                maxMenuHeight={150}
                placeholder={label}
                getOptionLabel={(erty) => {
                  return erty?.name;
                }}
                getOptionValue={(ert) => {
                  return ert?.name;
                }}
                name="react-selectpreferredIndustry"
                className={
                  error
                    ? "basic-multi-select error-input"
                    : "basic-multi-select"
                }
                classNamePrefix="select"
                options={options}
                components={{ Option: IconOption }}
              />
              {error && (
                <span className="error-message" style={{ color: "red" }}>
                  {error}
                </span>
              )}
            </>
          )}
          onFocus={() => refReactSelect.current.focus()}
        />
      </div>
    </>
  );
};

export default React.memo(DropDownControlForLocations);
