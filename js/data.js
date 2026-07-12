/* Content data ported verbatim from the Claude Design export
   (project/FCU Semiconductor College.dc.html). Do not paraphrase copy —
   every string here is the client-approved final text from the design chats. */
const SITE_DATA = {
  zh: {
    nav: { about: '關於逢甲', global: '臺美合作方案', labs: '產學共建實驗室', highlight: '亮點成果', partners: '合作夥伴' },
    hero: {
      badge: '116 學年度成立',
      title: '半導體學院',
      titleSub: 'College of Semiconductor',
      desc: '全國唯一涵蓋 IC 設計／EDA、元件／整合、製程／封測，以及半導體設備研發／數位孿生設計／製造的完整育才體系，培育具實作能力、產業經驗與國際視野，畢業即上線的半導體專才。',
      ctaPrimary: '探索全產業鏈',
      ctaSecondary: '臺美合作方案',
      note: '逢甲大學名列輝達執行長黃仁勳「GTC Taipei」主題演講供應鏈背板大學名單',
      stats: [
        { value: '1961年', label: '創校年份' },
        { value: '2萬1千+', label: '學生人數' },
        { value: '260+', label: '國際姐妹校' },
        { value: 'No.1', label: '全臺綜合私立大學排名' }
      ]
    },
    about: {
      kicker: 'ABOUT FCU',
      title: '關於逢甲',
      body: '逢甲大學緊鄰中科、精密機械園區及快速發展的水湳經貿園區，匯集台積電、臺灣美光等科技大廠。本校具備豐沛產官研資源，產學合作經費突破6億，穩居全臺綜合私校第一。\n為精準對接產業需求，逢甲攜手台積電、美光、旺宏等企業開設冠名學程，其中申請修習「台積電半導體學程」人數，居全臺之首。116學年度更將成立涵蓋全產業鏈的「半導體學院」，結合志聖等企業與水湳校區的創新動能，穩健培育具備高度實戰力的半導體尖端人才。',
      imgLabel: '共善樓．逢甲大學'
    },
    chain: {
      kicker: 'FULL INDUSTRY CHAIN',
      title: '全產業鏈育才體系',
      desc: '涵蓋半導體全產業鏈的完整育才體系，橫跨設計、元件、製程與設備。',
      items: [
        { tag: '01', title: 'IC 設計與 EDA', desc: '培育晶片架構設計與電子設計自動化工具應用人才，銜接前段設計端需求。' },
        { tag: '02', title: '元件與整合', desc: '聚焦半導體元件物理特性、材料整合與高階元件開發核心技術。' },
        { tag: '03', title: '製程與封測', desc: '深化製程技術、先進封裝與測試方法，強化後段量產與可靠性分析能力。' },
        { tag: '04', title: '設備研發．數位孿生．製造', desc: '結合力學模擬、AI 技術與數位孿生設計，培育半導體設備自主研發人才。' }
      ]
    },
    global: {
      kicker: 'GLOBAL COLLABORATION',
      title: '臺美半導體產學合作',
      desc: '以「短期培訓先行、產學實作深化、長期學制銜接」策略，透過 2+2、3+1+1 彈性雙學位學制，串聯美澳頂尖名校，構築學術、實務、就業三角。',
      keywordsLabel: '關鍵字',
      programs: [
        {
          num: '01',
          title: '半導體探索與臺灣產業體驗短期研習課程',
          duration: '2-4 週，可依美方學校需求調整',
          desc: '從一顆晶片出發，探索改變世界的臺灣科技力量。\n本計畫專為希望提早接觸科技與工程領域的美國高中生設計，結合半導體入門課程、校園實驗室體驗、基礎實作、企業參訪、專業華語與臺灣文化交流，引導學生認識晶片如何從設計、製造、封裝到測試，逐步走進完整的半導體產業鏈。\n學生將有機會參訪中部科學園區、新竹科學園區，以及欣銓科技、矽品精密、台灣美光、旺宏電子、志聖工業等半導體相關企業，近距離感受臺灣科技產業的創新能量。透過跨國團隊學習與文化體驗，學生不僅能建立半導體基礎知識，更能拓展國際視野，為未來的大學學習與科技職涯開啟更多可能。',
          tracksLabel: '課程主題',
          tracks: ['半導體入門與臺灣產業概況', '後段製程、量測與測試基礎', '校內實驗室參訪與基礎實作', '企業參訪與專業華語課程'],
          keywords: ['半導體課程', '專業華語課程', '文化體驗課程', '企業參訪'],
          targetLabel: '招收對象',
          target: '高中生和大學部學生',
          companiesLabel: '合作企業（洽談中）',
          companies: '欣銓科技、矽品精密工業、臺灣美光、旺宏電子、志聖工業'
        },
        {
          num: '02',
          title: '半導體製造及實習計畫',
          duration: '1 學年（1 學期課程＋1 學期企業實習）',
          desc: '一年的臺灣學習與產業實戰，培養接軌全球半導體供應鏈的即戰力。\n本計畫以「核心基礎、專業分流、企業實證」為培育主軸。第一學期，學生將修習全英語授課的碩士級半導體課程，並運用 Virtual Fab 虛擬晶圓廠進行模擬實作，建立半導體元件、固態物理及工程材料等核心知識。\n學生可依興趣選擇半導體製程與設備、封裝與測試、智慧製造或晶片設計等專業方向，深入學習薄膜技術、後段製程、可靠度分析、元件失效分析、機器學習與超大型積體電路設計。\n第二學期，學生將依專業背景媒合至台灣美光、矽品精密、欣銓科技、旺宏電子、志聖工業等企業參與實習，在真實產業環境中驗證所學，累積跨文化合作與工程實務經驗，為投入國際半導體產業做好準備。',
          tracksLabel: '專業分流',
          tracks: ['跨域樞紐與核心基礎：高等半導體元件、固態物理、工程材料', '製程與設備分流：現代半導體製程與積體電路技術、薄膜技術', '封裝與測試分流：後段製程技術、可靠性分析、元件失效分析、VLSI 可測性設計', '智慧製造與晶片設計分流：機器學習、VLSI 設計'],
          keywords: ['半導體課程：製程／封裝／測試', '企業參訪', '企業實習'],
          targetLabel: '招收對象',
          target: '大學部四年級與碩士班學生',
          companiesLabel: '合作企業',
          companies: '美光科技、矽品精密、欣銓科技、旺宏電子、志聖工業'
        },
        {
          num: '03',
          title: '半導體先進封裝與設備開發',
          duration: '1 學年（1 學期課程＋1 學期企業實習）',
          desc: '從先進封裝到設備開發，培養推動下一代晶片製造的跨域工程人才。\n隨著人工智慧與高效能運算快速發展，先進封裝與製程設備已成為半導體產業持續突破的關鍵。本計畫整合半導體製程、封裝技術、自動化、材料工程與模擬分析，培養能夠理解製程需求並參與設備設計與系統整合的跨域人才。\n第一學期以全英語課程進行，內容涵蓋半導體製程設備、封裝與測試、前瞻材料、積層製造、半導體光電性質、先進自動化系統、工程最佳化設計與電腦輔助模擬分析。\n第二學期，學生將前往矽品精密、聯華電子、志聖工業等合作企業實習，參與實際的製造、封裝、自動化或設備開發工作。學生將在真實工程情境中整合機械、材料、電機與製程知識，建立投入先進封裝及半導體設備產業所需的創新與實作能力。',
          tracksLabel: '課程模組',
          tracks: ['設備、製程及基本知識：半導體製程設備、封裝測試', '先進製造與光電應用：前瞻材料與積層製造技術、光電性質', '先進封裝設備設計開發：自動化系統應用、工程最佳設計、電腦輔助模擬分析'],
          keywords: ['半導體課程：製程／封裝／先進設備設計', '專業華語課程', '企業參訪', '企業實習'],
          targetLabel: '招收對象',
          target: '具備工程專業背景並對半導體晶圓製造、封裝與設備有興趣之大四或研究所學生',
          companiesLabel: '合作企業',
          companies: '矽品精密工業、聯華電子、志聖工業'
        },
        {
          num: '04',
          title: '機械與電腦輔助工程學系國際半導體碩士專班',
          duration: '學位課程方案',
          desc: '從短期交流、產業實習到正式學位，打造連結臺灣與美國的半導體人才培育路徑。\n逢甲大學正持續擴充半導體高階人才培育體系。機械與電腦輔助工程學系「國際半導體碩士專班」已自115學年度正式招生，並規劃於116學年度成立資訊電機學院「半導體碩士學位學程」及「半導體學院」，建構涵蓋製程、封裝、測試、設備、設計及智慧製造的完整學習環境。\n未來的臺美學位合作將建立在既有短期研習、交換培訓及企業實習的基礎上，並進一步發展課程銜接、學分相互採認、跨國實習、雙聯學位及研究合作機制。\n逢甲大學將結合與普渡大學、聖荷西州立大學、辛辛那提大學等美國夥伴的合作經驗，以及臺灣半導體產業資源，逐步打造串聯「國際學習、產業實作、前瞻研究與全球職涯」的完整人才培育路徑。',
          tracksLabel: '推動進度',
          tracks: ['115 學年度起正式招生', '116 學年度增設半導體碩士學位學程與半導體學院', '現階段優先推動短期培訓與短期交換培訓'],
          keywords: [],
          targetLabel: '招收對象',
          target: '碩士生與博士生',
          companiesLabel: '合作企業',
          companies: '待與美方學校及產業夥伴確認後續發展'
        }
      ],
      uniLabel: '美國半導體人才培育合作大學',
      universities: [
        { name: 'Purdue University', loc: 'West Lafayette, Indiana', url: 'https://www.purdue.edu/', logo: 'assets/uni-purdue.jpg' },
        { name: 'San Jose State University', loc: 'San Jose, California', url: 'https://www.sjsu.edu/', logo: 'assets/uni-sjsu.jpg' },
        { name: 'University of Cincinnati', loc: 'Cincinnati, Ohio', url: 'https://www.uc.edu/', logo: 'assets/uni-cincinnati.jpg' }
      ]
    },
    highlight: {
      badge: '首屆 TSIA 半導體設備創新獎',
      title: '工科院王啟昌團隊 榮獲首屆 TSIA 半導體設備創新獎',
      desc: '臺灣半導體產業協會（TSIA）首次頒發此獎，全國僅三所大專校院獲獎。王啟昌院長率領綠色動力實驗室團隊，以「結合熱力、固力模擬分析及 AI 技術，改善先進封裝設備加熱爐系統」獲此殊榮，為即將成立的半導體學院打下堅實產學基礎。',
      quote: '將產業的真實問題帶回實驗室，是技術研發與人才培育的根本。',
      quoteBy: '王啟昌．逢甲大學工程科學學院院長',
      linkLabel: '閱讀完整新聞報導',
      linkUrl: 'https://www.fcu.edu.tw/en/news/20260715/'
    },
    labs: {
      kicker: 'UPCOMING LABS',
      title: '產學共建實驗室，即將啟用',
      desc: '逢甲大學攜手全球領先的半導體測試與先進封裝設備企業，於校內共建產業級實驗場域，讓學生在真實產線環境中累積實作經驗。',
      items: [
        {
          photo: 'assets/fcu-lab-ardentec.png',
          photoLabel: '前瞻半導體測試中心示意圖',
          partnerLabel: '逢甲大學 X 欣銓科技 ARDENTEC',
          title: '前瞻半導體測試中心',
          desc: '欣銓科技為晶圓代工龍頭台積電（TSMC）長期信賴的策略測試夥伴，專精於車用電子、5G 通訊及物聯網晶片的關鍵測試。憑藉高精準度與卓越的良率控管，欣銓成為台積電不可或缺的供應鏈後盾。\n欣銓科技設立於逢甲大學的前瞻半導體測試中心，將提供逢甲大學師生與業界同級的先進量測學習機會。'
        },
        {
          photo: 'assets/fcu-lab-csun.jpg',
          photoLabel: '先進封裝無塵室示意圖',
          partnerLabel: '逢甲大學 X 志聖工業 C SUN',
          title: '先進封裝無塵室',
          desc: '志聖工業是臺灣頂尖的半導體先進封裝設備供應商，為台積電（TSMC）擴充 AI 晶片產能的關鍵夥伴。志聖專精於熱處理與壓膜技術，全力支援台積電 CoWoS 等先進封裝製程。憑藉卓越的設備可靠度與技術創新，志聖屢次榮獲台積電「優良供應商獎」。\n志聖工業將於逢甲設立產業等級之無塵室，以驗證與逢甲聯合開發之次世代先進封裝設備。'
        }
      ]
    },
    partners: {
      kicker: 'INDUSTRY PARTNERS',
      title: '合作企業夥伴',
      featuredList: [
        {
          photo: 'assets/fcu-tsmc.jpg',
          photoLabel: '逢甲學生於實驗室進行半導體設備實作課程',
          logoLabel: 'TSMC',
          title: '台積電半導體學程 · 智能製造學程',
          desc: '逢甲大學資訊電機學院與工程與科學學院攜手台積電，共同規劃推出「台積電半導體學程」及「智能製造學程」，結合業界師資與實務課程，培育具備半導體與智慧製造專業能力的產業人才；申請修習「台積電半導體學程」人數居全臺之首。',
          linkLabel: '了解台積電半導體學程',
          url: 'https://careers.tsmc.com/en_US/education/JobDetail/3781'
        },
        {
          photo: 'assets/fcu-micron.jpg',
          photoLabel: '近 400 位師生齊聚共善樓大講堂，共同關注 AI 與記憶體創新所帶來的產業新契機',
          logoLabel: 'Micron 臺灣美光',
          title: '美光企業委訓與產學人才培育',
          desc: '逢甲大學產學經營與人才培訓中心為美光 NTP 培訓基地，已共同推動多項專業人才培育計畫，包含配合台中市政府勞工局與勞動部辦理「半導體生產製造與設備工程師訓練班」、美光企業委訓工作坊等實務課程，協助學生及學員縮短學用落差。',
          linkLabel: '前往逢甲大學產學經營與人才培育中心',
          url: 'https://extension.fcu.edu.tw/#/courseSeriesDetails?id=1ed5b69b-229c-49f4-b2a2-93d1e98b80ea'
        },
        {
          photo: 'assets/fcu-csun.jpg',
          photoLabel: '逢甲大學 x 志聖工業產學聯盟合作備忘錄簽約暨共建實驗室與設備捐贈典禮',
          logoLabel: 'C SUN 志聖工業',
          title: '前瞻能源與熱管理實驗室共建計畫',
          desc: '臺灣製程設備產業領導者志聖工業長期支持科技創新與教育發展，自 2022 年起無條件捐贈逢甲大學五年五百萬元，設立「志聖工業團隊創新激勵發展基金」，鼓勵師生共組團隊，推動跨領域創新計畫；2025 年更捐贈儀器設備與逢甲共建「前瞻能源與熱管理實驗室」。',
          linkLabel: '閱讀完整新聞報導',
          url: 'https://www.fcu.edu.tw/news/2025050902/'
        },
        {
          photo: 'assets/fcu-macronix.jpg',
          photoLabel: '旺宏電子人才培育計畫說明會',
          logoLabel: 'Macronix 旺宏電子',
          title: '逢甲大學 X 旺宏電子「3+2 學碩雙學位」攜手培育半導體人才',
          desc: '「3+2 學碩雙學位培育計畫」透過前 3 年的大學基礎訓練及後 2 年的碩士專業養成，培育半導體先進工廠之製程與設備工程師。特色為 5 年取得學碩士雙學位、優渥的服務獎助學金、提前進入業界累積工作年資；「預聘計畫」則提供準碩士畢業生與技術主管對談、具競爭力的 Pre-Offer 與簽約金。',
          linkLabel: '閱讀完整新聞報導',
          url: 'https://www.fcu.edu.tw/news/2022092301/'
        },
        {
          photo: 'assets/fcu-ardentec-team.jpg',
          photoLabel: '逢甲大學與欣銓科技團隊合影，展示共同研發之半自動調針機台',
          logoLabel: '欣銓科技 Ardentec',
          title: '逢甲大學 x 欣銓科技「專業人才培育」',
          desc: '自 2021 年逢甲大學與欣銓科技簽署產學備忘錄以來，雙方已攜手工程科學學院及資訊電機學院推動四件技術研發案。在人才培育上，結合本校「4+1 預研生」與「3+2 學碩合一」制度，推出接軌職場的系列專案；包含實習生計畫與「留任獎勵」，並針對預研生及直升研究所設立專屬獎學金，全面支持學子安心專注於學術與實務研究。',
          linkLabel: '閱讀完整新聞報導',
          url: 'https://www.fcu.edu.tw/en/news/2024011903/'
        },
        {
          photo: 'assets/fcu-spil.jpg',
          photoLabel: '矽品精密無塵室團隊合影',
          logoLabel: 'SPIL 矽品精密',
          title: '國際半導體碩士專班',
          desc: '逢甲大學與矽品精密工業成立國際半導體碩士專班，共同設計客製化課程，培育半導體工程技術人才。本專班延續機電系碩士班為發展主軸，與矽品精密工業股份有限公司合作，專班學生於碩二期間可至矽品公司進行校外專業實習，以實務應用增進專業技能，為企業培訓未來所需的半導體領域人才。',
          linkLabel: '前往國際半導體碩士專班',
          url: 'https://mcae.fcu.edu.tw/en/master-your-future-in-taiwan/'
        }
      ],
      otherLabel: '其他合作企業',
      list: []
    },
    contact: {
      title: '聯絡資訊',
      address: '臺中市西屯區文華路 100 號（407102）',
      phone: '+886 4-2451-7250',
      email: 'webadmin@fcu.edu.tw',
      site: 'www.fcu.edu.tw',
      copyright: '© 2026 Feng Chia University. All rights reserved.'
    }
  },
  en: {
    nav: { about: 'About FCU', global: 'Taiwan–US Program', labs: 'Industry-Academia Labs', highlight: 'Highlights', partners: 'Partners' },
    hero: {
      badge: 'Founding in AY 2027',
      title: 'College of Semiconductor',
      titleSub: '逢甲大學 半導體學院',
      desc: "Taiwan's only complete talent pipeline spanning IC Design/EDA, Devices/Integration, Process/Packaging & Testing, and Semiconductor Equipment R&D, Digital-Twin Design & Manufacturing — cultivating job-ready semiconductor talent with real-world experience and a global outlook.",
      ctaPrimary: 'Explore the Chain',
      ctaSecondary: 'Global Programs',
      note: 'FCU is featured on the supply-chain backdrop of NVIDIA CEO Jensen Huang’s GTC Taipei keynote',
      stats: [
        { value: '1961', label: 'Founded' },
        { value: '21,000+', label: 'Students' },
        { value: '260+', label: 'International Partner Universities' },
        { value: 'No.1', label: 'Comprehensive private university ranking' }
      ]
    },
    about: {
      kicker: 'ABOUT FCU',
      title: 'About Feng Chia University',
      body: "Feng Chia University is strategically located adjacent to the Central Taiwan Science Park, the Precision Machinery Innovation Technology Park, and the rapidly developing Shuinan Economic and Trade Park, forming a hub for tech giants such as TSMC and Micron. Boasting abundant resources across industry, government, and research sectors, the university's industry-academia collaboration funding has surpassed NT$600 million, firmly securing its position as the top comprehensive private university in Taiwan.\nTo precisely align with industry demands, Feng Chia has partnered with leading enterprises including TSMC, Micron, and Macronix to offer corporate-sponsored academic programs. Notably, the number of students applying for the \"TSMC Semiconductor Certificate Program\" is the highest nationwide. Furthermore, in the 2027 academic year, the university is set to establish a \"College of Semiconductor\" encompassing the entire industry chain. By integrating the innovative momentum of the Shuinan Campus with enterprises such as C Sun, the university is committed to steadily cultivating cutting-edge semiconductor professionals equipped with highly practical skills.",
      imgLabel: 'Virtuosi Hall, FCU'
    },
    chain: {
      kicker: 'FULL INDUSTRY CHAIN',
      title: 'Comprehensive Talent Development Across the Semiconductor Value Chain',
      desc: 'A comprehensive talent development framework spanning the entire semiconductor value chain, from IC design and devices to manufacturing processes and equipment design.',
      items: [
        { tag: '01', title: 'IC Design & EDA', desc: 'Chip architecture design and EDA tool proficiency for front-end design roles.' },
        { tag: '02', title: 'Devices & Integration', desc: 'Core technologies in device physics, materials integration, and advanced device development.' },
        { tag: '03', title: 'Process, Packaging & Testing', desc: 'Advanced process technology, packaging, and test methods for back-end production and reliability.' },
        { tag: '04', title: 'Equipment R&D, Digital Twin & Manufacturing', desc: 'Mechanical simulation, AI, and digital-twin design for equipment R&D talent.' }
      ]
    },
    global: {
      kicker: 'GLOBAL COLLABORATION',
      title: 'Taiwan–U.S. Semiconductor Industry–Academia Collaboration',
      desc: 'Adopting a strategy of "starting with short-term training, deepening engagement through hands-on industry–academia projects, and progressing toward long-term degree pathways," we offer flexible 2+2 and 3+1+1 dual-degree programs in partnership with leading universities in the United States and Australia, creating a strong nexus among academic learning, practical experience, and career development.',
      keywordsLabel: 'Keywords',
      programs: [
        {
          num: '01',
          title: 'Short-Term Program on Semiconductor Exploration and Taiwan Industry Experience',
          duration: '2–4 weeks, adjustable based on partner needs',
          desc: 'Discover the technology behind the chips that are shaping our world.\nDesigned primarily for U.S. high school students, this short-term program offers an engaging introduction to semiconductors and Taiwan’s world-leading technology ecosystem. Students explore how chips are manufactured, packaged, measured, and tested through interactive classes, laboratory experiences, introductory hands-on activities, corporate visits, Mandarin learning, and cultural exchange.\nThe program may include visits to the Central Taiwan Science Park, Hsinchu Science Park, and leading semiconductor companies such as Ardentec, SPIL, Micron Taiwan, Macronix, and C SUN. By learning directly from university faculty, industry professionals, and Taiwanese students, participants gain early exposure to engineering education, expand their global perspective, and discover future opportunities in science, technology, and semiconductor-related fields.',
          tracksLabel: 'Course Topics',
          tracks: ['Semiconductor fundamentals & Taiwan industry overview', 'Back-end process, metrology & testing basics', 'On-campus lab tours & hands-on training', 'Corporate visits & MSP Mandarin courses'],
          keywords: ['Semiconductor Course', 'Mandarin Course', 'Cultural Experience', 'Corporate Visits'],
          targetLabel: 'Target Trainees:',
          target: 'High school students, college students, and undergraduate students',
          companiesLabel: 'Partners (under discussion):',
          companies: 'Ardentec, SPIL, Micron Taiwan, Macronix, C SUN'
        },
        {
          num: '02',
          title: 'Semiconductor Manufacturing and Internship Program',
          duration: '1 Academic Year (1 semester coursework + 1 semester internship)',
          desc: 'One year in Taiwan. One powerful step toward a global semiconductor career.\nThis program follows a progressive learning model that connects core knowledge, professional specialization, and industry-based validation. During the first semester, students take interdisciplinary, English-taught semiconductor courses at the graduate level and apply their knowledge through Virtual Fab simulations.\nParticipants may specialize in semiconductor processing and equipment, packaging and testing, smart manufacturing, or integrated circuit design. Courses cover areas such as advanced semiconductor devices, thin-film technology, back-end processing, reliability analysis, device failure analysis, machine learning, and VLSI design.\nIn the second semester, students are matched with industry partners according to their academic background and professional interests. Internship opportunities may be provided by companies such as Micron Taiwan, SPIL, Ardentec, Macronix, and C SUN. By combining academic learning with real-world industrial experience, the program prepares students to contribute effectively to the international semiconductor supply chain.',
          tracksLabel: 'Specialization Tracks',
          tracks: ['Interdisciplinary Hub & Core Foundation: Advanced Semiconductor Devices, Solid State Physics, Engineering Materials', 'Process & Equipment Track: Modern Semiconductor Process & IC Technology, Thin Film Technology', 'Packaging & Testing Track: Back-end Process Technology, Reliability & Failure Analysis, VLSI Design for Testability', 'Smart Manufacturing & IC Design: Machine Learning, VLSI Circuit Design'],
          keywords: ['Process / Packaging / Testing', 'Corporate Visits', 'Internship'],
          targetLabel: 'Target Trainees:',
          target: 'Senior undergraduate and master’s students',
          companiesLabel: 'Partners:',
          companies: 'Micron Technology, SPIL, Ardentec, Macronix, C SUN'
        },
        {
          num: '03',
          title: 'Advanced Semiconductor Packaging and Equipment Development',
          duration: '1 Academic Year (1 semester coursework + 1 semester internship)',
          desc: 'Develop the technologies and equipment that will power the next generation of semiconductor innovation.\nAs artificial intelligence and high-performance computing continue to advance, semiconductor packaging and manufacturing equipment have become critical drivers of industry growth. This interdisciplinary program integrates semiconductor processing, advanced packaging, automation, materials engineering, optimization, and computer-aided simulation.\nDuring the first semester, students complete English-taught modules covering semiconductor process equipment, packaging and testing, advanced materials, additive manufacturing, semiconductor optoelectronic properties, advanced automation systems, optimal engineering design, and simulation analysis.\nIn the second semester, participants undertake practical training with industry partners such as SPIL, UMC, and C SUN. Through direct involvement in manufacturing, packaging, automation, or equipment development, students learn to integrate mechanical, electrical, materials, and process engineering knowledge. The program prepares graduates to become innovative engineers capable of contributing to advanced packaging and semiconductor equipment development.',
          tracksLabel: 'Course Modules',
          tracks: ['Equipment, Processes & Fundamentals: Process Equipment, Packaging & Testing', 'Advanced Manufacturing & Optoelectronics: Advanced Materials, Additive Manufacturing', 'Packaging Equipment Design: Automation Systems, Optimal Engineering Design, CAE Simulation'],
          keywords: ['Process / Packaging / Equipment Design', 'Mandarin Course', 'Corporate Visits', 'Internship'],
          targetLabel: 'Target Trainees:',
          target: 'Senior undergraduate and graduate students with an engineering background interested in wafer manufacturing, packaging, and equipment',
          companiesLabel: 'Partners:',
          companies: 'SPIL, UMC, C SUN MFG. LTD.'
        },
        {
          num: '04',
          title: "International Master's Program in Semiconductors, Department of Mechanical and Computer-Aided Engineering",
          duration: 'Degree Program',
          desc: "From short-term exploration and industry internships to advanced degrees, Feng Chia University is building a comprehensive semiconductor education pathway connecting Taiwan and the United States.\nFCU continues to expand its graduate-level semiconductor education ecosystem. The International Master’s Program in Semiconductors offered by the Department of Mechanical and Computer-Aided Engineering began enrollment in the 2026 academic year. In the 2027 academic year, the university plans to establish a new Master’s Degree Program in Semiconductors within the College of Information and Electrical Engineering, together with a dedicated College of Semiconductor.\nFuture Taiwan–U.S. degree collaboration will build upon FCU’s short-term training, exchange, and internship programs. Areas under development include curriculum alignment, mutual credit recognition, transnational internships, dual-degree pathways, and collaborative research.\nDrawing on FCU’s relationships with U.S. institutions such as Purdue University, San José State University, and the University of Cincinnati—as well as its close connections with Taiwan’s semiconductor industry—the pathway aims to integrate international education, industry experience, advanced research, and global career development.",
          tracksLabel: 'Program Status',
          tracks: ['Enrollment began AY 2026', "AY 2027: new Semiconductor Master's Program & College of Semiconductor", 'Short-term training currently prioritized'],
          keywords: [],
          targetLabel: 'Target Trainees:',
          target: "Master’s and doctoral students",
          companiesLabel: 'Partners:',
          companies: 'To be confirmed with U.S. partner universities and industry partners'
        }
      ],
      uniLabel: 'U.S. Partner Universities for Semiconductor Talent',
      universities: [
        { name: 'Purdue University', loc: 'West Lafayette, Indiana', url: 'https://www.purdue.edu/', logo: 'assets/uni-purdue.jpg' },
        { name: 'San Jose State University', loc: 'San Jose, California', url: 'https://www.sjsu.edu/', logo: 'assets/uni-sjsu.jpg' },
        { name: 'University of Cincinnati', loc: 'Cincinnati, Ohio', url: 'https://www.uc.edu/', logo: 'assets/uni-cincinnati.jpg' }
      ]
    },
    highlight: {
      badge: '1st TSIA Semiconductor Equipment Innovation Award',
      title: "Prof. Chi-Chang Wang's Team Wins the 1st TSIA Semiconductor Equipment Innovation Award",
      desc: 'The Taiwan Semiconductor Industry Association (TSIA) awarded this new honor for the first time, with only three universities nationwide recognized. Dean Chi-Chang Wang led his team using thermal/structural simulation and AI to improve advanced-packaging furnace systems — laying a solid industry foundation for the upcoming College of Semiconductor.',
      quote: 'Bringing real industry problems back into the lab is the foundation of both technology R&D and talent cultivation.',
      quoteBy: 'Chi-Chang Wang, Dean, College of Engineering and Science, FCU',
      linkLabel: 'Read Full News Article',
      linkUrl: 'https://www.fcu.edu.tw/en/news/20260715/'
    },
    labs: {
      kicker: 'UPCOMING LABS',
      title: 'Industry–Academia Joint Laboratory — Opening Soon',
      desc: 'Feng Chia University is partnering with a global leader in semiconductor testing and advanced packaging equipment to establish an industry-grade laboratory on campus, enabling students to gain hands-on experience in an authentic production-line environment.',
      items: [
        {
          photo: 'assets/fcu-lab-ardentec.png',
          photoLabel: 'Advanced Semiconductor Testing Center (rendering)',
          partnerLabel: 'Feng Chia University × Ardentec',
          title: 'Advanced Semiconductor Testing Center',
          desc: 'Ardentec is a long-standing and trusted strategic testing partner of TSMC, the world’s leading semiconductor foundry. The company specializes in mission-critical testing for automotive electronics, 5G communications, and IoT chips. With its high-precision testing capabilities and outstanding yield management, Ardentec plays a vital role in supporting TSMC’s supply chain.\n The Advanced Semiconductor Testing Center established by Ardentec at Feng Chia University will provide faculty members and students with access to advanced measurement and testing facilities comparable to those used in industry.'
        },
        {
          photo: 'assets/fcu-lab-csun.jpg',
          photoLabel: 'Advanced Packaging Cleanroom (rendering)',
          partnerLabel: 'Feng Chia University × C SUN',
          title: 'Advanced Packaging Cleanroom',
          desc: 'C SUN is one of Taiwan’s leading suppliers of advanced semiconductor packaging equipment and a key partner in supporting TSMC’s expansion of AI chip production capacity. The company specializes in thermal processing and lamination technologies, providing critical equipment solutions for advanced packaging processes such as CoWoS.\nWith outstanding equipment reliability and continuous technological innovation, C SUN has received TSMC’s Excellent Supplier Award on multiple occasions.\nC SUN will establish an industry-grade cleanroom at Feng Chia University to validate next-generation advanced packaging equipment jointly developed with the University.'
        }
      ]
    },
    partners: {
      kicker: 'INDUSTRY PARTNERS',
      title: 'Industry Partners',
      featuredList: [
        {
          photo: 'assets/fcu-tsmc.jpg',
          photoLabel: 'FCU students in a hands-on semiconductor equipment lab course',
          logoLabel: 'TSMC',
          title: 'TSMC Semiconductor Program · Smart Manufacturing Program',
          desc: "FCU's College of Information and Electrical Engineering and College of Engineering and Science partnered with TSMC to jointly design the “TSMC Semiconductor Program” and “Smart Manufacturing Program,” combining industry faculty and hands-on coursework to cultivate talent in semiconductor and smart manufacturing. The TSMC Semiconductor Program draws the most applicants of any FCU program nationwide.",
          linkLabel: 'Learn About the TSMC Semiconductor Program',
          url: 'https://careers.tsmc.com/en_US/education/JobDetail/3781'
        },
        {
          photo: 'assets/fcu-micron.jpg',
          photoLabel: 'Nearly 400 students and faculty gathered at Virtuosi Hall’s auditorium to explore the opportunities AI and memory innovation bring to industry.',
          logoLabel: 'Micron Taiwan',
          title: 'Micron Corporate Training & Industry–Academia Talent Development',
          desc: "FCU's Center for Industry-Academia Collaboration & Talent Development is a Micron NTP training base, jointly advancing several talent programs, including a “Semiconductor Manufacturing and Equipment Engineer Training Program” held with the Taichung City Government's Bureau of Labor Affairs and the Ministry of Labor, and Micron-sponsored corporate training workshops, helping students and trainees bridge the gap between classroom learning and workplace practice.",
          linkLabel: 'Visit the FCU Industry-Academic Management and Extension Center',
          url: 'https://extension.fcu.edu.tw/#/courseSeriesDetails?id=1ed5b69b-229c-49f4-b2a2-93d1e98b80ea'
        },
        {
          photo: 'assets/fcu-csun.jpg',
          photoLabel: 'FCU x C SUN MFG. Industry Alliance MOU Signing and Lab Equipment Donation Ceremony',
          logoLabel: 'C SUN MFG.',
          title: 'Advanced Energy & Thermal Management Lab Partnership',
          desc: 'C SUN MFG., a leader in Taiwan’s process equipment industry, has long supported technology innovation and education. Since 2022, it has unconditionally donated NT$5 million per year for five years to Feng Chia University, establishing the "C SUN Team Innovation Incentive and Development Fund" to encourage faculty-student teams and cross-disciplinary innovation projects. In 2025, it further donated equipment to co-build the "Advanced Energy & Thermal Management Lab" with FCU.',
          linkLabel: 'Read Full News Article',
          url: 'https://www.fcu.edu.tw/news/2025050902/'
        },
        {
          photo: 'assets/fcu-macronix.jpg',
          photoLabel: 'Macronix talent development program information session',
          logoLabel: 'Macronix',
          title: 'FCU x Macronix "3+2 Bachelor–Master Dual Degree" for Semiconductor Talent',
          desc: 'The "3+2 Dual Degree Program" combines 3 years of undergraduate foundations with 2 years of master’s training to cultivate process and equipment engineers for advanced semiconductor fabs — earning both degrees in 5 years with generous service scholarships and early industry seniority. A "Pre-Hire Program" also offers graduating master’s students direct dialogue with technical managers, competitive pre-offers, and signing bonuses.',
          linkLabel: 'Read Full News Article',
          url: 'https://www.fcu.edu.tw/news/2022092301/'
        },
        {
          photo: 'assets/fcu-ardentec-team.jpg',
          photoLabel: 'FCU and Ardentec team with the co-developed semi-automatic pin-adjustment equipment',
          logoLabel: 'Ardentec',
          title: 'FCU x Ardentec Professional Talent Development',
          desc: "Since signing an industry-academia MOU with Ardentec in 2021, FCU's College of Engineering and Science and College of Information and Electrical Engineering have jointly advanced four technology R&D projects. On talent development, combining FCU's \"4+1 Pre-Research Student\" and \"3+2 Bachelor-Master\" programs, the partnership offers career-track initiatives including internship programs and retention incentives, plus dedicated scholarships for pre-research and direct-to-graduate-school students, fully supporting students to focus on academic and applied research.",
          linkLabel: 'Read Full News Article',
          url: 'https://www.fcu.edu.tw/en/news/2024011903/'
        },
        {
          photo: 'assets/fcu-spil.jpg',
          photoLabel: 'SPIL cleanroom team photo',
          logoLabel: 'SPIL',
          title: "International Semiconductor Master's Program",
          desc: "Feng Chia University and Siliconware Precision Industries Co., Ltd. (SPIL) established an International Semiconductor Master's Program, jointly designing a customized curriculum to cultivate semiconductor engineering talent. Building on the Department of Mechanical and Computer-Aided Engineering's master's program, students complete a professional off-campus internship at SPIL during their second year, gaining practical experience to become the semiconductor talent the industry needs.",
          linkLabel: "Visit the International Semiconductor Master's Program",
          url: 'https://mcae.fcu.edu.tw/en/master-your-future-in-taiwan/'
        }
      ],
      otherLabel: 'Other Industry Partners',
      list: []
    },
    contact: {
      title: 'Contact',
      address: 'No. 100, Wenhua Rd., Xitun Dist., Taichung City 407102, Taiwan',
      phone: '+886 4-2451-7250',
      email: 'webadmin@fcu.edu.tw',
      site: 'www.fcu.edu.tw',
      copyright: '© 2026 Feng Chia University. All rights reserved.'
    }
  }
};
