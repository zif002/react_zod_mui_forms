import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { ToggleButton, ToggleButtonGroup as ToggleButtonGroupMui } from '@mui/material';

import { Option } from '@/types/option';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
};

export const ToggleButtonGroup = <T extends FieldValues>({
  name,
  options,
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...restField } }) => (
        <ToggleButtonGroupMui
          onChange={(_, newValue) => {
            if (newValue.length) {
              onChange(newValue);
            }
          }}
          value={value.length ? value : [options?.[0].id]}
          {...restField}
        >
          {options?.map((option) => (
            <ToggleButton value={option.id} key={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroupMui>
      )}
    ></Controller>
  );
}