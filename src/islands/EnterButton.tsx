type Props = {
  onClick: () => void;
};

const EnterButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button id="enter-button" className="absolute inset-0" onClick={onClick}>
      Click to Enter
    </button>
  );
};

export default EnterButton;
