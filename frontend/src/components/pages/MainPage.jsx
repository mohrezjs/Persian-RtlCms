import React from "react";
import InfoCard from "../InfoCard";
import Chart from "../Chart";
import { xAxisData} from "../../DataFile";
const MainPage = () => {
    return (
        <div>
            <InfoCard />
            <Chart title="فروش ماهانه" data={xAxisData} dataKey="sale"/>

          
        </div>
    );
};

export default MainPage;
