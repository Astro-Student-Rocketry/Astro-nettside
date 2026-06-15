import * as React from 'react';

/**
 * Primary action control for Astro HVL. One blue, used decisively.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. `primary` = blue fill (default), `secondary` = outline, `ghost` = text, `danger` = destructive. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size. Default `md`. */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon node (e.g. an inline SVG or <img>). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  /** Show a spinner and block interaction. */
  loading?: boolean;
  disabled?: boolean;
  /** Stretch to fill container width. */
  fullWidth?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
