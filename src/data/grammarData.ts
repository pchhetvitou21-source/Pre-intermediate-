import { GrammarPattern } from '../types';

export const GRAMMAR_PATTERNS: GrammarPattern[] = [
  // 1. Sentence Patterns & Expressing Plans / Wishes
  {
    id: 'gram-1',
    category: 'Sentence Patterns',
    topicRef: 'Topic 1 · Sports Games',
    titleJp: 'じしょ形 / ない形 + つもりです',
    titleRomaji: 'Jisho-kei / Nai-kei + tsumori desu',
    titleEn: 'Intend to / Plan to (do or not do)',
    howToUse: 'Attach to the Dictionary Form (affirmative) or Nai-Form (negative) of a verb.\n• [Verb Dictionary Form] + つもりです (intend to do)\n• [Verb ない-Form] + つもりです (intend not to do / plan not to do)\n• Past intention: 〜つもりでした (intended to, but might not have done).',
    whenWeUse: 'Used to state your own firm intention, plan, or personal decision made prior to speaking. Do NOT use it to ask superiors about their plans as it sounds intrusive.',
    examples: [
      {
        jp: '来週のサッカーの試合を見に行くつもりです。',
        romaji: 'Raishū no sakkā no shiai o mi ni iku tsumori desu.',
        en: 'I intend to go watch next week’s soccer match.',
      },
      {
        jp: '今夜は遅くまで起きないつもりです。',
        romaji: 'Kon’ya wa osoku made okinai tsumori desu.',
        en: 'I plan not to stay up late tonight.',
      },
      {
        jp: '今年の夏休みは国に帰らないつもりです。',
        romaji: 'Kotoshi no natsuyasumi wa kuni ni kaeranai tsumori desu.',
        en: 'I plan not to return to my home country this summer holiday.',
      },
    ],
  },
  {
    id: 'gram-2',
    category: 'Sentence Patterns',
    topicRef: 'Topic 1 · Sports Games',
    titleJp: '〜て／で + もいいですか / 〜てもかまいませんか',
    titleRomaji: '...te/de mo ii desu ka / ...te mo kamaimasen ka',
    titleEn: 'Asking for Permission / Is it okay if...?',
    howToUse: 'Convert the verb to its Te-Form, then attach もいいですか (polite) or もかまいませんか (more formal/considerate).\n• [Verb て-Form] + もいいですか\n• [Verb て-Form] + もかまいませんか',
    whenWeUse: 'Used when asking someone for permission to do something, or checking if an action won\'t cause an inconvenience to others.',
    examples: [
      {
        jp: '写真を撮ってもいいですか。',
        romaji: 'Shashin o totte mo ii desu ka.',
        en: 'May I take a photo?',
      },
      {
        jp: 'ここに荷物を置いてもかまいませんか。',
        romaji: 'Koko ni nimotsu o oite mo kamaimasen ka.',
        en: 'Would it be alright if I leave my luggage here?',
      },
      {
        jp: '少し早く帰ってもいいですか。',
        romaji: 'Sukoshi hayaku kaette mo ii desu ka.',
        en: 'Is it okay if I go home a bit early?',
      },
    ],
  },
  {
    id: 'gram-3',
    category: 'Sentence Patterns',
    topicRef: 'Topic 2 · Looking for a House',
    titleJp: '〜たらいいですか / 〜ばいいですか',
    titleRomaji: '...tara ii desu ka / ...ba ii desu ka',
    titleEn: 'Asking for Advice or Instructions (What should I do?)',
    howToUse: 'Attach たら / ば condition to an interrogative phrase (どう / どこ / いつ / 何):\n• 疑問詞 + [Verb たら-form] + いいですか\n• どうしたらいいですか (What should I do?)\n• どこで買ったらいいですか (Where should I buy it?)',
    whenWeUse: 'Used when you are unsure of how to proceed, facing a choice or problem, and asking someone with experience for advice or instructions.',
    examples: [
      {
        jp: 'いいアパートを探すには、どうしたらいいですか。',
        romaji: 'Ii apāto o sagasu ni wa, dō shitara ii desu ka.',
        en: 'What should I do to find a good apartment?',
      },
      {
        jp: 'ゴミはどこに出したらいいですか。',
        romaji: 'Gomi wa doko ni dashitara ii desu ka.',
        en: 'Where should I put out the garbage?',
      },
      {
        jp: '電車の乗り換えが分からない時は誰に聞けばいいですか。',
        romaji: 'Densha no norikae ga wakaranai toki wa dare ni kikeba ii desu ka.',
        en: 'Who should I ask when I don\'t understand train transfers?',
      },
    ],
  },
  {
    id: 'gram-4',
    category: 'Sentence Patterns',
    topicRef: 'Topic 3 · Comfort Food',
    titleJp: '〜たことがあります / 〜たことがありません',
    titleRomaji: '...ta koto ga arimasu / ...ta koto ga arimasen',
    titleEn: 'Expressing Past Experience (Have / Have never done)',
    howToUse: '[Verb Past Plain Form (Ta-Form)] + ことがあります (affirmative) or ありません (negative).\n• 食べたことがあります = Have eaten before\n• 行ったことがありません = Have never been',
    whenWeUse: 'Used to talk about whether you have had an experience in your lifetime up until now. Not used for routine daily events yesterday.',
    examples: [
      {
        jp: '日本の納豆を食べたことがありますか。',
        romaji: 'Nihon no nattō o tabeta koto ga arimasu ka.',
        en: 'Have you ever eaten Japanese natto?',
      },
      {
        jp: '一度も相撲を見たことがありません。',
        romaji: 'Ichido mo sumō o mita koto ga arimasen.',
        en: 'I have never watched Sumo wrestling even once.',
      },
      {
        jp: '富士山に登ったことがあります。',
        romaji: 'Fujisan ni nobotta koto ga arimasu.',
        en: 'I have climbed Mount Fuji before.',
      },
    ],
  },
  {
    id: 'gram-5',
    category: 'Sentence Patterns',
    topicRef: 'Topic 4 · Visiting Someone',
    titleJp: '〜てみます / 〜てみてください',
    titleRomaji: '...te mimasu / ...te mite kudasai',
    titleEn: 'Trying something out / Try doing',
    howToUse: '[Verb Te-Form] + みます (try to do) / みてください (please try doing).\n• 飲んでみます = I will try drinking it\n• やってみてください = Please give it a try',
    whenWeUse: 'Used when doing something for the first time to see what it is like, or recommending an experience to another person.',
    examples: [
      {
        jp: 'このお菓子、とてもおいしいから食べてみてください。',
        romaji: 'Kono okashi, totemo oishii kara tabete mite kudasai.',
        en: 'These snacks are delicious, so please try one.',
      },
      {
        jp: '新しいアプリを使ってみます。',
        romaji: 'Atarashii apuri o tsukatte mimasu.',
        en: 'I will try using the new app.',
      },
    ],
  },
  {
    id: 'gram-6',
    category: 'Verbs',
    topicRef: 'Topic 5 · Language Learning',
    titleJp: '可能形 (Potential Verbs: 〜る / 〜られる / できる)',
    titleRomaji: 'Kanō-kei (Potential Verbs)',
    titleEn: 'Can do / Able to do',
    howToUse: '• Group 1 (u-verbs): Change -u ending to -e + る (話す → 話せる, 書く → 書ける, 泳ぐ → 泳げる)\n• Group 2 (ru-verbs): Replace -る with -られる (食べる → 食べられる, 見る → 見られる)\n• Group 3 (irregular): する → できる, くる → こられる\n• Note: Object particle を usually changes to が (漢字が読める).',
    whenWeUse: 'Used to state capability, ability, or circumstantial possibility (e.g. can read Kanji, can speak English, can enter).',
    examples: [
      {
        jp: '少しなら日本語の新聞が読めます。',
        romaji: 'Sukoshi nara nihongo no shinbun ga yomemasu.',
        en: 'I can read Japanese newspapers if it\'s a little.',
      },
      {
        jp: '刺身やすしは食べられますか。',
        romaji: 'Sashimi ya sushi wa taberaremasu ka.',
        en: 'Can you eat sashimi and sushi?',
      },
      {
        jp: '駅前で自転車を借りることができます。',
        romaji: 'Ekimae de jitensha o kariru koto ga dekimasu.',
        en: 'You can rent bicycles in front of the station.',
      },
    ],
  },
  {
    id: 'gram-7',
    category: 'Sentence Patterns',
    topicRef: 'Topic 6 · Marriage & Life',
    titleJp: '〜ようと思っています / 〜ようと思います',
    titleRomaji: '...yō to omotte imasu',
    titleEn: 'Thinking of doing / Volitional + to omotte imasu',
    howToUse: '[Verb Volitional Form (意向形)] + と思っています。\n• Group 1: -o + う (行く → 行こう)\n• Group 2: -よう (食べる → 食べよう)\n• Group 3: しよう / こよう\n• Ex: 結婚しようと思っています',
    whenWeUse: 'Expresses an intention that you have been contemplating for a while and are still considering or preparing for.',
    examples: [
      {
        jp: '来年、彼女と結婚しようと思っています。',
        romaji: 'Rainen, kanojo to kekkon shiyō to omotte imasu.',
        en: 'I am thinking of getting married to my girlfriend next year.',
      },
      {
        jp: '仕事を変えようと思っています。',
        romaji: 'Shigoto o kaeyō to omotte imasu.',
        en: 'I am thinking of changing jobs.',
      },
    ],
  },
  {
    id: 'gram-8',
    category: 'Sentence Patterns',
    topicRef: 'Topic 7 · Talking About Worries',
    titleJp: '〜ほうがいいです / 〜ないほうがいいです',
    titleRomaji: '...hō ga ii desu / ...nai hō ga ii desu',
    titleEn: 'Giving Advice (It is better to / You should / shouldn\'t)',
    howToUse: '• Affirmative advice: [Verb Ta-Form (Past)] + ほうがいいです\n• Negative advice: [Verb Nai-Form (Negative)] + ほうがいいです\n• Ex: 病院に行ったほうがいいです / 無理をしないほうがいいです',
    whenWeUse: 'Used to give direct recommendations or advice to a friend who is facing a dilemma or health worry.',
    examples: [
      {
        jp: '熱があるなら、早く帰って休んだほうがいいですよ。',
        romaji: 'Netsu ga aru nara, hayaku kaette yasunda hō ga ii desu yo.',
        en: 'If you have a fever, it’s better to go home early and rest.',
      },
      {
        jp: 'あまり無理をしないほうがいいです。',
        romaji: 'Amari muri o shinai hō ga ii desu.',
        en: 'You shouldn’t push yourself too hard.',
      },
    ],
  },
  {
    id: 'gram-9',
    category: 'Sentence Patterns',
    topicRef: 'Topic 8 · Trouble While Traveling',
    titleJp: '〜てしまいました / 〜ちゃった (Regret / Completion)',
    titleRomaji: '...te shimaimashita / ...chatta',
    titleEn: 'Accidental action / Done completely (with regret)',
    howToUse: '[Verb Te-Form] + しまいました。\nSpoken casual contractions:\n• 〜てしまう → 〜ちゃう (忘れちゃった)\n• 〜でしまう → 〜じゃう (飲んじゃった)',
    whenWeUse: 'Used when an unexpected unfortunate event occurs, or when you express regret/embarrassment over an action (e.g. lost ticket, missed train).',
    examples: [
      {
        jp: '電車の中に財布を忘れてしまいました。',
        romaji: 'Densha no naka ni saifu o wasurete shimaimashita.',
        en: 'I accidentally left my wallet inside the train.',
      },
      {
        jp: 'パスポートを落としちゃいました！',
        romaji: 'Pasupōto o otoshichaimashita!',
        en: 'I dropped/lost my passport! (informal)',
      },
      {
        jp: '宿題を全部やってしまいました。',
        romaji: 'Shukudai o zenbu yatte shimaimashita.',
        en: 'I finished all my homework completely.',
      },
    ],
  },
  {
    id: 'gram-10',
    category: 'Sentence Patterns',
    topicRef: 'Topic 9 · Looking for a Job',
    titleJp: '〜ために / 〜ように (In order to)',
    titleRomaji: '...tame ni / ...yō ni',
    titleEn: 'Purpose: In order to / So that',
    howToUse: '• [Volitional Verb Dictionary Form] + ために (for the purpose of deliberate action)\n• [Noun] + の + ために (for the sake of)\n• [Non-volitional / Potential Verb] + ように (so that a state becomes possible)\n• Ex: 留学するために貯金する / 試験に合格できるように勉強する',
    whenWeUse: 'Used when explaining your goals, motivations, or reasons for working hard, applying for a job, or studying.',
    examples: [
      {
        jp: '日本で働くために、日本語を一生懸命勉強しています。',
        romaji: 'Nihon de hataraku tame ni, nihongo o isshōkenmei benkyō shite imasu.',
        en: 'In order to work in Japan, I am studying Japanese hard.',
      },
      {
        jp: 'みんなに聞こえるように、大きな声で話してください。',
        romaji: 'Minna ni kikoeru yō ni, ōkina koe de hanashite kudasai.',
        en: 'Please speak in a loud voice so that everyone can hear.',
      },
    ],
  },
  {
    id: 'gram-11',
    category: 'Particles',
    topicRef: 'Topic 1 - 9 · Particles Review',
    titleJp: '助詞 (Particles: は, が, を, に, で, と, も, から, まで, より)',
    titleRomaji: 'Joshi (Essential Particles in A2/B1)',
    titleEn: 'Key Pre-Intermediate Particle Functions',
    howToUse: '• は (Topic marker / Contrast)\n• が (Subject / Potential object marker with わかる, できる, 好き)\n• に (Specific time, destination, indirect recipient)\n• で (Location of action, means/tool, reason)\n• より (Comparison standard: AはBより...)',
    whenWeUse: 'Essential grammar markers connecting nouns and verbs in Japanese sentences.',
    examples: [
      {
        jp: '東京は京都より人が多いです。',
        romaji: 'Tōkyō wa Kyōto yori hito ga ooi desu.',
        en: 'Tokyo has more people than Kyoto.',
      },
      {
        jp: 'バスで空港に行きました。',
        romaji: 'Basu de kūkō ni ikimashita.',
        en: 'I went to the airport by bus.',
      },
      {
        jp: '山田さんにプレゼントをあげました。',
        romaji: 'Yamada-san ni purezento o agemashita.',
        en: 'I gave a present to Mr. Yamada.',
      },
    ],
  },
  {
    id: 'gram-12',
    category: 'Spoken Language',
    topicRef: 'Everyday Dialogues',
    titleJp: '話し言葉の短縮 (Spoken Contractions: 〜ちゃう, 〜とく, 〜なきゃ)',
    titleRomaji: 'Hanashikotoba no tansuku',
    titleEn: 'Casual Spoken Contractions in Daily Japanese',
    howToUse: '• 〜てしまう → 〜ちゃう (食べてしまう → 食べちゃう)\n• 〜ておく → 〜とく (買っておく → 買っとく - do in advance)\n• 〜なければならない → 〜なきゃ (行かなきゃ - have to go)\n• 〜ている → 〜てる (知っている → 知ってる)',
    whenWeUse: 'Frequent in natural conversations between colleagues, friends, and family. Essential for listening comprehension.',
    examples: [
      {
        jp: 'もう行かなきゃ！遅刻しちゃう。',
        romaji: 'Mō ikanakya! Chikoku shichau.',
        en: 'I have to go now! I\'ll be late.',
      },
      {
        jp: 'チケット、先に買っといたよ。',
        romaji: 'Chiketto, saki ni kattoita yo.',
        en: 'I already bought the tickets in advance.',
      },
      {
        jp: 'そのニュース、もう知ってる？',
        romaji: 'Sono nyūsu, mō shitteru?',
        en: 'Do you already know that news?',
      },
    ],
  },
];
