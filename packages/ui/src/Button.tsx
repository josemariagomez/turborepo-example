import * as React from "react";

export interface ButtonProps extends React.PropsWithChildren {
  type?: "button" | "submit" | "reset",
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
}

export const Button = ({ type, onClick, disabled, children }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="ui-flex ui-w-full ui-items-center ui-justify-center ui-rounded-md ui-border ui-border-transparent ui-px-8 ui-py-3 ui-text-base ui-font-medium ui-no-underline ui-bg-white ui-text-black hover:ui-bg-gray-300 md:ui-py-3 md:ui-px-10 md:ui-text-lg md:ui-leading-6">
      {children}
    </button>
  );
};
