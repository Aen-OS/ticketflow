import data from "@/app/api/tickets.json";
import json from "@/app/api/userstats.json";
import PrioPieChart from "../ui/piechart";

export default function Analytics() {
  const stats = data.stats;
  const userStats = json.engineers;

  const sarahChen = userStats[0];
  const jamesWilson = userStats[1];
  const lisaWang = userStats[2];
  const markThompson = userStats[3];
  const oliviaMartinez = userStats[4];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">IT Helpdesk Analytics</h1>

      <div className="grid grid-cols-2">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Total Tickets</h2>
            <p className="text-3xl font-bold" id="total-tickets">
              {stats.total}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Open Tickets</h2>
            <p className="text-3xl font-bold" id="open-tickets">
              {stats.byStatus.assigned + stats.byStatus.unassigned}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Closed Tickets</h2>
            <p className="text-3xl font-bold" id="closed-tickets">
              {stats.byStatus.closed}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center align-items-center">
          <PrioPieChart />
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="bg-gray-100 p-4 rounded shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Tickets by Priority</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P1 (Critical)</h3>
            <p className="text-2xl font-bold" id="p1-count">
              {stats.byPriority.P1}
            </p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P2 (High)</h3>
            <p className="text-2xl font-bold" id="p2-count">
              {stats.byPriority.P2}
            </p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P3 (Medium)</h3>
            <p className="text-2xl font-bold" id="p3-count">
              {stats.byPriority.P3}
            </p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P4 (Low)</h3>
            <p className="text-2xl font-bold" id="p4-count">
              {stats.byPriority.P4}
            </p>
          </div>
        </div>
      </div>

      {/* IT Engineer Stats */}
      <div className="bg-gray-100 p-4 rounded shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Sarah Chen
            </h3>
            <p className="">Open: {sarahChen.openTickets}</p>
            <p>Closed: {sarahChen.closedTickets}</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              James Wilson
            </h3>
            <p className="">Open: {jamesWilson.openTickets}</p>
            <p>Closed: {jamesWilson.closedTickets}</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Lisa Wang
            </h3>
            <p>Open: {lisaWang.openTickets} </p>
            <p>Closed: {lisaWang.closedTickets}</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Mark Thompson
            </h3>
            <p>Open: {markThompson.openTickets}</p>
            <p>Closed: {markThompson.closedTickets}</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Olivia Martinez
            </h3>
            <p>Open: {oliviaMartinez.openTickets}</p>
            <p>Closed: {oliviaMartinez.closedTickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
