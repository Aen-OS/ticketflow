"use client";

import data from "../api/tickets.json";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarClock } from "lucide-react";

export default function Main() {
  const rows = data.tickets;

  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [assigned, setAssigned] = useState("");

  const filteredData = rows.filter((item) => {
    const s = searchTerm.trim().toLowerCase();
    const pr = priority.trim().toLowerCase();
    const st = status.trim().toLowerCase();
    const dt = date; // date input is YYYY-MM-DD
    const asg = assigned.trim().toLowerCase();

    const matchesSearch =
      s === "" ||
      item.title?.toLowerCase().includes(s) ||
      item.sender?.toLowerCase().includes(s) ||
      item.assignedTo?.toLowerCase().includes(s);

    const matchesPriority = pr === "" || item.priority?.toLowerCase() === pr;
    const matchesStatus = st === "" || item.status?.toLowerCase() === st;
    const matchesDate =
      dt === "" || (item.date ? item.date.startsWith(dt) : false);
    const matchesAssigned =
      asg === "" || item.assignedTo?.toLowerCase().includes(asg);

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus &&
      matchesDate &&
      matchesAssigned
    );
  });

  function clearForm() {
    setSearchTerm("");
    setPriority("");
    setStatus("");
    setDate("");
    setAssigned("");
  }

  // Pagination functionality
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(filteredData.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  return (
    <main className="px-5 flex flex-col gap-3 lg:container lg:mx-auto">
      <div className="border-2 rounded p-5">
        <form className="">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input w-full p-2"
            />
          </div>
          <div className="flex flex-col md:flex-row pt-4">
            <div className="flex gap-3">
              <select
                className="select select-neutral"
                id="prio"
                name="Priority"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Priority</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
              </select>
              <select
                className="select select-neutral"
                id="stat"
                name="Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Status</option>
                <option value="Unassigned">Unassigned</option>
                <option value="Assigned">Assigned</option>
                <option value="Closed">Closed</option>
              </select>
              <label className="input w-full">
                <span className="label lg:hidden">
                  <CalendarClock />
                </span>
                <input
                  id="date"
                  type="date"
                  min="2024-02-15"
                  max="2024-02-21"
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <input
                className="input"
                id="assigned"
                type="text"
                placeholder="Assigned To"
                onChange={(e) => setAssigned(e.target.value)}
              />
            </div>
            <button
              className="btn btn-neutral btn-md self-center mx-5 mt-5 md:mt-auto"
              onClick={clearForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className="border-2 rounded w-full p-5">
        <div className="w-full">
          <div className="flex justify-center sm:hidden">
            <p>Please rotate phone for tickets visibility</p>
          </div>
          <div className="hidden sm:flex sm:flex-col">
            <table className="table min-w-full table-fixed w-100 h-80">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left w-20">Priority</th>
                  <th className="px-3 py-2 text-left">Title</th>
                  {/* <th className="px-3 py-2 text-left">Description</th> */}
                  <th className="px-3 py-2 text-left">Sender</th>
                  <th className="px-3 py-2 text-left">Date</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-left">Assigned To</th>
                </tr>
              </thead>
              <tbody>
                {pageData.length === 0 ? (
                  <tr>
                    <td className="px-3 py-2" colSpan={7}>
                      No tickets available
                    </td>
                  </tr>
                ) : (
                  pageData.map((t) => (
                    <tr key={t.id} className="border-t">
                      <td className="px-3 py-2">{t.priority ?? "-"}</td>
                      <td className="px-3 py-2">
                        <a
                          className="hover:underline cursor-pointer"
                          href={`/tickets/${t.id}`}
                        >
                          {t.title}
                        </a>
                      </td>
                      {/* <td className="px-3 py-2">{t.description ?? "-"}</td> */}
                      <td className="px-3 py-2">{t.sender ?? "-"}</td>
                      <td className="px-3 py-2">
                        {t.date ? new Date(t.date).toLocaleString() : "-"}
                      </td>
                      <td className="px-3 py-2">{t.status ?? "-"}</td>
                      <td className="px-3 py-2">
                        {t.assignedTo ?? "Unassigned"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="text-center pt-5">
              <div className="join">
                {currentPage === 1 ? (
                  <button className="join-item btn btn-sm btn-disabled">
                    <ArrowLeft size={16} />
                  </button>
                ) : (
                  <button
                    className="join-item btn btn-sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <ArrowLeft size={16} />
                  </button>
                )}{" "}
                <button className="join-item btn btn-sm hover:bg-[#f8f8f8] ">
                  {currentPage}
                </button>
                {currentPage === maxPage ? (
                  <button className="join-item btn btn-sm btn-disabled">
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    className="join-item btn btn-sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
