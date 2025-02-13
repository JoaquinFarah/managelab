// // pages/api/appointments.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '@/utils/supabaseClient';


// // Datos de ejemplo (reemplaza con tu base de datos)
// const appointments = [
//   {
//     id: '1',
//     patientId: '1',
//     specialistId: '1',
//     date: '2024-05-15',
//     time: '10:00',
//     confirmed: true,
//   },
//   // ... más turnos
// ];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const { date } = req.query;
//     const filteredAppointments = appointments.filter(
//       (appt) => appt.date === date
//     );
//     res.status(200).json(filteredAppointments);
//   } else if (req.method === 'POST') {
//     // Lógica para crear un nuevo turno
//   } // ... otros métodos
// }

// // pages/api/specialists.ts
// // ... (similar al ejemplo anterior)

// pages/api/appointments.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/utils/supabaseClient'; // Importa el cliente

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { date } = req.query;

    const { data, error } = await supabase
      .from('appointments') // Reemplaza 'appointments' con el nombre de tu tabla
      .select('*') // Selecciona todas las columnas
      .eq('date', date); // Filtra por fecha

    if (error) {
      console.error('Error al obtener turnos:', error);
      return res.status(500).json({ error: 'Error al obtener turnos' });
    }

    res.status(200).json(data);
  } // ... otros métodos
}