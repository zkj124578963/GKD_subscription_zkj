import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fd84994ce2.lfbdc54d2e.db77a36ef120260606',
  name: '瓜子影视 v3.0.4.8',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      activityIds: ['com.kc1f519bfa.m218f607d4.activity.homepage.HomepageActivity'],
      rules: [
              {
          matches: '[text*="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23833283',
          ],
        },
      ],
    },
        {
      key: 4,
      name: '局部广告-卡片广告',
      activityIds: ['com.e0caf8d3b1.kb2d4628f1.activity.homepage.HomepageActivity'],
      rules: [
        {
          matches: '[id$="iv_close_home_dialog"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23833240',
          ],
        },
      ],
    },
  ],
});