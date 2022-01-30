import React, { ChangeEvent, ReactElement, useState } from 'react';
import InputStyled, { IInput } from './InputStyled';

export default function Input({
  name,
  type = 'text',
  onChange,
  value: valueProp = '',
  placeholder,
  error = '',
}: IInput): ReactElement {
  const [value, setValue] = useState<string>(valueProp as string);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    setValue(newValue);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputStyled
      name={name}
      type={type}
      onChange={handleOnChange}
      value={value}
      placeholder={placeholder}
      error={error}
    />
  );
}
