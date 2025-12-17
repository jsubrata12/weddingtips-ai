'use client';

import { Heart, MapPin, Bot, Phone, Mail, Calendar, Users, Sparkles, Bird } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                <Bird className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-2xl font-serif tracking-wide text-gray-800">WeddingTips.ID</span>
            </div>
            <div className="hidden md:flex space-x-12">
              {['home', 'tentang', 'konsultan-ai', 'hubungi'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    activeSection === section
                      ? 'text-gray-800 font-medium'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {section === 'home' && 'Home'}
                  {section === 'tentang' && 'Tentang'}
                  {section === 'konsultan-ai' && 'Konsultan AI'}
                  {section === 'hubungi' && 'Hubungi'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <Bird className="w-10 h-10 text-gray-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-8 leading-tight">
              Merencanakan Pernikahan dengan<br />
              <span className="italic">Lebih Tenang</span> dan <span className="italic">Terarah</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              WeddingTips.id hadir untuk membantu calon pengantin merencanakan pernikahan dengan cara yang lebih rapi, realistis, dan nyaman.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all group">
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-6 group-hover:border-gray-400 transition-colors">
                <MapPin className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Mulai dari Venue</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Venue adalah salah satu keputusan paling penting. Kami menggunakan pendekatan venue-first agar perencanaan lebih terarah dan efisien.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all group">
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-6 group-hover:border-gray-400 transition-colors">
                <Bot className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">AI & Konsultan Profesional</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Kombinasi teknologi AI dengan pengalaman konsultan acara pernikahan untuk pendampingan yang praktis dan personal.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all group">
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-6 group-hover:border-gray-400 transition-colors">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Fokus Jabodetabek</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Untuk menjaga kualitas pendampingan, saat ini kami fokus membantu pernikahan di area Jabodetabek.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-6 mt-20">
            <div className="w-20 h-px bg-gray-300"></div>
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            <div className="w-20 h-px bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Wedding Image Section */}
      <section className="py-0 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image 1 - Indonesian Couple */}
            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" 
                alt="Indonesian Wedding Couple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <p className="text-sm tracking-widest uppercase mb-2 font-light">Momen Berharga</p>
                <h3 className="text-2xl md:text-3xl font-serif">Pernikahan yang Berkesan</h3>
              </div>
            </div>

            {/* Image 2 - Wedding Details */}
            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80" 
                alt="Wedding Details"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <p className="text-sm tracking-widest uppercase mb-2 font-light">Detail Sempurna</p>
                <h3 className="text-2xl md:text-3xl font-serif">Setiap Momen Terencana</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Bird className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-500 font-light">Pendamping Perencanaan Pernikahan yang Terpercaya</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-base font-light">
                WeddingTips.id adalah platform perencanaan pernikahan yang dirancang untuk membantu calon pengantin mengambil keputusan dengan lebih percaya diri. Kami percaya bahwa pernikahan yang baik dimulai dari perencanaan yang jelas, bukan dari tekanan atau kebingungan.
              </p>
              <p className="text-gray-600 leading-relaxed text-base font-light">
                WeddingTips.id merupakan produk dari <span className="font-medium text-gray-800">PT AI Indonesia</span>, yang menggabungkan pendekatan teknologi dan pengalaman profesional di bidang konsultasi.
              </p>
            </div>

            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-serif text-gray-800 mb-6">Fokus Kami</h3>
              <ul className="space-y-4">
                {[
                  'Menyusun gambaran pernikahan secara realistis',
                  'Mengelola anggaran dengan lebih bijak',
                  'Menghindari keputusan terburu-buru',
                  'Menjalani proses persiapan dengan lebih tenang'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12 text-center">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">
              Lebih dari Sekadar Wedding Organizer
            </h3>
            <p className="text-gray-600 leading-relaxed text-base max-w-3xl mx-auto font-light">
              WeddingTips.id bukan sekadar penyedia jasa acara, tetapi mitra diskusi yang membantu Anda memahami pilihan-pilihan terbaik sejak awal. Kami membantu menyederhanakan proses, tanpa menghilangkan esensi dan makna pernikahan itu sendiri.
            </p>
          </div>
        </div>
      </section>

      {/* AI Consultant Section */}
      <section id="konsultan-ai" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border border-gray-300 flex items-center justify-center">
                <Bot className="w-8 h-8 text-gray-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              Kenali Wianda
            </h2>
            <p className="text-lg text-gray-500 font-light">Konsultan Pernikahan AI Anda</p>
          </div>

          <div className="bg-white border border-gray-200 p-10 md:p-16">
            <p className="text-gray-600 leading-relaxed text-base mb-12 font-light text-center max-w-3xl mx-auto">
              Wianda adalah Konsultan AI di WeddingTips.id yang siap menemani Anda di tahap awal perencanaan pernikahan. Wianda dirancang untuk menjawab berbagai pertanyaan seputar pernikahan dengan cara yang sederhana, jelas, dan menenangkan.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-serif text-gray-800 mb-6">Wianda Membantu Anda:</h3>
                <ul className="space-y-4">
                  {[
                    'Gambaran umum biaya pernikahan',
                    'Tahapan persiapan yang ideal',
                    'Hal-hal penting yang sering terlewat',
                    'Pentingnya pemilihan venue sejak awal'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-600 text-xs">{index + 1}</span>
                      </div>
                      <span className="text-gray-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l border-gray-200 pl-12">
                <h3 className="text-xl font-serif text-gray-800 mb-6">
                  Pendamping Awal, Bukan Pengganti
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 font-light">
                  Wianda berperan sebagai pendamping awal untuk membantu Anda mendapatkan gambaran yang lebih jelas sebelum masuk ke diskusi yang lebih detail.
                </p>
                <p className="text-gray-600 leading-relaxed font-light">
                  Untuk pembahasan yang lebih spesifik dan mendalam, Wianda akan mengarahkan Anda untuk berdiskusi langsung dengan konsultan acara pernikahan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Venue Image Section */}
      <section className="py-0 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[600px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-gray-900/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80" 
              alt="Beautiful Wedding Venue"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
              <Bird className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-3xl md:text-5xl font-serif text-center mb-4">Venue Impian Anda</h3>
              <p className="text-base md:text-lg font-light max-w-2xl text-center opacity-90">
                Kami membantu Anda menemukan dan merencanakan venue yang sempurna untuk hari istimewa Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="hubungi" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Bird className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              Hubungi Kami
            </h2>
            <p className="text-lg text-gray-500 font-light">Mulai Diskusi dengan Lebih Santai</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-gray-200 p-10">
              <h3 className="text-xl font-serif text-gray-800 mb-6">Langkah Selanjutnya</h3>
              <p className="text-gray-600 leading-relaxed mb-8 font-light">
                Jika Anda sedang merencanakan pernikahan dan ingin mendapatkan gambaran awal yang lebih jelas, silakan hubungi kami untuk:
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Calendar, text: 'Konsultasi awal perencanaan pernikahan' },
                  { icon: MapPin, text: 'Diskusi pemilihan venue' },
                  { icon: Users, text: 'Penyusunan gambaran anggaran' },
                  { icon: Phone, text: 'Penjadwalan sesi konsultasi lanjutan' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-light">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 border border-gray-300 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-800">WhatsApp</h4>
                    <p className="text-sm text-gray-500 font-light">Konsultasi dengan AI Wianda</p>
                  </div>
                </div>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-light py-3 tracking-wide transition-colors">
                  Chat via WhatsApp
                </button>
              </div>

              <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 border border-gray-300 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-800">Email</h4>
                    <p className="text-sm text-gray-500 font-light">Diskusi dengan konsultan profesional</p>
                  </div>
                </div>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-light py-3 tracking-wide transition-colors">
                  Kirim Email
                </button>
              </div>

              <div className="border border-gray-200 p-6 text-center">
                <MapPin className="w-6 h-6 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-800 font-medium">Area Layanan</p>
                <p className="text-gray-500 text-sm mt-1 font-light">Jabodetabek</p>
              </div>
            </div>
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
