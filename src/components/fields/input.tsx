import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { IconButton, InputAdornment, TextField, TextFieldProps, FormControl, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, 'label' | 'type'>;

export const Input = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export const InputPassword2 = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();
  const [isShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!isShown);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, invalid } }) => (
        <FormControl  {...field} error={invalid} variant='outlined'>
          <InputLabel htmlFor={name}>{props.label}</InputLabel>
          <OutlinedInput
            {...props}
            id={name}
            value={field.value}
            type={isShown ? "text" : "password"}
            endAdornment={
              <InputAdornment
                position='end'
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisiblity}
                  onMouseDown={togglePasswordVisiblity}
                  edge="end"
                >
                  {isShown ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>

      )}
    />
  );
}

export const InputPassword = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();
  const [isShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!isShown);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
          type={isShown ? "text" : "password"}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisiblity}
                onMouseDown={togglePasswordVisiblity}
                edge="end"
              >
                {isShown ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>,
          }}

        />
      )}
    />
  );
}
