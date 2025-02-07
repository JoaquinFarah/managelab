"use client";
import React, { useState } from "react";

export default function AppointmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointments, setAppointments] = useState<
    { day: string; time: string }[]
  >([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveAppointment = () => {
    if (
      selectedDay &&
      selectedTime &&
      !appointments.some(
        (appt) => appt.day === selectedDay && appt.time === selectedTime
      )
    ) {
      setAppointments([...appointments, { day: selectedDay, time: selectedTime }]);
      setSelectedDay("");
      setSelectedTime("");
      toggleModal();
    } else {
      alert("Ese horario ya está reservado o no se completó la selección.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Turnos</h1>

      {/* Schedule Button */}
      <button
        type="button"
        onClick={toggleModal}
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      >
        <svg
          className="w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
            clipRule="evenodd"
          />
        </svg>
        Selección de turnos
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          aria-hidden={!isModalOpen}
        >
          <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Reserva de turnos
              </h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Cerrar</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                Elija el día
              </label>
              <input
                type="date"
                className="block w-full px-3 py-2 border rounded-lg mb-4"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              />

              <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                Elija un turno
              </label>
              <ul className="grid grid-cols-3 gap-2 mb-5">
                {[
                  "17:00 PM",
                  "17:30 PM",
                  "18:00 PM",
                  "18:30 PM",
                  "19:00 PM",
                  "19:30 PM",
                  "20:00 PM",
                  "20:30 PM",
                  "21:00 PM",
                ].map((time, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={`time-${index}`}
                      name="timetable"
                      className="hidden peer"
                      value={time}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    />
                    <label
                      htmlFor={`time-${index}`}
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 peer-checked:border-blue-700 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                    >
                      {time}
                    </label>
                  </li>
                ))}
              </ul>

              {/* Modal Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleSaveAppointment}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointments Table */}
      <h2 className="text-xl font-bold mt-8 mb-4">Turnos reservados</h2>
      <table className="min-w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              Día
            </th>
            <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              Horario
            </th>
            <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              Paciente
            </th>
            <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              Especialista
            </th>
            <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              Confirmado
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                {appointment.day}
              </td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                {appointment.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
