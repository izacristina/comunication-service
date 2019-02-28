import axios from 'axios';
import * as types from './types';

export const obterNotificacaos = ({ dispatch, commit }) => {
    axios.get('http://localhost/v1/notificacao')
        .then((response) => {
            const { data } = response;
            commit(types.DEFINIR_NOTIFICACOES, data.data);
        })
        .catch((error) => {
            dispatch('alert/error', error.response.data.error, {
                root: true,
            });
        });
};

export const removerNotificacao = ({ dispatch, commit }, notificacaoId) => {
    axios.delete(`http://localhost/v1/notificacao/${notificacaoId}`)
        .then(() => {
            commit(types.REMOVER_NOTIFICACAO, notificacaoId);
        }).catch((error) => {
            dispatch('alert/error', error.response.data.error, {
                root: true,
            });
        });
};

export const cadastrarNotificacao = ({ dispatch, commit }, notificacao) => axios.post('http://localhost/v1/notificacao', notificacao)
    .then((response) => {
        const { data } = response;
        commit(types.ACRESCENTAR_NOTIFICACAO, data.data);
        dispatch('alert/success', 'Cadastro realizado com sucesso!', { root: true });
    }).catch((error) => {
        dispatch('alert/error', error.response.data.error, {
            root: true,
        });
    });

export const atualizarNotificacao = ({ dispatch, commit }, notificacao) => axios.patch(`http://localhost/v1/notificacao/${notificacao.notificacao_id}`, notificacao)
    .then(() => {
        commit(types.ATUALIZAR_NOTIFICACAO, notificacao);
    })
    .catch((error) => {
        dispatch('alert/error', error.response.data.error, {
            root: true,
        });
    });
