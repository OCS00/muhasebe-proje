import Parser from 'rss-parser';
import { NextResponse } from 'next/server';
import https from 'https';

export const dynamic = 'force-dynamic'; //

const FEED_URLS = [
  // 1. AloMaliye (En güvenilir kaynak - Limitini artırdık)
  { 
    url: 'https://www.alomaliye.com/feed/', 
    source: 'AloMaliye',
    type: 'standard',
    limit: 6 // Buradan daha çok haber alalım
  },

  // 2. MuhasebeTR (Tamir Modu: Header Temizliği)
  { 
    url: 'https://www.muhasebetr.com/rss/rss.xml', 
    source: 'MuhasebeTR',
    type: 'fix_xml',
    limit: 4
  }
];

export async function GET() {
  const agent = new https.Agent({ rejectUnauthorized: false });
  const parser = new Parser({
    requestOptions: { agent },
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    timeout: 5000
  });

  let news = [];

  for (const feed of FEED_URLS) {
    try {
      let feedData;

      if (feed.type === 'fix_xml') {
        // 🔥 MUHASEBETR TAMİRİ 🔥
        const response = await fetch(feed.url);
        const buffer = await response.arrayBuffer();
        
        // 1. Türkçe karakterleri çöz (Windows-1254)
        const decoder = new TextDecoder('windows-1254'); 
        let xmlString = decoder.decode(buffer);

        // 2. XML Başlığını ve Bozuk Karakterleri SİL
        // "Unclosed root tag" hatasını bu satır çözer:
        xmlString = xmlString.replace(/<\?xml.*?\?>/, ''); 
        
        // Tırnak işaretlerini düzelt
        xmlString = xmlString.replace(/[“”]/g, '"').replace(/[’‘]/g, "'");

        feedData = await parser.parseString(xmlString);

      } else {
        // Standart Siteler (AloMaliye)
        feedData = await parser.parseURL(feed.url);
      }

      if (feedData.items && feedData.items.length > 0) {
        // Her kaynaktan belirlenen limit kadar haber al
        const items = feedData.items.slice(0, feed.limit).map((item) => {
          let cleanContent = item.contentSnippet || item.content || '';
          
          cleanContent = cleanContent
            .replace(/<[^>]*>?/gm, '') 
            .replace(/&nbsp;/g, ' ')
            .replace(/\r\n|\n|\r/g, ' ')
            .trim();

          return {
            title: item.title?.trim(),
            link: item.link,
            pubDate: item.pubDate || new Date().toISOString(),
            content: cleanContent.substring(0, 140) + '...',
            source: feed.source
          };
        });
        
        console.log(`✅ ${feed.source}: ${items.length} haber başarıyla çekildi.`);
        news = [...news, ...items];
      }

    } catch (err) {
      console.error(`⚠️ HATA (${feed.source}):`, err.message);
    }
  }

  // Haberleri tarihe göre sırala
  news.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  
  // Toplam 9-10 haberi siteye bas
  news = news.slice(0, 10);

  if (news.length === 0) {
    return NextResponse.json({ success: false, error: 'Haber bulunamadı.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, data: news });
}