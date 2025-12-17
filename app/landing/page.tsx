'use client';

import { Bird, MessageCircle, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                <Bird className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-2xl font-serif tracking-wide text-gray-800">WeddingTips.ID</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Bird className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-8 leading-tight">
            Rencanakan Pernikahan dengan<br />
            <span className="italic">Lebih Tenang</span> dan <span className="italic">Sistematis</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Merencanakan pernikahan sering terasa membingungkan. Banyak pilihan, banyak saran, dan sering kali sulit menentukan harus mulai dari mana.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            WeddingTips.id hadir untuk membantu Anda mendapatkan gambaran yang lebih jelas sejak awal—tanpa tekanan, tanpa terburu-buru, dan tanpa rasa "takut salah pilih".
          </p>
          
          {/* Decorative Divider */}
          <div className="flex justify-center items-center space-x-6 mt-20">
            <div className="w-20 h-px bg-gray-300"></div>
            <Bird className="w-6 h-6 text-gray-400" />
            <div className="w-20 h-px bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Start with Conversation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Mulai dari Percakapan yang Sederhana
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Sebelum berbicara soal detail teknis, anggaran besar, atau vendor, yang Anda butuhkan adalah <span className="font-medium text-gray-800">arah yang jelas</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 p-10">
              <div className="w-16 h-16 border border-gray-300 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-6">Kenali Wianda</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Di WeddingTips.id, Anda bisa memulai dengan berbincang bersama <span className="font-medium text-gray-800">Wianda</span>, Konsultan Pernikahan AI kami, yang akan membantu Anda:
              </p>
              <ul className="space-y-4">
                {[
                  'Memahami gambaran umum pernikahan',
                  'Menjawab pertanyaan dasar dengan bahasa yang mudah dipahami',
                  'Membantu Anda fokus pada keputusan penting sejak awal'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Semua dimulai dari percakapan ringan, bukan komitmen.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-8">
                <p className="text-gray-600 font-light italic">
                  "Wianda membantu kami memahami dari mana harus mulai. Tidak ada tekanan, hanya arahan yang jelas."
                </p>
                <p className="text-gray-500 text-sm mt-4 font-light">— Pasangan dari Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Couples Confused Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Kenapa Banyak Pasangan Bingung di Awal?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Karena terlalu banyak keputusan harus diambil dalam waktu bersamaan:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { question: 'Berapa biaya yang realistis?', icon: '💰' },
              { question: 'Berapa jumlah tamu yang ideal?', icon: '👥' },
              { question: 'Harus pilih venue atau vendor dulu?', icon: '🏛️' },
              { question: 'Mana yang benar-benar penting, mana yang bisa disederhanakan?', icon: '🤔' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8">
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-gray-700 font-light text-lg">{item.question}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 font-light">
              Wianda membantu menyusun ulang semua itu agar terasa lebih rapi dan masuk akal.
            </p>
          </div>
        </div>
      </section>

      {/* Venue Focus Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <MapPin className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Fokus ke Venue, Agar Semua Lebih Jelas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Berdasarkan pengalaman kami, <span className="font-medium text-gray-800">venue adalah kunci awal perencanaan pernikahan</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Calendar, text: 'Ketersediaan tanggal' },
              { icon: Users, text: 'Kapasitas tamu' },
              { icon: MapPin, text: 'Alur acara' },
              { icon: CheckCircle, text: 'Porsi terbesar anggaran' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border border-gray-300 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-gray-600 font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Karena itu, Wianda akan sering mengarahkan pembicaraan ke topik venue—bukan untuk memaksa, tetapi agar perencanaan Anda tidak melenceng sejak awal.
            </p>
          </div>
        </div>
      </section>

      {/* AI with Human Touch Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Didampingi AI, Tetap dengan Sentuhan Manusia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 p-10">
              <h3 className="text-xl font-serif text-gray-800 mb-6">Wianda Membantu di Tahap Awal:</h3>
              <ul className="space-y-4">
                {[
                  'Menjawab dengan tenang',
                  'Memberi gambaran umum',
                  'Mengurangi kebingungan'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <h3 className="text-xl font-serif text-gray-800 mb-6">Lanjut ke Konsultan Profesional:</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-4">
                Ketika diskusi sudah mulai detail, Wianda akan dengan alami mengarahkan Anda untuk berbincang langsung dengan <span className="font-medium text-gray-800">konsultan acara pernikahan kami</span>, agar perhitungannya lebih akurat dan sesuai kondisi Anda.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                Anda tidak akan dibiarkan berjalan sendiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Cocok untuk Pasangan Kelas Menengah di Jabodetabek
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
            Saat ini, WeddingTips.id fokus membantu perencanaan pernikahan di area <span className="font-medium text-gray-800">Jabodetabek</span>, khususnya untuk pemilihan venue dan penyusunan rencana acara secara menyeluruh.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Pendekatan ini membuat kami bisa memberikan pendampingan yang lebih fokus dan relevan.
          </p>
        </div>
      </section>

      {/* No Obligation Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Tidak Ada Kewajiban, Tidak Ada Tekanan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light mb-12">
              Berbicara dengan Wianda tidak berarti Anda harus langsung mengambil paket atau membuat keputusan besar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tempat Bertanya', desc: 'Ajukan pertanyaan tanpa ragu' },
              { title: 'Tempat Mencari Kejelasan', desc: 'Pahami pilihan dengan lebih baik' },
              { title: 'Tempat Menenangkan Pikiran', desc: 'Sebelum melangkah lebih jauh' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 text-center">
                <h3 className="text-xl font-serif text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 font-light">
              Jika setelah itu Anda merasa perlu diskusi lanjutan, kami siap membantu.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Bird className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-8">
            Mulai dari Sini
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-12">
            Jika Anda sedang merencanakan pernikahan dan ingin:
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <ul className="space-y-4 text-left">
              {[
                'Mendapat gambaran awal yang lebih jelas',
                'Memahami pilihan venue yang realistis',
                'Menyusun rencana tanpa stres berlebihan'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-light mb-6">
              Silakan mulai percakapan dengan <span className="font-medium text-gray-800">Wianda</span>, Konsultan Pernikahan AI kami.
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-12 py-4 text-lg font-light tracking-wide transition-colors">
              Mulai Percakapan dengan Wianda
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Bird className="w-8 h-8 text-gray-400" />
          </div>
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
              <Bird className="w-3 h-3 text-gray-600" />
            </div>
            <span className="text-2xl font-serif tracking-wide text-gray-800">WeddingTips.ID</span>
          </div>
          <p className="text-gray-500 mb-2 font-light">Produk dari PT AI Indonesia</p>
          <p className="text-gray-400 text-sm font-light max-w-md mx-auto">
            Membantu Anda merencanakan pernikahan dengan lebih tenang, rapi, dan terarah
          </p>
          <div className="mt-12 flex justify-center space-x-6">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
