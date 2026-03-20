import { useState, useEffect, useRef, type ReactNode } from 'react';
import {
  MapPin, Navigation2, Compass, Map, Sun, Brain, Share2,
  AlertTriangle, Activity, Train, Languages, DollarSign,
  ShieldAlert, BookOpen, Headphones, Users, PlaySquare,
  Book, RefreshCw, Share, Menu, X, ChevronDown, Sparkles,
  Database, ArrowRight
} from 'lucide-react';

/* ─── Intersection Observer hook ──────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Phase config ─────────────────────────── */
const phases = [
  { id: 'phase1', label: '行前規劃', num: '01', color: 'blue' as const },
  { id: 'phase2', label: '旅程應變', num: '02', color: 'indigo' as const },
  { id: 'phase3', label: '在地體驗', num: '03', color: 'emerald' as const },
  { id: 'phase4', label: '數位典藏', num: '04', color: 'amber' as const },
];

/* ═══════════════════════════════════════════ */
/*  App                                        */
/* ═══════════════════════════════════════════ */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* ─── Navigation ───────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 glass shadow-lg shadow-slate-900/5 border-b border-slate-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative">
                <MapPin className="w-7 h-7 text-blue-600 transition-transform group-hover:scale-110" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                </span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Data.Taipei&nbsp;<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">SmartTravel</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              {phases.map(p => (
                <a key={p.id} href={`#${p.id}`} className="relative hover:text-blue-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all after:rounded-full">
                  {p.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
              <Sparkles className="w-4 h-4" />
              開始規劃
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white/95 glass border-t border-slate-100">
            {phases.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-xs text-slate-400 mr-2">0{phases.indexOf(p) + 1}</span>
                {p.label}
              </a>
            ))}
            <button className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              開始規劃
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─────────────────────── */}
      <HeroSection />

      {/* ─── Stats bar ────────────────────────── */}
      <StatsBar />

      {/* ─── Features Grid ────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Phase 1 */}
        <PhaseSection
          id="phase1"
          num="01"
          title="行前智慧化行程規劃"
          subtitle="運用 AI 模型深度理解個人偏好，並結合即時天氣與全球交通路網，打造最完美的旅遊藍圖。"
          color="blue"
        >
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="深度使用者行為模型建立"
            desc="透過結構化問卷蒐集使用者個人偏好數據（包含體能耐受度、預算區間、飲食禁忌、興趣、人潮容忍度、同行者組成等），建立專屬的個人化模型。"
            color="blue"
            delay={0}
          />
          <FeatureCard
            icon={<Sun className="w-6 h-6" />}
            title="出發前置準備自動化"
            desc="系統將於出發前依據目的地最新氣候預測與行程內容特性，自動生成專屬行李清單建議，並主動提示必需攜帶之特定物品。"
            color="blue"
            delay={1}
          />
          <FeatureCard
            icon={<Compass className="w-6 h-6" />}
            title="反向風格化路線生成"
            desc="使用者僅需提供欲達成的「旅遊氣氛」或「照片風格參考圖」，系統即可智慧反推最符合該風格的景點、光線條件與最佳抵達時段。"
            color="blue"
            delay={2}
          />
          <FeatureCard
            icon={<Map className="w-6 h-6" />}
            title="全球導航地圖無縫整合"
            desc="支援全球範圍內的交通路線規劃，並無縫銜接目的地在地交通系統。"
            integration="臺北市公車動態資訊、臺北捷運路網與即時列車資訊、YouBike 2.0 即時站點車輛與車位數據"
            color="blue"
            delay={3}
          />
          <FeatureCard
            icon={<PlaySquare className="w-6 h-6" />}
            title="AI 多重行程預演模擬"
            desc="針對多個行程選項，結合即時天氣預測與景點圖庫，自動生成「30 秒專屬旅遊預告片」，以視覺化方式協助決策。"
            color="blue"
            delay={4}
          />
          <FeatureCard
            icon={<Share2 className="w-6 h-6" />}
            title="行程資訊標準化輸出與協作共享"
            desc="支援一鍵將完整行程資訊輸出為可交付之文件格式，包含逐日行程、交通方式與備案，並支援分享至行動裝置或通訊軟體群組。"
            color="blue"
            delay={5}
          />
        </PhaseSection>

        {/* Phase 2 */}
        <PhaseSection
          id="phase2"
          num="02"
          title="旅程中即時情境感知與動態應變"
          subtitle="無縫串接臺北市各項即時監測數據，提供最即時的交通、人潮與安全應變方案。"
          color="indigo"
        >
          <FeatureCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="即時監控與突發事件動態重排"
            desc="持續監測天氣、交通與日程變動，遇突發狀況主動推播替代方案。"
            integration="臺北市即時交通資訊庫的 CCTV 影像與路況通報、捷運營運異常通報系統"
            color="indigo"
            delay={0}
          />
          <FeatureCard
            icon={<Activity className="w-6 h-6" />}
            title="人潮趨避與生理狀態適應性調整"
            desc="預測景點人潮密集度，結合穿戴式裝置偵測生理疲勞，自動替換高耗能行程。"
            integration="臺北旅遊警示即時燈號、臺北市環境微型感測器溫濕度數據"
            color="indigo"
            delay={1}
          />
          <FeatureCard
            icon={<Train className="w-6 h-6" />}
            title="大型交通樞紐室內導航與動線指引"
            desc="串接大型交通場站室內地圖，提供點對點精準導航。"
            integration="臺北車站與主要捷運站的室內空間結構、無障礙動線圖資"
            color="indigo"
            delay={2}
          />
          <FeatureCard
            icon={<Languages className="w-6 h-6" />}
            title="跨語言與在地文化內容"
            desc="針對外文菜單或在地菜名提供翻譯、文化脈絡解說，並結合健康模型提醒過敏原。"
            color="indigo"
            delay={3}
          />
          <FeatureCard
            icon={<DollarSign className="w-6 h-6" />}
            title="支出記錄與即時預算監控"
            desc="協助記錄花費，接近預算上限時主動提醒，並動態推薦符合剩餘預算的餐廳或活動。"
            color="indigo"
            delay={4}
          />
          <FeatureCard
            icon={<ShieldAlert className="w-6 h-6" />}
            title="安全警示與緊急資訊推送"
            desc="到達景點時推送背景與安全資訊、急救教學。"
            integration="臺北市防災與災情即時通報 API、警政據點位置、急救責任醫院即時看診狀態、AED 設置地點資料"
            color="indigo"
            delay={5}
          />
        </PhaseSection>

        {/* Phase 3 */}
        <PhaseSection
          id="phase3"
          num="03"
          title="在地文化沉浸式互動體驗"
          subtitle="透過擴增實境與在地文化知識庫，將臺北百年歷史與藝文活動轉化為深度的互動旅遊。"
          color="emerald"
        >
          <FeatureCard
            icon={<BookOpen className="w-6 h-6" />}
            title="情境式任務導覽與文化資訊解鎖"
            desc="將旅行設計為任務遊戲，抵達景點解鎖歷史小故事或冷知識。"
            integration="臺北市文化資產資料庫、臺北市立圖書館及地方文史開源文本"
            color="emerald"
            delay={0}
          />
          <FeatureCard
            icon={<Headphones className="w-6 h-6" />}
            title="動態專屬 Podcast 語音導覽"
            desc="依據 GPS 定位、移動速度與視野，即時生成導覽腳本並配音，可自訂導遊人設。"
            color="emerald"
            delay={1}
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="在地文化 AI 數位分身諮詢"
            desc="將在地知識訓練成具不同性格的 AI 實體，透過自然語言提供私房建議。"
            integration="利用臺北市歷史建築與聚落文獻作為 RAG 檢索增強生成的知識庫"
            color="emerald"
            delay={2}
          />
          <FeatureCard
            icon={<MapPin className="w-6 h-6" />}
            title="AR 擴增實境時光機"
            desc="結合鏡頭在古蹟疊加百年歷史繁盛樣貌，或渲染未來地標建築。"
            color="emerald"
            delay={3}
          />
          <FeatureCard
            icon={<RefreshCw className="w-6 h-6" />}
            title="AI 驚喜偶遇引擎與短期社交媒合"
            desc="掃描社群推播限時事件，並為獨自旅行者進行互助共遊的技能媒合。"
            integration="臺北市各局處藝文活動行事曆、臺北市街頭藝人展演即時資訊清單"
            color="emerald"
            delay={4}
          />
        </PhaseSection>

        {/* Phase 4 */}
        <PhaseSection
          id="phase4"
          num="04"
          title="旅遊回憶自動化彙整與數位典藏"
          subtitle="旅行結束後，由 AI 自動將照片與軌跡轉化為精美日誌，永遠珍藏專屬回憶。"
          color="amber"
        >
          <FeatureCard
            icon={<Book className="w-6 h-6" />}
            title="自動化智慧旅遊日誌生成"
            desc="旅途中定點提醒記錄，行程後自動彙整時間軸、照片與軌跡，生成排版精美的日誌。"
            color="amber"
            delay={0}
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="遺憾彌補與回憶創造性擴寫"
            desc="針對錯過的景點，AI 將自動擴寫日誌並合成專屬完美照片。"
            integration="臺北市觀傳局官方開源高畫質風景圖庫，作為 AI 圖像生成的墊底素材"
            color="amber"
            delay={1}
          />
          <FeatureCard
            icon={<Share className="w-6 h-6" />}
            title="社群媒體連動與內容自動發布"
            desc="依據設定自動選取日誌精華或照片，定時發布貼文實現數位共享。"
            color="amber"
            delay={2}
          />
        </PhaseSection>
      </div>

      {/* ─── CTA Section ──────────────────────── */}
      <CTASection />

      {/* ─── Footer ───────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-lg text-white">
                  Data.Taipei&nbsp;<span className="text-blue-400">SmartTravel</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                結合臺北市政府 Data.Taipei 開放資料與超過 20 項公共資料庫，打造最懂你的個人化沉浸式旅遊體驗。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">功能導覽</h4>
              <ul className="space-y-2 text-sm">
                {phases.map(p => (
                  <li key={p.id}>
                    <a href={`#${p.id}`} className="hover:text-blue-400 transition-colors">{p.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data sources */}
            <div>
              <h4 className="text-white font-semibold mb-4">資料來源</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400 shrink-0" />
                  Data.Taipei 開放資料平台
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400 shrink-0" />
                  臺北市即時交通資訊
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400 shrink-0" />
                  臺北市文化資產資料庫
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2024 Data.Taipei SmartTravel. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <span className="text-red-400">♥</span> for 臺北智慧旅遊黑客松
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════ */
/*  Hero Section                               */
/* ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 -z-20" />

      {/* Animated blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/10 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '2s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 glass border border-blue-200/50 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          整合臺北市政府 Data.Taipei 開放資料
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <span className="block text-slate-900 mb-2">臺北智慧旅遊</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient pb-2">
            你的專屬 AI 導遊
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          從行前規劃到旅途中的即時應變，結合臺北市超過 20 項公共資料庫，
          打造最懂你的個人化沉浸式旅遊體驗。
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/35 hover:-translate-y-0.5">
            <Compass className="w-5 h-5" />
            立即生成行程
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-white/70 glass hover:bg-white text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold border border-slate-200/70 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
            <Navigation2 className="w-5 h-5" />
            探索熱門景點
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-in-up opacity-60" style={{ animationDelay: '600ms' }}>
          <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ */
/*  Stats Bar                                  */
/* ═══════════════════════════════════════════ */
function StatsBar() {
  const { ref, visible } = useInView();
  const stats = [
    { num: '20+', label: '公共資料庫整合' },
    { num: '4', label: '完整旅遊階段' },
    { num: '23', label: '核心 AI 功能' },
    { num: '100%', label: '個人化體驗' },
  ];

  return (
    <div ref={ref} className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className={`bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/60 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {s.num}
              </div>
              <div className="text-sm text-slate-500 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */
/*  Phase Section                              */
/* ═══════════════════════════════════════════ */
function PhaseSection({
  id, num, title, subtitle, color, children,
}: {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  color: 'blue' | 'indigo' | 'emerald' | 'amber';
  children: ReactNode;
}) {
  const { ref, visible } = useInView(0.05);

  const badgeColors = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
  };

  const accentColors = {
    blue: 'from-blue-600 to-blue-400',
    indigo: 'from-indigo-600 to-indigo-400',
    emerald: 'from-emerald-600 to-emerald-400',
    amber: 'from-amber-600 to-amber-400',
  };

  return (
    <section ref={ref} id={id} className={`scroll-mt-24 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeColors[color]}`}>
            階段 {num}
          </span>
          <div className={`h-px flex-1 bg-gradient-to-r ${accentColors[color]} opacity-20`} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        <p className="text-lg text-slate-600 max-w-3xl">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ */
/*  Feature Card                               */
/* ═══════════════════════════════════════════ */
function FeatureCard({
  icon,
  title,
  desc,
  integration,
  color = 'blue',
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  integration?: string;
  color?: 'blue' | 'indigo' | 'emerald' | 'amber';
  delay?: number;
}) {
  const { ref, visible } = useInView(0.1);

  const iconBg = {
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
    indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    emerald: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    amber: 'bg-gradient-to-br from-amber-500 to-amber-600',
  };

  const integrationBg = {
    blue: 'bg-blue-50/80 border-blue-100 text-blue-700',
    indigo: 'bg-indigo-50/80 border-indigo-100 text-indigo-700',
    emerald: 'bg-emerald-50/80 border-emerald-100 text-emerald-700',
    amber: 'bg-amber-50/80 border-amber-100 text-amber-700',
  };

  const hoverBorder = {
    blue: 'hover:border-blue-200',
    indigo: 'hover:border-indigo-200',
    emerald: 'hover:border-emerald-200',
    amber: 'hover:border-amber-200',
  };

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 ${hoverBorder[color]} transition-all duration-300 hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: visible ? `${delay * 80}ms` : '0ms' }}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-5 ${iconBg[color]} text-white shadow-md transition-transform group-hover:scale-110`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">{title}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>

      {/* Integration badge */}
      {integration && (
        <div className={`mt-auto p-3.5 rounded-xl text-xs border ${integrationBg[color]}`}>
          <div className="font-bold mb-1 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5" />
            整合資料
          </div>
          <span className="leading-relaxed">{integration}</span>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════ */
/*  CTA Section                                */
/* ═══════════════════════════════════════════ */
function CTASection() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          準備好開始你的
          <br />
          智慧旅遊了嗎？
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          臺北，一座充滿故事的城市。讓 AI 為你打開一扇嶄新的大門，體驗前所未有的個人化旅程。
        </p>
        <button className="group inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/40 hover:-translate-y-1">
          <Sparkles className="w-5 h-5" />
          免費開始規劃行程
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}

export default App;
