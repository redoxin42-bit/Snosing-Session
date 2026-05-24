import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`
        backdrop-blur-2xl
        bg-white/10
        border border-white/20
        shadow-2xl
        rounded-3xl
        p-6
        transition-all
        duration-300
        hover:bg-white/15
        ${className}
      `}
    >
      {children}
    </div>
  );
}
