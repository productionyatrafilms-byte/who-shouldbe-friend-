/*
 * data.js - every piece of visible text on the site, in three languages.
 *   en = English (from Figma)   hi = Hindi   gj = Gujarati
 * Hindi and Gujarati were translated by Claude and need a native-speaker review.
 *
 * Structure
 *   every text is a plain string per language. A "\n" inside a string starts a new line (use it only where you want a break).
 *   titles            : the LAST WORD of a title is shown in the yellow accent colour automatically
 *   slides            : { image: path under assets/images (or null = slide is skipped), text: {en, hi, gj} }
 * To add a slide, put the image in its folder and add an entry here.
 */
var SITE_DATA = {
  languages: {
    en: "English",
    hi: "Hindi",
    gj: "Gujarati",
  },

  nav: {
    who: {
      en: "Who Should\nBe Your Friend?",
      hi: "आपका दोस्त\nकौन होना चाहिए?",
      gj: "તમારો મિત્ર\nકોણ હોવો જોઈએ?",
    },
    types: {
      en: "Different\ntypes of Friends",
      hi: "विभिन्न प्रकार\nके मित्र ",
      gj: "વિવિધ પ્રકારના\nમિત્રો",
    },
    virtues: {
      en: "Virtues of\na Friend",
      hi: "मित्र के\nगुण",
      gj: "મિત્રના\nગુણો",
    },
  },

  index: {
    title: {
      en: "Who Should\nBe Your \nFriend?",
      hi: "आपका दोस्त\nकौन होना \nचाहिए?",
      gj: "તમારો મિત્ર\nકોણ હોવો \nજોઈએ?",
    },
  },
  who: {
    title: {
      en: "Who Should\nBe Your Friend?",
      hi: "आपका दोस्त\nकौन होना चाहिए?",
      gj: "તમારો મિત્ર\nકોણ હોવો જોઈએ?",
    },
    image: "who/1.jpg",
    text: {
      en: "We are shaped by the company we keep. When we are surrounded by good company, we thrive in all areas of life, while bad company leads to failure",
      hi: "हमारा जीवन हमारी संगति से आकार लेता है। जब हम अच्छी संगति में रहते हैं, तो जीवन के सभी क्षेत्रों में प्रगति करते हैं, जबकि बुरी संगति असफलता की ओर ले जाती है।",
      gj: "આપણા જીવનને આપણી સંગત આકાર આપે છે. જ્યારે આપણે સારી સંગતમાં રહીએ છીએ, ત્યારે જીવનના તમામ ક્ષેત્રોમાં પ્રગતિ કરીએ છીએ, જ્યારે ખરાબ સંગત નિષ્ફળતા તરફ દોરી જાય છે.",
    },
  },
  types: {
    listTitle: {
      en: "Different types of Friends",
      hi: "विभिन्न प्रकार के मित्र ",
      gj: "વિવિધ પ્રકારના મિત્રો",
    },
    items: [
      {
        id: "service",
        title: {
          en: "Service Loving Friend",
          hi: "सेवा प्रेमी मित्र",
          gj: "સેવા પ્રેમી મિત્ર",
        },
        label: {
          en: "Service Loving Friend",
          hi: "सेवा प्रेमी मित्र",
          gj: "સેવા પ્રેમી મિત્ર",
        },

        slides: [
          {
            image: "types/service/1.jpg",
            text: {
              en: "One who never gets tired of doing Seva ( service)",
              hi: "ऐसा मित्र, जो कभी भी दूसरों की सेवा करते नहीं थकता।",
              gj: "જે બીજાની સેવા કરવામાં ક્યારેય થાકતો નથી.",
            },
          },
          {
            image: "types/service/2.jpg",
            text: {
              en: "Having such a friend helps us gain similar virtues by being with him.",
              hi: "ऐसा मित्र होने से उसके साथ रहकर हममें भी उसके जैसे गुण विकसित होते हैं।",
              gj: "આવા મિત્રની સાથે રહેવાથી આપણામાં પણ તેના જેવા ગુણો વિકસે છે.",
            },
          },
        ],
      },

      {
        id: "virtue",
        title: {
          en: "Virtue Loving Friend",
          hi: "संस्कार प्रेमी मित्र",
          gj: "સંસ્કાર પ્રેમી મિત્ર",
        },
        label: {
          en: "Virtue Loving Friend",
          hi: "संस्कार प्रेमी मित्र",
          gj: "સંસ્કાર પ્રેમી મિત્ર",
        },
        slides: [
          {
            image: "types/virtue/1.png",
            text: {
              en: "One who loves virtues and also applies them in his\nlife is a good friend.",
              hi: "जो सद्गुणों से प्रेम करता है और उन्हें अपने जीवन में अपनाता है, वही एक अच्छा मित्र है।",
              gj: "જેને સદ્ગુણો પ્રત્યે પ્રેમ છે અને તેને પોતાના જીવનમાં અપનાવે છે, તે જ એક સારો મિત્ર છે.",
            },
          },
          {
            image: "types/virtue/2.png",
            text: {
              en: "A true friend is one who helps their friend become better",
              hi: "एक सच्चा मित्र वह होता है जो अपने मित्र को भी बेहतर बनने में मदद करता है",
              gj: "સાચો મિત્ર તે છે જે પોતાના મિત્રને વધુ સારા બનવામાં મદદ કરે છે",
            },
          },
        ],
      },

      {
        id: "satsang",
        title: {
          en: "Satsang loving friend",
          hi: "सत्संग प्रेमी मित्र",
          gj: "સત્સંગ પ્રેમી મિત્ર",
        },
        label: {
          en: "Satsang loving friend",
          hi: "सत्संग प्रेमी मित्र",
          gj: "સત્સંગ પ્રેમી મિત્ર",
        },
        slides: [
          {
            image: "types/satsang/1.jpg",
            text: {
              en: "Satsang means going to\nSadhu - Sadhviji Bhagwant\nand understanding new concepts or listening to\nthe teachings of Jainism.",
              hi: "सत्संग का अर्थ है साधु-साध्वीजी भगवंत के पास जाना और नई बातें समझना या जैन धर्म की शिक्षाएँ सुनना।",
              gj: "સત્સંગ એટલે સાધુ-સાધ્વીજી ભગવંત પાસે જવું અને નવી વાતો સમજવી અથવા જૈન ધર્મના ઉપદેશો સાંભળવા.",
            },
          },
          {
            image: "types/satsang/2.jpg",
            text: {
              en: "Satsang can change our life to a great extent.",
              hi: "सत्संग हमारे जीवन को बहुत हद तक बदल सकता है।",
              gj: "સત્સંગ આપણા જીવનને ઘણા અંશે બદલી શકે છે.",
            },
          },
          {
            image: "types/satsang/3.jpg",
            text: {
              en: "Satsang helps us to reduce our anger, stubbornness, increase our patience, humility etc.",
              hi: "सत्संग हमें क्रोध और हठ कम करने तथा धैर्य, नम्रता आदि बढ़ाने में मदद करता है।",
              gj: "સત્સંગ આપણને ગુસ્સો અને જીદ ઘટાડવામાં તથા ધીરજ, નમ્રતા વગેરે વધારવામાં મદદ કરે છે.",
            },
          },
          {
            image: "types/satsang/4.jpg",
            text: {
              en: "Sadhu - Sadhviji Bhagwant's are our Soul's doctor. Their teaching helps us a lot to become happy in our life.",
              hi: "साधु-साध्वीजी भगवंत हमारी आत्मा के चिकित्सक हैं। उनकी शिक्षा हमें जीवन में सुखी होने में बहुत सहायता करती है।",
              gj: "સાધુ-સાધ્વીજી ભગવંતો આપણા આત્માના ડૉક્ટર છે. તેમનો ઉપદેશ આપણને જીવનમાં સુખી થવામાં ઘણી મદદ કરે છે.",
            },
          },
          {
            image: "types/satsang/5.jpg",
            text: {
              en: "We should not be afraid to go near them.",
              hi: "हमें उनके पास जाने से डरना नहीं चाहिए।",
              gj: "આપણે તેમની પાસે જવાથી ડરવું ન જોઈએ.",
            },
          },
          {
            image: "types/satsang/6.jpg",
            text: {
              en: "We should choose such friends who like Satsang.",
              hi: "हमें ऐसे मित्र चुनने चाहिए जिन्हें सत्संग पसंद हो।",
              gj: "આપણે એવા મિત્રો પસંદ કરવા જોઈએ જેમને સત્સંગ ગમતો હોય.",
            },
          },
        ],
      },
      {
        id: "purity",
        title: {
          en: "Purity Loving Friend",
          hi: "पवित्रता प्रेमी मित्र",
          gj: "પવિત્રતા પ્રેમી મિત્ર",
        },
        label: {
          en: "Purity Loving Friend",
          hi: "पवित्रता प्रेमी मित्र",
          gj: "પવિત્રતા પ્રેમી મિત્ર",
        },
        slides: [
          {
            image: "types/purity/1.jpg",
            text: {
              en: "A pure friend is one whose hands, tongue and eyes are pure.",
              hi: "पवित्र मित्र वह होता है, जिसके हाथ, जीभ और आँखें पवित्र हों।",
              gj: "પવિત્ર મિત્ર એ છે જેના હાથ, જીભ અને આંખો પવિત્ર હોય.",
            },
          },
          {
            image: "types/purity/2.jpg",
            text: {
              en: "He never performs any bad activities.",
              hi: "वह कभी भी कोई बुरा कार्य नहीं करता।",
              gj: "તે ક્યારેય કોઈ ખરાબ કાર્ય કરતો નથી.",
            },
          },
          {
            image: "types/purity/3.jpg",
            text: {
              en: "He never speaks foul language.",
              hi: "वह कभी अभद्र भाषा नहीं बोलता।",
              gj: "તે ક્યારેય અભદ્ર ભાષા બોલતો નથી.",
            },
          },
          {
            image: "types/purity/4.jpg",
            text: {
              en: "He never misbehaves with a person of the opposite gender and does not watch inappropriate content on TV or mobile devices.",
              hi: "वह कभी विपरीत लिंग के व्यक्ति के साथ अनुचित व्यवहार नहीं करता और टीवी या मोबाइल पर अनुचित सामग्री नहीं देखता।",
              gj: "તે ક્યારેય વિજાતીય વ્યક્તિ સાથે અયોગ્ય વર્તન કરતો નથી અને ટીવી કે મોબાઇલ પર અયોગ્ય સામગ્રી જોતો નથી.",
            },
          },
          {
            image: "types/purity/5.jpg",
            text: {
              en: "Purity means purity of thoughts, words and behaviour.",
              hi: "पवित्रता का अर्थ है विचारों, शब्दों और व्यवहार की शुद्धता।",
              gj: "પવિત્રતા એટલે વિચારો, શબ્દો અને વર્તનની શુદ્ધતા.",
            },
          },
          {
            image: "types/purity/6.jpg",
            text: {
              en: "Purity helps us to bind Punya and achieve success in life.",
              hi: "पवित्रता हमें पुण्य बाँधने और जीवन में सफलता प्राप्त करने में मदद करती है।",
              gj: "પવિત્રતા આપણને પુણ્ય બાંધવામાં અને જીવનમાં સફળતા પ્રાપ્ત કરવામાં મદદ કરે છે.",
            },
          },
          {
            image: "types/purity/7.jpg",
            text: {
              en: "He is free from all bad habits and addictions.",
              hi: "वह सभी बुरी आदतों और व्यसनों से मुक्त रहता है।",
              gj: "તે તમામ ખરાબ આદતો અને વ્યસનોથી મુક્ત રહે છે.",
            },
          },
        ],
      },
    ],
  },

  virtues: {
    title: {
      en: "Virtues of a Friend",
      hi: "मित्र के गुण",
      gj: "મિત્રના ગુણો",
    },
    slides: [
      {
        image: "virtues/1.png",
        text: {
          en: "Honest",
          hi: "ईमानदार",
          gj: "પ્રમાણિક",
        },
      },
      {
        image: "virtues/2.png",
        text: {
          en: "Kind",
          hi: "दयालु",
          gj: "દયાળુ",
        },
      },
      {
        image: "virtues/3.png",
        text: {
          en: "Caring",
          hi: "देखभाल करने वाला",
          gj: "કાળજી રાખનાર",
        },
      },
      {
        image: "virtues/4.png",
        text: {
          en: "Mutual understanding",
          hi: "आपसी समझ रखने वाला",
          gj: "પરસ્પર સમજણ ધરાવનાર",
        },
      },
      {
        image: "virtues/5.png",
        text: {
          en: "Truthful",
          hi: "सत्यवादी",
          gj: "સત્યવાદી",
        },
      },
      {
        image: "virtues/6.png",
        text: {
          en: "Loyal",
          hi: "वफादार",
          gj: "વફાદાર",
        },
      },
      {
        image: "virtues/7.png",
        text: {
          en: "Generous",
          hi: "उदार",
          gj: "ઉદાર",
        },
      },
      {
        image: "virtues/8.png",
        text: {
          en: "Compassion",
          hi: "करुणामय",
          gj: "કરુણામય",
        },
      },
      {
        image: "virtues/9.png",
        text: {
          en: "Forgiving",
          hi: "क्षमाशील",
          gj: "ક્ષમાશીલ",
        },
      },
      {
        image: "virtues/10.png",
        text: {
          en: "Helpful",
          hi: "मददगार",
          gj: "મદદરૂપ",
        },
      },
      {
        image: "virtues/11.png",
        text: {
          en: "Cooperative",
          hi: "सहयोगी",
          gj: "સહયોગી",
        },
      },
      {
        image: "virtues/12.png",
        text: {
          en: "Selfless",
          hi: "निःस्वार्थ",
          gj: "નિઃસ્વાર્થ",
        },
      },
      {
        image: "virtues/13.png",
        text: {
          en: "Supportive / Motivating",
          hi: "सहयोग देने वाला / प्रेरित करने वाला",
          gj: "સહાયક / પ્રેરણા આપનાર",
        },
      },
    ],
  },
  pranam: {
    title: {
      en: "Pranam",
      hi: "प्रणाम",
      gj: "પ્રણામ",
    },
    home: {
      en: "HOME",
      hi: "होम",
      gj: "હોમ",
    },
  },
};
