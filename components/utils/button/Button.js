import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";
import styled from "styled-components";

const NewContainedButton = styled(MuiButton)`
  min-width: fit-content !important;
  text-transform: unset !important;
  font-weight: 600 !important;
  font-family: inherit !important;
  border-radius: ${({ noBorder }) => (noBorder ? 0 : "0.63rem")} !important;

  line-height: ${(props) =>
    props.size === "xl"
      ? "1.75rem"
      : props.size === "lg"
      ? "1.31rem"
      : props.size === "md"
      ? "1.5rem"
      : "1rem"} !important;

  font-size: ${(props) =>
    props.size === "xl"
      ? "1.25rem"
      : props.size === "lg"
      ? "1.13rem"
      : props.size === "md"
      ? "1rem"
      : "0.75rem"} !important;

  padding: ${(props) =>
    props.size === "xl"
      ? "1.5rem 3.31rem"
      : props.size === "lg"
      ? "1.19rem 1.75rem"
      : props.size === "md"
      ? "0.75rem 1.13rem"
      : "0.5rem 0.75rem"} !important;

  color: ${(props) =>
    props.disabled
      ? props.theme.colors.primary200
      : props.secondary
      ? props.theme.colors.secondary800
      : props.theme.colors.primary50} !important;

  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.primary50
      : props.secondary
      ? props.theme.colors.secondary500
      : props.theme.colors.primary500} !important;

  &:hover {
    cursor: ${({ disabled }) =>
      disabled ? "not-allowed" : "pointer"} !important;

    color: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary900
        : props.theme.colors.primary50} !important;

    background-color: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary700
        : props.theme.colors.primary700} !important;
  }
`;

const NewOutlinedButton = styled(MuiButton)`
  min-width: fit-content !important;
  text-transform: unset !important;
  font-weight: 600 !important;
  border-width: 0.13rem !important;
  font-family: inherit !important;
  border-radius: ${({ noBorder }) => (noBorder ? 0 : "0.63rem")} !important;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme?.colors?.[bgColor] : "transparent"} !important;
  line-height: ${(props) =>
    props.size === "xl"
      ? "1.75rem"
      : props.size === "lg"
      ? "1.31rem"
      : props.size === "md"
      ? "1.5rem"
      : "1rem"} !important;

  font-size: ${(props) =>
    props.size === "xl"
      ? "1.25rem"
      : props.size === "lg"
      ? "1.13rem"
      : props.size === "md"
      ? "1rem"
      : "0.75rem"} !important;

  padding: ${(props) =>
    props.size === "xl"
      ? "1.5rem 3.31rem"
      : props.size === "lg"
      ? "1.19rem 1.75rem"
      : props.size === "md"
      ? "0.75rem 1.13rem"
      : "0.5rem 0.75rem"} !important;

  border-color: ${(props) =>
    props.disabled
      ? props.theme.colors.primary200
      : props.secondary
      ? props.theme.colors.secondary700
      : props.theme.colors.primary500} !important;

  color: ${(props) =>
    props.disabled
      ? props.theme.colors.primary200
      : props.secondary
      ? props.theme.colors.secondary700
      : props.theme.colors.primary500} !important;

  &:hover {
    border-width: 0.13rem !important;
    border-color: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary500
        : props.theme.colors.primary500} !important;

    color: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary800
        : props.theme.colors.primary50} !important;

    background-color: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary500
        : props.theme.colors.primary500} !important;
  }
`;

const NewTextButton = styled(NewOutlinedButton)`
  &:hover {
    border-width: 0.13rem !important;

    color: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary900
        : props.theme.colors.primary700} !important;

    background-color: unset !important;
  }
`;

const SocialButton = styled(NewContainedButton)`
  background-color: ${({ social }) => {
    if (social === "telegram") {
      return "#0088CC";
    }
    if (social === "discord") {
      return "#7289DA";
    }
    if (social === "linkedin") {
      return "#0077B5";
    }
    return "#25D366";
  }} !important;

  &:hover {
    background-color: ${({ social }) => {
      if (social === "telegram") {
        return "#0076B1";
      }
      if (social === "discord") {
        return "#5F73BB";
      }
      if (social === "linkedin") {
        return "#005A89";
      }
      return "#23AD56";
    }} !important;
  }
`;

const Button = ({ variant = "", social = "", ...props }) => {
  if (variant === "outlined") {
    return <NewOutlinedButton {...props} variant="outlined" disableElevation />;
  }

  if (variant === "text") {
    return <NewTextButton {...props} variant="text" disableElevation />;
  }

  if (social) {
    return (
      <SocialButton
        {...props}
        variant="contained"
        social={social}
        disableElevation
      />
    );
  }

  return <NewContainedButton {...props} variant="contained" disableElevation />;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["outlined", "text"]),
  social: PropTypes.oneOf(["telegram", "discord", "linkedin", "whatsapp"]),
};

export default Button;
