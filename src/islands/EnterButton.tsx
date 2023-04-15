type Props = {
  onClick: () => void;
};

const EnterButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="absolute inset-0 flex justify-center align-center"
      id="enter-button"
      onClick={onClick}
    >
      <div className="m-auto">
        <div className="text-white bg-black px-4 py-2">Enter</div>
      </div>
    </button>
  );
};

export default EnterButton;
