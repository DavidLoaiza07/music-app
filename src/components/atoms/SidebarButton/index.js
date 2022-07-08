import "./index.css";

const SidebarButton = (props) => {
  return (
    <button
      className={
        "sidebarButton " +
        (props.className || "") +
        (props.highlight ? " highlight " : "")
      }
      onClick={(event) => {
        if (props.onClick) {
          props.onClick(event);
        }
      }}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default SidebarButton;
