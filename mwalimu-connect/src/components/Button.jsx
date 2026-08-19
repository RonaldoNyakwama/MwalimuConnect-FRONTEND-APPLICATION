import { forwardRef } from 'react';
import { cn } from '../utils/cn';

export const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90':
              variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/90':
              variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground':
              variant === 'outline',
            'hover:bg-accent hover:text-accent-foreground':
              variant === 'ghost',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';