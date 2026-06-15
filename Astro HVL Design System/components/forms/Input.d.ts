import * as React from 'react';

/** Labelled text field with hint, error, and optional prefix/suffix affixes. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and overrides the hint. */
  error?: string;
  /** Show a required asterisk. */
  required?: boolean;
  /** Leading affix node (icon or text, e.g. "@"). */
  prefix?: React.ReactNode;
  /** Trailing affix node. */
  suffix?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
