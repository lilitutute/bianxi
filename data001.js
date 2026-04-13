var DATA = {

  /* ── 页眉 ── */
  meta: {
    module: "模块一 · 形近词辨析",
    title:  "ex- 家族四兄弟",
    tag:    "PRUEBA 1 · LÉXICO"
  },

  /* ── 词汇列表（几个词就写几个，2~5个都支持）── */
  words: [
    {
      word:    "expansión",
      pos:     "f. 名词",
      meaning: "扩张、扩展——规模或范围持续变大的过程",
      memory:  "ex-pan-sión → ex胖了——因为一直在扩张，越来越胖",
      /* 搭配和例句分开写 */
      collocations: [
        { phrase: "en expansión",       phrase_zh: "处于扩张中" },
        { phrase: "expansión económica", phrase_zh: "经济扩张"  }
      ],
      examples: [
        {
          es: "Es un sector en rápida expansión.",
          zh: "这是一个快速扩张的行业。"
        },
        {
          es: "La expansión económica impulsó la creación de empleo.",
          zh: "经济扩张推动了就业岗位的增加。"
        }
      ],
      related: [
        { word: "expansivo", note: "adj. 扩张性的" },
        { word: "expandir",  note: "v. 扩展" }
      ],
      compare: {
        meaning: "扩张、扩展",
        usage:   "规模持续变大",
        core:    "en expansión"
      }
    },
    {
      word:    "explosión",
      pos:     "f. 名词",
      meaning: "爆炸；爆发——突然、剧烈地爆发（物理或比喻）",
      memory:  "ex-PLO-sión，重音PLO就像爆炸声砰咯——自带音效",
      collocations: [
        { phrase: "explosión demográfica", phrase_zh: "人口爆炸" },
        { phrase: "explosión de ira",      phrase_zh: "怒火爆发" }
      ],
      examples: [
        {
          es: "El siglo XX fue testigo de una explosión demográfica sin precedentes.",
          zh: "20世纪见证了前所未有的人口爆炸。"
        },
        {
          es: "Su explosión de ira sorprendió a todos los presentes.",
          zh: "他突然爆发的怒火让在场所有人大吃一惊。"
        }
      ],
      related: [
        { word: "explosivo", note: "adj./n. 爆炸性的；炸药" },
        { word: "implosión", note: "n. 内爆" }
      ],
      compare: {
        meaning: "爆炸；爆发",
        usage:   "突然剧烈爆发",
        core:    "explosión demográfica"
      }
    },
    {
      word:    "expulsión",
      pos:     "f. 名词",
      meaning: "驱逐、开除——把人强制推出某空间或组织",
      memory:  "ex-pul-sión → pul 近似英语 pull（拉出去）——被拉出场，红牌驱逐",
      collocations: [
        { phrase: "expulsión del campo", phrase_zh: "被驱逐出场" },
        { phrase: "expulsión del país",  phrase_zh: "驱逐出境"   }
      ],
      examples: [
        {
          es: "El árbitro ordenó la expulsión del jugador tras la agresión.",
          zh: "裁判在严重犯规后下令将该球员驱逐出场。"
        },
        {
          es: "Las autoridades ordenaron su expulsión inmediata del país.",
          zh: "当局下令立即将其驱逐出境。"
        }
      ],
      related: [
        { word: "expulsar",  note: "v. 驱逐" },
        { word: "expulsado", note: "adj. 被驱逐的" }
      ],
      compare: {
        meaning: "驱逐、开除",
        usage:   "强制推出某人",
        core:    "expulsión del campo"
      }
    },
    {
      word:    "exportación",
      pos:     "f. 名词",
      meaning: "出口（贸易）——把商品或服务运往国外销售",
      memory:  "ex-port-ación → port = 港口——货物从港口运出去，和英文 export 一模一样",
      collocations: [
        { phrase: "exportación de productos", phrase_zh: "产品出口" },
        { phrase: "fomentar la exportación",  phrase_zh: "促进出口" }
      ],
      examples: [
        {
          es: "Las exportaciones de vino español aumentaron un 12% el año pasado.",
          zh: "去年西班牙葡萄酒出口量增长了12%。"
        },
        {
          es: "El gobierno ofrece incentivos para fomentar la exportación de tecnología.",
          zh: "政府提供激励措施以促进技术出口。"
        }
      ],
      related: [
        { word: "exportar",    note: "v. 出口" },
        { word: "importación", note: "n. 进口" }
      ],
      compare: {
        meaning: "出口（贸易）",
        usage:   "商品运往国外",
        core:    "exportación de productos"
      }
    }
  ],

  /* ── 练习题 ── */
  exercises: [
    {
      type:  "cn-fill",
      title: "中文情景题——读懂场景，填入最合适的西语词",
      hint:  "从词库中选择，注意名词单复数形式。",
      items: [
        { q: "公司在拉美地区新开了五家分公司，这属于商业的___。",              answer: "expansión"   },
        { q: "梅西因为严重犯规被裁判举红牌罚下场，这是一次___。",              answer: "expulsión"   },
        { q: "某短视频App突然爆红，该国网红数量在一个月内翻了十倍，这是___。",  answer: "explosión"   },
        { q: "西班牙每年向中国运送大量猪肉，这属于___。",                    answer: "exportación" }
      ]
    },
    {
      type:  "es-fill",
      title: "西语填空题——选择正确形式填入空白处",
      hint:  "注意名词的单复数变化。",
      items: [
        {
          q:      "La ___ de las redes móviles ha permitido a los usuarios disfrutar de una experiencia en línea más fluida.",
          answer: "expansión"
        },
        {
          q:      "El árbitro ordenó la ___ del jugador tras la agresión.",
          answer: "expulsión"
        },
        {
          q:      "Una ___ de gas destruyó la planta industrial por completo.",
          answer: "explosión"
        },
        {
          q:      "Las ___ de productos agrícolas representan el 30% de los ingresos del país.",
          answer: "exportaciones"
        }
      ]
    },
    {
      type:  "correction",
      title: "判断改错题——找出句中用错的词并改正",
      hint:  "每句只有一个词用错，错误词已加波浪线标注。",
      items: [
        {
          sentence: "La {explosión} de la empresa en el mercado asiático ha sido muy exitosa este año.",
          wrong:    "explosión",
          correct:  "expansión",
          note:     "公司在市场上是扩张，不是爆炸"
        },
        {
          sentence: "El gobierno firmó un acuerdo para aumentar la {expulsión} de tecnología a Europa.",
          wrong:    "expulsión",
          correct:  "exportación",
          note:     "向欧洲出口技术，不是驱逐技术"
        }
      ]
    }
  ]
};
