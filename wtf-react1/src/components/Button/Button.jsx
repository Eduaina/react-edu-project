import React, { forwardRef } from "react";
import "./Button.css";


function cx(...args) {
  return args.filter(Boolean).join(" ");
}

export const Button = forwardRef(function Button(
  {
    as,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    children,
    className,
    href,
    type = "button",
    onClick,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;
  const computedAs = as || (href ? "a" : "button");
  const isButton = computedAs === "button";

  const classes = cx(
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && "btn--full",
    isDisabled && "btn--disabled",
    leftIcon && "btn--has-left-icon",
    rightIcon && "btn--has-right-icon",
    className
  );

  const anchorProps =
    computedAs === "a" && isDisabled
      ? { "aria-disabled": true, onClick: (e) => e.preventDefault(), tabIndex: -1, href: href || "#" }
      : computedAs === "a"
      ? { href }
      : {};

  const buttonProps = isButton
    ? { type, disabled: isDisabled, "aria-disabled": isDisabled }
    : { role: "button", "aria-disabled": isDisabled };

  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) onClick(e);
  }

  const Content = (
    <>
      {loading && (
        <span className="btn__spinner" aria-hidden="true" />
      )}
      {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__content">{children}</span>
      {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </>
  );

  const Element = computedAs;

  return (
    <Element
      {...buttonProps}
      {...anchorProps}
      {...rest}
      ref={ref}
      className={classes}
      onClick={handleClick}
    >
      {Content}
    </Element>
  );
});
 
export default Button;