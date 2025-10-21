import { ReactNode } from 'react'

export interface UseAboutLogicReturn {
  // Aquí puedes agregar lógica si es necesario en el futuro
}

interface HeadlessAboutProps {
  children: (logic: UseAboutLogicReturn) => ReactNode
}

export const HeadlessAbout = ({ children }: HeadlessAboutProps) => {
  const logic: UseAboutLogicReturn = {
    // Lógica futura aquí
  }

  return <>{children(logic)}</>
}