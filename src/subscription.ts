import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

// 只读取apps目录，过滤所有package.json
const allApps = await batchImportApps(`${import.meta.dirname}/apps`);
// 过滤排除package.json配置文件
const apps = allApps.filter(item => !item.file?.includes('package.json'));

const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    // 空字符串无效，改成匹配开屏广告
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
  // 如需国内可访问可替换链接，保留原链接不影响校验报错
  supportUri: 'https://github.com/AIsouler/GKD_subscription/issues/new/choose',
  categories,
  globalGroups,
  apps: rawApps,
});