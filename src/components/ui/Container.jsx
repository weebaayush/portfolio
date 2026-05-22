import { cn } from '../../utils/cn';

/**
 * Reusable Container component for consistent spacing and max-width.
 */
export const Container = ({ children, className, as: Component = 'div' }) => {
  return (
    <Component
      className={cn(
        'mx-auto max-w-7xl px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};
