"use client";

import { useEffect, useRef } from "react";
import { track, type AnalyticsEvent, type EventProps } from "@/lib/analytics";

/**
 * Fires one event when a page mounts. Lets a server component report a view
 * without becoming a client component itself.
 */
export function PageEvent({
  event,
  eventProps,
}: {
  event: AnalyticsEvent;
  eventProps?: EventProps;
}) {
  // React 18 StrictMode runs effects twice in dev; the ref keeps the count honest.
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    track(event, eventProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  return null;
}
