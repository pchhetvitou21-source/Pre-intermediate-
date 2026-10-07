import { TopicData } from '../types';

export const CANDO_TOPICS: TopicData[] = [
  {
    topicNumber: 1,
    titleJp: 'スポーツの試合',
    titleRomaji: 'Supōtsu no shiai',
    titleEn: 'Sports Games',
    summaryEn: 'Inviting friends to a sports match, giving reasons to decline or cancel, cheering at the stadium, and talking about game results.',
    audioTracks: '191–194',
    canDos: [
      {
        id: 'cando-1-2',
        number: 1,
        topicNumber: 1,
        titleJp: '友だちを外出にさそう／さそいをうける・りゆうを言ってさそいをことわる (Can-do 1 & 2)',
        titleRomaji: 'Tomodachi o gaishutsu ni sasou / sasoi o ukeru · Riyū o itte sasoi o kotowaru',
        titleEn: 'Invite a friend out, accept an invitation, or decline by stating a reason',
        situationEn: 'Person A invites friends B, C, and D to watch a soccer match together next Saturday.',
        keyExpressions: [
          {
            jp: '～見に行くんですが、いっしょに行きませんか。',
            romaji: '~ mi ni ikun desu ga, issho ni ikimasen ka.',
            en: 'I am going to watch ~, would you like to go together?'
          },
          {
            jp: '行きたいんですが、だめなんです。～から。',
            romaji: 'Ikitain desu ga, dame nan desu. ~ kara.',
            en: 'I would love to go, but I cannot. Because ~.'
          },
          {
            jp: '私は、えんりょします。～から。',
            romaji: 'Watashi wa, enryo shimasu. ~ kara.',
            en: 'I will pass (refrain). Because ~.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '来週の土曜日、サッカーの試合、見に行くんですが、いっしょに行きませんか。',
            romaji: 'Raishū no doyōbi, sakkā no shiai, mi ni ikun desu ga, issho ni ikimasen ka.',
            en: 'Next Saturday, I am going to watch a soccer match; would you like to come along?',
            variations: [
              {
                jp: '今度の日曜日、野球の試合、見に行くんですが…',
                romaji: 'Kondo no nichiyōbi, yakyū no shiai, mi ni ikun desu ga...',
                en: 'This coming Sunday, I am going to watch a baseball game...'
              }
            ]
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '行きたいんですが、だめなんです。土曜日はアルバイトがあるから。',
            romaji: 'Ikitain desu ga, dame nan desu. Doyōbi wa arubaito ga aru kara.',
            en: 'I would like to go, but I can’t make it. Because I have a part-time job on Saturday.',
            variations: [
              {
                jp: '土曜日は予定があるから。',
                romaji: 'Doyōbi wa yotei ga aru kara.',
                en: 'Because I have plans on Saturday.'
              }
            ]
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'そうですか、ざんねん。Cさんは？',
            romaji: 'Sō desu ka, zannen. C-san wa?',
            en: 'I see, that’s a pity. How about you, C?'
          },
          {
            speaker: 'C',
            speakerRomaji: 'C-san',
            speakerEn: 'Speaker C',
            jp: '私は、だいじょうぶです。ぜひいっしょにお願いします。',
            romaji: 'Watashi wa, daijōbu desu. Zehi issho ni onegaishimasu.',
            en: 'I’m free! I’d love to go with you, please.'
          },
          {
            speaker: 'D',
            speakerRomaji: 'D-san',
            speakerEn: 'Speaker D',
            jp: '私は、えんりょします。サッカーは、よくわからないから。',
            romaji: 'Watashi wa, enryo shimasu. Sakkā wa, yoku wakaranai kara.',
            en: 'I think I’ll pass. Because I don’t really understand soccer.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'そうですか。テレビで、おもしろい試合になるって、言ってましたよ。',
            romaji: 'Sō desu ka. Terebi de, omoshiroi shiai ni naru tte, ittemashita yo.',
            en: 'Really? They were saying on TV that it’s going to be an exciting match.'
          },
          {
            speaker: 'D',
            speakerRomaji: 'D-san',
            speakerEn: 'Speaker D',
            jp: 'そうですか。それなら、行ってみます。',
            romaji: 'Sō desu ka. Sorenara, itte mimasu.',
            en: 'Oh, really? In that case, I’ll give it a try and go.'
          }
        ]
      },
      {
        id: 'cando-3',
        number: 3,
        topicNumber: 1,
        titleJp: 'りゆうを言ってやくそくをキャンセルする (Can-do 3)',
        titleRomaji: 'Riyū o itte yakusoku o kyanseru suru',
        titleEn: 'Cancel an appointment by explaining the reason',
        situationEn: 'Speaker A has to cancel tomorrow’s match outing because an acquaintance from China is arriving in Japan.',
        keyExpressions: [
          {
            jp: 'あのう、じつは、明日の試合、行けなくなったんです。',
            romaji: 'Anō, jitsu wa, ashita no shiai, ikenaku nattan desu.',
            en: 'Um, actually, I can no longer make it to tomorrow’s game.'
          },
          {
            jp: 'すみません。じつは、～んです。',
            romaji: 'Sumimasen. Jitsu wa, ~ n desu.',
            en: 'I’m sorry. The truth is, ~.'
          },
          {
            jp: '気にしないで。',
            romaji: 'Ki ni shinaide.',
            en: 'Don’t worry about it.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'あのう、じつは、明日の試合、行けなくなったんです。',
            romaji: 'Anō, jitsu wa, ashita no shiai, ikenaku nattan desu.',
            en: 'Um, actually, it turned out I can’t go to tomorrow’s game anymore.'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'えっ、ざんねん。どうしたんですか。',
            romaji: 'E, zannen. Dō shitan desu ka.',
            en: 'Oh, that’s too bad. What happened?'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'すみません。じつは、中国から知り合いが日本に来るんです。',
            romaji: 'Sumimasen. Jitsu wa, Chūgoku kara shiriai ga Nihon ni kurun desu.',
            en: 'I’m sorry. Actually, an acquaintance from China is coming to Japan.'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'そうなんですか。気にしないで。試合は来月もあるから、よかったら、つぎ行きましょう。',
            romaji: 'Sō nan desu ka. Ki ni shinaide. Shiai wa raigetsu mo aru kara, yokattara, tsugi ikimashō.',
            en: 'Oh, is that so? Don’t worry about it. There is another match next month, so if you’d like, let’s go next time.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'はい。',
            romaji: 'Hai.',
            en: 'Yes, thank you.'
          }
        ]
      },
      {
        id: 'cando-4',
        number: 4,
        topicNumber: 1,
        titleJp: 'スポーツの試合で好きなチームをおうえんする (Can-do 4)',
        titleRomaji: 'Supōtsu no shiai de sukina chīmu o ōen suru',
        titleEn: 'Cheer for your favorite team at a sports match',
        situationEn: 'Notice the difference between direct imperative/prohibitive forms and -te forms for cheering.',
        keyExpressions: [
          {
            jp: 'がんばれ！／がんばって！',
            romaji: 'Ganbare! / Ganbatte!',
            en: 'Go for it! / Hang in there!'
          },
          {
            jp: '負けるな！／負けないで！',
            romaji: 'Makeru na! / Makenaide!',
            en: 'Don’t lose!'
          },
          {
            jp: 'あきらめるな！／あきらめないで！',
            romaji: 'Akirameru na! / Akiramenaide!',
            en: 'Don’t give up!'
          }
        ],
        dialogue: [
          {
            speaker: '男の人',
            speakerRomaji: 'Otoko no hito',
            speakerEn: 'Male Fan',
            jp: 'がんばれ！／もっと走れ！／行け！／勝て！／負けるな！／あきらめるな！／しっかりしろ！',
            romaji: 'Ganbare! / Motto hashire! / Ike! / Kate! / Makeru na! / Akirameru na! / Shikkari shiro!',
            en: 'Do your best! / Run more! / Go! / Win! / Don’t lose! / Don’t give up! / Pull yourself together!'
          },
          {
            speaker: '女の人',
            speakerRomaji: 'Onna no hito',
            speakerEn: 'Female Fan',
            jp: 'がんばって！／もっと走って！／負けないで！／あきらめないで！／しっかり！',
            romaji: 'Ganbatte! / Motto hashitte! / Makenaide! / Akiramenaide! / Shikkari!',
            en: 'Do your best! / Run more! / Don’t lose! / Don’t give up! / Hang in there!'
          }
        ]
      },
      {
        id: 'cando-5',
        number: 5,
        topicNumber: 1,
        titleJp: '自分が見たスポーツの試合について話す (Can-do 5)',
        titleRomaji: 'Jibun ga mita supōtsu no shiai ni tsuite hanasu',
        titleEn: 'Talk about a sports match you watched',
        situationEn: 'Talking the day after the match about the score, winning/losing, and feelings.',
        keyExpressions: [
          {
            jp: '2対1で、イーグルズが勝ちました／負けました。',
            romaji: 'Ni tai ichi de, Īguruzu ga kachimashita / makemashita.',
            en: 'The Eagles won / lost 2 to 1.'
          },
          {
            jp: '1対1で、ひきわけました。',
            romaji: 'Ichi tai ichi de, hikiwakemashita.',
            en: 'They tied 1 to 1.'
          },
          {
            jp: '勝って、うれしいです。／負けて、くやしいです。',
            romaji: 'Katte, ureshii desu. / Makete, kuyashii desu.',
            en: 'I’m happy they won. / I’m frustrated they lost.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'きのうの試合はどうでしたか。',
            romaji: 'Kinō no shiai wa dō deshita ka.',
            en: 'How was yesterday’s game?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '2対1で、イーグルズが勝ちました。勝って、うれしいです。',
            romaji: 'Ni tai ichi de, Īguruzu ga kachimashita. Katte, ureshii desu.',
            en: 'The Eagles won 2 to 1. I’m happy that they won.',
            variations: [
              {
                jp: '2対1で、イーグルズが負けました。負けて、くやしいです。',
                romaji: 'Ni tai ichi de, Īguruzu ga makemashita. Makete, kuyashii desu.',
                en: 'The Eagles lost 2 to 1. I’m frustrated that they lost.'
              },
              {
                jp: '1対1で、ひきわけました。',
                romaji: 'Ichi tai ichi de, hikiwakemashita.',
                en: 'They tied 1 to 1.'
              }
            ]
          },
          {
            speaker: 'C',
            speakerRomaji: 'C-san',
            speakerEn: 'Speaker C',
            jp: '試合がもりあがりました。／いい試合で、かんどうしました。',
            romaji: 'Shiai ga moriagarimashita. / Ii shiai de, kandō shimashita.',
            en: 'The match was really exciting. / It was a great game, and I was deeply moved.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 2,
    titleJp: '家をさがす',
    titleRomaji: 'Ie o sagasu',
    titleEn: 'Looking for a House',
    summaryEn: 'Discussing important criteria when searching for a place to live and describing your home.',
    audioTracks: '195–196',
    canDos: [
      {
        id: 'cando-8',
        number: 8,
        topicNumber: 2,
        titleJp: '住むところをさがすのにだいじなポイントは何か話す (Can-do 8)',
        titleRomaji: 'Sumu tokoro o sagasu no ni daijina pointo wa nani ka hanasu',
        titleEn: 'Talk about what is important when looking for a place to live',
        situationEn: 'Asking a friend how their house hunting is going and what conditions they prioritize.',
        keyExpressions: [
          {
            jp: '家はもう見つかりましたか。',
            romaji: 'Ie wa mō mitsukarimashita ka.',
            en: 'Have you found a house already?'
          },
          {
            jp: '駅から近いところがいいんですが。',
            romaji: 'Eki kara chikai tokoro ga iin desu ga.',
            en: 'I’d like a place close to the station.'
          },
          {
            jp: '安全なところがいいです。小さい子どもがいますから。',
            romaji: 'Anzenna tokoro ga ii desu. Chiisai kodomo ga imasu kara.',
            en: 'A safe area is good, because I have a small child.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '家はもう見つかりましたか。',
            romaji: 'Ie wa mō mitsukarimashita ka.',
            en: 'Have you found a house yet?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'いいえ、まだなんです。／いいえ、まださがしてるんです。',
            romaji: 'Iie, mada nan desu. / Iie, mada sagashiterun desu.',
            en: 'No, not yet. / No, I am still looking.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'どんなところがいいんですか。',
            romaji: 'Donna tokoro ga iin desu ka.',
            en: 'What kind of place are you looking for?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '駅から近いところがいいんですが。／安全なところがいいです。小さい子どもがいますから。',
            romaji: 'Eki kara chikai tokoro ga iin desu ga. / Anzenna tokoro ga ii desu. Chiisai kodomo ga imasu kara.',
            en: 'I’d like a place close to the station. / I want a safe place, because I have young children.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'いいところが見つかるといいですね。',
            romaji: 'Ii tokoro ga mitsukaru to ii desu ne.',
            en: 'I hope you find a nice place.'
          }
        ]
      },
      {
        id: 'cando-9',
        number: 9,
        topicNumber: 2,
        titleJp: '自分が住んでいるところについて話す (Can-do 9)',
        titleRomaji: 'Jibun ga sunde iru tokoro ni tsuite hanasu',
        titleEn: 'Talk about the place where you live',
        situationEn: 'Describing your neighborhood (Kings Bay), detached house, and surroundings.',
        keyExpressions: [
          {
            jp: '私は～というところに住んでます。',
            romaji: 'Watashi wa ~ to iu tokoro ni sundemasu.',
            en: 'I live in a place called ~.'
          },
          {
            jp: '近くにスーパーもあるし、かんきょうもいいですよ。',
            romaji: 'Chikaku ni sūpā mo aru shi, kankyō mo ii desu yo.',
            en: 'There’s a supermarket nearby, and the environment is great too.'
          },
          {
            jp: '今の家がとても気に入ってます。',
            romaji: 'Ima no ie ga totemo ki ni ittemasu.',
            en: 'I really like my current home.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '今、どこに住んでますか。',
            romaji: 'Ima, doko ni sundemasu ka.',
            en: 'Where do you live now?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '私はキングズベイというところに住んでます。',
            romaji: 'Watashi wa Kinguzu Bei to iu tokoro ni sundemasu.',
            en: 'I live in a place called Kings Bay.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'へえ。どんなところですか。',
            romaji: 'Hē. Donna tokoro desu ka.',
            en: 'Oh? What kind of place is it?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '家はいっこだてで、庭があります。近くにスーパーもあるし、かんきょうもいいですよ。',
            romaji: 'Ie wa ikkodate de, niwa ga arimasu. Chikaku ni sūpā mo aru shi, kankyō mo ii desu yo.',
            en: 'My house is a detached house and has a garden. There is a supermarket nearby, and the environment is great too.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'ふうん、いいところですね。',
            romaji: 'Fūn, ii tokoro desu ne.',
            en: 'Hmm, sounds like a nice place.'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'ええ。会社まで少し遠いけど、広くていい家だから、決めました。私も家族も、今の家がとても気に入ってます。',
            romaji: 'Ē. Kaisha made sukoshi tōi kedo, hirokute ii ie dakara, kimemashita. Watashi mo kazoku mo, ima no ie ga totemo ki ni ittemasu.',
            en: 'Yes. It’s a bit far from the office, but it’s spacious and nice, so we decided on it. Both my family and I really love our current home.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'そうですか。',
            romaji: 'Sō desu ka.',
            en: 'I see.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 3,
    titleJp: 'ほっとする食べ物',
    titleRomaji: 'Hotto suru tabemono',
    titleEn: 'Comfort Food',
    summaryEn: 'Sharing impressions of food and everyday eating habits.',
    audioTracks: '197–198',
    canDos: [
      {
        id: 'cando-12',
        number: 12,
        topicNumber: 3,
        titleJp: '外国の食べ物についてどう思うか話す (Can-do 12)',
        titleRomaji: 'Gaikoku no tabemono ni tsuite dō omou ka hanasu',
        titleEn: 'Talk about what you think of foreign food',
        situationEn: 'Asking someone how they like Japanese food and discussing flavors.',
        keyExpressions: [
          {
            jp: '日本の食べ物はいかがですか。／どうですか。',
            romaji: 'Nihon no tabemono wa ikaga desu ka. / dō desu ka.',
            en: 'How do you like Japanese food?'
          },
          {
            jp: 'うどんとか、おすしとか、よく食べます。',
            romaji: 'Udon toka, osushi toka, yoku tabemasu.',
            en: 'I often eat things like udon and sushi.'
          },
          {
            jp: 'はじめはそう思いましたが、今は大丈夫です。',
            romaji: 'Hajime wa sō omoimashita ga, ima wa daijōbu desu.',
            en: 'At first I thought so, but now it’s fine.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '日本の食べ物はいかがですか。／どうですか。',
            romaji: 'Nihon no tabemono wa ikaga desu ka. / dō desu ka.',
            en: 'How do you find Japanese food?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'ええ、よく食べてますよ。うどんとか、おすしとか、よく食べます。',
            romaji: 'Ē, yoku tabetemasu yo. Udon toka, osushi toka, yoku tabemasu.',
            en: 'Yes, I eat it often. Things like udon and sushi.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'うどんは味がうすくないですか。',
            romaji: 'Udon wa aji ga usukunai desu ka.',
            en: 'Isn’t the flavor of udon a bit mild for you?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'だいじょうぶです。／はじめはそう思いましたが、今はおいしいです。',
            romaji: 'Daijōbu desu. / Hajime wa sō omoimashita ga, ima wa oishii desu.',
            en: 'It’s fine. / At first I thought so, but now I find it delicious.'
          }
        ]
      },
      {
        id: 'cando-13',
        number: 13,
        topicNumber: 3,
        titleJp: '自分の食生活について話す (Can-do 13)',
        titleRomaji: 'Jibun no shokuseikatsu ni tsuite hanasu',
        titleEn: 'Talk about your dietary habits',
        situationEn: 'Discussing daily meals, white rice and miso soup, and eating vegetables for health.',
        keyExpressions: [
          {
            jp: '昼食は、ほとんど毎日、外食です。',
            romaji: 'Chūshoku wa, hotondo mainichi, gaishoku desu.',
            en: 'For lunch, I eat out almost every day.'
          },
          {
            jp: 'やっぱり1日に1回は、白いご飯とみそしるが食べたくなりますから。',
            romaji: 'Yappari ichinichi ni ikkai wa, shiroi gohan to misoshiru ga tabetaku narimasu kara.',
            en: 'After all, at least once a day, I start craving white rice and miso soup.'
          },
          {
            jp: '健康のために、できるだけ野菜を食べるようにしてるんですよ。',
            romaji: 'Kenkō no tame ni, dekirudake yasai o taberu yō ni shiterun desu yo.',
            en: 'For my health, I make a point of eating vegetables as much as possible.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '毎日の食事、どうしてますか。',
            romaji: 'Mainichi no shokuji, dō shitemasu ka.',
            en: 'What do you do for your daily meals?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '昼食は、ほとんど毎日、外食です。でも、夕食は、うちで作って食べますよ。やっぱり1日に1回は、白いご飯とみそしるが食べたくなりますから。',
            romaji: 'Chūshoku wa, hotondo mainichi, gaishoku desu. Demo, yūshoku wa, uchi de tsukutte tabemasu yo. Yappari ichinichi ni ikkai wa, shiroi gohan to misoshiru ga tabetaku narimasu kara.',
            en: 'For lunch, I eat out almost every day. But for dinner, I cook at home. After all, once a day I crave white rice and miso soup.'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '健康のために、できるだけ野菜を食べるようにしてるんですよ。',
            romaji: 'Kenkō no tame ni, dekirudake yasai o taberu yō ni shiterun desu yo.',
            en: 'For my health, I try to eat vegetables as much as possible.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 4,
    titleJp: '訪問',
    titleRomaji: 'Hōmon',
    titleEn: 'Visiting Someone',
    summaryEn: 'Welcoming guests into your home, introducing family members, and talking about memories of living abroad.',
    audioTracks: '199–201',
    canDos: [
      {
        id: 'cando-16',
        number: 16,
        topicNumber: 4,
        titleJp: '客を家の中にあんないする (Can-do 16)',
        titleRomaji: 'Kyaku o ie no naka ni annai suru',
        titleEn: 'Show a guest into your house',
        situationEn: 'Greeting a visitor at the entrance, offering slippers, and inviting them to sit comfortably.',
        keyExpressions: [
          {
            jp: 'よくいらっしゃいました。どうぞおあがりください。',
            romaji: 'Yoku irasshaimashita. Dōzo oagari kudasai.',
            en: 'Welcome! Please come on in.'
          },
          {
            jp: 'おじゃまします。',
            romaji: 'Ojama shimasu.',
            en: 'Thank you for having me.'
          },
          {
            jp: '足はらくにしてくださいね。',
            romaji: 'Ashi wa raku ni shite kudasai ne.',
            en: 'Please make yourself comfortable.'
          }
        ],
        dialogue: [
          {
            speaker: '客',
            speakerRomaji: 'Kyaku',
            speakerEn: 'Guest',
            jp: 'ごめんください。',
            romaji: 'Gomen kudasai.',
            en: 'Hello! Anybody home?'
          },
          {
            speaker: '家の人',
            speakerRomaji: 'Ie no hito',
            speakerEn: 'Host',
            jp: 'よくいらっしゃいました。どうぞおあがりください。どうぞスリッパをはいてください。',
            romaji: 'Yoku irasshaimashita. Dōzo oagari kudasai. Dōzo surippa o haite kudasai.',
            en: 'Welcome! Please step inside. Please put on these slippers.'
          },
          {
            speaker: '客',
            speakerRomaji: 'Kyaku',
            speakerEn: 'Guest',
            jp: 'おじゃまします。しつれいします。',
            romaji: 'Ojama shimasu. Shitsurei shimasu.',
            en: 'Thank you for having me. Excuse me.'
          },
          {
            speaker: '家の人',
            speakerRomaji: 'Ie no hito',
            speakerEn: 'Host',
            jp: 'どうぞお座りください。足はらくにしてくださいね。',
            romaji: 'Dōzo osuwari kudasai. Ashi wa raku ni shite kudasai ne.',
            en: 'Please have a seat. Please sit comfortably.'
          }
        ]
      },
      {
        id: 'cando-17',
        number: 17,
        topicNumber: 4,
        titleJp: '家族を客に紹介する (Can-do 17)',
        titleRomaji: 'Kazoku o kyaku ni shōkai suru',
        titleEn: 'Introduce your family to a guest',
        situationEn: 'Introducing your mother to your friend Karl and exchanging polite greetings.',
        keyExpressions: [
          {
            jp: 'うちの母です。今、英語をならってるんですよ。',
            romaji: 'Uchi no haha desu. Ima, Eigo o naratterun desu yo.',
            en: 'This is my mother. She is currently learning English.'
          },
          {
            jp: 'いつもむすめがおせわになって（い）ます。',
            romaji: 'Itsumo musume ga osewa ni natte (i)masu.',
            en: 'Thank you for always being so kind to my daughter.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Host',
            jp: 'カールさん、紹介します。うちの母です。今、英語をならってるんですよ。',
            romaji: 'Kāru-san, shōkai shimasu. Uchi no haha desu. Ima, Eigo o naratterun desu yo.',
            en: 'Karl, let me introduce you. This is my mother. She’s learning English right now.'
          },
          {
            speaker: '母',
            speakerRomaji: 'Haha',
            speakerEn: 'Mother',
            jp: 'はじめまして。いつもむすめがおせわになって（い）ます。',
            romaji: 'Hajimemashite. Itsumo musume ga osewa ni natte (i)masu.',
            en: 'Nice to meet you. Thank you for always looking after my daughter.'
          },
          {
            speaker: 'カール',
            speakerRomaji: 'Kāru',
            speakerEn: 'Karl',
            jp: 'こちらこそ、いつも山本さんにおせわになって（い）ます。',
            romaji: 'Kochira koso, itsumo Yamamoto-san ni osewa ni natte (i)masu.',
            en: 'The pleasure is mine; Yamamoto-san is always helping me out.'
          }
        ]
      },
      {
        id: 'cando-18',
        number: 18,
        topicNumber: 4,
        titleJp: '外国などで生活した経験や思い出について話す (Can-do 18)',
        titleRomaji: 'Gaikoku nado de seikatsu shita keiken ya omoide ni tsuite hanasu',
        titleEn: 'Talk about experiences and memories of living in another town or country',
        situationEn: 'Sharing memories of living in New York for about 6 years.',
        keyExpressions: [
          {
            jp: 'ほかの町や国に住んだこと、ありますか。',
            romaji: 'Hoka no machi ya kuni ni sunda koto, arimasu ka.',
            en: 'Have you ever lived in another town or country?'
          },
          {
            jp: 'ことばがわからなくてこまりましたが、親切な人が多くてたすかりました。',
            romaji: 'Kotoba ga wakaranakute komarimashita ga, shinsetsuna hito ga ōkute tasukarimashita.',
            en: 'I had trouble not understanding the language, but many people were kind, which saved me.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'ほかの町や国に住んだこと、ありますか。',
            romaji: 'Hoka no machi ya kuni ni sunda koto, arimasu ka.',
            en: 'Have you ever lived in another city or country?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'ええ。私は2004年から約6年間、アメリカのニューヨークに住んでました。ことばがわからなくてこまりましたが、親切な人が多くてたすかりました。わすれられない思い出がたくさんあって、なつかしいです。',
            romaji: 'Ē. Watashi wa nisen-yo-nen kara yaku roku-nenkan, Amerika no Nyū Yōku ni sundemashita. Kotoba ga wakaranakute komarimashita ga, shinsetsuna hito ga ōkute tasukarimashita. Wasurerarenai omoide ga takusan atte, natsukashii desu.',
            en: 'Yes. I lived in New York for about 6 years from 2004. I had trouble with the language, but many kind people helped me. I have many unforgettable memories.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 5,
    titleJp: 'ことばを学ぶ楽しみ',
    titleRomaji: 'Kotoba o manabu tanoshimi',
    titleEn: 'The Joy of Learning Languages',
    summaryEn: 'Recommending ways to study a foreign language and language classes.',
    audioTracks: '202–203',
    canDos: [
      {
        id: 'cando-21',
        number: 21,
        topicNumber: 5,
        titleJp: '外国語を勉強する方法について話す (Can-do 21)',
        titleRomaji: 'Gaikokugo o benkyō suru hōhō ni tsuite hanasu',
        titleEn: 'Talk about ways of studying a foreign language',
        situationEn: 'Complimenting Esther on her Japanese and asking for study tips.',
        keyExpressions: [
          {
            jp: '日本語、上手ですね。／上手になりましたね。',
            romaji: 'Nihongo, jōzu desu ne. / jōzu ni narimashita ne.',
            en: 'Your Japanese is great! / You have gotten really good!'
          },
          {
            jp: '何かいい勉強方法、ありませんか。',
            romaji: 'Nanika ii benkyō hōhō, arimasen ka.',
            en: 'Do you have any good study methods?'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'エスターさん、日本語、上手ですね。何かいい勉強方法、ありませんか。',
            romaji: 'Esutā-san, Nihongo, jōzu desu ne. Nanika ii benkyō hōhō, arimasen ka.',
            en: 'Esther, your Japanese is so good! Do you know any good ways to study?'
          },
          {
            speaker: 'エスター',
            speakerRomaji: 'Esutā',
            speakerEn: 'Esther',
            jp: '私は日本のアニメをよく見ます。',
            romaji: 'Watashi wa Nihon no anime o yoku mimasu.',
            en: 'I often watch Japanese anime.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'そうですか。私もやってみます。',
            romaji: 'Sō desu ka. Watashi mo yatte mimasu.',
            en: 'I see! I’ll try doing that too.'
          }
        ]
      },
      {
        id: 'cando-22',
        number: 22,
        topicNumber: 5,
        titleJp: '外国語をクラスで学ぶ楽しみについて話す (Can-do 22)',
        titleRomaji: 'Gaikokugo o kurasu de manabu tanoshimi ni tsuite hanasu',
        titleEn: 'Talk about the fun of learning a foreign language in a class',
        situationEn: 'Describing why taking a language class together is enjoyable.',
        keyExpressions: [
          {
            jp: 'ほかの人の話を聞いたり、自分のことを話したりできるので、クラスで学ぶことは楽しいです。',
            romaji: 'Hoka no hito no hanashi o kiitari, jibun no koto o hanashitari dekiru node, kurasu de manabu koto wa tanoshii desu.',
            en: 'Because I can listen to others and talk about myself, learning in a class is fun.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '日本語のクラス、どうですか。',
            romaji: 'Nihongo no kurasu, dō desu ka.',
            en: 'How is your Japanese class?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'ほかの人の話を聞いたり、自分のことを話したりできるので、クラスで学ぶことは楽しいです。話し好きな人もいるし、はずかしがりやの人もいます。',
            romaji: 'Hoka no hito no hanashi o kiitari, jibun no koto o hanashitari dekiru node, kurasu de manabu koto wa tanoshii desu. Hanashizukina hito mo iru shi, hazukashigariya no hito mo imasu.',
            en: 'Because we can listen to others and talk about ourselves, learning in a class is fun. Some love talking, and some are shy.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 6,
    titleJp: '結婚',
    titleRomaji: 'Kekkon',
    titleEn: 'Marriage',
    summaryEn: 'Sharing recent news about a wedding and congratulating friends.',
    audioTracks: '204–206',
    canDos: [
      {
        id: 'cando-25',
        number: 25,
        topicNumber: 6,
        titleJp: '友だちの最近のニュースについて別の友だちと話す (Can-do 25)',
        titleRomaji: 'Tomodachi no saikin no nyūsu ni tsuite betsu no tomodachi to hanasu',
        titleEn: 'Talk with another friend about a friend’s recent news',
        situationEn: 'Sharing the news that Norika is getting married.',
        keyExpressions: [
          {
            jp: '聞きましたか。のりかさん、結婚するそうですよ。',
            romaji: 'Kikimashita ka. Norika-san, kekkon suru sō desu yo.',
            en: 'Did you hear? I heard Norika is getting married.'
          },
          {
            jp: '何かお祝いをしようと思うんですが。',
            romaji: 'Nanika oiwai o shiyō to omoun desu ga.',
            en: 'I’m thinking of doing something to celebrate.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '聞きましたか。のりかさん、結婚するそうですよ。日本祭で知り合った人だそうです。',
            romaji: 'Kikimashita ka. Norika-san, kekkon suru sō desu yo. Nihon-matsuri de shiriatta hito da sō desu.',
            en: 'Did you hear? Apparently Norika is getting married to someone she met at the Japan Festival!'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: 'じゃあ、今、きっと幸せでしょうね。何かお祝いをしようと思うんですが。',
            romaji: 'Jā, ima, kitto shiawase deshō ne. Nanika oiwai o shiyō to omoun desu ga.',
            en: 'She must be so happy. I’m thinking of doing something to celebrate.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'いいですね。そうしましょう。',
            romaji: 'Ii desu ne. Sō shimashō.',
            en: 'That’s a great idea. Let’s do that.'
          }
        ]
      },
      {
        id: 'cando-26',
        number: 26,
        topicNumber: 6,
        titleJp: '友だちについて聞いた話をほんにんにたしかめる (Can-do 26)',
        titleRomaji: 'Tomodachi ni tsuite kiita hanashi o honnin ni tashikameru',
        titleEn: 'Confirm news you heard about a friend directly with them',
        situationEn: 'Congratulating Norika on her upcoming marriage.',
        keyExpressions: [
          {
            jp: 'のりかさん、聞きましたよ。結婚するそうですね。',
            romaji: 'Norika-san, kikimashita yo. Kekkon suru sō desu ne.',
            en: 'Norika, I heard the news! You’re getting married, right?'
          },
          {
            jp: 'おめでとうございます。相手の人はどんな人ですか。',
            romaji: 'Omedetō gozaimasu. Aite no hito wa donna hito desu ka.',
            en: 'Congratulations! What kind of person is your partner?'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'のりかさん、聞きましたよ。結婚するそうですね。おめでとうございます。相手の人はどんな人ですか。',
            romaji: 'Norika-san, kikimashita yo. Kekkon suru sō desu ne. Omedetō gozaimasu. Aite no hito wa donna hito desu ka.',
            en: 'Norika, I heard! You’re getting married, right? Congratulations! What is your partner like?'
          },
          {
            speaker: 'のりか',
            speakerRomaji: 'Norika',
            speakerEn: 'Norika',
            jp: 'ええ、そうなんです。ブラジルの人で、銀行に勤めてます。',
            romaji: 'Ē, sō nan desu. Burajiru no hito de, ginkō ni tsutometemasu.',
            en: 'Yes, that’s right. He is Brazilian and works at a bank.'
          }
        ]
      },
      {
        id: 'cando-27',
        number: 27,
        topicNumber: 6,
        titleJp: '友だちのために、メモを見て結婚式のスピーチをする (Can-do 27)',
        titleRomaji: 'Tomodachi no tame ni, memo o mite kekkonshiki no supīchi o suru',
        titleEn: 'Give a wedding speech for a friend while looking at notes',
        situationEn: 'Wedding speech wishing everlasting happiness.',
        keyExpressions: [
          {
            jp: 'ご結婚おめでとうございます。',
            romaji: 'Go-kekkon omedetō gozaimasu.',
            en: 'Congratulations on your marriage.'
          },
          {
            jp: 'すえながいお幸せをおいのりしています。',
            romaji: 'Suenagai o-shiawase o o-inori shite imasu.',
            en: 'I pray for your everlasting happiness.'
          }
        ],
        dialogue: [
          {
            speaker: 'パウロ',
            speakerRomaji: 'Pauro',
            speakerEn: 'Paulo (Coworker)',
            jp: 'のりかさん、ジョージさん、ご結婚おめでとうございます。のりかさんはとてもやさしい人です。私が仕事でこまっているとき、いつもたすけてくれます。ふたりの家庭は、きっと明るくて、あたたかい家庭になると思います。すえながいお幸せをおいのりしています。',
            romaji: 'Norika-san, Jōji-san, go-kekkon omedetō gozaimasu. Norika-san wa totemo yasashii hito desu. Watashi ga shigoto de komatte iru toki, itsumo tasukete kuremasu. Futari no katei wa, kitto akarukute, atatakai katei ni naru to omoimasu. Suenagai o-shiawase o o-inori shite imasu.',
            en: 'Norika, George, congratulations on your wedding. Norika is very kind and always helps me at work. I believe your home will be bright and warm. I pray for your everlasting happiness.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 7,
    titleJp: 'なやみ相談',
    titleRomaji: 'Nayami sōdan',
    titleEn: 'Talking About Worries & Advice',
    summaryEn: 'Noticing when someone looks down and offering support.',
    audioTracks: '207–209',
    canDos: [
      {
        id: 'cando-30',
        number: 30,
        topicNumber: 7,
        titleJp: 'ほかの人の心配なようすについて話す (Can-do 30)',
        titleRomaji: 'Hoka no hito no shinpaina yōsu ni tsuite hanasu',
        titleEn: 'Talk about someone who looks worried or unwell',
        situationEn: 'Colleagues noticing that Oyama-san lacks energy today.',
        keyExpressions: [
          {
            jp: '大山さん、どうしたんでしょうね。なんだか元気がないですね。',
            romaji: 'Ōyama-san, dō shitan deshō ne. Nandaka genki ga nai desu ne.',
            en: 'I wonder what’s wrong with Oyama-san. He seems down.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '大山さん、どうしたんでしょうね。なんだか元気がないですね。ちょっと心配ですね。',
            romaji: 'Ōyama-san, dō shitan deshō ne. Nandaka genki ga nai desu ne. Chotto shinpai desu ne.',
            en: 'I wonder what’s the matter with Oyama-san. He seems down. I’m a bit worried.'
          }
        ]
      },
      {
        id: 'cando-31',
        number: 31,
        topicNumber: 7,
        titleJp: '元気がない人にこえをかける (Can-do 31)',
        titleRomaji: 'Genki ga nai hito ni koe o kakeru',
        titleEn: 'Speak to someone who looks down and offer to listen',
        situationEn: 'Checking in on Carla and offering to talk about her work worries.',
        keyExpressions: [
          {
            jp: 'いつもより元気がないですね。私でよかったら、相談にのりますよ。',
            romaji: 'Itsumo yori genki ga nai desu ne. Watashi de yokattara, sōdan ni norimasu yo.',
            en: 'You seem less energetic than usual. If I can help, I’m here to listen.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'カーラさん、どうしたんですか。いつもより元気がないですね。私でよかったら、相談にのりますよ。',
            romaji: 'Kāra-san, dō shitan desu ka. Itsumo yori genki ga nai desu ne. Watashi de yokattara, sōdan ni norimasu yo.',
            en: 'Carla, what’s wrong? You look less energetic than usual. If you’d like, I’m happy to listen.'
          },
          {
            speaker: 'カーラ',
            speakerRomaji: 'Kāra',
            speakerEn: 'Carla',
            jp: 'すみません。じつは、仕事のことでちょっと…。',
            romaji: 'Sumimasen. Jitsu wa, shigoto no koto de chotto...',
            en: 'Thank you. Actually, it’s something about work...'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: 'じゃあ、座って話しましょう。',
            romaji: 'Jā, suwatte hanashimashō.',
            en: 'Then let’s sit down and talk.'
          }
        ]
      },
      {
        id: 'cando-32',
        number: 32,
        topicNumber: 7,
        titleJp: 'ほかの人のなやみについてしらべて、けっかとかんそうを話す (Can-do 32)',
        titleRomaji: 'Hoka no hito no nayami ni tsuite shirabete, kekka to kansō o hanasu',
        titleEn: 'Survey people’s worries and discuss the results',
        situationEn: 'Presenting findings on workplace relationships and mental health.',
        keyExpressions: [
          {
            jp: '一番多かったのは、「職場の人間関係」です。',
            romaji: 'Ichiban ōkatta no wa, "shokuba no ningen kankei" desu.',
            en: 'The most common answer was "workplace relationships."'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '私は10人の人に、どんななやみがあるか聞きました。一番多かったのは、「職場の人間関係」です。二番目に多かったのは、「心の健康」です。',
            romaji: 'Watashi wa jū-nin no hito ni, donna nayami ga aru ka kikimashita. Ichiban ōkatta no wa, "shokuba no ningen kankei" desu. Nibanme ni ōkatta no wa, "kokoro no kenkō" desu.',
            en: 'I asked 10 people about their worries. The most common was workplace relationships. The second was mental health.'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 8,
    titleJp: '旅行中のトラブル',
    titleRomaji: 'Ryokōchū no toraburu',
    titleEn: 'Trouble While Traveling',
    summaryEn: 'Asking about airport announcements and finding lost bags.',
    audioTracks: '210–212',
    canDos: [
      {
        id: 'cando-35',
        number: 35,
        topicNumber: 8,
        titleJp: '空港でアナウンスがわからないときに、ほかの人に聞く／答える (Can-do 35)',
        titleRomaji: 'Kūkō de anaunsu ga wakaranai toki ni, hoka no hito ni kiku / kotaeru',
        titleEn: 'Ask or answer another person when you don’t understand an airport announcement',
        situationEn: 'Asking a fellow passenger about the flight boarding announcement.',
        keyExpressions: [
          {
            jp: '今のアナウンス、何て言ってましたか。',
            romaji: 'Ima no anaunsu, nante ittemashita ka.',
            en: 'What did the announcement just now say?'
          },
          {
            jp: 'あと20分ほどで、手続きが始まるそうです。',
            romaji: 'Ato nijuppun hodo de, tetsuzuki ga hajimaru sō desu.',
            en: 'It said procedures will begin in about 20 minutes.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Passenger A',
            jp: 'すみません。今のアナウンス、何て言ってましたか。',
            romaji: 'Sumimasen. Ima no anaunsu, nante ittemashita ka.',
            en: 'Excuse me. What did that announcement just say?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Passenger B',
            jp: 'もうすぐ乗れるそうです。あと20分ほどで、手続きが始まるそうです。',
            romaji: 'Mōsugu noreru sō desu. Ato nijuppun hodo de, tetsuzuki ga hajimaru sō desu.',
            en: 'They said we can board soon. Boarding procedures will start in about 20 minutes.'
          }
        ]
      },
      {
        id: 'cando-36-37',
        number: 36,
        topicNumber: 8,
        titleJp: '自分がどこで何をしていたか、思い出して言う・どこかに忘れ物をした友だちを助ける (Can-do 36 & 37)',
        titleRomaji: 'Jibun ga doko de nani o shite ita ka, omoidashite iu · Wasuremono o shita tomodachi o tasukeru',
        titleEn: 'Recall where and what you were doing, and help a friend who left something behind',
        situationEn: 'Retracing your steps to find a missing bag at the airport.',
        keyExpressions: [
          {
            jp: 'あ、しまった！かばんが1つない。どこかに忘れたかな。',
            romaji: 'A, shimatta! Kaban ga hitotsu nai. Dokoka ni wasureta kana.',
            en: 'Oh no! One bag is missing. I wonder if I left it somewhere.'
          },
          {
            jp: 'あるかもしれませんよ。とにかく行ってみましょう。',
            romaji: 'Aru kamoshiremasen yo. Tonikaku itte mimashō.',
            en: 'It might still be there. Anyway, let’s go check.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Traveler A',
            jp: 'あ、しまった！かばんが1つない。チェックインしたときは、あった。カフェでお茶を飲んだときも、あった。そのあとトイレに入った。たぶんトイレです！',
            romaji: 'A, shimatta! Kaban ga hitotsu nai. Chekkuin shita toki wa, atta. Kafe de ocha o nonda toki mo, atta. Sono ato toire ni haitta. Tabun toire desu!',
            en: 'Oh no! One bag is missing. At check-in, I had it. At the café, I had it. Then I went to the restroom. It’s probably in the restroom!'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Friend B',
            jp: 'あるかもしれませんよ。とにかく行ってみましょう。',
            romaji: 'Aru kamoshiremasen yo. Tonikaku itte mimashō.',
            en: 'It might be there! Let’s go look right now.'
          },
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Traveler A',
            jp: 'あった、あった。ありました。よかった！',
            romaji: 'Atta, atta. Arimashita. Yokatta!',
            en: 'Found it! It was there. Thank goodness!'
          }
        ]
      },
      {
        id: 'cando-38',
        number: 38,
        topicNumber: 8,
        titleJp: 'だれかに助けをもとめる (Can-do 38)',
        titleRomaji: 'Dareka ni tasuke o motomeru',
        titleEn: 'Call out to someone for emergency help',
        situationEn: 'Urgent expressions for fire, theft, or help.',
        keyExpressions: [
          {
            jp: 'すみません、だれか！／どろぼう！／火事です、にげてください！／助けて！',
            romaji: 'Sumimasen, dareka! / Dorobō! / Kaji desu, nigete kudasai! / Tasukete!',
            en: 'Excuse me, someone! / Thief! / Fire, please run! / Help!'
          }
        ],
        dialogue: [
          {
            speaker: '一般',
            speakerRomaji: 'Ippan',
            speakerEn: 'General / Urgent',
            jp: '火事です、にげてください！／助けて！／すみません、おります！',
            romaji: 'Kaji desu, nigete kudasai! / Tasukete! / Sumimasen, orimasu!',
            en: 'Fire, please evacuate! / Help! / Excuse me, I am getting off!'
          }
        ]
      }
    ]
  },
  {
    topicNumber: 9,
    titleJp: '仕事をさがす',
    titleRomaji: 'Shigoto o sagasu',
    titleEn: 'Looking for a Job & Work Life',
    summaryEn: 'Speaking at company reception and discussing your company and job responsibilities.',
    audioTracks: '213–214',
    canDos: [
      {
        id: 'cando-41',
        number: 41,
        topicNumber: 9,
        titleJp: '会社の受付で、会いたい人にとりついでもらう (Can-do 41)',
        titleRomaji: 'Kaisha no uketsuke de, aitai hito ni toritsuide morau',
        titleEn: 'Ask a company receptionist to connect you with the person you want to meet',
        situationEn: 'Edward arrives at reception to meet Murata-san.',
        keyExpressions: [
          {
            jp: 'エドワードともうします。総務課の村田さん、お願いしたいんですが。',
            romaji: 'Edowādo to mōshimasu. Sōmuka no Murata-san, onegai shitain desu ga.',
            en: 'My name is Edward. May I speak with Murata-san from General Affairs?'
          },
          {
            jp: '少々お待ちください。',
            romaji: 'Shōshō omachi kudasai.',
            en: 'Please wait a moment.'
          }
        ],
        dialogue: [
          {
            speaker: '受付の人',
            speakerRomaji: 'Uketsuke no hito',
            speakerEn: 'Receptionist',
            jp: 'いらっしゃいませ。',
            romaji: 'Irasshaimase.',
            en: 'Welcome. How may I help you?'
          },
          {
            speaker: 'エドワード',
            speakerRomaji: 'Edowādo',
            speakerEn: 'Edward',
            jp: 'すみません。エドワードともうします。総務課の村田さん、お願いしたいんですが。',
            romaji: 'Sumimasen. Edowādo to mōshimasu. Sōmuka no Murata-san, onegai shitain desu ga.',
            en: 'Excuse me. My name is Edward. I’d like to see Murata-san of General Affairs, please.'
          },
          {
            speaker: '受付の人',
            speakerRomaji: 'Uketsuke no hito',
            speakerEn: 'Receptionist',
            jp: '村田ですね。おやくそくですか。ただいまおよびします。少々お待ちください。',
            romaji: 'Murata desu ne. O-yakusoku desu ka. Tadaima oyobi shimasu. Shōshō omachi kudasai.',
            en: 'Murata, certainly. Do you have an appointment? I will call him right away. Please wait a moment.'
          }
        ]
      },
      {
        id: 'cando-42',
        number: 42,
        topicNumber: 9,
        titleJp: '勤めている会社と自分の仕事について話す (Can-do 42)',
        titleRomaji: 'Tsutomete iru kaisha to jibun no shigoto ni tsuite hanasu',
        titleEn: 'Talk about the company you work for and your job',
        situationEn: 'Describing your company and responsibilities.',
        keyExpressions: [
          {
            jp: '私は機械をつくる会社で働いてます。',
            romaji: 'Watashi wa kikai o tsukuru kaisha de hataraitemasu.',
            en: 'I work at a company that manufactures machinery.'
          },
          {
            jp: '今は主にアジアの支社との連絡を担当してます。',
            romaji: 'Ima wa omoni Ajia no shisha to no renraku o tantō shitemasu.',
            en: 'Right now I am mainly in charge of communication with our Asian branch offices.'
          },
          {
            jp: '私の職場は、人間関係がとてもよくて、働きやすいですよ。',
            romaji: 'Watashi no shokuba wa, ningen kankei ga totemo yokute, hatarakiyasui desu yo.',
            en: 'My workplace has great relationships, making it very easy to work in.'
          }
        ],
        dialogue: [
          {
            speaker: 'A',
            speakerRomaji: 'A-san',
            speakerEn: 'Speaker A',
            jp: '今、どんなところで働いてますか。',
            romaji: 'Ima, donna tokoro de hataraitemasu ka.',
            en: 'What kind of place do you work at now?'
          },
          {
            speaker: 'B',
            speakerRomaji: 'B-san',
            speakerEn: 'Speaker B',
            jp: '私は機械をつくる会社で働いてます。もう3年になります。今は主にアジアの支社との連絡を担当してます。私の職場は、人間関係がとてもよくて、働きやすいですよ。',
            romaji: 'Watashi wa kikai o tsukuru kaisha de hataraitemasu. Mō san-nen ni narimasu. Ima wa omoni Ajia no shisha to no renraku o tantō shitemasu. Watashi no shokuba wa, ningen kankei ga totemo yokute, hatarakiyasui desu yo.',
            en: 'I work at a machinery manufacturing company. It’s been three years. Currently I liaise with our Asian branch offices. My workplace has great relationships and is very easy to work in.'
          }
        ]
      }
    ]
  }
];
