import cls from "classnames";
import "./button.css";

function Button({
  children,
  isRoundBtn,
  isPlayBtn,
  isGreyBtn,
  hasLabel,
  ...restProps
}) {
  const classes = cls("btn", {
    "rounded-btn": isRoundBtn,
    "play-btn": isPlayBtn,
    "grey-btn": isGreyBtn,
    "lable-btn": hasLabel,
  });
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
