import React from "react";
import styled from "styled-components";
import { useController, useFormContext } from "react-hook-form";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 450px;
  max-width: 550px;
  height: 56.5px;
  padding: 4px 12px;
  border: 1px solid #bfc9d9;
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 14px;
      height: 14px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14px;
  }
`;

const ColorPicker = ({ onChange, value }) => {
  return (
    <Container>
      <input type="color" onChange={onChange} value={value} />
      <input type="text" onChange={onChange} value={value} />
    </Container>
  );
};

const ColorPickers = ({ name, label }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    defaultValue: "#FFFFFF",
  });

  return <ColorPicker onChange={onChange} value={value} />;
};

export default ColorPickers;
