import { createStore, ActionContext } from 'vuex';
import { Currency } from '@/lib/coinGeko';
import {
  ADD_TO_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
} from '@/store/constants';

export interface State {
  portfolio: Currency[];
}

const initState: State = {
  portfolio: [],
};

export default createStore({
  state: initState,
  mutations: {
    [ADD_TO_PORTFOLIO](state: State, currency: Currency) {
      state.portfolio = [...state.portfolio, currency];
    },
    [REMOVE_FROM_PORTFOLIO](state: State, currency: Currency) {
      const index = state.portfolio.findIndex((element) => element.id === currency.id);
      state.portfolio.splice(index, 1);
    },
  },
  actions: {
    [ADD_TO_PORTFOLIO](context: ActionContext<State, State>, currency: Currency): Promise<void> {
      context.commit(ADD_TO_PORTFOLIO, currency);
      return Promise.resolve();
    },
    [REMOVE_FROM_PORTFOLIO](context: ActionContext<State, State>, currency: Currency): Promise<void> {
      context.commit(REMOVE_FROM_PORTFOLIO, currency);
      return Promise.resolve();
    },
  },
});
