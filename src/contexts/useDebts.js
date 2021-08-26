import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Api } from '../service/Api';
import { environment } from '../environments/environment';

export const DebtsContext = createContext();

export const DebtsProvider = ({ children }) => {
  const [debts, setDebts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  
  useEffect(() => {
    async function getDebts() {
        try {
            const { data } = await Api.get(`divida?uuid=${environment.uuid}`);
            setDebts(data.result);

        } catch (err) {
            console.error(err);
            toast.error('Erro ao carregar os dados da dívida!');

        }
    }

    getDebts();
  }, [isEdit]);

  return (
    <DebtsContext.Provider value={{ debts, isEdit, setIsEdit }}>
      {children}
    </DebtsContext.Provider>
  );
};

export const useDebts = () => useContext(DebtsContext);
