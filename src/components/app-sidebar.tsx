"use client"
import { Calendar, ChevronDown, Home, Inbox, Settings, LogOut, Syringe, FlaskConical, Radiation, FolderCheck } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const config = [
  {
    title: "Configuración",
    url: "/pages",
    icon: Settings,
  },
  {
    title: "Cerrar Sesión",
    url: "/",
    icon: LogOut,
  },
]
const laboratory = [
  {
    title: "Tests de sangre",
    url: "/pages/laboratory",
    icon: Syringe,
  },
  {
    title: "Test de orina",
    url: "/pages/clinic",
    icon: FlaskConical,
  },
  {
    title: "Radiografias",
    url: "/pages/clinic",
    icon: Radiation,
  },

]
const patients = [
  {
    title: "Historia Clinica",
    url: "/pages/clinic",
    icon: FolderCheck,
  },
  {
    title: "Datos personales",
    url: "/pages/data",
    icon: Inbox,
  },
  {
    title: "Turnos",
    url: "#",
    icon: Calendar,
  },
 
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>BioNTech</SidebarGroupLabel>          
          
          <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Pacientes
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
            <SidebarGroupContent>
                <SidebarMenu>
                  {patients.map((patients) => (
                    <SidebarMenuItem key={patients.title}>
                      <SidebarMenuButton asChild>
                        <a href={patients.url}>
                          <patients.icon />
                          <span>{patients.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Laboratorio
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
            <SidebarGroupContent>
                <SidebarMenu>
                  {laboratory.map((laboratory) => (
                    <SidebarMenuItem key={laboratory.title}>
                      <SidebarMenuButton asChild>
                        <a href={laboratory.url}>
                          <laboratory.icon />
                          <span>{laboratory.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Configuración
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
            <SidebarGroupContent>
                <SidebarMenu>
                  {config.map((config) => (
                    <SidebarMenuItem key={config.title}>
                      <SidebarMenuButton asChild>
                        <a href={config.url}>
                          <config.icon />
                          <span>{config.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    // defaultOpen por si quiero que se abra por defecto
  )
}

