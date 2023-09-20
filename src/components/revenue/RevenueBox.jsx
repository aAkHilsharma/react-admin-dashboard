import "./revenue.scss";

const RevenueBox = ({ title, amount, color }) => {
  return (
    <div className="revenue">
      <p className="revenue-title">{title}</p>
      <p className="revenue-amount" style={{ color }}>
        ${amount}
      </p>
    </div>
  );
};

export default RevenueBox;
