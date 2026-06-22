import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}) {
  const classNames = [
    'btn',
    `btn-${variant}`,
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button