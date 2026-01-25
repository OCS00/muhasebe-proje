import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

export async function GET() {
  const parser = new Parser();

  try {
    // BURAYA İSTEDİĞİN RSS ADRESİNİ YAZABİLİRSİN
    // Örnek: MuhasebeTR veya popüler bir ekonomi kaynağı
    // Not: Bazı siteler RSS erişimine izin vermeyebilir, çalışan bir kaynak bulmak lazım.
    // Şimdilik örnek olarak bir RSS kullanıyorum.
    
    const feed = await parser.parseURL('https://www.muhasebetr.com/rss/rss.xml'); 

    // Gelen veriyi temizleyip sadece ihtiyacımız olanı alalım (İlk 6 haber)
    const news = feed.items.slice(0, 6).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      content: item.contentSnippet || item.content || "",
      source: "MuhasebeTR" // Kaynak adı
    }));

    return NextResponse.json({ success: true, data: news });

  } catch (error) {
    console.error('RSS Hatası:', error);
    return NextResponse.json({ success: false, error: 'Haberler çekilemedi.' }, { status: 500 });
  }
}