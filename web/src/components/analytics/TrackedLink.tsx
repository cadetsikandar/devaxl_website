"use client";

import { track, type AnalyticsEvent, type EventProps } from "@/lib/analytics";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
  eventProps?: EventProps;
};

/**
 * A plain `<a>` that fires an analytics event on click.
 *
 * Deliberately does not preventDefault or delay navigation — Plausible sends
 * events with `navigator.sendBeacon`, which survives the page unloading, so
 * there is no reason to make a visitor wait on a tracking call.
 */
export function TrackedLink({ event, eventProps, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, eventProps);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
