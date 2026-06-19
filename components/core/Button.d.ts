import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = solid amber CTA; `secondary` = ghost outline; `ghost` = quiet; `danger` = destructive. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Control height / type size. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Element rendered before the label (e.g. an icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. */
  full?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action and secondary actions.
 * @startingPoint section="Core" subtitle="Primary amber + ghost button variants" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
