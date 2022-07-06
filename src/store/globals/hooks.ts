import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

import { RootStore } from './RootStore';

export function useRootStore(): RootStore {
  return useContext(MobXProviderContext).rootStore;
}
