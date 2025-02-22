import { useEffect, useState } from "react";
import SmoothedLine from "./MrrMovementsChart";
import { getMrrMovementsData } from "../../services/dashboardApiService";
import { DailySum } from "../../interfaces/interface";
import { setAuthToken } from "../../utils/setAuthToken";
import { useAuth } from "../../context/AuthContext";
import { useDashboard } from "../../context/DashboardContext";

export const MrrMovements = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  const { token } = useAuth();
  const { dateRange } = useDashboard();



  return (
    <div className="bg-white w-full rounded-xl p-5">
      <div className="flex flex-row">
        <h4 className="font-bold text-sky-600">MRR Movements</h4>
      </div>

      <SmoothedLine xData={xData} yData={yData} />
    </div>
  );
}