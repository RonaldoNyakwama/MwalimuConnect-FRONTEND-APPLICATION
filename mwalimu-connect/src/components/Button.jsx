export function Button({ variant, size, className = '', onClick, children }) {
  let styles = 'rounded-lg transition-colors ';
  if (variant === 'primary') {
    styles += 'bg-primary text-white hover:bg-primary/90 ';
  } else if (variant === 'outline') {
    styles += 'border border-primary text-primary hover:bg-primary hover:text-white ';
  }
  return (
    <button onClick={onClick} className={styles + className}>
      {children}
    </button>
  );
}