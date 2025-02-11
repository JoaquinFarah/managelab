"use client"
import AppointmentCalendar from '@/components/AppointmentCalendar';
import { Pyramid, Lock, Fingerprint, RefreshCcw } from 'lucide-react';

const features = [
  {
    name: 'Administre sus pacientes',
    description:
      'La manera mas rapida y efectiva de administrar sus pacientes. Con un solo click podra acceder a toda la informacion necesaria para su consulta.',
    icon: Pyramid,
  },
  {
    name: 'Proteja su informacion',
    description:
      'Con un sistema de seguridad avanzado, podra estar tranquilo sabiendo que su informacion esta segura y protegida.',
    icon: Lock,
  },
  {
    name: 'Tareas mas simples',
    description:
      'Con un sistema simplificado y de actualizacion constante, podra realizar sus tareas de manera mas rapida y efectiva.',
    icon: RefreshCcw,
  },
  {
    name: 'Este al tanto de todo',
    description:
      'Con notificaciones en tiempo real, podra estar al tanto de todo lo que sucede en su consultorio y ver el resultado de los analisis clínicos.',
    icon: Fingerprint,
  },
]

export default function Example() {
  return (
    <div className="bg-white sm:py-5 sm:pl-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">BioNTech</h2>
          <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Todo lo que necesitas para tu consultorio médico y laboratorio clínico
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Sistema pensado para administración completa de consultorios médicos y laboratorios clínicos. Con un sistema de seguridad avanzado, podra estar tranquilo sabiendo que su informacion esta segura y protegida.
          </p>
        </div>
        <div className="mx-auto mt-3 max-w-2xl sm:mt-5 lg:mt-10 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <h1>Agenda de turnos</h1>
      <AppointmentCalendar />
    </div>
  )
}
