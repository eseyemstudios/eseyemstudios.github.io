import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  icon,
  className = '' 
}) {
  const classNames = [
    'btn',
    `btn-${variant}`,
    icon ? 'btn-with-icon' : '',
    className
  ].filter(Boolean).join(' ')

  const content = icon ? (
    <>
      <img src={icon} alt="" className="btn-icon" />
      <span>{children}</span>
    </>
  ) : children

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button className={classNames} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button