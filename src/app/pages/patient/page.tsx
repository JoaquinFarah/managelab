import Link from "next/link";

const patients = [
  { id: "11111111", name: "Jorge Mendoza", age: 40, slug: "jorge-mendoza" },
  { id: "11827330", name: "Juan Pérez", age: 34, slug: "juan-perez" },
  { id: "22345675", name: "María López", age: 29, slug: "maria-lopez" },
  { id: "31334887", name: "Carlos Gómez", age: 41, slug: "carlos-gomez" },
  { id: "45984275", name: "Ana Martínez", age: 36, slug: "ana-martinez" },
  { id: "95000543", name: "Pedro Sánchez", age: 50, slug: "pedro-sanchez" },
  { id: "11199533", name: "Martin Garcia", age: 10, slug: "martin-garcia" },

];

const PatientsPage = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Lista de Pacientes</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {patients.map((patient) => (
          <Link
            key={patient.id}
            href={`/pages/patient/${patient.id}`}
            className="block p-4 border border-gray-200 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold">{patient.name}</h2>
            <p className="text-gray-600">DNI: {patient.id}</p>
            <p className="text-gray-600">Edad: {patient.age}</p>

          </Link>
        ))}
      </div>
    </main>
  );
};

export default PatientsPage;
