import axios from 'axios';
import * as types from './types';

export const obterPlataformas = ({ dispatch, commit }) => {
    axios.get('http://localhost/v1/plataforma')
        .then((response) => {
            const { data } = response;
            commit(types.SET_PLATAFORMA, data.data);
        })
        .catch((error) => {
            dispatch('alert/error', error.response.data.error, {
                root: true,
            });
        });
};

export const removerPlataforma = ({ dispatch, commit }, plataformaId) => {
    axios.delete(`http://localhost/v1/plataforma/${plataformaId}`)
        .then(() => {
            commit(types.DELETE_PLATAFORMA, plataformaId);
        }).catch((error) => {
            dispatch('alert/error', error.response.data.error, {
                root: true,
            });
        });
};

export const cadastrarPlataforma = ({ dispatch, commit }, plataforma) => axios.post('http://localhost/v1/plataforma', plataforma)
    .then((response) => {
        const { data } = response;
        commit(types.ACRESCENTAR_PLATAFORMA, data.data);
        dispatch('alert/success', 'Cadastro realizado com sucesso!', { root: true });
    }).catch((error) => {
        dispatch('alert/error', error.response.data.error, {
            root: true,
        });
    });

export const atualizarPlataforma = ({ dispatch, commit }, plataforma) => axios.patch(`http://localhost/v1/plataforma/${plataforma.plataforma_id}`, plataforma)
    .then(() => {
        commit(types.ATUALIZAR_PLATAFORMA, plataforma);
    })
    .catch((error) => {
        dispatch('alert/error', error.response.data.error, {
            root: true,
        });
    });
