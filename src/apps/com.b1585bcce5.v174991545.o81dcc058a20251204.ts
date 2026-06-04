import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.b1585bcce5.v174991545.o81dcc058a20251204',
  name: '瓜子影视  v3.0.3.4',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      activityIds: ['com.ecccdd5199.u535a3e7d8.activity.ad.AdActivity'],
      rules: [
        {
          matches: '[text*="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/23833283'],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      activityIds: [
        'com.ecccdd5199.u535a3e7d8.activity.homepage.HomepageActivity',
      ],
      rules: [
        {
          matches: '[id$="iv_close_home_dialog"]',
          snapshotUrls: ['https://i.gkd.li/i/23833240'],
        },
      ],
    },
  ],
});
