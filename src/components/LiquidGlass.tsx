import React, { Children, cloneElement, isValidElement, ReactNode } from 'react';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  radius?: number;
  displacementScale?: number;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className,
  radius = 0.5,
  displacementScale = 1.0,
}) => {
  // Allow the container classes (e.g., glass-header/glass-pane) to control
  // background, blur, border, shadow, and radius. We avoid inlining those
  // so header and panes can share identical spec. Keep layout safety only.
  const minimalWrapperStyles: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    isolation: 'isolate',
    // Allow panes to inherit correct theme tint
    background: 'var(--liquid-glass-bg-user, var(--liquid-glass-bg))',
  };

  // Handle both single child and multiple children scenarios
  const childArray = Children.toArray(children);
  if (childArray.length === 0) {
    return null;
  }
  
  let content;
  
  if (childArray.length === 1) {
    const child = childArray[0];
    if (!isValidElement(child)) {
      content = <>{children}</>;
    } else {
      const mergedClassName = [child.props.className, className].filter(Boolean).join(' ');

      content = cloneElement(child as React.ReactElement, {
        className: mergedClassName,
        style: {
          ...minimalWrapperStyles,
          ...child.props.style,
        },
      });
    }
  } else {
    // Handle multiple children by wrapping them
    content = (
      <div 
        className={className ? `${className} glass-pane` : 'glass-pane'}
        style={minimalWrapperStyles}
      >
        {children}
      </div>
    );
  }

  return (
    <>{content}</>
  );
};
