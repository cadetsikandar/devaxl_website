import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Field label rendered above the control. */
  label?: React.ReactNode;
  /** Helper or error text below the control. */
  hint?: React.ReactNode;
  /** Leading adornment (icon or text). */
  prefix?: React.ReactNode;
  /** Error styling. */
  invalid?: boolean;
}

/** Text field with dark surface and amber focus ring. */
export function Input(props: InputProps): JSX.Element;
