import * as React from 'react';

/**
 * Surface container — the base panel for projects, team members, sponsors, content.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Apply default interior padding (24px). Default true. */
  padded?: boolean;
  /** Hover-lift + brand border on hover, pointer cursor. */
  interactive?: boolean;
  /** Drop the shadow (for cards nested on a tinted surface). */
  flush?: boolean;
  /** Element tag to render. Default `div`. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
