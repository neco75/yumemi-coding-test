# 【26・27卒】あなたに合わせたバディをみつけます！ゆめみの2weeksフロントエンドサマーインターン

コーディングテストです。

**DEMO** [YUMEMI-Coding-Test](https://yumemi-coding-test-two.vercel.app/)

[【26・27卒】あなたに合わせたバディをみつけます！ゆめみの2weeksフロントエンドサマーインターン | 株式会社ゆめみ (hrmos.co)](https://hrmos.co/pages/yumemi/jobs/12345678901234567894)

## 【課題】

**都道府県別の総人口推移グラフを表示するSPA(Single Page Application)を構築せよ**

[ワイヤーフレーム](https://www.notion.so/ab4a837f8e764dffb0fc93c7b1387af7?pvs=21)

**内容**

1. RESAS(地域経済分析システム) APIの「都道府県一覧」APIから取得する
2. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
4. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する
   1. 「総人口」の他に「年少人口」「生産年齢人口」「老年人口」も切り替えるUIを何らかの形で用意し表示できるようにすること（同時に表示する必要はない）

**制約**

- React/Vue.jsのいずれかを用いてSPAを構築すること（バージョンはできるだけ最新版をご使用ください）
  - [React](https://reactjs.org/)
  - [Vue](https://vuejs.org/index.html)
    - Nuxt.jsやNext.jsなどの、これらを内包したフレームワークの利用も許可する
- 都道府県一覧および総人口情報はRESAS APIのデータを用いること
- グラフは Highcharts や Rechart.js などのサードパーティ製のグラフライブラリを用いて描画すること
  - ただし、グラフライブラリは上記のものに限らず、任意のものを用いてよい
- Google Chrome最新版で正しく動くこと
- PC/スマートフォン表示に対応すること(レスポンシブデザイン対応)
  - ただし実機でなく、Google Chromeの検証ツールで確認できればよい
- リンターやフォーマッターを適切に設定すること
  - リンターにはESLint、フォーマッターにはPrettierを使用すること
- styleは自分で記述し、UIフレームワークなどは原則使用しないこと
  - chartライブラリ内包のstyle、リセット系のCSSライブラリについては利用可
  - また、css-in-jsやcss-modules、sassなどのエコシステムの利用を妨げるものではなく、あくまでcssの記述力を測る趣旨に留まる
- TypeScriptで記述すること
- テストケース/テストコードを作成すること
  - テストツールは任意のものを用いてよい
- テスト実行時にエラーが発生しないこと
- ソースコードはGitで管理し、作成したソースコードはGitHubにアップロードすること
- Netlify / GitHub Pages / Firebase hosting / Vercel 等のホスティングサービスにデプロイし、インターネット経由で閲覧できる状態にし、そのURLを提出時に共有すること
