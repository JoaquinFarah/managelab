// components/AppointmentCalendar.tsx
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Librería de calendario (puedes usar otra)
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario

interface Appointment {
  id: string;
  patientId: string;
  specialistId: string;
  date: Date;
  time: string;
  confirmed: boolean;
}

interface Specialist {
  id: string;
  name: string;
  specialty: string;
}

const AppointmentCalendar: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]); // Datos de la API
  const [specialists, setSpecialists] = useState<Specialist[]>([]); // Datos de la API
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);


  // Efecto para cargar los turnos al cambiar la fecha
  React.useEffect(() => {
    fetchAppointments(date);
  }, [date]);

  // Efecto para cargar los especialistas al montar el componente
  React.useEffect(() => {
    fetchSpecialists();
  }, []);

  // Función para manejar el clic en un turno
  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
  };

  // Función para obtener los turnos desde la API
const fetchAppointments = async (date: Date) => {
    const formattedDate = date.toISOString().slice(0, 10); // Formato YYYY-MM-DD
    const response = await fetch(`/api/appointments?date=${formattedDate}`);
    const data = await response.json();
    setAppointments(data);
  };
  
  // Función para obtener los especialistas desde la API
  const fetchSpecialists = async () => {
    const response = await fetch('/api/specialists');
    const data = await response.json();
    setSpecialists(data);
  };
  

  return (
    <div className="p-4">
      <Calendar value={date} onChange={setDate} />

      <div className="mt-4">
        <h2 className="text-lg font-bold">Turnos para el {date.toLocaleDateString()}</h2>

        {appointments.length === 0 ? (
          <p>No hay turnos disponibles para este día.</p>
        ) : (
          <ul className="list-disc">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className={`cursor-pointer ${
                  appointment.confirmed ? 'text-green-500' : 'text-yellow-500'
                }`}
                onClick={() => handleAppointmentClick(appointment)}
              >
                {appointment.time} - {
                  specialists.find((s) => s.id === appointment.specialistId)?.name
                } (
                {
                  specialists.find((s) => s.id === appointment.specialistId)?.specialty
                }
                )
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Detalles del turno seleccionado */}
      {selectedAppointment && (
        <div className="mt-4 border p-4">
          <h3 className="text-md font-bold">Detalles del turno</h3>
          <p>Paciente: {selectedAppointment.patientId}</p> {/* Reemplazar con el nombre */}
          <p>Especialista: {
            specialists.find((s) => s.id === selectedAppointment.specialistId)?.name
          }</p>
          <p>Fecha: {selectedAppointment.date.toLocaleDateString()}</p>
          <p>Hora: {selectedAppointment.time}</p>
          <p>Confirmado: {selectedAppointment.confirmed ? 'Sí' : 'No'}</p>
          {/* Botón para confirmar el turno (si no está confirmado) */}
          {!selectedAppointment.confirmed && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Confirmar turno
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentCalendar;