import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. */
  tone?: 'neutral' | 'accent' | 'success' | 'danger';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Compact pill label for status, category, or metadata. */
export function Badge(props: BadgeProps): JSX.Element;
