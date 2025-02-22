import { useEffect, useState } from "react";
import { getMrrData } from "../../services/dashboardApiService";
import { useAuth } from "../../context/AuthContext";
import { useDashboard } from "../../context/DashboardContext";
import moment from "moment";

export const AnnualRunRate = () => {
  const [mrr, setMrr] = useState(0);
  const [formattedAnnualRunRate, setFormattedAnnualRunRate] = useState('$0');

  const { token } = useAuth();
  const { dateRange } = useDashboard();


  return (
    <div className="bg-white w-full rounded-xl p-5">
      <div className="flex flex-row">
        <h4 className="font-bold text-sky-600">Annual Run Rate</h4>
      </div>

      <div className="flex flex-row mt-8">
        <span className="font-bold text-sky-600">{formattedAnnualRunRate}</span>
        <span className="text-sky-600 ms-auto text-sm">{moment(dateRange.endDate).format('DD, MMM YYYY')}</span>
      </div>
    </div>
  );
}