import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds hover lift + brighter ring; use for clickable cards. */
  interactive?: boolean;
  /** Promotes the card with the amber glow ring — reserve for ONE key card. */
  highlight?: boolean;
  /** Inner padding (any CSS length / token). */
  padding?: string;
  children?: React.ReactNode;
}

/**
 * Surface container with subtle elevation — the system's default content block.
 * @startingPoint section="Core" subtitle="Lifted surface card with hairline ring" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
