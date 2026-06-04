import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

// 还原为仅单个入参，删掉第二个配置参数，解决TS2554参数数量报错
const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name.startsWith('开屏广告')) {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 997508,
  name: '张开金的GKD订阅',
  version: 0,
  author: 'AIsouler',
  checkUpdateUrl: './AIsouler_gkd.version.json5',
  supportUri: 'https://github.com/AIsouler/GKD_subscription/issues/new/choose',
  categories,
  globalGroups,
  apps: rawApps,
});