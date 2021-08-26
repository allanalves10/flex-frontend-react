import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../service/Api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import './DataTableDemo.css';
import { 
    Content,
    List,
    Title,
 } from "./styles";
import { useDebts } from "../../contexts/useDebts";
import FormatCurrency from "../../utils/FormatCurrency";
import { environment } from "../../environments/environment";
import { FormDialogContract } from "../../components/Dialog/FormDialogContract";

function Debts() {
    const [debtsDialog, setDebtsDialog] = useState(false);
    const [idDebts, setIdDebts] = useState('');
    const [debtsData, setDebtsData] = useState({
        idUsuario: null,
        motivo: null,
        valor: null,
    });
    const { debts, isEdit, setIsEdit } = useDebts();
    const [typeDialog, setTypeDialog] = useState('');
    const dt = useRef(null);

    const leftToolbarTemplate = () => (
        <>
            <Button
                label="Cadastrar Nova Dívida"
                icon="pi pi-plus"
                className="p-button-success p-mr-2"
                onClick={openNewDebts}
            />
        </>
    );

    const FormatValue = rowData => {
        return (
          <>
            <p>{FormatCurrency(rowData.valor)}</p>
          </>
        );
    };

    const actionEditDebts = rowData => (
        <>
          <Button
            icon="pi pi-pencil"
            style={{ color: '#fff' }}
            className="p-button-rounded p-button-warning"
            onClick={() => openEditDebts(rowData)}
          />
        </>
    );

    const DeleteDebts = rowData => {
        return (
          <>
            <Button
              icon="pi pi-trash"
              className="p-button-rounded p-button-danger"
              onClick={() => handlesDeleteDebts(rowData)}
            />
          </>
        );
    };

    const openNewDebts = () => {
        setTypeDialog('create')
        setDebtsDialog(true);
    };

    const openEditDebts = (rowData) => {
        setDebtsData({
            idUsuario: rowData.idUsuario,
            motivo: rowData.motivo,
            valor: rowData.valor,
        });
        setIdDebts(rowData._id);
        setTypeDialog('edit')
        setDebtsDialog(true);
    };

    const onInputChange = (e, name) => {
        let val;
        if (e.target.value.id) {
            val = e.target.value.id;
        } else {
            val = (e.target && e.target.value) || '';
        }
        let _debts = { ...debtsData };
        _debts[`${name}`] = val;
    
        setDebtsData(_debts);
    };

    const hideDialog = () => {
        setDebtsDialog(false);
      };

    async function registerOrEditDebt() {
        if (typeDialog === 'create') {
            try {
                const { data } = await Api.post(`divida?uuid=${environment.uuid}`, debtsData);
                setDebtsDialog(false);
                setDebtsData({
                    idUsuario: null,
                    motivo: null,
                    valor: null,
                });
                setIsEdit(!isEdit);
                return toast.success('Dívida registrada com sucesso.')
            } catch (err) {
                console.error(err);
                return toast.error('Erro ao registrar dívida.');
            }
        }
        
        try {
            const { data } = await Api.put(`divida/${idDebts}?uuid=${environment.uuid}`, debtsData);
            setDebtsDialog(false);
            setDebtsData({
                idUsuario: null,
                motivo: null,
                valor: null,
            });
            setIsEdit(!isEdit);
            toast.success('Dívida alterada com sucesso.')
        } catch (err) {
            console.error(err);
            toast.error('Erro ao alterar dívida.');
        }
    }

    async function handlesDeleteDebts(rowData) {
        try {
            const { data } = await Api.delete(`divida/${rowData._id}?uuid=${environment.uuid}`);
            setIsEdit(!isEdit);
            toast.success('Dívida excluída com sucesso.')
        } catch (err) {
            console.error(err);
            toast.error('Erro ao excluir dívida.');
        }
    }

    return(
        <>
            <Content>
                <List>
                    <Title>Listagem de Dívidas</Title>
                    <div className="datatable-crud-demo">
                        {/* <Toast ref={toast} /> */}

                        <div className="card">
                            <Toolbar className="p-mb-4" left={leftToolbarTemplate} />
                            <DataTable
                                emptyMessage="Sem dívidas encontradas"
                                ref={dt} 
                                value={debts}
                            >
                                <Column field="idUsuario" header="Id" style={{ textAlign: 'center' }} />
                                <Column field="motivo" header="Motivo" style={{ textAlign: 'center' }} />
                                <Column
                                 body={FormatValue} 
                                 header="Valor" 
                                 style={{ textAlign: 'center' }} />
                                <Column
                                    body={actionEditDebts}
                                    header="Editar Dívida"
                                    style={{ textAlign: 'center' }}
                                />
                                <Column
                                    body={DeleteDebts}
                                    header="Excluir Dívida"
                                    style={{ textAlign: 'center' }}
                                />
                            </DataTable>
                        </div>

                        <FormDialogContract
                            open={debtsDialog}
                            onHide={hideDialog}
                            debts={debtsData}
                            type={typeDialog}
                            onChange={onInputChange}
                            onConfirm={registerOrEditDebt}
                        />
                        {/* <ConfirmDialog
                        open={deactivateUserDialog}
                        onHide={hideDeactivateUserDialog}
                        onConfirm={deactivateUser}
                        text="Tem certeza de que deseja desativar este usuário?"
                        />

                        <ConfirmDialog
                        open={deactivateSeveralDialog}
                        onHide={hideDeactivateSeveralDialog}
                        onConfirm={deactivateSelectedUsers}
                        text="Tem certeza de que deseja desativar os usuários selecionados?"
                        /> */}
                    </div>
                </List>

                {/* {isLoading && <SimpleLoading status={isLoading} />} */}
            </Content>
        </>
    )
}

export default Debts;