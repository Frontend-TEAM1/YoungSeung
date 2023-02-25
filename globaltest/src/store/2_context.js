import { createContext, useState } from 'react';

const initialState = false;

export const ModalContext = createContext();
export const SetModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  return (
  <ModalContext.Provider value={isModalOpen}>
    <SetModalContext.Provider value={setIsModalOpen}>{children}</SetModalContext.Provider>
  </ModalContext.Provider>
  )
}

export default ModalProvider;
