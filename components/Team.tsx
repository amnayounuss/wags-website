'use client';
import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Team() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const team = [
    {
      name: isAr ? "عبد اللطيف" : "Abdul Latif",
      title: t('team.al.title'),
      bio: t('team.al.bio'),
      email: "Aw@wags.sa",
      initials: "AL",
      image: null
    },
    {
      name: isAr ? "هارون حياة" : "Haroon Hayat",
      title: t('team.hh.title'),
      bio: t('team.hh.bio'),
      email: "haroon@wags.sa",
      initials: "HH",
      image: "/haroon-bhai.png"
    },
    {
      name: isAr ? "سيد دانش" : "Syed Danish",
      title: t('team.sd.title'),
      bio: t('team.sd.bio'),
      email: "danish@wags.sa",
      initials: "SD",
      image: "/danish-bhai.png"
    }
  ];

  return (
    <>
      <section id="team" className={`py-[120px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">

          <div className="text-center mb-[80px]">
            <div className="section-label inline-block mb-6 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] text-[#00f0ff] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('team.label')}</div>
            <h2 className={`text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold text-white ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('team.title1')}<span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">{t('team.title2')}</span></h2>
            <p className="text-[18px] text-white/70 leading-[1.6] max-w-[600px] mx-auto">{t('team.sub')}</p>
          </div>

          <div className={`flex flex-wrap justify-center gap-[30px]`}>
            {team.map((member, i) => (
              <div
                key={i}
                className="flex-1 min-w-[280px] max-w-[380px] bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(0,240,255,0.15)] rounded-[24px] p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center text-center hover:-translate-y-2 hover:border-t-[rgba(0,240,255,0.6)] hover:shadow-[0_30px_60px_-10px_rgba(0,240,255,0.15)] hover:bg-[rgba(12,15,25,0.8)] group"
              >

                <div className="w-[90px] h-[90px] rounded-full overflow-hidden bg-white/5 flex items-center justify-center mb-6 border-2 border-[rgba(0,240,255,0.2)] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)]">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} width={90} height={90} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[28px] font-extrabold text-white font-sora">{member.initials}</span>
                  )}
                </div>

                <h3 className={`text-[22px] font-extrabold text-white mb-2 tracking-[-0.02em] ${isAr ? 'font-cairo' : 'font-sora'}`}>{member.name}</h3>
                <div className="text-[13px] font-bold text-[#00f0ff] tracking-[0.05em] uppercase mb-4">{member.title}</div>

                <p className="text-[15px] text-white/60 leading-[1.6] flex-grow mb-6">{member.bio}</p>

                <div className="h-[1px] w-full bg-white/5 mb-6"></div>

                <a href={`mailto:${member.email}`} className={`inline-flex items-center gap-2 text-white/80 text-[14px] font-semibold no-underline transition-colors duration-300 hover:text-white`}>
                  <Mail size={16} strokeWidth={2} />
                  {member.email}
                </a>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
