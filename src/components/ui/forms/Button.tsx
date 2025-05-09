'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import WhiteArrow from '@/components/ui/icons/WhiteArrow';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showArrow?: boolean;
}

/**
 * A reusable button component with different variants and sizes
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = true,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`font-bold rounded-[16px] transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className} flex items-center justify-center gap-2 text-white`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <WhiteArrow size={16} />
      )}
    </button>
  );
}

export default Button;
export { Button as CustomButton };
