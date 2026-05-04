import { createContext, useContext, useState } from 'react';

const translations = {
  zh: {
    nav: {
      home: 'Home',
      about: '關於我',
      guestbook: '留言板',
    },
    hero: {
      eyebrow: '手工鋼管車 · 自造者精神',
      subtitle: '五台手工鋼管車，五段旅程',
    },
    bikeGrid: {
      title: '我的車庫',
      error: '載入失敗',
    },
    bikeDetail: {
      notFound: '找不到這台車',
      gallery: '圖庫',
      specs: '規格',
      buildTimeline: '組裝歷程',
      highlights: '特色亮點',
      ridingStyle: '騎乘風格',
      seoSuffix: '義大利手工鋼管公路車',
    },
    about: {
      title: '關於我',
      seoTitle: '關於我',
      seoDesc: '義大利鋼管公路車收藏家 Vincent，迷戀每一條焊縫背後的工藝哲學。',
      bio: '從第一道焊縫開始，我就知道這不只是造車——是在鋼管與火花之間尋找自己的語言。每一台鋼管車都是一段故事，從設計圖到路上奔馳，都是手工打造。',
    },
    guestbook: {
      title: '留言板',
      sub: '留下你的名字與話語',
      labelName: '名字',
      placeholderName: '你的名字',
      labelMessage: '留言',
      placeholderMessage: '寫下你想說的...',
      submitting: '送出中...',
      submit: '送出留言',
      success: '留言成功！',
      error: '送出失敗，請再試一次',
      loading: '載入中...',
      empty: '還沒有留言，成為第一個留言的人吧！',
      seoTitle: '留言板',
      seoDesc: '留下你對 Steel & Soul 的話語，與義大利鋼管公路車愛好者交流。',
    },
    notFound: {
      msg: '這頁不存在',
      back: '回首頁',
    },
    home: {
      seoDesc: '五台義大利手工鋼管公路車的故事：Colnago Bititan、Colnago Master、Eddy Merckx MXL、MASI 3V Volumetrica、Pegoretti BLE。工藝、歷史與騎乘風格。',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      guestbook: 'Guestbook',
    },
    hero: {
      eyebrow: 'Handmade Steel Bikes · Builder\'s Spirit',
      subtitle: 'Five Steel Bikes, Five Journeys',
    },
    bikeGrid: {
      title: 'My Garage',
      error: 'Failed to load',
    },
    bikeDetail: {
      notFound: 'Bike not found',
      gallery: 'Gallery',
      specs: 'Specs',
      buildTimeline: 'Build Timeline',
      highlights: 'Highlights',
      ridingStyle: 'Riding Style',
      seoSuffix: 'Italian handmade steel road bike',
    },
    about: {
      title: 'About Me',
      seoTitle: 'About Me',
      seoDesc: 'Vincent — collector of Italian steel road bikes, fascinated by the craft philosophy behind every weld.',
      bio: 'From the first weld, I knew this was more than building bikes — it\'s finding my own language in steel tubes and sparks. Every steel bike is a story, from blueprint to the open road, all made by hand.',
    },
    guestbook: {
      title: 'Guestbook',
      sub: 'Leave your name and a message',
      labelName: 'Name',
      placeholderName: 'Your name',
      labelMessage: 'Message',
      placeholderMessage: 'Write what you want to say...',
      submitting: 'Sending...',
      submit: 'Submit',
      success: 'Message sent!',
      error: 'Failed to send, please try again',
      loading: 'Loading...',
      empty: 'No messages yet. Be the first!',
      seoTitle: 'Guestbook',
      seoDesc: 'Leave a message for Steel & Soul and connect with Italian steel road bike enthusiasts.',
    },
    notFound: {
      msg: 'Page not found',
      back: 'Back to Home',
    },
    home: {
      seoDesc: 'Five Italian handmade steel road bikes: Colnago Bititan, Colnago Master, Eddy Merckx MXL, MASI 3V Volumetrica, Pegoretti BLE. Craftsmanship, history, and riding style.',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('zh');
  const t = translations[lang];
  const toggle = () => setLang(l => l === 'zh' ? 'en' : 'zh');

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
