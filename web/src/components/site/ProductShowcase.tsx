"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownLeft,
  BarChart2,
  BarChart3,
  Bell,
  Coffee,
  CreditCard,
  Home,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  User,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

/**
 * Custom mouse-responsive floating product showcase.
 * Two device mocks parallax-tilt toward the pointer (transform only) and
 * idle-float via CSS keyframes. Reduced motion freezes both. The mocks are
 * placeholder UI — [PLACEHOLDER: real client screenshots].
 */
export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Pointer position normalized to roughly [-0.5, 0.5].
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.4 });

  // Dashboard: gentle tilt + counter-parallax.
  const dashRotY = useTransform(sx, [-0.5, 0.5], [7, -7]);
  const dashRotX = useTransform(sy, [-0.5, 0.5], [-5, 5]);
  const dashX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  // Mobile: stronger shift for depth, opposite lean.
  const mobRotY = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const mobRotX = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const mobX = useTransform(sx, [-0.5, 0.5], [22, -22]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="showcase relative h-[476px] max-md:h-[336px] max-md:origin-top-left max-md:scale-[0.7]"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      <span className="ph absolute -bottom-7 left-1 z-[5]">
        [PLACEHOLDER: real client screenshots]
      </span>

      {/* Analytics dashboard mock */}
      <div className={`absolute left-[-10px] top-1 ${reduce ? "" : "floaty-a"}`}>
        <motion.div
          className="mock mock-dash w-[500px]"
          style={{
            rotateZ: -3,
            rotateX: dashRotX,
            rotateY: dashRotY,
            x: dashX,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="winbar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="addr">app.northwind.io/analytics</span>
          </div>
          <div className="dash-body">
            <div className="dash-side">
              <div className="dash-brand">
                <span className="mk">
                  <b />
                </span>
                <span className="nm">Northwind</span>
              </div>
              <div className="nav-it on">
                <LayoutDashboard /> Overview
              </div>
              <div className="nav-it">
                <BarChart3 /> Analytics
              </div>
              <div className="nav-it">
                <Users /> Customers
              </div>
              <div className="nav-it">
                <CreditCard /> Revenue
              </div>
              <div className="nav-it">
                <Bell /> Activity
              </div>
              <div className="sep" />
              <div className="nav-it">
                <Settings /> Settings
              </div>
            </div>
            <div className="dash-main">
              <div className="dm-head">
                <span className="ti">Overview</span>
                <span className="pill">Last 30 days</span>
              </div>
              <div className="kpi-row">
                <div className="kpi">
                  <div className="k">MRR</div>
                  <div className="v">$48.2k</div>
                  <div className="dl up">&uarr; 12.4%</div>
                </div>
                <div className="kpi">
                  <div className="k">Active users</div>
                  <div className="v">9,341</div>
                  <div className="dl up">&uarr; 8.1%</div>
                </div>
                <div className="kpi">
                  <div className="k">Churn</div>
                  <div className="v">1.8%</div>
                  <div className="dl am">&darr; 0.3%</div>
                </div>
              </div>
              <div className="chart">
                <div className="ch-top">
                  <span className="lb">Revenue</span>
                  <span className="lg">
                    <span>
                      <b style={{ background: "var(--amber-400)" }} />
                      2026
                    </span>
                    <span>
                      <b style={{ background: "var(--surface-4)" }} />
                      2025
                    </span>
                  </span>
                </div>
                <svg viewBox="0 0 340 60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="var(--amber-400)" stopOpacity="0.32" />
                      <stop offset="1" stopColor="var(--amber-400)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="15" x2="340" y2="15" stroke="var(--line-faint)" strokeWidth="1" />
                  <line x1="0" y1="32" x2="340" y2="32" stroke="var(--line-faint)" strokeWidth="1" />
                  <line x1="0" y1="49" x2="340" y2="49" stroke="var(--line-faint)" strokeWidth="1" />
                  <polyline
                    fill="none"
                    stroke="var(--surface-4)"
                    strokeWidth="1.5"
                    points="0,50 34,48 68,52 102,44 136,46 170,40 204,42 238,36 272,38 306,32 340,34"
                  />
                  <path
                    d="M0,44 34,40 68,46 102,30 136,34 170,22 204,26 238,14 272,18 306,8 340,12 L340,60 L0,60 Z"
                    fill="url(#ag)"
                  />
                  <polyline
                    fill="none"
                    stroke="var(--amber-400)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,44 34,40 68,46 102,30 136,34 170,22 204,26 238,14 272,18 306,8 340,12"
                  />
                </svg>
              </div>
              <div className="dtable">
                <div className="tr hd">
                  <span>Customer</span>
                  <span>Status</span>
                  <span className="amt">MRR</span>
                </div>
                <div className="tr">
                  <span className="nmcell">
                    <span className="av2" />
                    Loomly Inc.
                  </span>
                  <span className="st">
                    <span className="dot" />
                    Active
                  </span>
                  <span className="amt">$4,820</span>
                </div>
                <div className="tr">
                  <span className="nmcell">
                    <span className="av2" />
                    Cadence
                  </span>
                  <span className="st">
                    <span className="dot" />
                    Active
                  </span>
                  <span className="amt">$2,140</span>
                </div>
                <div className="tr">
                  <span className="nmcell">
                    <span className="av2" />
                    Vantage
                  </span>
                  <span className="st">
                    <span className="dot am" />
                    Trial
                  </span>
                  <span className="amt">$980</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile app mock */}
      <div className={`absolute bottom-[-2px] right-[-12px] z-[2] ${reduce ? "" : "floaty-b"}`}>
        <motion.div
          className="mock mock-mobile w-[186px] rounded-[22px]"
          style={{
            rotateZ: 4,
            rotateX: mobRotX,
            rotateY: mobRotY,
            x: mobX,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="mob-body">
            <div className="mob-status">
              <span>9:41</span>
              <span>5G&nbsp;&nbsp;100%</span>
            </div>
            <div className="mob-hd">
              <div className="h">
                Wallet<small>Good morning, Maya</small>
              </div>
              <div className="av" />
            </div>
            <div className="mob-card">
              <div className="lab">Available balance</div>
              <div className="bal">$12,480.55</div>
              <div className="sub">
                <span>•••• 4821</span>
                <span>+ $1,204 this week</span>
              </div>
            </div>
            <div className="mob-seg">
              <span className="on">All</span>
              <span>Income</span>
              <span>Spending</span>
            </div>
            <div className="mob-list">
              <div className="mob-tx">
                <span className="ic">
                  <ArrowDownLeft />
                </span>
                <span className="mid">
                  <div className="t">Stripe payout</div>
                  <div className="s">Today · 9:02</div>
                </span>
                <span className="amt in">+$3,200</span>
              </div>
              <div className="mob-tx">
                <span className="ic">
                  <ShoppingBag />
                </span>
                <span className="mid">
                  <div className="t">Figma</div>
                  <div className="s">Yesterday</div>
                </span>
                <span className="amt">&minus;$45</span>
              </div>
              <div className="mob-tx">
                <span className="ic">
                  <Coffee />
                </span>
                <span className="mid">
                  <div className="t">Blue Bottle</div>
                  <div className="s">Yesterday</div>
                </span>
                <span className="amt">&minus;$8.50</span>
              </div>
              <div className="mob-tx">
                <span className="ic">
                  <Zap />
                </span>
                <span className="mid">
                  <div className="t">AWS</div>
                  <div className="s">Mar 14</div>
                </span>
                <span className="amt">&minus;$612</span>
              </div>
            </div>
            <div className="mob-tab">
              <Home className="on" />
              <BarChart2 />
              <Wallet />
              <User />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
