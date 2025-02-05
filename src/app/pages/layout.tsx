// import type { Metadata } from "next"
// import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
// import type React from "react" // Import React

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// })

// export const metadata: Metadata = {
//   title: "ManageLab",
//   description: "All in one platform for managing your lab",
// }

// export default function PagesLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SidebarProvider>
//           <AppSidebar />
//           <main>{children}</main>
//         </SidebarProvider>
//       </body>
//     </html>
//   )
// }

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

