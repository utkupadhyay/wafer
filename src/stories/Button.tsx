import './button.css';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const mode = {
    primary: 'wafer-btn-primary',
    secondary: 'wafer-btn-secondary',
    disabled: 'wafer-btn-disabled',
  };
  const buttonClassName = classNames('wafer-btn', `button-${size}`, mode[disabled ? 'disabled' : (primary ? 'primary' : 'secondary')]);

  return (
    <button
      type="button"
      className={buttonClassName}
      style={{ backgroundColor }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button