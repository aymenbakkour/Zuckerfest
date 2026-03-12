'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Sparkles, Moon, Star, RefreshCw } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const AdBanner = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.hasChildNodes()) {
      const conf = document.createElement('script');
      conf.type = 'text/javascript';
      conf.innerHTML = `atOptions = {
        'key' : '0396f9421fde324e59cbfddba4d76772',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };`;
      
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.highperformanceformat.com/0396f9421fde324e59cbfddba4d76772/invoke.js';
      
      adRef.current.appendChild(conf);
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full mt-6 flex justify-center items-center min-h-[60px] overflow-hidden rounded-xl bg-black/10">
      <div ref={adRef} />
    </div>
  );
};

const TEMPLATES = [
  "بنسيم الرحمة وعبير المغفرة، أزف إليكم أصدق التهاني وأطيب الأماني بمناسبة حلول عيد الفطر المبارك. أسأل الله العلي القدير أن يتقبل منا ومنكم الصيام والقيام وصالح الأعمال، وأن يعيده علينا وعليكم باليمن والخير والبركات، وأن يديم عليكم لباس الصحة والعافية. 🌙✨\n\nكل عام وأنتم بخير،\nأخوكم: {name}",
  "تتلاقى الأرواح بالحب والود في هذا اليوم السعيد، ويسعدني أن أبعث لكم باقة من الأمنيات العطرة بمناسبة عيد الفطر المبارك. جعله الله عيد فرح وسرور، وجعل أيامكم كلها أعياداً تتلألأ بالسعادة والرضا. تقبل الله طاعتكم وأتم بالعيد فرحتكم. 🕌🌺\n\nمع أطيب التحيات،\n{name}",
  "مع إشراقة شمس عيد الفطر المبارك، أرسل لكم نبضات قلب محب تدعو لكم بكل خير. أسأل الله الذي أعاد العيد وطوى الشهر الفقيد أن يمدكم بعمر مديد ويجعل حياتكم كلها عيد في عيد. تقبل الله منا ومنكم صالح الأعمال. 🎉🕊️\n\nمحبكم:\n{name}",
  "تفيض القلوب بهجةً وسروراً بقدوم عيد الفطر السعيد، وبهذه المناسبة الغالية على قلوبنا، أتقدم إليكم بأحر التهاني والتبريكات. راجياً من المولى عز وجل أن يغمر أيامكم بالسعادة، وأن يكلل جهودكم بالنجاح، وأن يجمعنا دائماً على الخير والمحبة. 🌟🌸\n\nالمرسل:\n{name}",
  "كل عام وأنتم النور الذي يضيء أيامنا، وكل عيد وأنتم الفرح الذي يغمر قلوبنا. بمناسبة عيد الفطر المبارك، أرفع أسمى آيات التهاني والمباركات لكم ولأسرتكم الكريمة، سائلاً الله أن يتقبل طاعاتكم وأن يجعل أيامكم كلها سعادة وهناء. 🌙✨\n\nأخوكم:\n{name}",
  "أدام الله بَهجة أعيادكم بقرب مَن تحبون، وكُل عَام وأرواحكم في فَرح. بمناسبة حلول عيد الفطر المبارك، أتقدم إليكم بأصدق التهاني وأطيب الأماني، راجياً من الله أن يعيده عليكم وعلى الأمة الإسلامية بالخير واليُمن والبركات. 🕌✨\n\nمع خالص المودة،\n{name}"
];

export default function EidGreetingApp() {
  const [name, setName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentMessage = TEMPLATES[selectedTemplate].replace('{name}', name.trim() || '[اسمك هنا]');
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentMessage)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentMessage);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-emerald-50 relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 text-yellow-500/30"
        >
          <Moon size={120} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360, opacity: [0.2, 0.5, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 left-16 text-yellow-400/30"
        >
          <Star size={40} fill="currentColor" />
        </motion.div>
        <motion.div 
          animate={{ rotate: -360, opacity: [0.1, 0.4, 0.1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-24 text-yellow-400/20"
        >
          <Star size={60} fill="currentColor" />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400 mb-4 border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
          >
            <Sparkles size={32} />
          </motion.div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-2">
            تهنئة عيد الفطر
          </h1>
          <p className="text-emerald-200/80 text-sm">
            أنشئ معايدتك الخاصة وشاركها مع من تحب
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
          
          {/* Input Section */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-emerald-200 mb-2">
              اسم المرسل
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اكتب اسمك هنا..."
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
              dir="rtl"
            />
          </div>

          {/* Preview Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-emerald-200">
                نص المعايدة
              </label>
              <button
                onClick={() => setSelectedTemplate((prev) => (prev + 1) % TEMPLATES.length)}
                className="flex items-center gap-1.5 text-xs font-medium bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 px-3 py-1.5 rounded-full transition-colors active:scale-95"
              >
                <RefreshCw size={14} />
                <span>تغيير الصيغة</span>
              </button>
            </div>
            <div className="relative bg-emerald-950/50 border border-emerald-800/50 rounded-2xl p-5 min-h-[160px] flex items-center justify-center text-center">
              <p className="text-emerald-50 leading-relaxed whitespace-pre-wrap font-medium text-lg">
                {currentMessage}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-6 rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#25D366]/20 active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>إرسال عبر واتساب</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-100 py-3.5 px-6 rounded-xl font-medium transition-all active:scale-[0.98]"
            >
              <AnimatePresence mode="wait">
                {isCopied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2 text-yellow-400"
                  >
                    <Check size={20} />
                    <span>تم النسخ!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy size={20} />
                    <span>نسخ النص</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
        
        {/* مساحة إعلانية (Ad Space) */}
        <AdBanner />

        {/* Footer */}
        <p className="text-center text-emerald-400/50 text-xs mt-6">
          صُنع بحب بمناسبة عيد الفطر المبارك
        </p>
      </motion.div>
    </div>
  );
}
