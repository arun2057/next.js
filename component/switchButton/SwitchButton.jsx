import styles from "./SwitchButton.module.css";

const SwitchButton = () => {
  return (
    <div class='container'>
      <label class='switch'>
        <input type='checkbox' class='switch-input' />
        <span class='switch-label' data-on='On' data-off='Off'></span>
        <span class='switch-handle'></span>
      </label>

      <label class='switch'>
        <input type='checkbox' class='switch-input' checked />
        <span class='switch-label' data-on='On' data-off='Off'></span>
        <span class='switch-handle'></span>
      </label>
    </div>
  );
};

export default SwitchButton;
