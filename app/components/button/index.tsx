import styled, { CSSObject } from "@emotion/styled";
import { CSSProperties, FC, PropsWithChildren } from "react";
import { COLORS } from "../../constants/colors";

type ButtonProps = {
  variant?: "primary" | "secondary" | "link" | "dark" | "warning";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "icon";
  style?: CSSProperties;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  active?: boolean;
  nav?: boolean;
};

const paddingMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "8px 16px",
  md: "10px 18px",
  lg: "12px 20px",
  xl: "12px 24px",
  "2xl": "16px 32px",
  icon: "8px",
};

const variantMap: Record<NonNullable<ButtonProps["variant"]>, CSSObject> = {
  primary: {
    background: `linear-gradient(45deg, ${COLORS.primary.dark}, ${COLORS.primary.darker})`,
    transition: "all 0.1s ease",
    color: COLORS.primary.lightest,
    ":hover": {
      transform: "scale(1.02)",
      background: `linear-gradient(225deg, ${COLORS.primary.medium}, ${COLORS.primary.dark})`,
    },
    ":active": {
      boxShadow: `0px 0px 0px 4px ${COLORS.primary.light}50`,
    },
    ":disabled": {
      background: `linear-gradient(45deg, ${COLORS.primary.light}, ${COLORS.primary.medium})`,
      cursor: "not-allowed",
    },
  },

  secondary: {
    backgroundColor: COLORS.primary.medium,
    color: COLORS.primary.lightest,
    transition: "all 0.1s ease",
    ":hover": {
      backgroundColor: COLORS.primary.dark,
      transform: "scale(1.02)",
    },
    ":active": {
      boxShadow: `0px 0px 0px 4px ${COLORS.primary.light}50`,
    },
    ":disabled": {
      backgroundColor: COLORS.primary.light,
      cursor: "not-allowed",
    },
  },

  link: {
    color: "#595959",
    ":hover": { backgroundColor: "#EAF6F8" },
  },

  dark: {
    backgroundColor: "#252c3b",
    color: "#FFFFFF",
    ":hover": { backgroundColor: "#2c323d" },
  },

  warning: {
    backgroundColor: "#db2626",
    color: "#FFFFFF",
    ":hover": { backgroundColor: "#a71d1d" },
  },
};

const baseStyles: CSSObject = {
  borderRadius: "12px",
  fontWeight: 600,
  height: "fit-content",
};

const getButtonStyles = ({
  variant = "primary",
  size = "sm",
  active,
  nav,
}: ButtonProps): CSSObject => {
  const variantStyles = variantMap[variant];
  variantStyles.padding = paddingMap[size];

  if (active) {
    return {
      ...baseStyles,
      ...(nav
        ? { color: "#CE89FF", padding: paddingMap[size] }
        : {
            background: "linear-gradient(45deg, #E8C6FF, #742EA6)",
            color: "#FFFFFF",
            padding: paddingMap[size],
          }),
    };
  }

  return {
    ...baseStyles,
    ...variantStyles,
  };
};

const StyleButton = styled.button<ButtonProps>(getButtonStyles);

export const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  className,
  style,
  type,
  onClick,
  disabled,
  variant,
  size,
  active,
  nav,
}) => {
  return (
    <StyleButton
      disabled={disabled}
      type={type}
      style={style}
      className={className}
      onClick={onClick}
      variant={variant}
      size={size}
      active={active}
      nav={nav}
    >
      {children}
    </StyleButton>
  );
};
