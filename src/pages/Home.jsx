import { AiOutlineInfoCircle } from "react-icons/ai";
import MixBarChart from "../components/barchart/mix/MixBarChart";
import SimpleBarChartBox from "../components/barchart/simple/SimpleBarChartBox";
import LineChartBox from "../components/linechart/LineChartBox";
import PercentageBox from "../components/percentage/PercentageBox";
import PieChartBoxBlue from "../components/piechart/PieChartBox";
import RevenueBox from "../components/revenue/RevenueBox";

import "./home.scss";
import AreaChartBox from "../components/areachart/AreaChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box-1">
        <RevenueBox
          title="Total Accounts Receivable"
          color="#38659d"
          amount="6,621,280"
        />
        <AreaChartBox color="#38659d" />
      </div>
      <div className="box box-2">
        <RevenueBox
          title="Total Accounts Payable"
          color="#ff4f4e"
          amount="1,630,270"
        />
        <AreaChartBox color="#ff4f4e" />
      </div>
      <div className="box box-3">
        <PercentageBox title="Equity Ratio" percentage="75.38" />
      </div>
      <div className="box box-4">
        <PercentageBox title="Debt Equity" percentage="1.10" />
      </div>
      <div className="box box-5">
        <div className="box-5-title">
          <p>Total Accounts Receivable and Payable Aging</p>
        </div>
        <SimpleBarChartBox />
      </div>
      <div className="box box-6">
        <div className="box-6-title">
          <p>Current Ratio</p>
          <AiOutlineInfoCircle />
        </div>
        <PieChartBoxBlue
          value1={140}
          value2={40}
          color="#38659d"
          text="1.86%"
        />
      </div>
      <div className="box box-7">
        <div className="box-7-title">
          <p>DSI</p>
          <p className="box-7-title-text">[Days Sales Inventory]</p>
        </div>
        <PieChartBoxBlue
          value1={60}
          value2={120}
          title="DSI"
          text="10 Days"
          color="#faac1e"
        />
      </div>
      <div className="box box-8">
        <div className="box-8-title">
          <p>DSO</p>
          <p className="box-8-title-text">[Days Sales Outstanding]</p>
        </div>
        <PieChartBoxBlue
          value1={50}
          value2={130}
          title="DSO"
          text="7 Days"
          color="#ff4f4e"
        />
      </div>
      <div className="box box-9">
        <div className="box-9-title">
          <p>DPO</p>
          <p className="box-9-title-text">[Days Payable Outstanding]</p>
        </div>
        <PieChartBoxBlue
          value1={170}
          value2={10}
          title="DPO"
          text="28 Days"
          color="#00a55f"
        />
      </div>
      <div className="box box-10">
        <div className="box-10-title">
          <p>Net Working Capital vs Gross Working Capital</p>
        </div>
        <LineChartBox />
      </div>
      <div className="box box-11">
        <div className="box-11-title">
          <p>Profit and Loss summary</p>
        </div>
        <MixBarChart />
      </div>
    </div>
  );
};

export default Home;
