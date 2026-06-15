import * as React from 'react';

/** Pill chip for tags, filters, and metadata — optionally removable. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Brand-tinted style. */
  brand?: boolean;
  /** When provided, renders a remove (×) button and calls this on click. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
