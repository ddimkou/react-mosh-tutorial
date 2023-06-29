interface Props {
  handleVisible: () => void;
}
const Button = ({ handleVisible }: Props) => {
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleVisible}
        >
          Primary
        </button>
      </div>
    </div>
  );
};

export default Button;
