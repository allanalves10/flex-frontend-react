import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ApiPlaceHolder } from '../service/Api';

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState([]);
  
  useEffect(() => {
    async function getPerson() {
        try {
            const { data } = await ApiPlaceHolder.get('users');
            setPerson(data);

        } catch (err) {
            console.error(err);
            toast.error('Erro ao carregar os dados dos usuários!');

        }
    }

    getPerson();
  }, []);

  return (
    <PersonContext.Provider value={{ person }}>
      {children}
    </PersonContext.Provider>
  );
};

export const usePerson = () => useContext(PersonContext);