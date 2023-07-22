const WORDS = Object.freeze([
  {
    word: 'SANTRFOR',
    forbiddenWords: ['FUTBOL', 'OYUNCU', 'SAHA', 'FORVET', 'GOL'],
    id: 'roOZmSrwnXLCpu2-QH54l',
  },
  {
    word: 'MOZAİK',
    forbiddenWords: ['KÜÇÜK', 'TAŞ', 'PASTA', 'DUVAR', 'PARÇA'],
    id: 'wyB5ncqcXc3rrMRsM_y3L',
  },
  {
    word: 'SERTİFİKA',
    forbiddenWords: ['BELGE', 'ALMAK', 'VERMEK', 'EĞİTİM', 'KURS'],
    id: 'E4vK5JmFHYDOFw6duoHMt',
  },
  {
    word: 'İNSAN SARRAFI',
    forbiddenWords: ['ANLAMAK', 'TANIMAK', 'İYİ', 'KÖTÜ', 'BİLMEK'],
    id: 'VCXIjOP_ygfPXkrF5YM9r',
  },
  {
    word: 'ELİ YATKIN',
    forbiddenWords: ['BECERİKLİ', 'HAMARAT', 'İŞ', 'BİLMEK', 'ÇALIŞMAK'],
    id: 'Y6JfcoAIZ3eF2Pqfr1YzG',
  },
  {
    word: 'PİRAMİT',
    forbiddenWords: ['MISIR', 'ÜÇGEN', 'ŞEKİL', 'FİRAVUN', 'TAŞ'],
    id: 'hAsBx8PBDenQ-WI4egEkU',
  },
  {
    word: 'FRENK ÜZÜMÜ',
    forbiddenWords: ['KIRMIZI', 'ŞURUP', 'BÖĞÜRTLEN', 'AHUDUDU', 'MEYVE'],
    id: 'LArLhBQ8Y-KIjROUhNP0P',
  },
  {
    word: 'MUTLU SON',
    forbiddenWords: ['HİKAYE', 'MASAL', 'FİLM', 'AŞK', 'BİTMEK'],
    id: 'ePz1Y8ccdupuZVdoDNQD_',
  },
  {
    word: 'İŞ KURMAK',
    forbiddenWords: ['DÜKKAN', 'AÇMAK', 'PATRON', 'KENDİ', 'ŞİRKET'],
    id: 'J9tpeyNrTFw-nOacj3NqO',
  },
  {
    word: 'ÖZGÜVEN',
    forbiddenWords: ['SAYGI', 'KENDİ', 'İNANMAK', 'BAŞARMAK', 'EGO'],
    id: 'HsRRGPhhaiIw4ZW3QrfKQ',
  },
  {
    word: 'TİFTİK',
    forbiddenWords: ['KEÇİ', 'YÜN', 'KAZAK', 'YUMUŞAK', 'KIL'],
    id: 'AVTmS4SdT2CvJSE2RecwN',
  },
  {
    word: 'ULVİ',
    forbiddenWords: ['AMAÇ', 'YÜKSEK', 'ULU', 'YÜCE', 'BENZERSİZ'],
    id: 'XTc64GYDBhaDFuwTVXoKK',
  },
  {
    word: 'LAÇKALAŞMAK',
    forbiddenWords: ['GEVŞEMEK', 'RAHAT', 'SAMİMİ', 'ORTAM', 'ESKİMEK'],
    id: 'kehttB7s6_IH38MVXoEXF',
  },
  {
    word: 'LARVA',
    forbiddenWords: ['KURTÇUK', 'KURBAĞA', 'SİNEK', 'YUMURTA', 'YAVRU'],
    id: 'yGM1HMyS5gaPaUnSvmmQ9',
  },
  {
    word: 'KÖPEKBALIĞI',
    forbiddenWords: ['HAYVAN', 'YÜZGEÇ', 'JAWS', 'BALİNA', 'OKYANUS'],
    id: 'wudJFuuVxZewnebhlIW7K',
  },
  {
    word: 'LIV TYLER',
    forbiddenWords: ['SİNEMA', 'OYUNCU', 'ARWEN', 'ARAGORN', 'ELF'],
    id: 'FwsZzhX-8YUWeD7wiFeFo',
  },
  {
    word: 'FİLETO',
    forbiddenWords: ['ET', 'KESMEK', 'İNCE', 'DİLİM', 'BALIK'],
    id: '3G0ULhdjFd2QFHK_2hgck',
  },
  {
    word: 'RANDIMAN',
    forbiddenWords: ['VERİM', 'ÇALIŞMAK', 'İŞ', 'SONUÇ', 'BAŞARI'],
    id: 'KwEyar08HAFT6oryS6Gpo',
  },
  {
    word: 'LAFAZAN',
    forbiddenWords: ['KONUŞMAK', 'GEVEZE', 'SÖZ', 'HAZIRCEVAP', 'ANLATMAK'],
    id: '805qnQdgqHKA9NRO_-u-J',
  },
  {
    word: 'DERBEDER',
    forbiddenWords: ['DAĞINIK', 'TİTİZ', 'TEMİZ', 'YAŞAMAK', 'DÜZENSİZ'],
    id: 'gaeyz3YjbeFMRGr7n9D1x',
  },
  {
    word: 'MAT ETMEK',
    forbiddenWords: ['SATRANÇ', 'YENMEK', 'BİTİRMEK', 'ŞAH', 'ALT ETMEK'],
    id: 'Y66Uwn3ZDrRLRdjBs3P-0',
  },
  {
    word: 'ÇİĞ BÖREK',
    forbiddenWords: ['YİYECEK', 'HAMUR', 'KIZARTMAK', 'MANTI', 'PUF BÖREĞİ'],
    id: 'tIw35CVq5wOcoXf7QjjLC',
  },
  {
    word: 'MESANE',
    forbiddenWords: ['ŞİŞMEK', 'İDRAR', 'TORBA', 'KESE', 'ÇİŞ'],
    id: '0AONm0ejpX803Cj2cQDW2',
  },
  {
    word: 'SUDOKU',
    forbiddenWords: ['BULMACA', 'SAYI', 'YERLEŞTİRMEK', 'KARE', 'JAPONYA'],
    id: 'McNAjodXAjkoHezXMARow',
  },
  {
    word: 'DİNAR',
    forbiddenWords: ['PARA', 'BİRİM', 'IRAK', 'ARAP', 'KUVEYT'],
    id: 'CZIdPN6f2QpIuwfU5Q43u',
  },
  {
    word: 'KALSİYUM',
    forbiddenWords: ['KEMİK', 'SÜT', 'PEYNİR', 'YOĞURT', 'DİŞ'],
    id: 'HZ8LvoRX0bFtNQZG7gI86',
  },
  {
    word: 'ORTODONTİ',
    forbiddenWords: ['DİŞ', 'TIP', 'DAL', 'TEL', 'DOKTOR'],
    id: 'Gl4_ADES65-inDiO0uVBt',
  },
  {
    word: 'KAĞIT HAVLU',
    forbiddenWords: ['SİLMEK', 'RULO', 'KURULAMAK', 'DÖKÜLMEK', 'MUTFAK'],
    id: 'BFGMx_Cg_JG5vML9AHhbg',
  },
  {
    word: 'AYNASIZ',
    forbiddenWords: ['POLİS', 'ARGO', 'HIRSIZ', 'FİLM', 'KOMİSER'],
    id: 'rtIRYsL4NeeMON0V_tQfJ',
  },
  {
    word: 'PROJEKTÖR',
    forbiddenWords: ['YANSITMAK', 'SİNEMA', 'SUNUM', 'IŞIK', 'PERDE'],
    id: '_Q5ftKEXBwkkbOUpnGpbW',
  },
  {
    word: 'ŞEHRAZAT',
    forbiddenWords: ['1001 GECE', 'MASAL', 'KAHRAMAN', 'ANLATMAK', 'BERGÜZAR KOREL'],
    id: 'YVHoMfUF_ZNfP_0s7Kwml',
  },
  {
    word: 'EVHAM',
    forbiddenWords: ['PANİK', 'ŞÜPHE', 'KUŞKU', 'VESVESE', 'ENDİŞE'],
    id: '0dZ-gUfjx4V1USUefzg9s',
  },
  {
    word: 'PARMAKLIK',
    forbiddenWords: ['HAPİSHANE', 'HIRSIZ', 'PENCERE', 'DEMİR', 'TAKMAK'],
    id: 'G7BuTGWkZMRBKS9uJay78',
  },
  {
    word: 'İSHAL',
    forbiddenWords: ['SULU', 'MİDE', 'BOZMAK', 'TUVALET', 'BAĞIRSAK'],
    id: 'jha27Nf8R2BiZZLUZesTP',
  },
  {
    word: 'LEBİDERYA',
    forbiddenWords: ['DENİZ KENARI', 'SAHİL', 'EV', 'YAZLIK', 'MANZARA'],
    id: 'xpFk16aRlzYHvzPGfaeLw',
  },
  {
    word: 'HELLİM PEYNİRİ',
    forbiddenWords: ['KIBRIS', 'SALATA', 'KAŞAR', 'KIZARTMAK', 'KAHVALTI'],
    id: '6sv7rS75axUsiBPpbX_P_',
  },
  {
    word: 'REKOLTE',
    forbiddenWords: ['TARIM', 'ÜRÜN', 'YIL', 'ALMAK', 'TARLA'],
    id: 'AzF3Rj7N_ZYjT2MTGGhxW',
  },
  {
    word: 'DURAK',
    forbiddenWords: ['OTOBÜS', 'TREN', 'DOLMUŞ', 'İNMEK', 'BİNMEK'],
    id: 'j_nxjsJYfFB29XVysvZX9',
  },
  {
    word: 'LOKAVT',
    forbiddenWords: ['GREV', 'İŞÇİ', 'ÇIKARMAK', 'PATRON', 'TOPLU'],
    id: '16K0HbNvDYAVgUqjmc7Zh',
  },
  {
    word: 'NİŞASTA',
    forbiddenWords: ['ŞEKER', 'KARBONHİDRAT', 'YİYECEK', 'PATATES', 'MISIR'],
    id: 'TmlrbURoEwdMFbpBw1KLT',
  },
  {
    word: 'ŞEBNEM FERAH',
    forbiddenWords: ['ŞARKICI', 'KADIN', 'ROCK', 'VOLVOX', 'VOKAL'],
    id: '5v10J6ODWJf0tgR6cR1lj',
  },
  {
    word: 'CAN SİMİDİ',
    forbiddenWords: ['DENİZ', 'YUVARLAK', 'TAKMAK', 'BOĞULMAK', 'VAPUR'],
    id: 'kzzKKOMZFHoQnggU_qQeg',
  },
  {
    word: 'KAMP',
    forbiddenWords: ['ÇADIR', 'ORMAN', 'ATEŞ', 'UYKU TULUMU', 'İZCİ'],
    id: '9gceV5KqP4eaIdgbjYK1D',
  },
  {
    word: 'SONRADAN GÖRME',
    forbiddenWords: ['ZENGİN', 'FAKİR', 'GÖSTERİŞ', 'ÖVÜNMEK', 'ABARTMAK'],
    id: 'Dc62E3V_W8urVZiRDS8R5',
  },
  {
    word: 'KIYASIYA',
    forbiddenWords: ['MÜCADELE', 'ZORLU', 'REKABET', 'ÇEKİŞMELİ', 'KIRAN KIRANA'],
    id: 'UDZfWqOVUGCPo6vC5Bxnk',
  },
  {
    word: 'KANTİN',
    forbiddenWords: ['OKUL', 'TOST', 'KAFETERYA', 'ÖĞRENCİ', 'YEMEK'],
    id: '2s-3UVafQxehJ6PH9WxxH',
  },
  {
    word: 'TAKMA DİŞ',
    forbiddenWords: ['AĞIZ', 'YEMEK', 'YAŞLI', 'DÖKÜLMEK', 'DAMAK'],
    id: 'kpqWyy37jk_sBTwBtNZ75',
  },
  {
    word: 'BEKÇİ',
    forbiddenWords: ['DÜDÜK', 'HIRSIZ', 'GÜVENLİK', 'KULÜBE', 'KORUMAK'],
    id: '22R8WZKLI0NsnFBLUEVc5',
  },
  {
    word: 'FOS ÇIKMAK',
    forbiddenWords: ['GÜVENMEK', 'GERÇEKLEŞMEK', 'UMMAK', 'BOŞ', 'BEKLEMEK'],
    id: 'XCvXUzm1uZD18lBRA1T34',
  },
  {
    word: 'DANIEL CRAIG',
    forbiddenWords: ['JAMES BOND', 'AKTÖR', '007', 'SARIŞIN', 'AJAN'],
    id: 'FdQzkT2XS13_tnnwQVwHh',
  },
  {
    word: 'MALTA',
    forbiddenWords: ['ADA', 'ŞOVALYE', 'ÜLKE', 'AKDENİZ', 'ERİK'],
    id: '2QB1B-o2HekuJs8-brfjN',
  },
  {
    word: 'FİLE',
    forbiddenWords: ['PAZAR', 'TORBA', 'İP', 'BASKETBOL', 'TAŞIMAK'],
    id: 'LpsUDfbG77mxm3vEQl4bJ',
  },
  {
    word: 'ZINEDINE ZIDANE',
    forbiddenWords: ['FUTBOL', 'JUBİLE', 'CEZAYİR', 'FRANSA', 'REAL MADRİD'],
    id: 'V1CXRgsyKe0YYxmYQN9ql',
  },
  {
    word: 'MENEMEN',
    forbiddenWords: ['YEMEK', 'YUMURTA', 'DOMATES', 'TAVA', 'BİBER'],
    id: 'S7mlDNnDwKIwLwVJ4mkJh',
  },
  {
    word: 'TUNİK',
    forbiddenWords: ['GİYSİ', 'PANTOLON', 'ETEK', 'UZUN', 'ELBİSE'],
    id: 'nQTqxvr_ovrCa6RIu8SCc',
  },
  {
    word: 'KÖSTEK OLMAK',
    forbiddenWords: ['ENGEL', 'MANİ', 'DESTEK', 'YARDIM', 'ÖNLEMEK'],
    id: '4-egn-bk03LRnjTPCgqut',
  },
  {
    word: 'ÇAPAK',
    forbiddenWords: ['GÖZ', 'SABAH', 'KURUMAK', 'UYKU', 'KENAR'],
    id: 'rd9ipvrOyfbZ2g4VYwuTm',
  },
  {
    word: 'BOZKIR',
    forbiddenWords: ['BİTKİ', 'TOPRAK', 'KIRAÇ', 'ÇAYIR', 'ORMAN'],
    id: 'LnLqT--bgIgIqIIPfwQPX',
  },
  {
    word: 'VATANDAŞ',
    forbiddenWords: ['ÜLKE', 'MİLLET', 'YURTTAŞ', 'YAŞAMAK', 'PASAPORT'],
    id: 'qsUQGQ1BCzWkYRb32SPTU',
  },
  {
    word: 'BADEM EZMESİ',
    forbiddenWords: ['TATLI', 'ŞEKERLEME', 'YİYECEK', 'LOKUM', 'FISTIK'],
    id: 'aGJTiW6fI64tUg475_rIQ',
  },
  {
    word: 'KARNABAHAR',
    forbiddenWords: ['SEBZE', 'MEYVE', 'YEMEK', 'BEYAZ', 'BROKOLİ'],
    id: 'ux0wx0OwGOUfI0saq33NM',
  },
  {
    word: 'ÇEKİCİ',
    forbiddenWords: ['KADIN', 'GÜZEL', 'SEKSİ', 'ALIMLI', 'İTİCİ'],
    id: '9Wsx2vmEVUvSgYCeds8VY',
  },
  {
    word: 'CANAN',
    forbiddenWords: ['SEVGİLİ', 'AŞIK OLMAK', 'GÖNÜL VERMEK', 'KADIN', 'YAR'],
    id: 'SO6iSOjcWgvgmalXrPDoD',
  },
  {
    word: 'TUĞRA',
    forbiddenWords: ['OSMANLI', 'İMZA', 'PADİŞAH', 'SEMBOL', 'İSİM'],
    id: 'pWjxUnE2fOFKN8CIH0Hwd',
  },
  {
    word: 'BLENDER',
    forbiddenWords: ['KARIŞTIRMAK', 'PARÇALAMAK', 'MUTFAK', 'ALET', 'YEMEK'],
    id: 'guqH1GpgSvIdvsRjbpYxG',
  },
  {
    word: 'KROMOZOM',
    forbiddenWords: ['X', 'Y', 'GENETİK', 'DNA', 'HÜCRE'],
    id: 'B7RgDCuJnd5FoWgbowB4E',
  },
  {
    word: 'SİYAH KUŞAK',
    forbiddenWords: ['UZAK DOĞU', 'JUDO', 'KARATE', 'SPOR', 'AİKİDO'],
    id: 'jisQ71OErOvsgl0_JWqgh',
  },
  {
    word: 'BÜZGÜ',
    forbiddenWords: ['DİKMEK', 'KUMAŞ', 'İPLİK', 'KIVRIM', 'BOLLUK'],
    id: 'L9gc7mxk4gtBq3MtYt3Jf',
  },
  {
    word: 'NÜFUS SAYIMI',
    forbiddenWords: ['ÜLKE', 'YAŞAMAK', 'İNSAN', 'MEMUR', 'EV'],
    id: 'qvVY7Emfen8SHhuQijgps',
  },
  {
    word: 'KETEN',
    forbiddenWords: ['KUMAŞ', 'PANTOLON', 'YAZLIK', 'CEKET', 'BURUŞMAK'],
    id: 'vUW3rUN4Q35iL7PVKou-_',
  },
  {
    word: 'HACI BEKTAŞ-I VELİ',
    forbiddenWords: ['ALEVİ', 'TASAVVUF', 'ŞENLİK', 'MEVLANA', 'FIKRA'],
    id: 'A-XIvZu1oyIutqRu011tF',
  },
  {
    word: 'VAZELİN',
    forbiddenWords: ['YUMUŞAK', 'SÜRMEK', 'EL', 'AYAK', 'KREM'],
    id: 'o8bBY0YD5wAfZJviEisZ4',
  },
  {
    word: 'AMONYAK',
    forbiddenWords: ['SULU', 'TEMİZLİK', 'KOKU', 'ARI SOKMASI', 'SAÇ BOYASI'],
    id: 'twhpzQHERuXfUK_kVeVWG',
  },
  {
    word: 'SOLARYUM',
    forbiddenWords: ['GÜNEŞ', 'YANMAK', 'BRONZLAŞMAK', 'TEN', 'ESMER'],
    id: '_-8GV-Ts59uyq5mTXvhnC',
  },
  {
    word: 'MAKSAT',
    forbiddenWords: ['AMAÇ', 'AŞMAK', 'İSTEMEK', 'NEDEN', 'SEBEP'],
    id: 'r6T5nHXc5ZxahJy00Ef5U',
  },
  {
    word: 'GENSORU',
    forbiddenWords: ['TBMM', 'ÖNERGE', 'BAKAN', 'MİLLETVEKİLİ', 'SORUŞTURMA'],
    id: 'MDWJE19yMPS5biqLE1tIC',
  },
  {
    word: 'MESİRE',
    forbiddenWords: ['YER', 'PİKNİK', 'GEZMEK', 'AĞAÇLIK', 'DOĞAL'],
    id: 'wjJgZWGM6mh2zZP4REfFb',
  },
  {
    word: 'BOA YILANI',
    forbiddenWords: ['HAYVAN', 'KOBRA', 'SÜRÜNGEN', 'UZUN', 'BÜYÜK'],
    id: 'FXsd_BwbfYEH7cXSO6nfI',
  },
  {
    word: 'KORNEA',
    forbiddenWords: ['GÖZ', 'İRİS', 'GÖRMEK', 'PARÇA', 'YIRTMAK'],
    id: '-lUuD6oJU1grbu4ecs90l',
  },
  {
    word: 'MİZANSEN',
    forbiddenWords: ['YARATMAK', 'TAKLİT', 'SİNEMA', 'DÜZENLEMEK', 'SAHNE'],
    id: '5LnNlO1X4Cglu-A1uQqBW',
  },
  {
    word: 'RANZA',
    forbiddenWords: ['YATAK', 'İKİ', 'KAT', 'KOĞUŞ', 'UYUMAK'],
    id: '46qrjUNkxvffjHzgIpbz5',
  },
  {
    word: 'ABİDİN DİNO',
    forbiddenWords: ['RESSAM', 'NAZIM HİKMET', 'FRANSA', 'MUTLULUK', 'SERGİ'],
    id: 'Pi445mf8a27g1SJ4xfUle',
  },
  {
    word: 'SİNEMASKOP',
    forbiddenWords: ['GENİŞ', 'SİYAH', 'BANT', 'ÇERÇEVE', 'FİLM'],
    id: 'VF8Up1lLV1f0RHdO3klLk',
  },
  {
    word: 'TESLİMAT',
    forbiddenWords: ['POSTA', 'KARGO', 'GÖNDERMEK', 'MEKTUP', 'ALMAK'],
    id: 'f5slizA2pzqx_WfNF26qu',
  },
  {
    word: 'BİLMECE',
    forbiddenWords: ['BULMACA', 'TEKERLEME', 'GİZLİ', 'SORMAK', 'OYUN'],
    id: 's_qGtqaz1coDLmPP-HAQ8',
  },
  {
    word: 'BANDANA',
    forbiddenWords: ['SAÇ', 'TAKMAK', 'EŞARP', 'BAĞLAMAK', 'GÜNEŞ'],
    id: 'mRJWqJVf0dIc0_zgJeSeR',
  },
  {
    word: 'PÜSKÜRMEK',
    forbiddenWords: ['YANARDAĞ', 'LAV', 'SU', 'ÇIKARMAK', 'FIŞKIRMAK'],
    id: 'DAf643zZiJhq_6rWAYZZE',
  },
  {
    word: 'ARSIZ',
    forbiddenWords: ['ŞIMARIK', 'TERBİYESİZ', 'DAYAK', 'UTANMAZ', 'YÜZSÜZ'],
    id: 'D1ynmSZsRkGnuVjWVDVnh',
  },
  {
    word: 'KORTEJ',
    forbiddenWords: ['TÖREN', 'KONVOY', 'ASKER', 'YÜRÜMEK', 'SIRA'],
    id: 'sz3qazrHZ2ysjeNL5eJIk',
  },
  {
    word: 'ANKA KUŞU',
    forbiddenWords: ['HAYALİ', 'MASAL', 'EFSANE', 'KAF DAĞI', 'KÜL'],
    id: 'QRdpgBO8BwybBwnClGF95',
  },
  {
    word: 'HAMLET',
    forbiddenWords: ['KAHRAMAN', "'OLMAK YADA OLMAMAK'", 'SHAKESPEARE', 'TİYATRO', 'SİNEMA'],
    id: '1d2Dth1W-DgpRDdsaLGaL',
  },
  {
    word: 'STEPNE',
    forbiddenWords: ['LASTİK', 'YEDEK', 'TEKERLEK', 'ARABA', 'PATLATMAK'],
    id: '9FWKBldVpUUJVJ1i4295L',
  },
  {
    word: 'PANZEHİR',
    forbiddenWords: ['ŞIRINGA', 'İYİLEŞTİRMEK', 'MADDE', 'SOKMAK', 'YILAN'],
    id: '-7rn8r92tIAB10VkEiM0T',
  },
  {
    word: 'DEFNE',
    forbiddenWords: ['YAPRAK', 'AĞAÇ', 'BALIK', 'KOKMAK', 'MİTOLOJİ'],
    id: 'O5eDWOmzQkLnqQNG68ykn',
  },
  {
    word: 'CANINA KASDETMEK',
    forbiddenWords: ['TEŞEBBÜS', 'ÖLDÜRMEK', 'YARALAMAK', 'CİNAYET', 'HAZIRLANMAK'],
    id: '3oFetOqFzEqXTIWFD2Upv',
  },
  {
    word: 'SU TOPLAMAK',
    forbiddenWords: ['YARA', 'AYAK', 'YÜRÜMEK', 'EL', 'ŞİŞMEK'],
    id: 'P4WHylVpBRFL7U0vPsVnd',
  },
  {
    word: 'İSYANKAR',
    forbiddenWords: ['ASİ', 'GENÇ', 'DELİKANLI', 'BAŞKALDIRMAK', 'KAVGA'],
    id: '7DVaf32FZ-VLPOKTzEZuM',
  },
  {
    word: 'PUF',
    forbiddenWords: ['KOLTUK', 'OTURMAK', 'MİNDER', 'YUMUŞAK', 'ARMUT'],
    id: 'c20t-BCBjjbzInWLna06y',
  },
  {
    word: 'SÜTLİMAN',
    forbiddenWords: ['SAKİN', 'SESSİZ', 'HUZURLU', 'DURGUN', 'OLAY'],
    id: '1TiRllE9qnIi2KiacjZPN',
  },
  {
    word: 'MİSTİK',
    forbiddenWords: ['FAL', 'DOĞAÜSTÜ', 'GÜÇ', 'GİZEM', 'ESRARENGİZ'],
    id: 'H1xPB8hdZaFD1CbipjTQl',
  },
  {
    word: 'GEBE',
    forbiddenWords: ['HAMİLE', 'KADIN', 'BEBEK', 'DOKUZ AY', 'KARIN'],
    id: 'UCGcY26rbFtXaNbRoxIXR',
  },
  {
    word: 'MAESTRO',
    forbiddenWords: ['ORKESTRA', 'YÖNETMEN', 'ŞEF', 'BESTECİ', 'KLASİK MÜZİK'],
    id: 'u9tOez0Vp_2R-8tWXAMBK',
  },
  {
    word: 'KOKOŞ',
    forbiddenWords: ['SÜSLÜ', 'GİYİNMEK', 'HAVALI', 'AŞIRI', 'TAKIŞTIRMAK'],
    id: 'XtHa3eQYMWfdgJSTiV3wL',
  },
  {
    word: 'SÖĞÜŞ',
    forbiddenWords: ['DOMATES', 'SALATALIK', 'KESMEK', 'SOĞUK', 'ET'],
    id: 'GrFVpWb3vkvfW-bk9oKzj',
  },
  {
    word: 'TON BALIĞI',
    forbiddenWords: ['SANDVİÇ', 'KONSERVE', 'ORKİNOS', 'SALATA', 'YEMEK'],
    id: 'z1EkrSk0aSdQMXmYmDSe7',
  },
  {
    word: 'KÜFE',
    forbiddenWords: ['SEPET', 'TAŞIMAK', 'HAMAL', 'YÜK', 'SIRT'],
    id: 'pCXWwPsetiv69jOrMdtgC',
  },
  {
    word: 'KAYDIRAK',
    forbiddenWords: ['OYUN', 'PARK', 'ÇOCUK', 'SALINCAK', 'TAHTEREVALLİ'],
    id: '5eI-Xc341orBwKJOch5BH',
  },
  {
    word: 'KIŞ UYKUSU',
    forbiddenWords: ['AYI', 'YATMAK', 'SOĞUK', 'SÜRÜNGEN', 'HAYVAN'],
    id: 'DNY5jgMwPKdwpiBWj-_st',
  },
  {
    word: 'MOTİVASYON',
    forbiddenWords: ['TEŞVİK', 'KIRMAK', 'İSTEK', 'MORAL', 'HEVES'],
    id: 'lU-CmBXvZbeRTgUUdN3ZF',
  },
  {
    word: 'GÖZ KULAK OLMAK',
    forbiddenWords: ['İLGİLENMEK', 'ÇOCUK', 'BAKMAK', 'KORUMAK', 'BIRAKMAK'],
    id: 'dseYvGzkTITehDp9HRpC-',
  },
  {
    word: 'SULUBOYA',
    forbiddenWords: ['YAĞLIBOYA', 'RESİM', 'FIRÇA', 'PALET', 'RENK'],
    id: 'uJofJJ0HDV18py8HG8L1W',
  },
  {
    word: 'BARUT',
    forbiddenWords: ['FIÇI', 'ATEŞ', 'PATLAMAK', 'TOP', 'SİLAH'],
    id: 'YDmCbFERTi715-QCSuqK2',
  },
  {
    word: 'AĞIRBAŞLI',
    forbiddenWords: ['CİDDİ', 'OLGUN', 'HAREKET', 'SESSİZ', 'DAVRANIŞ'],
    id: 'N045Od7EL6pIgnn_xEg9E',
  },
  {
    word: 'ANTİKOR',
    forbiddenWords: ['HASTALIK', 'ZARAR', 'MADDE', 'VÜCUT', 'ÜRETMEK'],
    id: 'Icn6r89Y6miiWE9oSBxmw',
  },
  {
    word: 'OBJEKTİF',
    forbiddenWords: ['FOTOĞRAF', 'MERCEK', 'KAMERA', 'CAM', 'TARAFSIZ'],
    id: 'AvZxZeeGsp-95D-izrz5i',
  },
  {
    word: 'MAŞALLAH',
    forbiddenWords: ['ALTIN', 'SÜNNET', 'NAZAR', 'GÜZEL', 'BEĞENMEK'],
    id: 'A_AXY7oL-yB_RmzIdbJ3K',
  },
  {
    word: 'KİLOGRAM',
    forbiddenWords: ['ÖLÇÜ', 'TARTMAK', 'LİTRE', 'AĞIRLIK', 'BİRİM'],
    id: 'TKVIbEMLcjSlcCCYPM-J2',
  },
  {
    word: 'PARKE',
    forbiddenWords: ['YER', 'DÖŞEMEK', 'LAMİNANT', 'YÜRÜMEK', 'AHŞAP'],
    id: 'pCdzYTOS1i9JP3Kv_Ox4F',
  },
  {
    word: 'ŞÖLEN',
    forbiddenWords: ['KUTLAMA', 'YEMEK', 'İÇMEK', 'ZİYAFET', 'EĞLENCE'],
    id: 'ttJAIzMQBV8I761krbZnV',
  },
  {
    word: 'MUTANT',
    forbiddenWords: ['X-MEN', 'NİNJA KAPLUMBAĞALAR', 'İNSAN', 'DEĞİŞMEK', 'YARATIK'],
    id: 'PVkS1uOcXoFTSwn2Cm_s7',
  },
  {
    word: 'ÇATALHÖYÜK',
    forbiddenWords: ['ARKEOLOJİ', 'ANTİK', 'ANADOLU', 'ESKİ', 'KAZI'],
    id: 'tOa7HUvAqX-OqGHjDVRVP',
  },
  {
    word: 'ANANAS',
    forbiddenWords: ['MEYVE', 'TROPİKAL', 'SEBZE', 'YEMEK', 'KONSERVE'],
    id: 'Z_AjwPEjsEmrwpjJ9-QDY',
  },
  {
    word: 'AŞIK VEYSEL',
    forbiddenWords: ['MÜZİK', 'TÜRKÜ', 'TÜRK', 'OZAN', 'HALK'],
    id: 'g3YmDNgbcCkGPCUWLEchj',
  },
  {
    word: 'MANGA',
    forbiddenWords: ['ÇİZGİ ROMAN', 'ANİMASYON', 'JAPON', 'ASKER', 'TABUR'],
    id: 'GDynXezpmZJ1nXXX_tCq-',
  },
  {
    word: 'FOKURDAMAK',
    forbiddenWords: ['KAYNAMAK', 'SU', 'BALONCUK', 'SES ÇIKARMAK', 'BUHARLAŞMAK'],
    id: 'AaDh5Si_I7EdkAn9MfhyA',
  },
  {
    word: 'KOMİ',
    forbiddenWords: ['GARSON', 'MUTFAK', 'LOKANTA', 'RESTORAN', 'YARDIMCI'],
    id: 'V8wXt8orNLtGAQFJLt7SE',
  },
  {
    word: 'MARJ',
    forbiddenWords: ['KAR', 'PAY', 'AYIRMAK', 'FİYAT', 'BOŞLUK'],
    id: '9WY5jYENNLAmM_8c0Xy7z',
  },
  {
    word: 'METEOROLOJİ',
    forbiddenWords: ['HAVA DURUMU', 'TAHMİN', 'YAĞMUR', 'KAR', 'SICAKLIK'],
    id: 'mFb1RIO1fjQ4O_jXLJtwp',
  },
  {
    word: 'SFENKS',
    forbiddenWords: ['MISIR', 'PİRAMİT', 'İNSAN', 'ASLAN', 'HEYKEL'],
    id: 'xbBzmvaRamg5fHIrCLnEA',
  },
  {
    word: 'SU AYGIRI',
    forbiddenWords: ['HİPOPOTAM', 'MEMELİ', 'HAYVAN', 'İRİ', 'AFRİKA'],
    id: 'llB9b8nPik2hSVYK47Rj2',
  },
  {
    word: 'BABİL KULESİ',
    forbiddenWords: ['EFSANE', 'İNŞA ETMEK', 'TANRI', 'ULAŞMAK', 'ESKİ'],
    id: 'YEBIcTP-H-qF42lfi8Xhj',
  },
  {
    word: 'AHENK',
    forbiddenWords: ['UYUM', 'ŞİİR', 'SES', 'DANS', 'UZLAŞMA'],
    id: '1oIE5jillg-3tzN1x2t9V',
  },
  {
    word: 'POKER',
    forbiddenWords: ['KUMAR', 'İSKAMBİL KAĞIDI', 'OYUN', 'FLOŞ', 'DÖPER'],
    id: 'uiwN1NqrYZ7v7HDCdm-_k',
  },
  {
    word: 'ETÜT',
    forbiddenWords: ['DERS ÇALIŞMAK', 'ÖĞRETMEN', 'ÖDEV', 'OKUL', 'KALMAK'],
    id: 'YpLXKgXVHnq4ySpgYXnE4',
  },
  {
    word: 'ŞEHZADE',
    forbiddenWords: ['PADİŞAH', 'ÇOCUK', 'SULTAN', 'PRENS', 'ERKEK'],
    id: '3Ob9K08rKxZ_jGPbvHfFl',
  },
  {
    word: 'KAFADAN ATMAK',
    forbiddenWords: ['UYDURMAK', 'SALLAMAK', 'BİLMEK', 'YALLAH', 'TEST'],
    id: 'MxU1grfS4Qy93Wk6NlgP5',
  },
  {
    word: 'EFENDİ',
    forbiddenWords: ['BEY', 'SESLENMEK', 'KİBAR', 'AĞIRBAŞLI', 'NAZİK'],
    id: 'W0bz6Y_Btpx4VlRAP-gt7',
  },
  {
    word: 'AYASOFYA MÜZESİ',
    forbiddenWords: ['KİLİSE', 'TURİST', 'SULTANAHMET', 'TOPKAPI SARAYI', 'CAMİİ'],
    id: '-4sZArpbRus3Jyp5G0QoT',
  },
  {
    word: 'PARSEL',
    forbiddenWords: ['ARSA', 'SATMAK', 'BÖLÜM', 'TAPU', 'PARÇA'],
    id: 'J-1L9OuJdHTExzNHYX5P_',
  },
  {
    word: 'GÜZELLİK YARIŞMASI',
    forbiddenWords: ['KRALİÇE', 'MAYO', 'KAİNAT', 'JÜRİ', 'KIZ'],
    id: 'vPZEnY0Zn1tD5OEwN6FtJ',
  },
  {
    word: 'POHPOHLAMAK',
    forbiddenWords: ['ÖVMEK', 'YALAKALIK', 'YAĞ ÇEKMEK', 'GAZA GETİRMEK', 'GÜZEL SÖZ'],
    id: 'G1LInCRyy5nMxKMMYXGZe',
  },
  {
    word: 'EŞEKARISI',
    forbiddenWords: ['BÜYÜK', 'SOKMAK', 'BAL', 'KOVAN', 'İĞNE'],
    id: 'sYlv9ddWHVNTPrHdSTDsv',
  },
  {
    word: 'ERTUĞRUL ÖZKÖK',
    forbiddenWords: ['GAZETECİ', 'HÜRRİYET', 'YAZAR', 'YÖNETİCİ', 'YAYIN'],
    id: 'cgY6Ba1HDpaox6tdhiPoR',
  },
  {
    word: 'BEL BAĞLAMAK',
    forbiddenWords: ['GÜVENMEK', 'YARDIM', 'MEDET UMMAK', 'İNANMAK', 'ARKADAŞ'],
    id: 'Qsad3G5I9uC0xc-PiDp3S',
  },
  {
    word: 'KOTA',
    forbiddenWords: ['DOLDURMAK', 'KONTENJAN', 'SINIRLAMA', 'KISITLAMA', 'SAYI'],
    id: 'JKo_9GZB-uRq4eIJ54Vjm',
  },
  {
    word: 'BUZ DEVRİ',
    forbiddenWords: ['ESKİ ÇAĞ', 'SOĞUK', 'ERİMEK', 'KAR', 'ÇİZGİ FİLM'],
    id: 'PhRhP05OhGuuDlDNcssRK',
  },
  {
    word: 'İMSAK',
    forbiddenWords: ['İFTAR', 'ORUÇ', 'SAHUR', 'RAMAZAN', 'EZAN'],
    id: '2YJ1VQ6T0nzgdpwEXLQWq',
  },
  {
    word: 'BAYKUŞ',
    forbiddenWords: ['HAYVAN', 'KUŞ', 'GECE', 'UÇMAK', 'UĞURSUZ'],
    id: 'rpVmNPpFUL0kwGoyoOx7_',
  },
  {
    word: 'TARAFTAR',
    forbiddenWords: ['FUTBOL', 'TAKIM', 'TUTMAK', 'FANATİK', 'TEZAHÜRAT'],
    id: '1Ve8bKtfyCOIO--JcARvE',
  },
  {
    word: 'SU BASKINI',
    forbiddenWords: ['SEL', 'YAĞMUR', 'MUSLUK', 'AÇIK', 'TAŞMAK'],
    id: '6bqCh5cNj3p2jbSmCIP-m',
  },
  {
    word: 'ŞEKERPARE',
    forbiddenWords: ['TATLI', 'ŞERBET', 'HAMUR', 'YUVARLAK', 'YEMEK'],
    id: 'wCySl7i5mrHMlyi2tN7JQ',
  },
  {
    word: 'KÖRDÜĞÜM',
    forbiddenWords: ['İP', 'AÇILMAK', 'KARIŞIK', 'ÇÖZMEK', 'BAĞLAMAK'],
    id: '4muQXMur-Raw3049B1o6Y',
  },
  {
    word: 'KADEH',
    forbiddenWords: ['İÇECEK', 'BARDAK', 'ŞARAP', 'CAM', 'RAKI'],
    id: 'A1gAYcdLYhxcVqDHb4Pwp',
  },
  {
    word: 'KALIBINI BASMAK',
    forbiddenWords: ['SAVUNMAK', 'İNANMAK', 'İDDİA', 'GÜVENMEK', 'DOĞRU'],
    id: 'HPSoG8GJ4B_x-reY9Eg6G',
  },
  {
    word: 'NEMRUT DAĞI',
    forbiddenWords: ['ADIYAMAN', 'ARKEOLOJİ', 'HEYKEL', 'GÜNBATIMI', 'TANRI'],
    id: '_uOkliCkOgbHCyJVvbYig',
  },
  {
    word: 'PALA BIYIK',
    forbiddenWords: ['SAKAL', 'YÜZ', 'YANAK', 'UZUN', 'KIVRIK'],
    id: 'IOwpPL52xTWNJpLdtYuCv',
  },
  {
    word: 'FELAKET TELLALI',
    forbiddenWords: ['KÖTÜMSER', 'ANLATMAK', 'SÖYLEMEK', 'HABER', 'OLAY'],
    id: 'imsTBhLRuPHcB5LF9TzE_',
  },
  {
    word: 'PEKMEZ',
    forbiddenWords: ['TAHİN', 'ÜZÜM', 'DUT', 'TATLI', 'REÇEL'],
    id: 'NGI84RJd6oP7uvUyQ7SdF',
  },
  {
    word: 'YOUTUBE',
    forbiddenWords: ['VİDEO', 'PAYLAŞMAK', 'YÜKLEMEK', 'İNTERNET', 'SİTE'],
    id: '2jNRzc4skwHIhTD0Y-mdF',
  },
  {
    word: 'CADI KAZANI',
    forbiddenWords: ['DÜŞMAN', 'HİLE', 'KAYNAMAK', 'DEDİKODU', 'DÜZEN'],
    id: '34Z8selvugsXuej0GHown',
  },
  {
    word: 'ÇAYIR',
    forbiddenWords: ['OTLAMAK', 'İNEK', 'YEŞİL', 'ÇİMEN', 'PİKNİK'],
    id: '21InoUn64JHoXlcLQK-IS',
  },
  {
    word: 'KRAVAT',
    forbiddenWords: ['PAPYON', 'TAKMAK', 'GÖMLEK', 'TAKIM ELBİSE', 'BOYUN'],
    id: '3rqKfTYLKDxqz_PG-0l1k',
  },
  {
    word: 'TÖKEZLEMEK',
    forbiddenWords: ['SENDELEMEK', 'DÜŞMEK', 'AYAK', 'TAKILMAK', 'TAŞ'],
    id: '3UFEeisIU_llbkfLUpnG-',
  },
  {
    word: 'LOGO',
    forbiddenWords: ['ŞİRKET', 'SEMBOL', 'İSİM', 'AMBLEM', 'KURUMSAL'],
    id: '07UUvCKCXMhYsZYQuFORR',
  },
  {
    word: 'SOLAK',
    forbiddenWords: ['SAĞLAK', 'EL', 'YAZMAK', 'TUTMAK', 'KULLANMAK'],
    id: 'dFCPzezbO2QrJtZson2FX',
  },
  {
    word: 'FLORENCE NİGHTİNGALE',
    forbiddenWords: ['HEMŞİRE', 'HASTANE', 'KURMAK', 'SELİMİYE KIŞLASI', 'DOKTOR'],
    id: 'ycLs_PVh3UwZGmvd-BUFO',
  },
  {
    word: 'İZDİVAÇ',
    forbiddenWords: ['EVLENMEK', 'YUVA', 'GELİN', 'DAMAT', 'NİKAH'],
    id: 'ft9_Ly-pa5nF2TU9wWhJ9',
  },
  {
    word: 'BENEK',
    forbiddenWords: ['ÇİL', 'NOKTA', 'YÜZ', 'LEKE', 'KÜÇÜK'],
    id: 'WYVhQ_EbnOEXP1wTtSh8k',
  },
  {
    word: 'KABZA',
    forbiddenWords: ['SİLAH', 'TABANCA', 'TUTMAK', 'SAP', 'KILIÇ'],
    id: 'aXSbxW5c65C93br8MyM4b',
  },
  {
    word: 'DOLMABAHÇE SARAYI',
    forbiddenWords: ['OSMANLI', 'BEŞİKTAŞ', 'ATATÜRK', 'PADİŞAH', 'TOPKAPI'],
    id: 'DROPVNOrzgVeWhxjEtMGi',
  },
  {
    word: 'İRMİK',
    forbiddenWords: ['HELVA', 'TATLI', 'BUĞDAY', 'UN', 'DAĞITMAK'],
    id: 'PlRHWAiIthjrJW-clGEbu',
  },
  {
    word: 'HAZIRCEVAP',
    forbiddenWords: ['SORU', 'LAF', 'ÇABUK', 'BULMAK', 'HIZLI'],
    id: 'u1PYDQlPdZESB8WuFcqUU',
  },
  {
    word: 'UKRAYNA',
    forbiddenWords: ['ÜLKE', 'RUSYA', 'KİEV', 'DOĞALGAZ', 'KARADENİZ'],
    id: 'azf3JQOCg3Ozu6eANNULD',
  },
  {
    word: 'ÇAR',
    forbiddenWords: ['RUSYA', 'PETRO', 'PADİŞAH', 'KRAL', 'YÖNETMEK'],
    id: 'V9WrAantWjMhKCENDx9sz',
  },
  {
    word: 'POST',
    forbiddenWords: ['HAYVAN', 'DERİ', 'YÜZMEK', 'KÜRK', 'AYI'],
    id: 'xrVurbUvmBZPamd0_P9dp',
  },
  {
    word: 'LİBERO',
    forbiddenWords: ['FUTBOL', 'TAKIM', 'MAÇ', 'DEFANS', 'ORTA SAHA'],
    id: 'yfFGr6V5BZXAMlFixJxYB',
  },
  {
    word: 'DEHLİZ',
    forbiddenWords: ['KORİDOR', 'YER ALTI', 'GİZLİ', 'KARANLIK', 'GEÇİT'],
    id: 'uQ7r_JVGRRYCEIiBwrz2A',
  },
  {
    word: 'ÇELİK KASA',
    forbiddenWords: ['PARA', 'DEĞERLİ', 'MÜCEVHER', 'EV', 'SAKLAMAK'],
    id: 'k59D-Mu4obfx3dbcAkwPU',
  },
  {
    word: 'MÜJDE AR',
    forbiddenWords: ['SİNEMA', 'OYUNCU', 'SEKSİ', 'AYSEL GÜRSEL', 'ARABESK'],
    id: 'L2xC-qAu065PuGpOpBuec',
  },
  {
    word: 'FÖN ÇEKMEK',
    forbiddenWords: ['KUAFÖR', 'SAÇ', 'DÜZLEŞTİRMEK', 'MAKİNE', 'SICAK'],
    id: '2_wKRb8xgf0hPx143D9_u',
  },
  {
    word: 'FAVORİ',
    forbiddenWords: ['BİRİNCİ', 'YARIŞMA', 'BEĞENMEK', 'SEVMEK', 'SAKAL'],
    id: 'Miczi_n1KCNzuzZZg9MLS',
  },
  {
    word: 'BABACAN',
    forbiddenWords: ['DAVRANMAK', 'GÜVENMEK', 'ADAM', 'ŞEFKAT', 'İYİ'],
    id: 'RNP3WS-5JKu3P4NmWHqG8',
  },
  {
    word: 'ASPENDOS',
    forbiddenWords: ['TİYATRO', 'ANTİK', 'ANTALYA', 'AÇIK HAVA', 'KONSER'],
    id: 'BjqadBWP72WHv69_GuXN7',
  },
  {
    word: 'KÜLAH',
    forbiddenWords: ['ŞAPKA', 'KAĞIT', 'DONDURMA', 'DEĞİŞMEK', 'ANLATMAK'],
    id: 'fYw8gZfuQN0MQgPPCa94O',
  },
  {
    word: 'SLALOM',
    forbiddenWords: ['KAYAK', 'KAR', 'YARIŞ', 'BAYRAK', 'PİST'],
    id: 'VI-3uCZBVEDV9yZz6V6il',
  },
  {
    word: 'ANTRENMAN',
    forbiddenWords: ['SPOR', 'KOŞU', 'EGZERSİZ', 'FUTBOLCU', 'İDMAN'],
    id: 'pn3HM2RjwRvkJuvDu6955',
  },
  {
    word: 'SAİT FAİK ABASIYANIK',
    forbiddenWords: ['EDEBİYAT', 'YAZAR', 'HİKAYE', 'TÜRK', 'BURGAZADA'],
    id: 'mr2jrYM3o8YqFk1XrkomQ',
  },
  {
    word: 'ÇİVİ YAZISI',
    forbiddenWords: ['İLKÇAĞ', 'ESKİ', 'ASUR', 'SÜMER', 'TAŞ'],
    id: 'ZXhxRSCN-1rlXDOf3fX9J',
  },
  {
    word: 'AKROBAT',
    forbiddenWords: ['GÖSTERİ', 'YETENEK', 'SİRK', 'CAMBAZ', 'ESNEK'],
    id: 'Gah08WK-oMQknsZxQ5dgh',
  },
  {
    word: 'KOLONYA',
    forbiddenWords: ['FERAHLIK', 'SÜRMEK', 'LİMON', 'DÖKMEK', 'MİSAFİR'],
    id: '1jVs0Z11lNAyXvgiNIbia',
  },
  {
    word: 'CANNES',
    forbiddenWords: ['FİLM', 'FESTİVAL', 'FRANSA', 'SAHİL', 'SİNEMA'],
    id: 'KDImbQ677sbrqxT5GW24f',
  },
  {
    word: 'ESPRİ YAPMAK',
    forbiddenWords: ['KOMİK', 'ŞAKA', 'ANLATMAK', 'GÜLMEK', 'KAHKAHA'],
    id: 'p0fCgMGaGrL-V4v6P0dFR',
  },
  {
    word: 'MAKBUZ',
    forbiddenWords: ['AİDAT', 'BAĞIŞ', 'ÖDEME', 'KAĞIT', 'FATURA'],
    id: 'R6bBPJBjksWf6HS9eNpNm',
  },
  {
    word: 'MÜHİMMAT',
    forbiddenWords: ['DEPO', 'SAVAŞ', 'CEPHANE', 'ORDU', 'SİLAH'],
    id: 'rKJyaXQ43mlKszt914hJ1',
  },
  {
    word: 'GONG',
    forbiddenWords: ['SES', 'ZİL', 'TOKMAK', 'ÇINLAMAK', 'VURMAK'],
    id: '0mmtn_uNk7w2bACAXc6ov',
  },
  {
    word: 'SOĞUK ALGINLIĞI',
    forbiddenWords: ['NEZLE', 'ÜŞÜTMEK', 'HASTA', 'BURUN', 'BOĞAZ'],
    id: 'WI94OA5QvU0q5Tnwurq-1',
  },
  {
    word: 'ÇAĞLAYAN',
    forbiddenWords: ['ŞELALE', 'SU', 'AKMAK', 'NEHİR', 'YÜKSEK'],
    id: 'XfEWgBSNNg8f6_D8YUu0g',
  },
  {
    word: 'İMAMBAYILDI',
    forbiddenWords: ['YEMEK', 'PATLICAN', 'ZEYTİNYAĞLI', 'KARNIYARIK', 'DOMATES'],
    id: 'wOs2Me3k_nbPCxozauWVO',
  },
  {
    word: 'MACERA',
    forbiddenWords: ['OLAY', 'HEYECAN', 'ADRENALİN', 'YAŞAMAK', 'SAKİN'],
    id: '2L_cOnu3FMepS7O9CDGNN',
  },
  {
    word: 'AHMET ÇAKAR',
    forbiddenWords: ['HAKEM', 'FUTBOL', 'ERMAN TOROĞLU', 'YARIŞMA', 'MAÇ'],
    id: 'F6v-a_bGTvMfzqj55qItW',
  },
  {
    word: 'KALÇA',
    forbiddenWords: ['KADIN', 'SALLAMAK', 'VÜCUT', 'BACAK', 'JENNİFER LOPEZ'],
    id: 'ulzwgIqaCHSEiU5f-4vWH',
  },
  {
    word: 'HAKARET ETMEK',
    forbiddenWords: ['KÜFÜR', 'SÖZ', 'KÖTÜ', 'SÖYLEMEK', 'ÇİRKİN'],
    id: '05nqDTl6MWSdjwOYKrNLq',
  },
  {
    word: 'KONDİSYON BİSİKLETİ',
    forbiddenWords: ['SPOR', 'EV', 'ÇEVİRMEK', 'KOŞU BANDI', 'ZAYIFLAMAK'],
    id: 'lXT_BFTqSKHYDX7hAhVri',
  },
  {
    word: 'PAVURYA',
    forbiddenWords: ['YENGEÇ', 'İRİ', 'BÜYÜK', 'DENİZ', 'YEMEK'],
    id: 'LrhwtX27cqLi5lHpx3pOu',
  },
  {
    word: 'PATENT',
    forbiddenWords: ['ALMAK', 'TESCİL', 'BULUŞ', 'TELİF HAKKI', 'KANITLAMAK'],
    id: 's_oHptj7jdSFbCu6R37rU',
  },
  {
    word: 'ŞİŞİRMEK',
    forbiddenWords: ['BALON', 'LASTİK', 'ÜFLEMEK', 'POMPA', 'HAVA'],
    id: 'TVTUlCD-5o91BpZDhb1Co',
  },
  {
    word: 'HAFRİYAT',
    forbiddenWords: ['İNŞAAT', 'TOPRAK', 'BİNA', 'KAZMAK', 'KAMYON'],
    id: 'mqrfe1tLz3QOSIDfd9Job',
  },
  {
    word: 'ASTRONOMİK',
    forbiddenWords: ['RAKAM', 'YÜKSEK', 'PAHALI', 'AŞIRI', 'GÖKYÜZÜ'],
    id: '3vtKRhneO4Ae2r8uU_FKo',
  },
  {
    word: 'KAYKAY',
    forbiddenWords: ['BİNMEK', 'ÇOCUK', 'TEKERLEK', 'TAHTA', 'PATEN'],
    id: 'h4af98xEz8j5dl_VAgDq5',
  },
  {
    word: 'MAVİ YOLCULUK',
    forbiddenWords: ['EGE', 'GEZİ', 'YAT', 'KİRALAMAK', 'AKDENİZ'],
    id: '8K8EGWyQC39EAUHFgZfge',
  },
  {
    word: 'BOŞ BULUNMAK',
    forbiddenWords: ['DİKKATSİZ', 'DALGIN', 'DAVRANMAK', 'SÖYLEMEK', 'POT KIRMAK'],
    id: '1gACqcwdvufOxAjD3c8WL',
  },
  {
    word: 'ORHAN GENCEBAY',
    forbiddenWords: ['MÜZİSYEN', 'ARABESK', 'FERDİ TAYFUR', 'MÜSLÜM GÜRSES', 'BATSIN BU DÜNYA'],
    id: 'MwjzeCX3O7RMIE0nU9poF',
  },
  {
    word: 'DIŞLANMAK',
    forbiddenWords: ['ARKADAŞ', 'KONUŞMAK', 'ATMAK', 'ALMAK', 'ORTAM'],
    id: 'f_YgTC74SvYYxX2L2SFLI',
  },
  {
    word: 'NEŞTER',
    forbiddenWords: ['AMELİYAT', 'BIÇAK', 'KESMEK', 'CERRAH', 'DOKTOR'],
    id: 'z1JFUcTaD3dq6UmVjdqo3',
  },
  {
    word: 'ŞEBEKE',
    forbiddenWords: ['AĞ', 'DONANIM', 'ÖRGÜT', 'ELEKTRİK', 'TESİSAT'],
    id: 'DU5HPHoKW8-BJ1LDxzbNW',
  },
  {
    word: 'YAREN',
    forbiddenWords: ['DOST', 'ARKADAŞ', 'SEVGİLİ', 'YAKIN', 'EŞ'],
    id: 'EGfJCXGq4qgbzkKjXa3fy',
  },
  {
    word: 'SERE SERPE',
    forbiddenWords: ['GÜNEŞLENMEK', 'YATMAK', 'RAHAT', 'AÇIK SAÇIK', 'SERBEST'],
    id: 'UFdkYRLmGCvRdVcgEeDQv',
  },
  {
    word: 'TOKYO',
    forbiddenWords: ['ŞEHİR', 'JAPONYA', 'ADA', 'ASYA', 'BAŞKENT'],
    id: 'ne-dBF-L67q3CCTl5n1To',
  },
  {
    word: 'İÇİNE DOĞMAK',
    forbiddenWords: ['HİSSETMEK', 'ÖNCE', 'BİLMEK', 'MALUM OLMAK', 'SEZMEK'],
    id: 'cM_hWFx1wHrG1pHLgCs0_',
  },
  {
    word: 'BANKO',
    forbiddenWords: ['KESİN', 'AT YARIŞI', 'KAZANMAK', 'BAHİS', 'GARANTİ'],
    id: 'e7i6BDhHPNknbHyMfKo0Q',
  },
  {
    word: 'PİSBOĞAZ',
    forbiddenWords: ['OBUR', 'YEMEK', 'AÇGÖZLÜ', 'TOK', 'DOYMAK'],
    id: 'YV_gC4tu1uu0VYh9GPadW',
  },
  {
    word: 'ÇOBANYILDIZI',
    forbiddenWords: ['GÖKYÜZÜ', 'GECE', 'YÖN', 'PARLAK', 'KUTUP'],
    id: 'nAdJI48ceLu4ucdAzZO6-',
  },
  {
    word: 'ALASKA',
    forbiddenWords: ['FRİGO', 'AMERİKA', 'SOĞUK', 'EYALET', 'RUSYA'],
    id: 'AUjb8HDjEWJXt0kP3m3ZE',
  },
  {
    word: 'BEYZBOL',
    forbiddenWords: ['SPOR', 'AMERİKA', 'TOP', 'VURMAK', 'SOPA'],
    id: 'Eg4to8ESRminR0pG29e5e',
  },
  {
    word: 'GÖRGÜ KURALLARI',
    forbiddenWords: ['ADAP', 'SAYGI', 'TERBİYE', 'TOPLUM', 'UYMAK'],
    id: 'o9pE2pp6FYG02sZEewVmX',
  },
  {
    word: 'ÇİÇEK PASAJI',
    forbiddenWords: ['İSTANBUL', 'BEYOĞLU', 'NEVİZADE', 'YEMEK', 'İÇMEK'],
    id: 'KANdclc9eWyCJn3y4T7y0',
  },
  {
    word: 'KAĞIT HELVA',
    forbiddenWords: ['YİYECEK', 'TATLI', 'YUVARLAK', 'DONDURMA', 'KÜLAH'],
    id: 'VKc7D2c56raG4VvVC5pkh',
  },
  {
    word: 'DAMLA',
    forbiddenWords: ['SU', 'MUSLUK', 'GÖZ', 'YAĞMUR', 'KÜÇÜK'],
    id: 'RuvKa47a_LZb-mUyPoypL',
  },
  {
    word: 'DENEY',
    forbiddenWords: ['KİMYA', 'LABORATUAR', 'FARE', 'BİLİM', 'TÜP'],
    id: 'I3BLKDxanCvL48UPMPcpT',
  },
  {
    word: 'TUŞ KİLİDİ',
    forbiddenWords: ['TELEFON', 'AÇIK', 'KAPALI', 'BASMAK', 'ARAMAK'],
    id: 'fBKcQAmUwGIO_4SaH-qBl',
  },
  {
    word: 'MİLADİ TAKVİM',
    forbiddenWords: ['GÜN', 'AY', 'ZAMAN', 'AJANDA', 'HİCRİ'],
    id: 'ox2ShI-tOzA8PlqSPCTJ7',
  },
  {
    word: 'KÖŞE BUCAK',
    forbiddenWords: ['KAÇMAK', 'TEMİZLEMEK', 'HER YER', 'SAKLANMAK', 'DOLAŞMAK'],
    id: 'Ix5tKON0jE74dHI7LIP9a',
  },
  {
    word: 'RENGİ ATMAK',
    forbiddenWords: ['KORKMAK', 'YIKAMAK', 'SOLMAK', 'YÜZ', 'SARARMAK'],
    id: '0vDBtKbBcvKbQyTJvmJCW',
  },
  {
    word: 'ALP ARSLAN',
    forbiddenWords: ['SELÇUKLU', 'HÜKÜMDAR', 'TÜRK', 'ANADOLU', 'MALAZGİRT SAVAŞI'],
    id: 'nnBbFCbdxpNKx3oEgkd0m',
  },
  {
    word: 'KOLERA',
    forbiddenWords: ['HASTALIK', 'SALGIN', 'TİFO', 'İSHAL', 'BULAŞICI'],
    id: 'iNY1oeQH2irUqzJKn4zym',
  },
  {
    word: 'EBEVEYN',
    forbiddenWords: ['ANNE', 'BABA', 'ÇOCUK', 'AİLE', 'İKİLİ'],
    id: 'jy-as--4y6wRGeZ_kaSXM',
  },
  {
    word: 'FRAPAN',
    forbiddenWords: ['ELBİSE', 'GİYSİ', 'DİKKAT ÇEKİCİ', 'RÜKÜŞ', 'HAVALI'],
    id: 'Rvc0maePKlC4AwCS21O7J',
  },
  {
    word: 'KONTAK',
    forbiddenWords: ['KAFA', 'LENS', 'ANAHTAR', 'ARABA', 'TEMAS'],
    id: 'c6MmzIBW0jA07K6NQOogE',
  },
  {
    word: 'MURATHAN MUNGAN',
    forbiddenWords: ['EDEBİYAT', 'ŞAİR', 'ROMAN', 'YAZAR', 'KIRK ODA'],
    id: 'Cuyzxq2v2F1JwK6PfOyF5',
  },
  {
    word: 'BACANAK',
    forbiddenWords: ['EŞ', 'KARDEŞ', 'BALDIZ', 'KOCA', 'KIZ'],
    id: 'vWWlOtD8ZWtgZQHyoaIV9',
  },
  {
    word: 'PSİKOLOJİ',
    forbiddenWords: ['SOSYOLOJİ', 'PSİKİYATRİ', 'RUHBİLİM', 'DEPRESYON', 'FREUD'],
    id: '62Yyfhrw7atN9KSypUtnn',
  },
  {
    word: 'RİZİKO',
    forbiddenWords: ['RİSK', 'ZARAR', 'TEHLİKE', 'YARIŞMA', 'TELEVİZYON'],
    id: 'YZ59HSTlIew6aYuF1xTsY',
  },
  {
    word: 'DALGAKIRAN',
    forbiddenWords: ['DENİZ', 'BETON', 'KAYA', 'TEKNE', 'SET'],
    id: 'gTcCInYkKm0578i2IpmAO',
  },
  {
    word: 'REHİN VERMEK',
    forbiddenWords: ['KUYUMCU', 'BORÇ', 'PARA', 'MÜCEVHER', 'ALTIN'],
    id: 'PRsSZEj0AFBkRu62DTBxu',
  },
  {
    word: 'ZORUNA GİTMEK',
    forbiddenWords: ['BOZULMAK', 'ÜZÜLMEK', 'GÜCÜNE GİTMEK', 'DOKUNMAK', 'ONUR'],
    id: '0ufG1XHw-48RsGhWvMIAa',
  },
  {
    word: 'ROKET',
    forbiddenWords: ['FÜZE', 'ATMAK', 'SAVAŞ', 'SİLAH', 'MENZİL'],
    id: 'VMf3WDn0HaTWFsQdcGm1o',
  },
  {
    word: 'KARİDES',
    forbiddenWords: ['DENİZ', 'KABUKLU', 'JUMBO', 'ISTAKOZ', 'GÜVEÇ'],
    id: '_qYI9Uf9j7O42YL_2QM0h',
  },
  {
    word: 'DEJENERE',
    forbiddenWords: ['BOZULMAK', 'GENÇLİK', 'YOZLAŞMAK', 'NESİL', 'TOPLUM'],
    id: '0NV7XvvZRXiDB5F3-UI4g',
  },
  {
    word: 'ÇERKEZTAVUĞU',
    forbiddenWords: ['YEMEK', 'CEVİZ', 'MEZE', 'DİDİKLEMEK', 'ET'],
    id: 'wYW2W2l-kixYu-RvNRcUQ',
  },
  {
    word: 'İÇERLEMEK',
    forbiddenWords: ['ALINMAK', 'GÜCENMEK', 'ÜZÜLMEK', 'DARILMAK', 'KIRILMAK'],
    id: 'G1y49QW_THSLM9Q3k4GnF',
  },
  {
    word: 'HEYBE',
    forbiddenWords: ['ÇANTA', 'TORBA', 'EŞEK', 'TAŞIMAK', 'OMUZ'],
    id: 'EaL7kqdGPswP5iTWMkHte',
  },
  {
    word: 'PANSUMAN',
    forbiddenWords: ['YARA', 'TEMİZLEMEK', 'BAKMAK', 'HEMŞİRE', 'PAMUK'],
    id: 'YV8GII-_7CR84WZ2GHi2_',
  },
  {
    word: 'ZAMANE',
    forbiddenWords: ['ÇOCUK', 'BUGÜN', 'GENÇ', 'ŞİMDİ', 'YAKINMAK'],
    id: 'J8VXSW3xDwSGLc6_DfwXA',
  },
  {
    word: 'ASMA YAPRAĞI',
    forbiddenWords: ['ÜZÜM', 'DOLMA', 'ŞARAP', 'SARMA', 'ZEYTİNYAĞI'],
    id: '0xs79ClP6e1iDjUOwfKO5',
  },
  {
    word: 'SEMER',
    forbiddenWords: ['EYER', 'EŞEK', 'AT', 'SIRT', 'OTURMAK'],
    id: 'MiJsaIXzpgCVbkEP6NFOF',
  },
  {
    word: 'MUŞMULA',
    forbiddenWords: ['BİTKİ', 'AĞAÇ', 'MEYVE', 'BURUŞUK', 'SURAT'],
    id: 'cYBkb2MaDhKvWCKd-SHPu',
  },
  {
    word: 'YAZLIK',
    forbiddenWords: ['EV', 'OTURMAK', 'GİTMEK', 'DENİZ', 'TATİL'],
    id: '2Ox1nokTWhzK0WPu8Jjdc',
  },
  {
    word: 'VOKAL',
    forbiddenWords: ['SES', 'ŞARKI', 'SÖYLEMEK', 'MÜZİK', 'YAPMAK'],
    id: 'ncBMbszRdIYEFFVg0pxv5',
  },
  {
    word: 'JAMBON',
    forbiddenWords: ['KAHVALTI', 'SALAM', 'ET', 'SANDVİÇ', 'DANA'],
    id: 'ioA4HWDZ-Tb65cuyd6ma5',
  },
  {
    word: 'ULTRASON',
    forbiddenWords: ['BAKMAK', 'BEBEK', 'HAMİLE', 'ÇEKTİRMEK', 'RÖNTGEN'],
    id: 'NANroODebCa_ODu-lIsCD',
  },
  {
    word: 'ALYUVAR',
    forbiddenWords: ['KAN', 'DAMAR', 'KIRMIZI', 'HÜCRE', 'AKYUVAR'],
    id: 'MIPBTWSH83l6RdJLgXdtN',
  },
  {
    word: 'TEZKERE',
    forbiddenWords: ['ASKERLİK', 'BİTİRMEK', 'BELGE', 'KAĞIT', 'ORDU'],
    id: 'oKo21EE9-J2Bu_VQcwN8c',
  },
  {
    word: 'DÜZ TABAN',
    forbiddenWords: ['ASKERLİK', 'AYAK', 'YÜRÜMEK', 'ORTOPEDİ', 'TOPUK'],
    id: 'OFKxVzxdOeSYphsaGOQqa',
  },
  {
    word: 'KAYMAKAM',
    forbiddenWords: ['VALİ', 'İLÇE', 'YÖNETMEK', 'MEMUR', 'BELEDİYE'],
    id: 'uE_aM5CAashjWIi1qiLmB',
  },
  {
    word: 'KALAY',
    forbiddenWords: ['BAKIR', 'TENCERE', 'KAP KACAK', 'AZARLAMAK', 'PARLATMAK'],
    id: 'R3j5vJB2Xv4FgBCQkXSmr',
  },
  {
    word: 'İLMEK',
    forbiddenWords: ['DÜĞÜM', 'HALI', 'ÖRMEK', 'ŞİŞ', 'TIĞ'],
    id: 'x9nU_zZNxxlR5g_zhx22h',
  },
  {
    word: 'KANALİZASYON',
    forbiddenWords: ['LAĞIM', 'TUVALET', 'PİS', 'SU', 'YER ALTI'],
    id: 'w9iHH6tzZLXpeH8HyFgjJ',
  },
  {
    word: 'MAHSUL',
    forbiddenWords: ['ÜRÜN', 'TARLA', 'TOPLAMAK', 'VERİM', 'ÇİFTÇİ'],
    id: '-zIzsN-39Mc5JXdecEvuJ',
  },
  {
    word: 'BURNUNDAN GETİRMEK',
    forbiddenWords: ['RAHATSIZ ETMEK', 'FİTİL FİTİL', 'PİŞMAN ETMEK', 'BOZMAK', 'ZEHİR ETMEK'],
    id: 'jjA3ElwENbDR3-uCcZ0C7',
  },
  {
    word: 'CEZVE',
    forbiddenWords: ['KAHVE', 'FAL', 'PİŞİRMEK', 'SAP', 'TELVE'],
    id: 'pEFJae9BAtcNTFnWw-4Bb',
  },
  {
    word: 'BAHANE',
    forbiddenWords: ['ARAMAK', 'UYDURMAK', 'YALAN', 'SEBEP', 'SÖYLEMEK'],
    id: 'dZqVB7FxCiLViB23CFdAI',
  },
  {
    word: 'KONFETİ',
    forbiddenWords: ['KAĞIT', 'MAÇ', 'RENKLİ', 'ATMAK', 'DÜĞÜN'],
    id: 'LK5s2mYjOzItZR1wrTsBV',
  },
  {
    word: 'GANİMET',
    forbiddenWords: ['SAVAŞ', 'TOPLAMAK', 'YAĞMA', 'KORSAN', 'ÇALMAK'],
    id: 'qygj002_XMbUdB396h6LC',
  },
  {
    word: 'JOHN LENNON',
    forbiddenWords: ['MÜZİSYEN', 'BEATLES', 'YOKO ONO', 'ŞARKICI', 'IMAGİNE'],
    id: 'fN_OT3MXfNvzUzNQEsG4o',
  },
  {
    word: 'FACEBOOK',
    forbiddenWords: ['İNTERNET', 'ARKADAŞLIK', 'SİTE', 'FOTOĞRAF', 'ÜYE'],
    id: 'W6aqGY40ErJ7tMWvCpnys',
  },
  {
    word: 'TEKZİP',
    forbiddenWords: ['YALANLAMAK', 'GERÇEK', 'GAZETE', 'YAYINLAMAK', 'HABER'],
    id: '2PJ1OLSMNnNcR8-7Gz0oK',
  },
  {
    word: 'ZİGON',
    forbiddenWords: ['MOBİLYA', 'İÇ İÇE', 'SEHPA', 'MİSAFİR', 'SALON'],
    id: 'bVqHh9VE9nTh1_K7I2W6P',
  },
  {
    word: 'KOALA',
    forbiddenWords: ['AVUSTRALYA', 'HAYVAN', 'AYI', 'OKALİPTÜS', 'AĞAÇ'],
    id: '-StCGMRgT2GADuOXQamch',
  },
  {
    word: 'SEÇENEK',
    forbiddenWords: ['ŞIK', 'SINAV', 'OPSİYON', 'ALTERNATİF', 'BAŞKA'],
    id: '_Z3ulLXrKp8GKalrvcv24',
  },
  {
    word: 'KUBBE',
    forbiddenWords: ['CAMİİ', 'YUVARLAK', 'AYASOFYA', 'KÜRE', 'ÇATI'],
    id: 'BpknE4-SfQ6H4-_eWYiKS',
  },
  {
    word: 'HEIDI KLUM',
    forbiddenWords: ['MANKEN', 'TOP MODEL', 'SEAL', 'DEFİLE', 'ALMAN'],
    id: 'nSmK1QXOJM8a4hXjWw3Gi',
  },
  {
    word: 'ÇEMEN',
    forbiddenWords: ['PASTIRMA', 'ACI', 'SOS', 'SÜRMEK', 'KOKULU'],
    id: 'ZEmCRF1JYxPEQE9Ag9KLE',
  },
  {
    word: 'DENİZKESTANESİ',
    forbiddenWords: ['BATMAK', 'DİKEN', 'KABUK', 'AYAK', 'YUVARLAK'],
    id: 'kvSYRSdLKtUu6JsTN7uJ2',
  },
  {
    word: 'CASUS',
    forbiddenWords: ['JAMES BOND', 'GİZLİ', 'AJAN', 'MATA HARI', '007'],
    id: 'e3uBKoPsVUNEL82wuyBef',
  },
  {
    word: 'KUVAY-I MİLLİYE',
    forbiddenWords: ['KURTULUŞ SAVAŞI', 'MUSTAFA KEMAL ATATÜRK', 'ORDU', 'HALK', 'İSTİKLAL'],
    id: 'SkUOBIHtmcNPx2bzNcBvz',
  },
  {
    word: 'SATIR',
    forbiddenWords: ['BIÇAK', 'ET', 'DOĞRAMAK', 'YAZI', 'KESMEK'],
    id: 'Gbnds_PmRj02HL958AfkD',
  },
  {
    word: 'LEHİMLEMEK',
    forbiddenWords: ['YAPIŞTIRMAK', 'TUTTURMAK', 'METAL', 'PARÇA', 'KAYNAK'],
    id: 'TpUwGRuuGmra0IUx_ff2-',
  },
  {
    word: 'EĞİLİM',
    forbiddenWords: ['İLGİ', 'YÖNETMEK', 'MERAK', 'MEYİL', 'İSTEMEK'],
    id: 'Cn0UAg9gBNcS83rlfulM-',
  },
  {
    word: 'DİNOZOR',
    forbiddenWords: ['TÜKENMEK', 'HAYVAN', 'JURRASIC PARK', 'FOSİL', 'T-REX'],
    id: 'S7X4fgv5XgEt4HFQrucoO',
  },
  {
    word: 'OKLAVA',
    forbiddenWords: ['HAMUR', 'AÇMAK', 'BÖREK', 'MERDANE', 'SOPA'],
    id: 'R7lNMyPvmxxs-yvlVk9YT',
  },
  {
    word: 'KÜLBASTI',
    forbiddenWords: ['ET', 'PİRZOLA', 'IZGARA', 'KEMİKSİZ', 'DANA'],
    id: 'kHRsCr3Xh1fOEMcywErz0',
  },
  {
    word: 'PLANÖR',
    forbiddenWords: ['UÇMAK', 'HAVA', 'GÖKYÜZÜ', 'MOTOR', 'KANAT'],
    id: 'y97h_6mJVXsCQn0hSo51y',
  },
  {
    word: 'FETHİYE',
    forbiddenWords: ['MUĞLA', 'ÖLÜDENİZ', 'TATİL', 'AKDENİZ', 'KELEBEKLER VADİSİ'],
    id: 'cti1IW4HmRc8soVU9LYK2',
  },
  {
    word: 'LATİN AMERİKA',
    forbiddenWords: ['GÜNEY', 'KITA', 'BREZİLYA', 'ÜLKE', 'ARJANTİN'],
    id: 'o-Ph76mgFqeACXxV6-1mz',
  },
  {
    word: 'CANLI YAYIN',
    forbiddenWords: ['TELEVİZYON', 'NAKLEN', 'HABER', 'BAĞLANMAK', 'MAÇ'],
    id: 'Est0q6iJbauqqYDWQKnqf',
  },
  {
    word: 'LCD EKRAN',
    forbiddenWords: ['TELEVİZYON', 'BİLGİSAYAR', 'PLAZMA', 'İNCE', 'SEYRETMEK'],
    id: 'P5ZTt6hu_ujIPxhhe8Vj8',
  },
  {
    word: 'GASTRONOMİ',
    forbiddenWords: ['YEMEK', 'BİLİM', 'AŞÇI', 'MUTFAK', 'GURME'],
    id: '5zKKc1NbKwqz23qy0ZI6C',
  },
  {
    word: 'GOTİK',
    forbiddenWords: ['ORTAÇAĞ', 'MİMARİ', 'GENÇLİK', 'SİYAH', 'PUNK'],
    id: 'oaotDaJGEEIqFR5HwGcwv',
  },
  {
    word: 'ELİŞİ',
    forbiddenWords: ['DANTEL', 'ÖRGÜ', 'ÇEYİZ', 'OKUL', 'DERS'],
    id: 'BS8VRZC-uROSILaLbLTy1',
  },
  {
    word: 'GELİNLİK',
    forbiddenWords: ['EVLİLİK', 'DUVAK', 'GİYMEK', 'BEYAZ', 'ELBİSE'],
    id: '6nVdlZtty-dzvHiqLLtFk',
  },
  {
    word: 'KRATER',
    forbiddenWords: ['AY', 'GÖKTAŞI', 'ÇUKUR', 'YANARDAĞ', 'VOLKAN'],
    id: '3i5y4aRqq-JGhLRfq81ip',
  },
  {
    word: 'NARSİST',
    forbiddenWords: ['HAYRAN', 'BENCİL', 'EGOİST', 'SEVMEK', 'KENDİ'],
    id: '5SaH1VoLIe2j_unVFUzp4',
  },
  {
    word: 'EKÜRİ',
    forbiddenWords: ['AT', 'İKİLİ', 'ARKADAŞ', 'YARIŞ', 'ORTAK'],
    id: 'v2TEH5I80NjM65Hovhy8Z',
  },
  {
    word: 'HEBA ETMEK',
    forbiddenWords: ['ZARAR', 'HARCAMAK', 'ZİYAN ETMEK', 'YİTİRMEK', 'KAYBETMEK'],
    id: '31MMsXoSNBlS6rFLMurGk',
  },
  {
    word: 'TESTERE',
    forbiddenWords: ['FİLM', 'KORKU', 'ALET', 'KESMEK', 'AĞAÇ'],
    id: 'DkfCHboJFbrBSC-TcHYB9',
  },
  {
    word: 'KLİP',
    forbiddenWords: ['MÜZİK', 'VİDEO', 'TELEVİZYON', 'İZLEMEK', 'ÇEKMEK'],
    id: 'IjLEIeOtnrUVb3wXEZDgN',
  },
  {
    word: 'TÖREN',
    forbiddenWords: ['BAYRAK', 'NİKAH', 'RESMİ', 'AÇILIŞ', 'MERASİM'],
    id: '6Q9dSDIaaOcxMwZwsdlDy',
  },
  {
    word: 'PARMESAN',
    forbiddenWords: ['PEYNİR', 'SALATA', 'İTALYAN', 'MAKARNA', 'ÜST'],
    id: 'u7ulgMPpkNur-iR1Uu-bw',
  },
  {
    word: 'AFACAN',
    forbiddenWords: ['YARAMAZ', 'ÇOCUK', 'ZEKİ', 'KARIŞTIRMAK', 'HAYLAZ'],
    id: '7C0M8BMnhuepy0KTXZLrg',
  },
  {
    word: 'AMBARGO',
    forbiddenWords: ['KOYMAK', 'ENGELLEMEK', 'ÜLKE', 'TİCARET', 'UYGULAMAK'],
    id: '2eScihPviVVZiyXVVpMUP',
  },
  {
    word: 'SANDIK',
    forbiddenWords: ['ÇEYİZ', 'TAHTA', 'EŞYA', 'SEÇİM', 'OY ATMAK'],
    id: 'N1R-HaxVaJ8x0-J3Yb3J4',
  },
  {
    word: 'BEŞAMEL',
    forbiddenWords: ['SOS', 'ET', 'TAVUK', 'UN', 'SÜT'],
    id: 'a1Uay2IOx8pIoKDjwB94N',
  },
  {
    word: 'İÇİ GEÇMEK',
    forbiddenWords: ['UYUMAK', 'İSTEMEK', 'YATMAK', 'İSTEKSİZ', 'YAŞLI'],
    id: 'XfrB8sIzy7crff6yvTyln',
  },
  {
    word: 'İSPANYOL PAÇA',
    forbiddenWords: ['PANTOLON', 'KOT', 'GENİŞ', 'UÇ', 'MODA'],
    id: 'aUdR5Ibxbsk9oURPe4Ov1',
  },
  {
    word: 'SÜLALE',
    forbiddenWords: ['AİLE', 'AKRABA', 'SOY', 'TEYZE', 'AMCA'],
    id: 'O4m2SJh9jwO_xTOTr2IfI',
  },
  {
    word: 'SARPA SARMAK',
    forbiddenWords: ['KARIŞMAK', 'ÇÖZMEK', 'İŞ', 'BOZULMAK', 'ZORLUK'],
    id: 'NM05-FwAR5jwRPirh_Sf7',
  },
  {
    word: 'GETTO',
    forbiddenWords: ['MAHALLE', 'ŞEHİR', 'AZINLIK', 'YABANCI', 'YAŞAMAK'],
    id: 'prJOe-Sxlf0fyFl1GRcGU',
  },
  {
    word: 'İFLAS ETMEK',
    forbiddenWords: ['HACİZ', 'BANKA', 'ŞİRKET', 'BORÇ', 'BATMAK'],
    id: '4ujAM4HwyxRU87VmGWH-s',
  },
  {
    word: 'AÇIK FİKİRLİ',
    forbiddenWords: ['ANLAMAK', 'MODERN', 'YENİLİK', 'DÜŞÜNMEK', 'BAĞNAZ'],
    id: 'qy2YLGLwjRVlx8qgVRTRl',
  },
  {
    word: 'ÇULLANMAK',
    forbiddenWords: ['ABANMAK', 'ÜZERİNE GİTMEK', 'ÜSTÜNE DÜŞMEK', 'ATLAMAK', 'ZIPLAMAK'],
    id: 'vQSSepXqwhA7tKiKFUokr',
  },
  {
    word: 'JUSTIN TIMBERLAKE',
    forbiddenWords: ['ŞARKICI', 'AMERİKA', 'DANS', 'ERKEK', 'BRITNEY SPEARS'],
    id: '9wtqGfvSBRUyq-L0DFS-B',
  },
  {
    word: 'KABAKULAK',
    forbiddenWords: ['ÇOCUK', 'HASTALIK', 'KIZAMIK', 'SUÇİÇEĞİ', 'ŞİŞMEK'],
    id: 'ldQr8qGMIRMVrqpsE7RmZ',
  },
  {
    word: 'GARANTİ BELGESİ',
    forbiddenWords: ['BOZULMAK', 'TAMİR', 'YIL', 'TAAHHÜT', 'EŞYA'],
    id: 'Z-6_2Kw56uIjzor4XXhkV',
  },
  {
    word: 'EMRİVAKİ YAPMAK',
    forbiddenWords: ['OLDUBİTTİ', 'ANİ', 'ACELE', 'KARGAŞA', 'ZORLAMAK'],
    id: 'STwtmc4ZQIjKBkZ1mwEZA',
  },
  {
    word: 'ROKFOR',
    forbiddenWords: ['PEYNİR', 'KÜF', 'SÜT', 'FRANSIZ', 'BEYAZ'],
    id: '2b58Pc36mwQZ4H72Fu_Tr',
  },
  {
    word: 'HİLAL',
    forbiddenWords: ['AY', 'ŞEKİL', 'DOLUNAY', 'YILDIZ', 'BAYRAK'],
    id: 'DdK3V0G0GA7ZmR-Eggq7X',
  },
  {
    word: 'ABONE',
    forbiddenWords: ['DERGİ', 'AY', 'GAZETE', 'GELMEK', 'YONCA EVCİMİK'],
    id: 'Ea1hCOxj3dJBqJZGT6NSx',
  },
  {
    word: 'SİVİL TOPLUM',
    forbiddenWords: ['ÖRGÜT', 'DEVLET', 'BAĞIMSIZ', 'DERNEK', 'VAKIF'],
    id: 'QYFu8PCxXT8FZ5S8C9qZi',
  },
  {
    word: 'DONMAK',
    forbiddenWords: ['BUZ', 'SIFIR', 'DERECE', 'SU', 'KIŞ'],
    id: '2aQi-GLpNjiclwFO5T7J4',
  },
  {
    word: 'KAFA DENGİ',
    forbiddenWords: ['ARKADAŞ', 'UYUMLU', 'ANLAŞMAK', 'AYNI', 'ZEVK'],
    id: 'W9OzFaIlEfmo2UsoLEgaH',
  },
  {
    word: 'SÜVARİ',
    forbiddenWords: ['AT', 'ASKER', 'BİNMEK', 'SAVAŞ', 'PİYADE'],
    id: 'haI9x8h8qCBWMoyMhu-zV',
  },
  {
    word: 'SÜKUNET',
    forbiddenWords: ['DURGUN', 'SESSİZ', 'HUZURLU', 'DİNGİN', 'GÜRÜLTÜLÜ'],
    id: '9HBdXvIcHf9VfuTZXMd3n',
  },
  {
    word: 'BAŞI BAĞLI',
    forbiddenWords: ['EVLİ', 'NİŞANLI', 'SÖZLÜ', 'BEKAR', 'SEVGİLİ'],
    id: 'UIq0bNQzLsBmozfOsHI-P',
  },
  {
    word: 'LÜLETAŞI',
    forbiddenWords: ['PİPO', 'BEYAZ', 'OYMAK', 'YUMUŞAK', 'ESKİŞEHİR'],
    id: '2nmRvC4ZykuaBCw3fqO_1',
  },
  {
    word: 'SUSPUS',
    forbiddenWords: ['SİNMEK', 'KONUŞMAK', 'SESSİZ', 'SUÇLU', 'CEVAP VERMEK'],
    id: 'LTnlO0t-ht6mEpANIRNYO',
  },
  {
    word: 'JANT',
    forbiddenWords: ['ARABA', 'PARÇA', 'TEKERLEK', 'LASTİK', 'ÇELİK'],
    id: '1d3-233Ck39KGIdoIfr5S',
  },
  {
    word: 'MESULİYET',
    forbiddenWords: ['SORUMLULUK', 'GÖREV', 'İLGİ', 'YÜKLENMEK', 'ÜSTLENMEK'],
    id: 'c7KG1RDIyBgz8zK6ZU80D',
  },
  {
    word: 'PASAJ',
    forbiddenWords: ['ÇARŞI', 'DÜKKAN', 'BEYOĞLU', 'ALIŞVERİŞ', 'KAPALI'],
    id: 'BL40hK36ejUlhciuFAmyb',
  },
  {
    word: 'NOEL BABA',
    forbiddenWords: ['YILBAŞI', 'HEDİYE', 'REN GEYİĞİ', 'BACA', 'ARALIK'],
    id: 'VJmkyGolqBfEkddnjwMHr',
  },
  {
    word: 'AT GÖZLÜĞÜ',
    forbiddenWords: ['SABİT FİKİRLİ', 'DÜŞÜNMEK', 'BAKMAK', 'DAR', 'TUTUCU'],
    id: 'zsqczZFzn0_U0fDSpsOvG',
  },
  {
    word: 'BAŞA ÇIKMAK',
    forbiddenWords: ['GÜÇ', 'YETMEK', 'BAŞARMAK', 'ÜSTESİNDEN GELMEK', 'DERT'],
    id: '3hUv30zRN4JWPXSB9HwjN',
  },
  {
    word: 'LOKAL',
    forbiddenWords: ['ANESTEZİ', 'ULUSLARARASI', 'DERNEK', 'GECE KULÜBÜ', 'YEREL'],
    id: 'CY2Sr9pqXGpQn1gRUtuuj',
  },
  {
    word: 'PİYON',
    forbiddenWords: ['SATRANÇ', 'TAŞ', 'ŞAH', 'VEZİR', 'OYUN'],
    id: '6OPS-tGP3R5TUGiYI2Dmy',
  },
  {
    word: 'ŞAHİN',
    forbiddenWords: ['KARTAL', 'DOĞAN', 'KUŞ', 'YIRTICI', 'ARABA'],
    id: 'CBrsuz_tbsKLgwObv-oYt',
  },
  {
    word: 'FOBİ',
    forbiddenWords: ['KORKU', 'ÖRÜMCEK', 'YÜKSEKLİK', 'AŞIRI', 'PANİK'],
    id: 'JKBa09yvNbLzM3SGMR1_W',
  },
  {
    word: 'VAKIF',
    forbiddenWords: ['HAYIR İŞİ', 'BAĞIŞ', 'KURULUŞ', 'DERNEK', 'YARDIM'],
    id: 'EiOfrjfZIf5nGzDeQJE6J',
  },
  {
    word: 'TOLERANS',
    forbiddenWords: ['HOŞGÖRÜ', 'ANLAYIŞ', 'GÖSTERMEK', 'MÜSAMAHA', 'HATA'],
    id: '0kp8PCubuCGiw8c56UO71',
  },
  {
    word: 'RASTGELE',
    forbiddenWords: ['HERHANGİ', 'GELİŞİGÜZEL', 'SEÇMEK', 'SESLENMEK', 'BALIKÇI'],
    id: 'SbRWMEn4AKJbydzNcZsO0',
  },
  {
    word: 'AFİŞ',
    forbiddenWords: ['ASMAK', 'DUVAR', 'KONSER', 'SİNEMA', 'FİLM'],
    id: 'Km-2-I5mxJpNwcF149NJ5',
  },
  {
    word: 'FONDÖTEN',
    forbiddenWords: ['MAKYAJ', 'SÜRMEK', 'YÜZ', 'KAPATICI', 'PUDRA'],
    id: 'BwGtygbO26N-E5cVcSemr',
  },
  {
    word: 'TEDBİRLİ',
    forbiddenWords: ['ÖNLEMEK', 'HAZIRLIKLI', 'ALMAK', 'ÖNCE', 'DÜŞÜNMEK'],
    id: 'YESbBngtarvtPeDsyMA3-',
  },
  {
    word: 'ÇAKIŞMAK',
    forbiddenWords: ['ÜST ÜSTE', 'AYNI', 'ZAMAN', 'DENK GELMEK', 'KESİŞMEK'],
    id: 'fdXknf42_SdFQmNFxINxd',
  },
  {
    word: 'IZGARA',
    forbiddenWords: ['MANGAL', 'PİŞİRMEK', 'ET', 'TAVUK', 'BARBEKÜ'],
    id: '1S4zpSrkRJp_3hPeEbFRN',
  },
  {
    word: 'FENG SHUI',
    forbiddenWords: ['DEKORASYON', 'TARZ', 'UZAK DOĞU', 'MEKAN', 'EV'],
    id: 's24msuldUR4X3Uv0H37rl',
  },
  {
    word: 'ORHAN PAMUK',
    forbiddenWords: ['ROMAN', 'NOBEL', 'YAZAR', 'BENİM ADIM KIRMIZI', 'MASUMİYET MÜZESİ'],
    id: 'Ucn1xk4ixMWC8Kss1CI2-',
  },
  {
    word: 'HOROZLANMAK',
    forbiddenWords: ['DAYILANMAK', 'KAFA TUTMAK', 'DİKLEŞMEK', 'KAVGA', 'CESARET'],
    id: 'GfSxUo50HwIMKSVnuiStP',
  },
  {
    word: 'MEKİK ÇEKMEK',
    forbiddenWords: ['KARIN KASI', 'EGZERSİZ', 'GÖBEK', 'SPOR', 'ŞINAV ÇEKMEK'],
    id: 'zG9r13QjjOzLjU1zLbZgu',
  },
  {
    word: 'OYUN HAVASI',
    forbiddenWords: ['GÖBEK', 'DANS ETMEK', 'ORYANTAL', 'MÜZİK', 'EĞLENMEK'],
    id: 'sIRtCv1vaWjPKeIrr8kD-',
  },
  {
    word: 'ELİ SIKI',
    forbiddenWords: ['CİMRİ', 'PARA', 'HARCAMAK', 'BİRİKTİRMEK', 'TUTUMLU'],
    id: '8dqw98DxrkFzzu-LZlGxf',
  },
  {
    word: 'GIDIK',
    forbiddenWords: ['ÖPMEK', 'BEBEK', 'ÇENE', 'GERDAN', 'ŞİŞMAN'],
    id: '6iBeGqdEKT_njWAi3A56c',
  },
  {
    word: 'YETİNMEK',
    forbiddenWords: ['AZ', 'ÇOK', 'İSTEMEK', 'İDARE ETMEK', 'SAHİP OLMAK'],
    id: 'Od0cmVSSLBAGjHsuyHP7_',
  },
  {
    word: 'MAGMA',
    forbiddenWords: ['YER ALTI', 'VOLKAN', 'ERİMEK', 'YANARDAĞ', 'LAV'],
    id: 'o2ZMbz6VmgjfJpqUVGf0f',
  },
  {
    word: 'KÖÇEK',
    forbiddenWords: ['DANSÖZ', 'ORYANTAL', 'OYNAMAK', 'DÜĞÜN', 'ERKEK'],
    id: 'XOfM6scerr8GYyXeHU1qd',
  },
  {
    word: 'JACK SPARROW',
    forbiddenWords: ['JOHNY DEPP', 'KARAYİP', 'KORSAN', 'KAPTAN', 'FİLM'],
    id: 'TeukyIEQycKu1_FXl7wib',
  },
  {
    word: 'KISITLI',
    forbiddenWords: ['İMKAN', 'AZ', 'SINIRLI', 'YOKLUK', 'OLANAK'],
    id: 'oJODn3NmOt43RFVBHnPsm',
  },
  {
    word: 'NEJAT İŞLER',
    forbiddenWords: ['AKTÖR', 'SİNEMA', 'DİZİ', 'BARDA', 'TELEVİZYON'],
    id: '7x572NOLBKwpYJ7cNqJZN',
  },
  {
    word: 'PAÇANGA BÖREĞİ',
    forbiddenWords: ['PASTIRMA', 'MEYHANE', 'MEZE', 'YEMEK', 'ARA SICAK'],
    id: 'whR3p12Oy4MM2OCfQLS_j',
  },
  {
    word: 'RİMEL',
    forbiddenWords: ['GÖZ', 'MAKYAJ', 'KADIN', 'SÜRMEK', 'KİRPİK'],
    id: 'y_oX41spe7Uuz7AVDwBY1',
  },
  {
    word: 'KÜÇÜK DÜŞÜRMEK',
    forbiddenWords: ['DALGA GEÇMEK', 'GÜLMEK', 'ALAY', 'AŞAĞILAMAK', 'UTANDIRMAK'],
    id: 'nQtOMN-oQUNTImZ7vq3xv',
  },
  {
    word: 'HOVARDA',
    forbiddenWords: ['ÇAPKIN', 'SEVGİLİ', 'GECE', 'PARA HARCAMAK', 'GÖNÜL'],
    id: 'aicMcSQfz8wb0qwmpefxH',
  },
  {
    word: 'TEFLON',
    forbiddenWords: ['EMAYE', 'TAVA', 'YAPIŞMAK', 'ÇELİK', 'ÇİZMEK'],
    id: 'c6T6uy4-r3ujfxUdQBFPE',
  },
  {
    word: 'AVUÇ',
    forbiddenWords: ['EL', 'AÇMAK', 'DİLENCİ', 'FAL', 'AYA'],
    id: 'BaENa8FyyndUEbWtmCWqV',
  },
  {
    word: 'DAYANIKLI',
    forbiddenWords: ['EŞYA', 'SAĞLAM', 'KIRILMAK', 'BOZULMAK', 'TÜKETİM'],
    id: 'MEzq-gTdZ-H8yt5XMcm0i',
  },
  {
    word: 'AVUCUNU YALAMAK',
    forbiddenWords: ['ALMAK', 'KALMAK', 'KAYBETMEK', 'İSTEMEK', 'BİTMEK'],
    id: 'kG_Jz6mOkQg3zdWTGSopi',
  },
  {
    word: 'UZANMAK',
    forbiddenWords: ['YORGUN', 'HASTA', 'YATMAK', 'TV', 'DİNLENMEK'],
    id: 'NstT8TVL2-kbXWN1wjLk_',
  },
  {
    word: 'ENDAMLI',
    forbiddenWords: ['UZUN', 'GÖSTERİŞLİ', 'BOYLU POSLU', 'GÜZEL', 'ZARAFET'],
    id: 'I6vEVHFYV4zwvECXWGKWl',
  },
  {
    word: 'NEON',
    forbiddenWords: ['IŞIK', 'TABELA', 'RENKLİ', 'LAMBA', 'GAZ'],
    id: 'X7Bgs7PzBde2AZMRvy7By',
  },
  {
    word: 'BANLİYÖ',
    forbiddenWords: ['TAŞRA', 'MERKEZ', 'UZAK', 'OTURMAK', 'TREN'],
    id: 'Yr8gpg-ILfnqmeHqkqtKc',
  },
  {
    word: 'SAF KAN',
    forbiddenWords: ['AT', 'CİNS', 'IRK', 'ÖZELLİK', 'KARIŞMAK'],
    id: '2GorcAkN8Z8YDvLZshOXf',
  },
  {
    word: 'İPUCU',
    forbiddenWords: ['DEDEKTİF', 'POLİS', 'ÇÖZMEK', 'DELİL', 'ARAMAK'],
    id: 'qg03j4UxEUrUOr4ubmztp',
  },
  {
    word: 'KÜRE',
    forbiddenWords: ['DAİRE', 'FAL', 'DÜNYA', 'YUVARLAK', 'ŞEKİL'],
    id: 'Ha9lhlGNKqanG89jNjvmh',
  },
  {
    word: 'SAĞANAK',
    forbiddenWords: ['YAĞMUR', 'HAVA', 'KAR', 'BULUT', 'ŞEMSİYE'],
    id: 'bW5c9MIixiaxOPYxpilpf',
  },
  {
    word: 'LEHÇE',
    forbiddenWords: ['DİL', 'KONUŞMAK', 'ŞİVE', 'AĞIZ', 'FARKLI'],
    id: 'HzczVlz37IlrJ7LcuKjDq',
  },
  {
    word: 'BAHSE GİRMEK',
    forbiddenWords: ['İDDİA', 'AT YARIŞI', 'MAÇ', 'PARA', 'KUMAR'],
    id: 'C4i6sWxLvctK1vh7D9uHw',
  },
  {
    word: 'MAMA SANDALYESİ',
    forbiddenWords: ['BEBEK', 'YEMEK', 'OTURMAK', 'YÜKSEK', 'ÇOCUK'],
    id: 'lEM6dafrrKWBKgpVSPTuc',
  },
  {
    word: 'TAARRUZ',
    forbiddenWords: ['SALDIRI', 'ESKİ', 'SAVAŞ', 'EMRİ', 'HÜCUM'],
    id: '9SE1ruvyKanptXTfzpTSa',
  },
  {
    word: 'KULAK ZARI',
    forbiddenWords: ['ORGAN', 'DUYMAK', 'PATLAMAK', 'YÜZ', 'BURUN'],
    id: '7rcZXpGoHdx0gWocFi2hD',
  },
  {
    word: 'HIMBIL',
    forbiddenWords: ['YAVAŞ', 'TEMBEL', 'UYUŞUK', 'HAREKET', 'ŞİŞMAN'],
    id: '-7No3194JHn7Vj2Ts2ou6',
  },
  {
    word: 'REKABET',
    forbiddenWords: ['HIRS', 'ÇEKİŞME', 'YARIŞMA', 'RAKİP', 'SPOR'],
    id: 'mEHEmze-2Wp-hSRVdPObb',
  },
  {
    word: 'FEMİNİST',
    forbiddenWords: ['KADIN', 'HAK', 'SAVUNMAK', 'EŞİTLİK', 'HAREKET'],
    id: 'AqalWoxNc7FdKa0PECkb2',
  },
  {
    word: 'ENDOSKOPİ',
    forbiddenWords: ['AĞIZ', 'KAMERA', 'MİDE', 'BORU', 'SOKMAK'],
    id: 'nP1iSiE0_O3XgZEmKTJTs',
  },
  {
    word: 'MİMİK',
    forbiddenWords: ['YÜZ', 'ANLATMAK', 'İFADE', 'HAREKET', 'DUYGU'],
    id: 'aSUIflCUvVn4OMaHyYro7',
  },
  {
    word: 'AFYON',
    forbiddenWords: ['ŞEHİR', 'SUCUK', 'HAŞHAŞ', 'KAYMAK', 'PATLAMAK'],
    id: 'n_IBK_RDnKDL74w3IaOQZ',
  },
  {
    word: 'NAİF',
    forbiddenWords: ['SAF', 'HASSAS', 'DUYGUSAL', 'MASUM', 'İYİ NİYETLİ'],
    id: '_pkkUWpOYbtbaL6stac-k',
  },
  {
    word: 'KARBONHİDRAT',
    forbiddenWords: ['KALORİ', 'EKMEK', 'DİYET', 'MAKARNA', 'PROTEİN'],
    id: 'nlx6KCrs1Te30z0zXWnTA',
  },
  {
    word: 'SENDROM',
    forbiddenWords: ['BELİRTİ', 'HASTALIK', 'BUNALIM', 'PAZARTESİ', 'SIKINTI'],
    id: 'D5CcGMGyKjLibYPSdnRuu',
  },
  {
    word: 'KİNAYE',
    forbiddenWords: ['İĞNELEME', 'DOLAYLI', 'İMA ETME', 'ÜSTÜ KAPALI', 'LAF DOKUNDURMAK'],
    id: 'tYZkoxrQ9Yx7ERR5DIVJL',
  },
  {
    word: 'ÇİZMEYİ AŞMAK',
    forbiddenWords: ['İLERİ GİTMEK', 'HADDİNİ AŞMAK', 'SINIR', 'BİLMEK', 'ÇİZGİ'],
    id: 'F8CzVnMC34zadZUoi-oD1',
  },
  {
    word: 'TAVUKGÖĞSÜ',
    forbiddenWords: ['TATLI', 'SÜT', 'MUHALLEBİ', 'KAZANDİBİ', 'YEMEK'],
    id: 'U1r1POpZ_kKZr7pftIxjm',
  },
  {
    word: 'BUZ DAĞI',
    forbiddenWords: ['ICEBERG', 'TİTANİK', 'KUTUP', 'DENİZ', 'SOĞUK'],
    id: 'yYEXy_ktcqqDF1mHFCle_',
  },
  {
    word: 'DİSKO',
    forbiddenWords: ['DANS', 'MÜZİK', 'EĞLENMEK', 'GECE', 'KULÜP'],
    id: 'gPLEuuxrfqnr_vp5ik-dG',
  },
  {
    word: 'YENİYETME',
    forbiddenWords: ['ÇOCUK', 'DELİKANLI', 'YAŞLI', 'GENÇ', 'YETİŞKİN'],
    id: 'ZPBVyv9TF3N7PMWOKostw',
  },
  {
    word: 'HORON',
    forbiddenWords: ['KARADENİZ', 'LAZ', 'TULUM', 'TEPMEK', 'HALK OYUNU'],
    id: 'WHDrINZC2drYzYuEMrviC',
  },
  {
    word: 'MÜLAKAT',
    forbiddenWords: ['SORU SORMAK', 'GÖRÜŞME', 'İŞE ALMAK', 'RÖPORTAJ', 'ÖZGEÇMİŞ'],
    id: 'Pc1Uhfgb8iK2WYHde2gmL',
  },
  {
    word: 'PİŞMANİYE',
    forbiddenWords: ['YİYECEK', 'TEL TEL', 'TATLI', 'İZMİT', 'YOLCULUK'],
    id: 'AXnKEZFLlyLBWnt15USSy',
  },
  {
    word: 'İMA ETMEK',
    forbiddenWords: ['DOKUNDURMAK', 'DOĞRUDAN', 'DOLAYLI', 'SEZDİRMEK', 'SÖYLEMEK'],
    id: 'vCPV3BgAhAXHP591HD7XZ',
  },
  {
    word: 'STRAPLEZ',
    forbiddenWords: ['BLUZ', 'ÜST', 'ASKI', 'OMUZ', 'DEKOLTE'],
    id: 'uNv2L-R5OJdXnBxs4FDq0',
  },
  {
    word: 'AĞIR AKSAK',
    forbiddenWords: ['YAVAŞ', 'DÜZENSİZ', 'HIZLI', 'DÖRTNALA', 'İLERLEMEK'],
    id: 'EMtHdiuIgzf463dfLFTK3',
  },
  {
    word: 'ISMARLAMAK',
    forbiddenWords: ['İSTEMEK', 'PARA', 'YEMEK', 'SİPARİŞ', 'ÖDEMEK'],
    id: 'oPS9BOo8FUR4H8qdqE3xs',
  },
  {
    word: 'YALAP ŞAP',
    forbiddenWords: ['ÜSTÜNKÖRÜ', 'GELİŞİGÜZEL', 'TEMİZLİK', 'İŞ', 'CEVAPLAMAK'],
    id: 'wjaXITGKI2SlQE0JSdlxd',
  },
  {
    word: 'ZONKLAMAK',
    forbiddenWords: ['BAŞ AĞRISI', 'VURMAK', 'AĞRIMAK', 'ŞAKAK', 'BEYİN'],
    id: 'XkzdixBKsQhw5mjTjxiWp',
  },
  {
    word: 'KRİZ MASASI',
    forbiddenWords: ['BELEDİYE', 'KURUL', 'FELAKET', 'DEPREM', 'OLUŞTURMAK'],
    id: 'ddKuQMsfr1bfX9Jvl_F2V',
  },
  {
    word: 'YIL DÖNÜMÜ',
    forbiddenWords: ['KUTLAMA', 'EVLİLİK', 'ÖLÜM', 'GÜN', 'KURULUŞ'],
    id: 'XJdSfjbykw9st5qDxi1EX',
  },
  {
    word: 'TANRI MİSAFİRİ',
    forbiddenWords: ['KONUK', 'EV', 'GELMEK', 'BEKLEMEK', 'ANİDEN'],
    id: 'nimfcJIKrokuTZ3c33xSH',
  },
  {
    word: 'MAHCUP',
    forbiddenWords: ['ÇEKİNGEN', 'UTANGAÇ', 'GÜVENSİZ', 'RAHAT', 'GİRİŞKEN'],
    id: 'HP4-VrNkolRzD6PaeRUws',
  },
  {
    word: 'ALAKART MÖNÜ',
    forbiddenWords: ['AÇIK BÜFE', 'FİKS MÖNÜ', 'SEÇMEK', 'RESTORAN', 'YEMEK'],
    id: 'J3tmuMyd_ey53l6OvOe4x',
  },
  {
    word: 'KAMAROT',
    forbiddenWords: ['GEMİ', 'YOLCU', 'SERVİS', 'GÖREVLİ', 'KAPTAN'],
    id: 'R7GA1dO39B7n0RebEvdf8',
  },
  {
    word: 'JÖN TÜRKLER',
    forbiddenWords: ['OSMANLI', 'MEŞRUTİYET', 'AYDIN', 'TOPLULUK', 'İTTİHAT VE TERAKKİ'],
    id: 'aEHHefSXiK1THKrM1GDzn',
  },
  {
    word: 'EĞİK',
    forbiddenWords: ['DÜZ', 'ÇİZGİ', 'DİK', 'YAMUK', 'DURMAK'],
    id: 'K5366zCPEtyiuw-mh8Jzk',
  },
  {
    word: 'SLOGAN',
    forbiddenWords: ['ATMAK', 'MİTİNG', 'PARTİ', 'PROPAGANDA', 'SÖZ'],
    id: 'FZNMKjYJYBdvVPGiwqHtg',
  },
  {
    word: 'KAFA TUTMAK',
    forbiddenWords: ['KAVGA ETMEK', 'TARTIŞMAK', 'KARŞI GELMEK', 'BOYUN EĞMEK', 'DİKLENMEK'],
    id: 'sLUvWNVuquCqa4H3-xrEf',
  },
  {
    word: 'BOĞA',
    forbiddenWords: ['HAYVAN', 'KIRMIZI', 'MATADOR', 'BURÇ', 'İSPANYA'],
    id: 'N_BTd6EGXNiroGiBgfH0K',
  },
  {
    word: 'PASKALYA',
    forbiddenWords: ['BAHAR', 'ÇÖREK', 'YUMURTA', 'HRİSTİYAN', 'BAYRAM'],
    id: 'OaUGssRuiu2Rnu6OCr04c',
  },
  {
    word: 'ABSÜRT',
    forbiddenWords: ['SAÇMA', 'KOMEDİ', 'UYUMSUZ', 'TUTARSIZ', 'FİLM'],
    id: '_Bj5OqBUjATSVYnKZAZ0Q',
  },
  {
    word: 'ATEŞKES',
    forbiddenWords: ['SAVAŞ', 'BARIŞ', 'BİTİRMEK', 'TESLİM OLMAK', 'ANLAŞMAK'],
    id: '6TQGaf9SNdRxK7_4w7Nzk',
  },
  {
    word: 'KÖSE',
    forbiddenWords: ['KILSIZ', 'BIYIK', 'SAKAL', 'TÜY', 'TRAŞ'],
    id: 'GeCra4LZcqudIP3n5CNWN',
  },
  {
    word: 'AĞAÇKAKAN',
    forbiddenWords: ['HAYVAN', 'KUŞ', 'GAGA', 'OYMAK', 'DELMEK'],
    id: 'jyb_fM1W3X63vZgVSn45d',
  },
  {
    word: 'KITLAMA',
    forbiddenWords: ['ÇAY', 'İÇMEK', 'ŞEKER', 'ISIRMAK', 'ERZURUM'],
    id: 'Af3Ue5dho0FAJ4dolUzJX',
  },
  {
    word: 'REST ÇEKMEK',
    forbiddenWords: ['POKER', 'HEPSİ', 'PARA', 'SON VERMEK', 'KARŞI ÇIKMAK'],
    id: 'UoctAcxTPsbY34BEDtf0C',
  },
  {
    word: 'KONTRBAS',
    forbiddenWords: ['ENSTRÜMAN', 'MÜZİK', 'ALET', 'KEMAN', 'YAYLI'],
    id: 'qUgJEMSltCl8XTVj3OxVn',
  },
  {
    word: 'WOLVERINE',
    forbiddenWords: ['KURT ADAM', 'PENÇE', 'X-MEN', 'MUTASYON', 'MARVEL'],
    id: 'S-F9I284OIp9Ct5t6ikV0',
  },
  {
    word: 'RACON',
    forbiddenWords: ['KESMEK', 'KABADAYI', 'ARGO', 'FİYAKA', 'DELİKANLI'],
    id: 'JsC7Lo4vrxmVX8pEer6U1',
  },
  {
    word: 'TIRSMAK',
    forbiddenWords: ['KORKMAK', 'ÇEKİNMEK', 'ÜRKMEK', 'CESARET', 'BIRAKMAK'],
    id: 'uyozJkWxuqyMu3xhjm0Tt',
  },
  {
    word: 'BONO',
    forbiddenWords: ['U2', 'SOLİST', 'TAHVİL', 'KAĞIT', 'HİSSE SENEDİ'],
    id: 'D2IeTVkM_MhkN4GCY4AVB',
  },
  {
    word: 'GEORGE LUCAS',
    forbiddenWords: ['YÖNETMEN', 'SİNEMA', 'STAR WARS', 'INDIANA JONES', 'FİLM'],
    id: 'g6lYnJ2Jz13Pbn9R2QV1S',
  },
  {
    word: 'KOLAÇAN ETMEK',
    forbiddenWords: ['DEVRİYE', 'DOLAŞMAK', 'ETRAF', 'BAKMAK', 'KONTROL'],
    id: 'ud0N8aVURf00hjLyfxTzd',
  },
  {
    word: 'ZULA',
    forbiddenWords: ['SAKLAMAK', 'GİZLİ', 'KOYMAK', 'KAÇAK', 'MAL'],
    id: 'LeH-BzCPi-UCua3OHgYou',
  },
  {
    word: 'LİNYİT',
    forbiddenWords: ['KÖMÜR', 'MADEN', 'ZONGULDAK', 'SOBA', 'YANMAN'],
    id: 'xZUQl7NsVmXvFnfEGEN6a',
  },
  {
    word: 'İHTİMAL',
    forbiddenWords: ['BELKİ', 'OLASI', 'VERMEMEK', 'OLMAK', 'UMUT'],
    id: 'S13JzBle8APpE7gZd1_xB',
  },
  {
    word: 'EFOR',
    forbiddenWords: ['GÜÇ', 'ÇABA', 'HARCAMAK', 'KALP', 'TEST'],
    id: 'zOi-mP6n-i7Ifl0muzIwO',
  },
  {
    word: 'DOLAP BEYGİRİ',
    forbiddenWords: ['DÖNMEK', 'BAĞLAMAK', 'AT', 'EŞEK', 'SÜREKLİ'],
    id: 'HHu_oblHQiRH5wFalMG7b',
  },
  {
    word: 'BUFALO',
    forbiddenWords: ['SIĞIR', 'AMERİKA', 'SÜRÜ', 'KOVBOY', 'BİZON'],
    id: 'YBZORHG4NuMtcs2NLRh2h',
  },
  {
    word: 'SIĞINAK',
    forbiddenWords: ['SAVAŞ', 'BOMBA', 'SAKLANMAK', 'KAÇMAK', 'YER ALTI'],
    id: 'URdu61E_cfkigOdgw955D',
  },
  {
    word: 'ALYANS',
    forbiddenWords: ['EVLİLİK', 'YÜZÜK', 'KARI-KOCA', 'PARMAK', 'TAKMAK'],
    id: 'NAGPoRaSMFUwXygv8C7XY',
  },
  {
    word: 'ALKOLİK',
    forbiddenWords: ['İÇKİ', 'GÜN', 'AYYAŞ', 'ALIŞKANLIK', 'BAĞIMLI'],
    id: 'QvvVRDRQ75jjJml14tVAV',
  },
  {
    word: 'ATARİ',
    forbiddenWords: ['BİLGİSAYAR', 'ESKİ', 'OYUN', 'BASİT', 'PROGRAM'],
    id: '8LnSq6TvKZYT2MDcFZMbj',
  },
  {
    word: 'MAYTAP',
    forbiddenWords: ['IŞIK', 'KIVILCIM', 'PASTA', 'DOĞUM GÜNÜ', 'YAKMAK'],
    id: 'EaO80JpaEHo4VZdhbvW58',
  },
  {
    word: 'İŞARET DİLİ',
    forbiddenWords: ['SAĞIR', 'KONUŞMAK', 'EL', 'HAREKET', 'İLETİŞİM'],
    id: 'e_xmsTl3qvtHZtrP2Dyd0',
  },
  {
    word: 'TAHTAKALE',
    forbiddenWords: ['İSTANBUL', 'ALIŞVERİŞ', 'ÇARŞI', 'UCUZ', 'EMİNÖNÜ'],
    id: 'mfMRhoGhhO8QGT2vbnkTo',
  },
  {
    word: 'RÖNTGENCİ',
    forbiddenWords: ['DİKİZ', 'GÖZETLEMEK', 'SAPIK', 'GİZLİ', 'BAKMAK'],
    id: 'q76ZXeCxNotfubYkktmfi',
  },
  {
    word: 'KEMAL SUNAL',
    forbiddenWords: ['SİNEMA', 'KOMİK', 'OYUNCU', 'HABABAM SINIFI', 'İNEK ŞABAN'],
    id: '9nN-qEp7mfUApfAG7vEt4',
  },
  {
    word: 'GÖRGÜ TANIĞI',
    forbiddenWords: ['DELİL', 'OLAY', 'MAHKEME', 'ÇAĞIRMAK', 'CİNAYET'],
    id: 'Pyh3an_mFPmuo5W0hb1o-',
  },
  {
    word: 'ULAK',
    forbiddenWords: ['HABER', 'TAŞIMAK', 'GÖTÜRMEK', 'POSTACI', 'AT'],
    id: 'CkfA7qDANeKq1x9M0n4cY',
  },
  {
    word: 'PÖTİBÖR',
    forbiddenWords: ['BİSKÜVİ', 'DİKDÖRTGEN', 'ÇAY', 'TATLI', 'KURABİYE'],
    id: 'I0s95nr8I6u7VXJRXLNda',
  },
  {
    word: 'KAÇIN KURASI',
    forbiddenWords: ['GÖRMEK', 'GEÇİRMEK', 'ALDANMAK', 'UYANIK', 'TECRÜBELİ'],
    id: 'vsT_63TgL5_ck10ErCWYJ',
  },
  {
    word: 'ZIMBA',
    forbiddenWords: ['TUTTURMAK', 'KIRTASİYE', 'TEL', 'DELGEÇ', 'KAĞIT'],
    id: 'oeStUbto_tPp1g8PyB2W3',
  },
  {
    word: 'PASPAL',
    forbiddenWords: ['KOKOŞ', 'DAĞINIK', 'BAKIMSIZ', 'ŞIK', 'GİYİNMEK'],
    id: 'mc01roRuPTGUJY7d7Q2Hh',
  },
  {
    word: 'ÇİZME',
    forbiddenWords: ['AYAKKABI', 'UZUN', 'KADIN', 'ETEK', 'BOT'],
    id: '2vxrbVqb_m3ewoAv6EBJa',
  },
  {
    word: 'DİDİKLEMEK',
    forbiddenWords: ['İNCELEMEK', 'ARAMAK', 'DETAY', 'SORUŞTURMAK', 'PARÇALAMAK'],
    id: 'JlT9Kilh0yRUjb4Fr9iCX',
  },
  {
    word: 'PİYAZ',
    forbiddenWords: ['SALATA', 'KÖFTE', 'KURU FASULYE', 'HAŞLAMAK', 'SOĞAN'],
    id: 'IjVdRe5tGELNDKRD4PWRh',
  },
  {
    word: 'TOMBALA',
    forbiddenWords: ['YILBAŞI', 'OYUN', 'ÇİNKO', 'ÇEKMEK', 'KART'],
    id: 'Pl66d7MIJKnA7HHRIMZqK',
  },
  {
    word: 'METRES',
    forbiddenWords: ['KARI-KOCA', 'EVLİ', 'ALDATMAK', 'YASAK', 'İLİŞKİ'],
    id: 'yZkG0k-UfqRsHAJnNp076',
  },
  {
    word: 'KISA FİLM',
    forbiddenWords: ['SİNEMA', 'UZUN', 'FESTİVAL', 'DAKİKA', 'YÖNETMEN'],
    id: 'd2vYMEs5ogM_nwsuoYUBr',
  },
  {
    word: 'ÇİFT KAŞARLI',
    forbiddenWords: ['TOST', 'YEMEK', 'PEYNİR', 'UZAMAK', 'SUCUK'],
    id: 'nxl0PPU_DrJoswfYzV_FE',
  },
  {
    word: 'KOSTA RİKA',
    forbiddenWords: ['ÜLKE', 'AMERİKA', 'ORTA', 'PANAMA', 'OKYANUS'],
    id: 'R02p0eb79F1EUl01GpNEr',
  },
  {
    word: 'DAZLAK',
    forbiddenWords: ['KEL', 'SAÇ', 'DÖKÜLMEK', 'NEO-NAZİ', 'KAZITMAK'],
    id: 'yepRobzxwotJWo4Ar3QWI',
  },
  {
    word: 'LODOS',
    forbiddenWords: ['RÜZGAR', 'POYRAZ', 'ESMEK', 'DENİZ', 'KARAYEL'],
    id: 'irrtN7UGC15rgceE1rU-a',
  },
  {
    word: 'TAC MAHAL',
    forbiddenWords: ['HİNDİSTAN', 'TARİHİ', 'SARAY', 'BİNA', 'KUBBE'],
    id: 'w2Escn2NnHP4MiiO-Xsrd',
  },
  {
    word: 'KOLAJ',
    forbiddenWords: ['RESİM', 'BİRLEŞTİRMEK', 'KAĞIT', 'KESMEK', 'YAPIŞTIRMAK'],
    id: 'zYWSkbaE_WkdpwQU-Yek9',
  },
  {
    word: 'MANAVGAT ŞELALESİ',
    forbiddenWords: ['DÖKÜLMEK', 'ANTALYA', 'SU', 'AKMAK', 'NEHİR'],
    id: 'NO7dd6YzINRAUIXc-GQsP',
  },
  {
    word: 'ANTONI GAUDI',
    forbiddenWords: ['MİMAR', 'İSPANYA', 'BARCELONA', 'SAGRADA FAMILIA', 'TASARIM'],
    id: 'S1H4yp1F0-HKtZowu7HEa',
  },
  {
    word: 'KEKLİK',
    forbiddenWords: ['HAYVAN', 'KUŞ', 'AVLAMAK', 'GÜVERCİN', 'VURMAK'],
    id: 'r30fp00NJatEbdfhgnz9N',
  },
  {
    word: 'ERZAK',
    forbiddenWords: ['YİYECEK', 'YOLCULUK', 'SAKLAMAK', 'KONSERVE', 'KİLER'],
    id: 'MNuIUZU538J3JXQa7jPdP',
  },
  {
    word: 'TANTANA',
    forbiddenWords: ['ŞAMATA', 'GÜRÜLTÜ', 'OLAY', 'GÖRKEMLİ', 'ŞAŞAALI'],
    id: 'lHw0BIj424RyCETOz4kBs',
  },
  {
    word: 'SELEKTÖR',
    forbiddenWords: ['ARABA', 'FAR', 'IŞIK', 'YAKMAK', 'UYARMAK'],
    id: 'tuNzOCRuqDDv-vFwTMOhc',
  },
  {
    word: 'ALIN TERİ',
    forbiddenWords: ['ÇALIŞMAK', 'EMEK', 'DÖKMEK', 'ZAHMET', 'UĞRAŞMAK'],
    id: '_Bs0wGPL2JO1UtHD04o9c',
  },
  {
    word: 'ADAM ASMACA',
    forbiddenWords: ['OYUN', 'KELİME', 'BULMAK', 'ÇİZMEK', 'HARF'],
    id: 'a_ovtr5N0MOASVeFB1pFw',
  },
  {
    word: 'SEMİNER',
    forbiddenWords: ['KONUŞMA', 'SUNUM', 'KONFERANS', 'EĞİTİM', 'TOPLANTI'],
    id: 'CjbqWO2LA0mIO8BCGX_xm',
  },
  {
    word: 'ELİPS',
    forbiddenWords: ['ŞEKİL', 'YUVARLAK', 'DAİRE', 'DÜNYA', 'ÇEMBER'],
    id: 'k56FKejMsQl_d9ZIed-vY',
  },
  {
    word: 'BASAMAK',
    forbiddenWords: ['MERDİVEN', 'ÇIKMAK', 'ASANSÖR', 'KULLANMAK', 'AŞAMA'],
    id: '-7KbAI4Nvwo0VCy-6jbts',
  },
  {
    word: 'KAVŞAK',
    forbiddenWords: ['DÖRT YOL', 'ARABA', 'KESİŞMEK', 'BİRLEŞMEK', 'DÖNMEK'],
    id: 'pV36zU2B4XSO6q3qFyW8q',
  },
  {
    word: 'ALTYAZI',
    forbiddenWords: ['SİNEMA', 'ÇEVİRİ', 'FİLM', 'DUBLAJ', 'İNGİLİZCE'],
    id: 'ZnrRDGXmAGjjwH158zN32',
  },
  {
    word: 'ALATURKA',
    forbiddenWords: ['ALAFRANGA', 'MÜZİK', 'ESKİ', 'GELENEK', 'TUVALET'],
    id: 'fF5641Dtc192XSxecw66B',
  },
  {
    word: 'KANAVİÇE',
    forbiddenWords: ['ELİŞİ', 'KASNAK', 'İPLİK', 'İĞNE', 'BEZ'],
    id: 'TBHvPv8rGGyKsarWisYaD',
  },
  {
    word: 'DİSPANSER',
    forbiddenWords: ['HASTANE', 'DOKTOR', 'VEREM', 'SAĞLIK OCAĞI', 'POLİKLİNİK'],
    id: 'KqtCTtfxRQpqtsfNPbTtt',
  },
  {
    word: 'CİNSİYET',
    forbiddenWords: ['KADIN', 'ERKEK', 'DİŞİ', 'DOĞMAK', 'KİMLİK'],
    id: 'rflnPIHNr_Eb-b0zVXPu7',
  },
  {
    word: 'LORD',
    forbiddenWords: ['LEYDİ', 'BARON', 'UNVAN', 'İNGİLTERE', 'ASALET'],
    id: 'IyDnUvov-vLDZTZ_bo2gH',
  },
  {
    word: 'REZERV',
    forbiddenWords: ['PETROL', 'SAKLAMAK', 'YEDEK', 'BİRİKTİRMEK', 'DÖVİZ'],
    id: 't7lGi7RIVe_z0l1GCrLSk',
  },
  {
    word: 'VİCDAN AZABI',
    forbiddenWords: ['ÇEKMEK', 'DUYMAK', 'ÜZÜLMEK', 'ACI', 'KÖTÜ'],
    id: 'UuA6vYTU5kQA7ie2fQSiT',
  },
  {
    word: 'DOMİNO',
    forbiddenWords: ['TAŞ', 'OYUN', 'DEVİRMEK', 'DİKDÖRTGEN', 'NOKTA'],
    id: 'T3VW-nD-JA5D2hL2a2Oi2',
  },
  {
    word: 'PİLATES',
    forbiddenWords: ['SPOR', 'EGZERSİZ', 'TOP', 'YOGA', 'ESNETMEK'],
    id: 'xQ0P_fJH5MAR_dQoGcl47',
  },
  {
    word: 'ZIRH',
    forbiddenWords: ['ŞÖVALYE', 'KORUMAK', 'SAVAŞ', 'METAL', 'GİYMEK'],
    id: '1my2P_Mv5Bx9yzIhOLkLQ',
  },
  {
    word: 'GO-KART',
    forbiddenWords: ['KÜÇÜK', 'FORMULA 1', 'MOTOR', 'YARIŞ', 'PİST'],
    id: 'w3dUkziq1AWxRkh7Vqtwl',
  },
  {
    word: 'SABAN',
    forbiddenWords: ['TARLA', 'SÜRMEK', 'ÇİFTÇİ', 'TARIM', 'HAYVAN'],
    id: 'QarJ2N14rhDh9mcc2a_GB',
  },
  {
    word: 'KAVUK',
    forbiddenWords: ['OSMANLI', 'SARIK', 'BAŞLIK', 'ŞAPKA', 'PADİŞAH'],
    id: 'U7ikmUiLVOGBAZcOUH5SS',
  },
  {
    word: 'TIRIS',
    forbiddenWords: ['AT', 'YÜRÜMEK', 'DÖRTNALA', 'HIZLI', 'VIZ GELMEK'],
    id: 'W_BSwMaLf9a9o86djJDoe',
  },
  {
    word: 'GICIRTI',
    forbiddenWords: ['SES', 'KAPI', 'YAĞLAMAK', 'TAHTA', 'PAS'],
    id: 'oxIpRxfuwpU8GR-ipHjZ3',
  },
  {
    word: 'KONFORLU',
    forbiddenWords: ['RAHAT', 'DÖŞEMEK', 'MOBİLYA', 'OTEL', 'EV'],
    id: 'k0KuVPQiA05PmHjRgp7KB',
  },
  {
    word: 'AŞAĞI YUKARI',
    forbiddenWords: ['YAKLAŞIK', 'TAHMİNİ', 'TAM', 'İNMEK', 'ÇIKMAK'],
    id: 'ahGdo2wcy8axEDogTojjO',
  },
]);

export default WORDS;
