import React, { ReactNode } from 'react';

interface DirectLiquidGlassProps {
  children: ReactNode;
  className?: string;
  radius?: number;
  displacementScale?: number; // kept for API compatibility; influences blur strength
}

export const DirectLiquidGlass: React.FC<DirectLiquidGlassProps> = ({
  children,
  className = '',
  radius = 10,
  displacementScale = 60,
}) => {
  // Render a plain glass pane (no inline backdrop styles). CSS controls look.
  return (
    <div
      className={`glass-pane border border-white/20 rounded-2xl ${className}`}
      style={{
        ['--muted-foreground' as any]: '240 8% 35%',
        ['--liquid-glass-bg-user' as any]: 'hsla(0, 0%, 100%, 0.6)',
        borderRadius: `${radius}px`,
      }}
    >
      {children}
    </div>
  );
};
