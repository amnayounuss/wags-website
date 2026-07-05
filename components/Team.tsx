'use client';
import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Team() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const team = [
    {
      name: isAr ? "عبد اللطيف الوشيقري" : "Abdullatif Alwshigry",
      title: t('team.al.title'),
      bio: t('team.al.bio'),
      email: "Aw@wags.sa",
      linkedin: "http://linkedin.com/in/abdullatif-alwshigry-msc-ba77a646/",
      initials: "AL",
      image: "/Abdullatif-Alwshigry.jpg"
    },
    {
      name: isAr ? "هارون حياة" : "Haroon Hayat",
      title: t('team.hh.title'),
      bio: t('team.hh.bio'),
      email: "haroon@wags.sa",
      linkedin: "https://www.linkedin.com/in/malikharoon-odoo/",
      initials: "HH",
      image: "/haroon-bhai.png"
    },
    {
      name: isAr ? "سيد دانش" : "Syed Danish",
      title: t('team.sd.title'),
      bio: t('team.sd.bio'),
      email: "danish@wags.sa",
      linkedin: "https://www.linkedin.com/in/muhammad-danish-syed-81513561/",
      initials: "SD",
      image: "/danish-bhai.png"
    }
  ];

  return (
    <>
      <section id="team" className={`py-[60px] md:py-[80px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">

          <div className="text-center mb-[80px]">
            <div className="section-label inline-block mb-6 bg-[#07B98F]/10 border border-[#07B98F]/25 text-[#07B98F] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('team.label')}</div>
            <h2 className={`text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold text-slate-900 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('team.title1')}<span className="bg-gradient-to-br from-[#07B98F] to-[#3ECEB0] bg-clip-text text-transparent">{t('team.title2')}</span></h2>
            <p className="text-[18px] text-slate-600 leading-[1.6] max-w-[600px] mx-auto">{t('team.sub')}</p>
          </div>

          <div className={`flex flex-wrap justify-center gap-[30px]`}>
            {team.map((member, i) => (
              <div
                key={i}
                className="flex-1 min-w-[280px] max-w-[380px] bg-white/75 backdrop-blur-[20px] border border-slate-200/50 border-t-[#07B98F]/30 rounded-[24px] p-10 shadow-[0_15px_35px_rgba(0,0,0,0.02),_inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center text-center hover:-translate-y-2 hover:border-t-[#07B98F] hover:shadow-[0_20px_40px_rgba(7,185,143,0.1)] hover:bg-white group"
              >

                <div className="w-[90px] h-[90px] rounded-full overflow-hidden bg-[#07B98F]/5 flex items-center justify-center mb-6 border-2 border-[#07B98F]/25 shadow-[0_10px_20px_rgba(0,0,0,0.02)]">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} width={90} height={90} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[28px] font-extrabold text-slate-900 font-sora">{member.initials}</span>
                  )}
                </div>

                <h3 className={`text-[22px] font-extrabold text-slate-900 mb-2 tracking-[-0.02em] ${isAr ? 'font-cairo' : 'font-sora'}`}>{member.name}</h3>
                <div className="text-[13px] font-bold text-[#07B98F] tracking-[0.05em] uppercase mb-4">{member.title}</div>

                <p className="text-[15px] text-slate-600 leading-[1.6] flex-grow mb-6">{member.bio}</p>

                <div className="h-[1px] w-full bg-slate-200/60 mb-6"></div>

                <div className="w-full flex items-center justify-between">
                  <a href={`mailto:${member.email}`} className={`inline-flex items-center gap-2 text-slate-600 text-[14px] font-semibold no-underline transition-colors duration-300 hover:text-[#07B98F]`}>
                    <Mail size={16} strokeWidth={2} />
                    {member.email}
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors duration-300">
                    <FaLinkedin size={20} />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
