import * as React from 'react';

/** Telemetry-style metric readout: a big mono number with a tracked caps label. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline value (number or short string). */
  value: React.ReactNode;
  /** Small trailing unit, e.g. "km", "N", "s". */
  unit?: string;
  /** Uppercase mono caption under the value. */
  label?: string;
  /** Color the value brand-blue. */
  accent?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Stat(props: StatProps): JSX.Element;
