import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Motorcycle from './models/Motorcycle.js';
import SiteConfig from './models/SiteConfig.js';

await connectDB();

await Motorcycle.deleteMany();
await SiteConfig.deleteMany();

await SiteConfig.create({
  ownerName:   'Vincent',
  ownerBio:    '義大利鋼管公路車收藏家，迷戀每一條焊縫背後的工藝哲學。這五台車，是五段與鋼鐵對話的旅程。',
  siteTitle:   'Steel & Soul',
  heroTagline: '五台義大利鋼管公路車，五個時代的工藝傳奇'
});

await Motorcycle.insertMany([
  // ─── 1. Colnago Bititan Art Decor ───
  {
    slug: 'colnago-bititan',
    name: 'Colnago Bititan Art Decor',
    tagline: '雙下管鈦合金 × 手工藝術彩繪，90年代巔峰之作',
    year: 1993,
    status: 'Complete',
    accentColor: '#8b5cf6',
    order: 1,
    photos: [
      { url: '/bikes/colnago Bititan/IMG_8898.JPG', isCover: true,  caption: 'Colnago Bititan 全車' },
      { url: '/bikes/colnago Bititan/IMG_9134.JPG', isCover: false, caption: 'Art Decor 彩繪細節' },
      { url: '/bikes/colnago Bititan/IMG_9140.JPG', isCover: false, caption: '雙下管特寫' },
      { url: '/bikes/colnago Bititan/IMG_9160.JPG', isCover: false, caption: '套管工藝' }
    ],
    specs: {
      frame: [
        { category: 'Frame', label: '材質',   value: '3-2.5 鈦合金（Titanium）' },
        { category: 'Frame', label: '設計',   value: '雙下管（Twin Down Tube）' },
        { category: 'Frame', label: '生產年份', value: '約 1993–1996 年' },
        { category: 'Frame', label: '塗裝',   value: 'Art Decor 手工噴砂彩繪' }
      ],
      engine:     [],
      suspension: [
        { category: 'Fork', label: '前叉', value: 'Precisa 直拉式鋼前叉 / Time 碳纖維前叉' }
      ],
      brakes:     [],
      wheels:     [],
      dimensions: []
    },
    buildTimeline: [
      { date: '1993 年',     milestone: '研發誕生',       description: 'Colnago 推出 Bititan，以雙下管解決早期鈦合金五通剛性不足的問題。' },
      { date: '1993–1996', milestone: 'Art Decor 彩繪時代', description: '義大利工匠手工噴砂與塗裝，騎士小人圖騰、漸層色塊成為標誌。' },
      { date: '1996 年後',   milestone: '停產',           description: '因生產週期短，保存良好的車架在收藏界被視為超級逸品。' }
    ],
    uniqueFeatures: [
      { title: '雙下管設計',       description: '將下管一分為二，大幅提升五通剛性，是 Bititan 最鮮明的工程標誌。',           iconEmoji: '⚙️' },
      { title: 'Art Decor 手繪',  description: '手工噴砂與塗裝，含「單車騎士小人」圖騰，每台配色各異，是可騎乘的藝術品。', iconEmoji: '🎨' },
      { title: '鈦合金吸震性',     description: '3-2.5 鈦合金提供極佳吸震性與強度重量比，長途騎乘舒適度一流。',               iconEmoji: '✨' }
    ],
    ridingStyle: {
      terrain:    ['長途公路', '爬坡', '城市'],
      rideType:   '舒適巡航 × 藝術展示',
      ergonomics: '義大利幾何，偏激進但不失舒適',
      description: 'Bititan 騎起來輕盈而有彈性，鈦合金的特性讓路面震動被優雅地吸收。下坡時穩定，爬坡時有種不慌不忙的自信感。每次把它推出去，都覺得自己在帶著一件藝術品上路。'
    }
  },

  // ─── 2. Colnago Master ───
  {
    slug: 'colnago-master',
    name: 'Colnago Master',
    tagline: '梅花管 × 套管工藝，鋼管車的永恆經典',
    year: 1988,
    status: 'Complete',
    accentColor: '#f59e0b',
    order: 2,
    photos: [
      { url: '/bikes/colnago Master/IMG_8458.JPG', isCover: true,  caption: 'Colnago Master 全車' },
      { url: '/bikes/colnago Master/IMG_0289.JPG', isCover: false, caption: '梅花管截面特寫' },
      { url: '/bikes/colnago Master/IMG_0294.JPG', isCover: false, caption: 'Lug 套管工藝' },
      { url: '/bikes/colnago Master/IMG_8464.JPG', isCover: false, caption: '頭管與電鍍細節' },
      { url: '/bikes/colnago Master/IMG_8707.JPG', isCover: false, caption: '五通區域' },
      { url: '/bikes/colnago Master/IMG_8708.JPG', isCover: false, caption: '整車側視' }
    ],
    specs: {
      frame: [
        { category: 'Frame', label: '管材',   value: 'Columbus Gilco S4 梅花管（Star-shaped）' },
        { category: 'Frame', label: '鋼材',   value: 'DT15V 高強度鋼' },
        { category: 'Frame', label: '接合方式', value: 'Lug（套管）焊接' },
        { category: 'Frame', label: '版本',   value: 'Master Più（1988）' }
      ],
      engine:     [],
      suspension: [
        { category: 'Fork', label: '前叉', value: 'Precisa 直拉式鋼前叉（鍍鉻）' }
      ],
      brakes:     [],
      wheels:     [],
      dimensions: []
    },
    buildTimeline: [
      { date: '1983 年',   milestone: 'Master 初代誕生',   description: 'Ernesto Colnago 與 Gilberto Colombo 共同開發梅花管技術，確立星型截面與電鍍前叉的經典樣式。' },
      { date: '1988 年',   milestone: 'Master Più 發表',  description: '引入內走線設計與更精緻的後勾爪處理，成為該系列最受推崇的版本之一。' },
      { date: '1991 年',   milestone: 'Master Olympic',   description: '奧運紀念版，極致華麗的 Decor 彩繪。' },
      { date: '1998 年起', milestone: 'Master X-Light',   description: '現代仍在產版本，維持義大利純手工製造。' }
    ],
    uniqueFeatures: [
      { title: '梅花管截面',   description: '星型四凹截面利用力學原理提升抗扭轉剛性，衝刺爬坡反應更直接，是視覺與性能的完美結合。', iconEmoji: '🌸' },
      { title: 'Lug 套管工藝', description: '精密的套管焊接配合電鍍與噴砂彩繪，每道接縫都是義大利匠人的驕傲。',                   iconEmoji: '🔩' },
      { title: '內走線設計',   description: 'Più 版本率先導入內走線，在 1988 年屬於極為先進的設計。',                           iconEmoji: '🧵' }
    ],
    ridingStyle: {
      terrain:    ['賽道', '爬坡', '長途公路'],
      rideType:   '競技 × 收藏展示',
      ergonomics: '義大利激進幾何，適合積極的騎乘姿勢',
      description: 'Master 的剛性在踩踏瞬間就能感受到，梅花管給力量一個去處。它不是最輕的車，但它讓你知道每一瓦的力量都沒有白費。騎它出門，路人的目光都停在那些梅花管上。'
    }
  },

  // ─── 3. Eddy Merckx MXL ───
  {
    slug: 'eddy-merckx-mxl',
    name: 'Eddy Merckx MXL',
    tagline: '鋼管戰艦，Columbus MXL 異型管的極致剛性',
    year: 1993,
    status: 'Complete',
    accentColor: '#00f0ff',
    order: 3,
    photos: [
      { url: '/bikes/Eddy Mecrck MXL/IMG_9924.JPG', isCover: true,  caption: 'Eddy Merckx MXL 全車' },
      { url: '/bikes/Eddy Mecrck MXL/IMG_9930.JPG', isCover: false, caption: 'MXL 管材異型截面' },
      { url: '/bikes/Eddy Mecrck MXL/IMG_9932.JPG', isCover: false, caption: 'MAX 前叉特寫' },
      { url: '/bikes/Eddy Mecrck MXL/IMG_9945.JPG', isCover: false, caption: '五通與後下叉' }
    ],
    specs: {
      frame: [
        { category: 'Frame', label: '管材',   value: 'Columbus MXL (Merckx MAX)' },
        { category: 'Frame', label: '鋼材',   value: 'Nivacrom 合金鋼' },
        { category: 'Frame', label: '管形',   value: '雙向橢圓化（Bi-axially ovalized）' },
        { category: 'Frame', label: '防鏽處理', value: '管材內部鍍鋅' },
        { category: 'Frame', label: '含前叉重量', value: '約 2.72 公斤' }
      ],
      engine:     [],
      suspension: [
        { category: 'Fork', label: '前叉', value: 'MAX 前叉（Teardrop-shaped，超粗壯鋼製）' }
      ],
      brakes:     [],
      wheels:     [],
      dimensions: []
    },
    buildTimeline: [
      { date: '1990 年代初', milestone: 'MXL 誕生',         description: 'Merckx 基於 Columbus MAX 管材微調管徑，開發專屬 Lug，命名為 MXL（Merckx MAX）。' },
      { date: '1990 年代',   milestone: '職業賽場征戰',     description: 'Team Motorola（含年輕的 Lance Armstrong）與 Team Telekom 均以 MXL 參賽。' },
      { date: '2005 年',     milestone: '管材停產',         description: 'Columbus 停產 MXL 管材，Merckx 推出最後 100 台限量版。' },
      { date: '2014 年',     milestone: '25 週年復刻',      description: '小量推出 25 週年復刻版，二手行情持續上漲。' }
    ],
    uniqueFeatures: [
      { title: '雙向橢圓管設計', description: '下管靠近頭管處橫向橢圓，靠近五通處縱向橢圓，最大化扭轉剛性，力量傳輸極其直接。', iconEmoji: '⚡' },
      { title: '管材內部鍍鋅',  description: '出廠前管材內部鍍鋅防鏽，在當時是極高成本的稀少工法。',                           iconEmoji: '🛡️' },
      { title: '下坡軌道感',    description: '高速下坡時車身穩固如軌道，時速 80-100km 依然無共振，是鋼管車中的高速之王。',     iconEmoji: '🏎️' }
    ],
    ridingStyle: {
      terrain:    ['下坡', '衝刺', '長途公路'],
      rideType:   '高速暴力型',
      ergonomics: '偏向攻擊型幾何，適合力量型騎手',
      description: 'MXL 騎起來像是一輛坦克，但是一輛會飛的坦克。踩下去的瞬間，那個剛性回饋讓人上癮。下坡時的穩定感是我騎過所有車裡最強的，車頭不會抖、車架不會晃，就是直直地衝下去。'
    }
  },

  // ─── 4. MASI 3V Volumetrica ───
  {
    slug: 'masi-3v-volumetrica',
    name: 'MASI 3V Volumetrica',
    tagline: 'Henry James 勾爪 × 三角管形，美義混血的工藝',
    year: 1995,
    status: 'Complete',
    accentColor: '#ff007a',
    order: 4,
    photos: [
      { url: '/bikes/MASI/IMG_0307.JPG', isCover: true,  caption: 'MASI 3V 全車' },
      { url: '/bikes/MASI/IMG_0308.JPG', isCover: false, caption: '3V 三角管截面' },
      { url: '/bikes/MASI/IMG_0309.JPG', isCover: false, caption: 'Henry James 勾爪特寫' },
      { url: '/bikes/MASI/IMG_0320.JPG', isCover: false, caption: '五通細節' }
    ],
    specs: {
      frame: [
        { category: 'Frame', label: '型號',   value: '3V Volumetrica' },
        { category: 'Frame', label: '管形',   value: '三角形截面（3V / Triangular）' },
        { category: 'Frame', label: '勾爪',   value: 'Henry James 手工鍛造勾爪' }
      ],
      engine:     [],
      suspension: [],
      brakes:     [],
      wheels:     [],
      dimensions: []
    },
    buildTimeline: [
      { date: '1990 年代中', milestone: '3V Volumetrica 發表', description: 'MASI 以三角形截面管材挑戰傳統圓管設計，提供更高的截面慣性矩。' },
      { date: '—',          milestone: 'Henry James 勾爪',    description: '採用美國 Henry James 手工鍛造勾爪，展現美義工藝跨界合作。' }
    ],
    uniqueFeatures: [
      { title: '3V 三角管截面', description: 'Volumetrica 的三角形截面管在相同重量下提供更高剛性，是對傳統圓管的大膽挑戰。', iconEmoji: '🔺' },
      { title: 'Henry James 勾爪', description: '美國頂級手工鍛造勾爪，精度與強度兼具，是整台車最具收藏話題的零件。',       iconEmoji: '🔧' }
    ],
    ridingStyle: {
      terrain:    ['長途公路', '爬坡'],
      rideType:   '均衡全能型',
      ergonomics: '舒適的義大利幾何',
      description: '3V 的剛性比一般圓管鋼車更直接，但保留了鋼管特有的路感回饋。Henry James 勾爪讓整台車的精緻感提升一個層次，每次調整後輪都是享受。'
    }
  },

  // ─── 5. Pegoretti BLE ───
  {
    slug: 'pegoretti-ble',
    name: 'Pegoretti BLE',
    tagline: 'Big Leg Emma — 有史以來最硬的鋼管車架',
    year: 2008,
    status: 'Complete',
    accentColor: '#10b981',
    order: 5,
    photos: [
      { url: '/bikes/Pegoretti BLE/IMG_0923.JPG', isCover: true,  caption: 'Pegoretti BLE 全車' },
      { url: '/bikes/Pegoretti BLE/IMG_0926.JPG', isCover: false, caption: 'Ciavete 手繪塗裝' },
      { url: '/bikes/Pegoretti BLE/IMG_0927.JPG', isCover: false, caption: '超粗後下叉' },
      { url: '/bikes/Pegoretti BLE/IMG_0928.JPG', isCover: false, caption: '下管工字梁細節' },
      { url: '/bikes/Pegoretti BLE/IMG_0929.JPG', isCover: false, caption: '五通區域' },
      { url: '/bikes/Pegoretti BLE/IMG_0932.JPG', isCover: false, caption: 'Falz 碳纖維前叉' },
      { url: '/bikes/Pegoretti BLE/IMG_0933.JPG', isCover: false, caption: '頭碗組細節' },
      { url: '/bikes/Pegoretti BLE/IMG_0981.JPG', isCover: false, caption: '整車動態' }
    ],
    specs: {
      frame: [
        { category: 'Frame', label: '管材',     value: 'Columbus LIFE 熱處理超大口徑鋼管' },
        { category: 'Frame', label: '內部加固',  value: '5 片雷射切割工字型加強片（手工焊接）' },
        { category: 'Frame', label: '後下叉直徑', value: '22–35mm（同品牌最粗）' },
        { category: 'Frame', label: '車架重量',  value: '約 1.86 公斤以上' },
        { category: 'Frame', label: '五通規格',  value: '義大利規格（Italian BB）' }
      ],
      engine:     [],
      suspension: [
        { category: 'Fork', label: '前叉',  value: 'Pegoretti Falz 碳纖維前叉' },
        { category: 'Fork', label: '頭碗組', value: 'Chris King 合作開發 D11 專屬頭碗' }
      ],
      brakes:     [],
      wheels:     [],
      dimensions: []
    },
    buildTimeline: [
      { date: '設計初衷', milestone: '為大隻佬而生',     description: '名稱取自 Frank Zappa 歌曲《Big Leg Emma》，Dario Pegoretti 為力量型或身材高大的車手設計。' },
      { date: '製作過程', milestone: '手工焊接內部工字梁', description: 'Dario 親手在超大口徑下管內焊接 5 片雷射切割工字型加強片，消除踩踏側向形變。' },
      { date: '完成',     milestone: 'Ciavete 手繪塗裝', description: '每台 BLE 的塗裝都由 Dario 手工完成，隨興抽象風格讓每台都是世界唯一。' },
      { date: '現在',     milestone: '歸檔型號',         description: 'BLE 已列入歸檔型號，因製作耗時且產量極少，是收藏家眼中的鋼管車王者。' }
    ],
    uniqueFeatures: [
      { title: '內置工字梁',      description: '下管內部手工焊接 5 片雷射切割工字型加強片，扭轉剛性提升至極限，被譽為有史以來最硬的鋼管車架。', iconEmoji: '🏋️' },
      { title: 'Ciavete 手繪',   description: '每台 BLE 的塗裝均由 Dario Pegoretti 親手完成，隨興抽象，世界上沒有兩台一模一樣。',             iconEmoji: '🎨' },
      { title: '超粗後下叉',      description: '後下叉直徑達 22–35mm，比同品牌其他型號粗約 4mm，視覺衝擊力十足。',                             iconEmoji: '💪' },
      { title: 'Frank Zappa 精神', description: '以搖滾樂手命名，不只是一台車，更是 Dario 對工藝極限與個人風格的宣言。',                       iconEmoji: '🎸' }
    ],
    ridingStyle: {
      terrain:    ['衝刺', '賽道', '爬坡'],
      rideType:   '暴力衝刺 × 藝術鑑賞',
      ergonomics: '適合力量型騎手，攻擊性幾何',
      description: '騎上 BLE 的第一下踩踏，你就知道這台車不是在跟你開玩笑。那個剛性是跨越時代的，衝刺的瞬間力量完全沒有流失。但你同時又知道自己騎的是 Dario 親手彩繪的作品——這種矛盾的美感，只有 Pegoretti 做得到。'
    }
  }
]);

console.log('Seed complete!');
await mongoose.disconnect();
