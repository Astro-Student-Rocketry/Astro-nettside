import * as React from 'react';

/** Circular avatar — team photos with mono-initials fallback. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Person's name — drives initials fallback and the title attribute. */
  name?: string;
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Preset size (`sm` 32 · `md` 44 · `lg` 64 · `xl` 88) or an explicit pixel number. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Brand-blue ring around the avatar. */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
