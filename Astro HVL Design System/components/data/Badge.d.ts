import * as React from 'react';

/** Small status label in mono caps — flight status, subsystem state, category. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color intent. Default `neutral`. */
  variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'cyan';
  /** Filled style instead of soft tint. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
