const BASE_URL = 'http://localhost:44333/api/';

export const API_ENDPOINTS = {
  Refeicoes: {
    getRefeicoes: `${BASE_URL}Alimentacao`,
    addRefeicao: `${BASE_URL}Alimentacao`,
    updateRefeicao: (id: number) => `${BASE_URL}Alimentacao/${id}`,
    deleteRefeicao: (id: number) => `${BASE_URL}Alimentacao/${id}`
  },

  Progresso: {
    getProgresso: `${BASE_URL}Progresso`,
    addProgresso: `${BASE_URL}Progresso`,
    updateProgresso: (id: number) => `${BASE_URL}Progresso/${id}`,
    deleteProgresso: (id: number) => `${BASE_URL}Progresso/${id}`
  },

  AtividadesFisicas: {
    getAtividadesFisicas: `${BASE_URL}AtividadesFisicas`,
    addAtividadeFisica: `${BASE_URL}AtividadesFisicas`,
    updateAtividadeFisica: (id: number) => `${BASE_URL}AtividadesFisicas/${id}`,
    deleteAtividadeFisica: (id: number) => `${BASE_URL}AtividadesFisicas/${id}`
  },

  Usuarios: {
    getUsuarios: `${BASE_URL}Usuarios`,
    addUsuario: `${BASE_URL}Usuarios`,
    updateUsuario: (id: number) => `${BASE_URL}Usuarios/${id}`,
    deleteUsuario: (id: number) => `${BASE_URL}Usuarios/${id}`
  }
};