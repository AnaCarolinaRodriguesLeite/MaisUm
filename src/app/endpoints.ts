const BASE_URL = 'https://localhost:44333/api/';

export const API_ENDPOINTS = {
  Refeicoes: {
    getRefeicoes: `${BASE_URL}refeicoes`,
    addRefeicao: `${BASE_URL}refeicoes`,
    updateRefeicao: (id: number) => `${BASE_URL}refeicoes/${id}`,
    deleteRefeicao: (id: number) => `${BASE_URL}refeicoes/${id}`
  },

  Progresso: {
    getProgresso: `${BASE_URL}progresso`,
    addProgresso: `${BASE_URL}progresso`,
    updateProgresso: (id: number) => `${BASE_URL}progresso/${id}`,
    deleteProgresso: (id: number) => `${BASE_URL}progresso/${id}`
  },

  AtividadesFisicas: {
    getAtividadesFisicas: `${BASE_URL}atividades-fisicas`,
    addAtividadeFisica: `${BASE_URL}atividades-fisicas`,
    updateAtividadeFisica: (id: number) => `${BASE_URL}atividades-fisicas/${id}`,
    deleteAtividadeFisica: (id: number) => `${BASE_URL}atividades-fisicas/${id}`
  },

  Usuarios: {
    getUsuarios: `${BASE_URL}usuarios`,
    addUsuario: `${BASE_URL}usuarios`,
    updateUsuario: (id: number) => `${BASE_URL}usuarios/${id}`,
    deleteUsuario: (id: number) => `${BASE_URL}usuarios/${id}`
  }
};