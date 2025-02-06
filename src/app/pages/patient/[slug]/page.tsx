import { Button } from "@/components/ui/button";
import Link from "next/link";

const patients = [
  { id: "11827330", name: "Juan Pérez", age: 34, slug: "11827330", cel:"26111827330", analyses: [ {id: "11827330", type: "orina", date: "12/04/2024", image: "servoescapular" } ] },
  { id: "22345675", name: "María López", age: 29, slug: "22345675", cel:"26122345675", analyses: [] },
  { id: "31334887", name: "Carlos Gómez", age: 41, slug: "31334887", cel:"26131334887", analyses: [] },
  { id: "45984275", name: "Ana Martínez", age: 36, slug: "45984275", cel:"26145984275", analyses: [] },
  { id: "95000543", name: "Pedro Sánchez", age: 50, slug: "95000543", cel:"26195000543", analyses: [] },
];

// Genera rutas estáticas
export async function generateStaticParams() {
  return patients.map((patient) => ({
    slug: patient.slug,
  }));
}

// Componente principal de la página
const PatientProfile = ({ params }: { params: { slug: string } }) => {
  const patient = patients.find((p) => p.slug === params.slug);

  if (!patient) {
    return <p>Paciente no encontrado.</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Perfil de {patient.name}</h1>
      <div className="mt-4">
      <p>
          <strong>DNI:</strong> {patient.id}
        </p>
        <p>
          <strong>Edad:</strong> {patient.age}
        </p>
        <p>
          <strong>Celular:</strong> {patient.cel}
        </p>
        <h2 className="text-xl mt-4">Historial de Análisis:</h2>
        {patient.analyses.length === 0 ? (
          <p>No hay análisis registrados.</p>
        ) : (
          <ul>
            {patient.analyses.map((analysis) => (
              <li key={analysis.id}>
                {analysis.type} - {analysis.image} - {analysis.date}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        <Link href="/pages/patient"> <Button>Atrás</Button> </Link>
      </div>
    </main>    
  );
};

export default PatientProfile;
