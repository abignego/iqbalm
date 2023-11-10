import Chart from "apexcharts";
import React from "react";
const FaqPages = () => {
  return (
    <React.Fragment>
      <div className="contain">
        <Chart
          type="pie"
          width={1349}
          heigh={550}
          series={[23, 42, 23, 23]}
          options={{
            labels: ["indo", "joko", "adsa", "asda"],
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default FaqPages;
