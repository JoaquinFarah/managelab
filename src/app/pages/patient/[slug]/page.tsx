import { useRouter } from "next/router";

const patients = [
  { id: "1", name: "Juan Pérez", age: 34, slug: "juan-perez", email: "juan.perez@example.com", analyses: [] },
  { id: "2", name: "María López", age: 29, slug: "maria-lopez", email: "maria.lopez@example.com", analyses: [] },
  { id: "3", name: "Carlos Gómez", age: 41, slug: "carlos-gomez", email: "carlos.gomez@example.com", analyses: [] },
  { id: "4", name: "Ana Martínez", age: 36, slug: "ana-martinez", email: "ana.martinez@example.com", analyses: [] },
  { id: "5", name: "Pedro Sánchez", age: 50, slug: "pedro-sanchez", email: "pedro.sanchez@example.com", analyses: [] },
];

const PatientProfile = () => {
  const router = useRouter();
  const { slug } = router.query; // Captura el slug desde la URL

  const patient = patients.find((p) => p.slug === slug);

  if (!patient) {
    return <p>Paciente no encontrado.</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Perfil de {patient.name}</h1>
      <div className="mt-4">
        <p><strong>Edad:</strong> {patient.age}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <h2 className="text-xl mt-4">Historial de Análisis:</h2>
        {patient.analyses.length === 0 ? (
          <p>No hay análisis registrados.</p>
        ) : (
          <ul>
            {patient.analyses.map((analysis) => (
              <li key={analysis.id}>
                {analysis.type} - {new Date(analysis.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default PatientProfile;
