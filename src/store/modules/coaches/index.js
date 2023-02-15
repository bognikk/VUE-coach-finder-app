import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Nikola',
          lastName: 'Bogicevic',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Nikola and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Lena',
          lastName: 'Franford',
          areas: ['frontend', 'career'],
          description:
            'I am Lena and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  actions,
  mutations,
  getters,
};
