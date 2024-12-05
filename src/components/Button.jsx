function Button({ lable = "Button", className = "" }) {
  return (
    <div className="flex items-center justify-center mb-4">
      <button id="swapButton" className={className}>
        {lable}
      </button>
    </div>
  );
}
export default Button;
