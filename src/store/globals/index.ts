import { configure } from 'mobx';

import { RootStore } from './RootStore';

const configureMobx = (): void =>
  configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    useProxies: 'ifavailable',
  });

configureMobx();

const rootStore = new RootStore();

export { configureMobx, rootStore, RootStore };

export * from './hooks';
