function Button({ lable = "Button", className = "", swap }) {
  return (
    <div className="flex items-center justify-center mb-4">
      <button id="swapButton" className={className} onClick={swap}>
        {lable}
      </button>
    </div>
  );
}
export default Button;
