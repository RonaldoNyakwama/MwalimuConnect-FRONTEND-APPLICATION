export function Button({ variant='primary', size='md', className = '', onClick, disabled, children, ...props }) {
  let styles = 'inline-flex items-center justify-center rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ';
  if (variant === 'primary') {
    styles += 'bg-primary text-white hover:bg-primary/90 ';
  } else if (variant === 'secondary'){
    styles += 'bg-secondary text-white hover:bg-secondary/90 '
  } else if (variant === 'outline') {
    styles += 'border-2 border-primary text-primary hover:bg-primary hover:text-white ';
  } else if(variant === 'ghost'){
    styles += 'hover:bg-accent hover:text-white '
  }

  if(size === 'sm'){
    styles += 'px-3 py-1.5 text-sm '
  } else if (size === 'md'){
    styles+= 'px-4 py-2 '
  }else if(size === 'lg'){
    styles += 'px-6 py-3 text-lg '
  }
  return (
    <button onClick={onClick} disabled={disabled} className={styles + className} {...props}>
      {children}
    </button>
  );
}