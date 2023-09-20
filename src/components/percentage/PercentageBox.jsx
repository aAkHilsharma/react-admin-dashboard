import "./percentagebox.scss";

const PercentageBox = ({ title, percentage }) => {
  return (
    <div className="percentage">
      <p className="percentage-title">{title}</p>
      <p className="percentage-value">{percentage} %</p>
    </div>
  );
};

export default PercentageBox;
