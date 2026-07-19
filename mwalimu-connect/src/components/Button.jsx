export function Button({ variant, size, className = '', onClick, children }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}