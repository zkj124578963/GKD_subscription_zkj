import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tipsoon.android',
  name: '简讯',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 400,
      resetMatch: 'app',
      priorityTime: 1,
      rules: [
        {
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][width<400 && height<200][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/7ba2a5cd-12e8-4ac3-a867-8d0f81247d93',
          snapshotUrls: 'https://i.gkd.li/i/14568317',
        },
      ],
    },
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.tipsoon.android.activity.MainActivity',
          matches: [
            '[id="com.tipsoon.android:id/cardview"]',
            '[id="com.tipsoon.android:id/img_close"]',
            '@ImageView <4 [vid="cons_root"]',
          ],
          exampleUrls: 'https://e.gkd.li/6e3a68cc-14d0-444c-9793-0e3e75418dc3',
          snapshotUrls: 'https://i.gkd.li/i/23989044',
        },
      ],
    },
  ],
});
