"use client";

import { ReactNode } from "react";

type WindowProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  isActive: boolean;
  onFocus?: () => void;
  /** Доп. элементы справа в title bar (например, кнопки навигации). */
  headerEnd?: ReactNode;
  className?: string;
  contentClassName?: string;
  /** Убирает внешние отступы рамки и делает контент вплотную к стеклу (только отступ у title bar). */
  flushBody?: boolean;
};

export default function Window({
  title,
  icon,
  children,
  isActive,
  onFocus,
  headerEnd,
  className = "",
  contentClassName = "",
  flushBody = false,
}: WindowProps) {
  return (
    <section
      onMouseDown={onFocus}
      className={`win-outset flex h-full min-h-0 flex-col select-none ${
        flushBody ? "p-0" : "p-2"
      } ${className}`}
    >
      <header
        className={`flex items-center justify-between gap-2 text-white/95 ${
          flushBody ? "px-3 py-2" : "px-2 py-1"
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
          <span className="shrink-0 text-sm opacity-85">{icon ?? "◌"}</span>
          <h2 className="truncate text-base font-extrabold tracking-tight md:text-lg">
            {title}
          </h2>
        </div>
        {headerEnd ? <div className="shrink-0">{headerEnd}</div> : null}
      </header>
      <div
        className={[
          flushBody
            ? "min-h-0 flex-1 overflow-auto text-sm"
            : "win-inset win-content-glass mt-2 min-h-0 flex-1 overflow-auto p-3 text-sm",
          !flushBody && isActive ? "border-[var(--panel-border-strong)]" : "",
          contentClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
