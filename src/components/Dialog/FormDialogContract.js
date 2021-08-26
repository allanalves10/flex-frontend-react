import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { usePerson } from '../../contexts/usePerson';

export function FormDialogContract({ open, onHide, onConfirm, debts, onChange, type }) {
  const [personName, setPersonName] = useState(null);
  const { person } = usePerson();

  useEffect(() => {
    if (debts.idUsuario) {
      const findPerson = person.filter(e => e.id === debts.idUsuario);
      setPersonName(findPerson[0]);
    }
  }, []);
  const debtsDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={onHide}
      />
      <Button
        label="Salvar"
        icon="pi pi-check"
        className="p-button-text-secondary"
        onClick={onConfirm}
      />
    </>
  );

  const handleSelectPerson = (e) => {
    onChange(e, 'idUsuario')
    setPersonName(e.value);
  }

  return (
    <Dialog
      visible={open}
      style={{ width: '450px' }}
      header={type === 'create' ? 'Cadastro de Dívida' : 'Editar Dívida'}
      modal
      className="p-fluid"
      footer={debtsDialogFooter}
      onHide={onHide}
    >
      <div style={{display: 'flex', gap: '2rem', flexDirection: 'column'}}>
        <div className="p-field">
          <label htmlFor="name">Cliente</label>
          <Dropdown 
            value={personName} 
            options={person} 
            onChange={handleSelectPerson} 
            optionLabel="name" />
        </div>
        <div className="p-field">
          <label htmlFor="description">Motivo</label>
          <InputText
            id="Description"
            value={debts.motivo}
            onChange={e => onChange(e, 'motivo')}
            required
          />
        </div>
        <div className="p-field">
          <label htmlFor="description">Valor</label>
          <InputText
            id="Description"
            value={debts.valor}
            onChange={e => onChange(e, 'valor')}
            required
          />
        </div>
      </div>
    </Dialog>
  );
}
