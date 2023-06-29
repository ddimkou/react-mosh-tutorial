interface Props {
  children: string;
  handleDisable: () => void;
}
const Alert = ({ children, handleDisable }: Props) => {
  return (
    <div>
      {" "}
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleDisable}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
