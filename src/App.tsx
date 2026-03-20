import type { ReactNode } from 'react';
import { MapPin, Navigation2, Compass, Map, Sun, Brain, Share2, AlertTriangle, Activity, Train, Languages, DollarSign, ShieldAlert, BookOpen, Headphones, Users, PlaySquare, Book, RefreshCw, Share } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-xl tracking-tight">Data.Taipei<span className="text-blue-600">SmartTravel</span></span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="#phase1" className="hover:text-blue-600 transition-colors">行前規劃</a>
              <a href="#phase2" className="hover:text-blue-600 transition-colors">旅程應變</a>
              <a href="#phase3" className="hover:text-blue-600 transition-colors">在地體驗</a>
              <a href="#phase4" className="hover:text-blue-600 transition-colors">數位典藏</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
              開始規劃
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1552993873-0b449ef98ba8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 blur-sm -z-10 [mask-image:linear-gradient(to_left,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            整合臺北市政府 Data.Taipei 開放資料
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-slate-900 mb-2">臺北智慧旅遊</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              你的專屬 AI 導遊
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            從行前規劃到旅途中的即時應變，結合臺北市超過 20 項公共資料庫，
            打造最懂你的個人化沉浸式旅遊體驗。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-blue-600/20">
              <Compass className="w-5 h-5" />
              立即生成行程
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-lg font-medium border border-slate-200 transition-all shadow-sm">
              <Navigation2 className="w-5 h-5" />
              探索熱門景點
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Phase 1 */}
        <section id="phase1" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">階段一：行前智慧化行程規劃</h2>
            <p className="text-lg text-slate-600">運用 AI 模型深度理解個人偏好，並結合即時天氣與全球交通路網，打造最完美的旅遊藍圖。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-blue-600" />}
              title="深度使用者行為模型建立"
              desc="透過結構化問卷蒐集使用者個人偏好數據（包含體能耐受度、預算區間、飲食禁忌、興趣、人潮容忍度、同行者組成等），建立專屬的個人化模型，並自動套用於後續所有行程規劃。"
            />
            <FeatureCard
              icon={<Sun className="w-6 h-6 text-blue-600" />}
              title="出發前置準備自動化"
              desc="系統將於出發前依據目的地最新氣候預測與行程內容特性，自動生成專屬行李清單建議，並主動提示必需攜帶之特定物品。"
            />
            <FeatureCard
              icon={<Compass className="w-6 h-6 text-blue-600" />}
              title="反向風格化路線生成"
              desc="使用者僅需提供欲達成的「旅遊氣氛」或「照片風格參考圖」，系統即可智慧反推最符合該風格的景點、光線條件與最佳抵達時段。"
            />
            <FeatureCard
              icon={<Map className="w-6 h-6 text-blue-600" />}
              title="全球導航地圖無縫整合"
              desc="支援全球範圍內的交通路線規劃，並無縫銜接目的地在地交通系統。"
              integration="臺北市公車動態資訊、臺北捷運路網與即時列車資訊、YouBike 2.0 即時站點車輛與車位數據，精確計算包含等待時間的轉乘動線"
            />
            <FeatureCard
              icon={<PlaySquare className="w-6 h-6 text-blue-600" />}
              title="AI 多重行程預演模擬"
              desc="針對多個行程選項，結合即時天氣預測與景點圖庫，自動生成「30 秒專屬旅遊預告片」，以視覺化方式協助決策。"
            />
            <FeatureCard
              icon={<Share2 className="w-6 h-6 text-blue-600" />}
              title="行程資訊標準化輸出與協作共享"
              desc="支援一鍵將完整行程資訊輸出為可交付之文件格式，包含逐日行程、交通方式與備案，並支援分享至行動裝置或通訊軟體群組。"
            />
          </div>
        </section>

        {/* Phase 2 */}
        <section id="phase2" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">階段二：旅程中即時情境感知與動態應變</h2>
            <p className="text-lg text-slate-600">無縫串接臺北市各項即時監測數據，提供最即時的交通、人潮與安全應變方案。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<AlertTriangle className="w-6 h-6 text-indigo-600" />}
              title="即時監控與突發事件動態重排"
              desc="持續監測天氣、交通與日程變動，遇突發狀況主動推播替代方案。"
              integration="臺北市即時交通資訊庫的 CCTV 影像與路況通報、捷運營運異常通報系統，即時觸發重排機制"
              color="indigo"
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6 text-indigo-600" />}
              title="人潮趨避與生理狀態適應性調整"
              desc="預測景點人潮密集度，結合穿戴式裝置偵測生理疲勞，自動替換高耗能行程。"
              integration="臺北旅遊警示即時燈號、臺北市環境微型感測器溫濕度數據，達到紅燈擁擠時自動導向周邊休憩點"
              color="indigo"
            />
            <FeatureCard
              icon={<Train className="w-6 h-6 text-indigo-600" />}
              title="大型交通樞紐室內導航與動線指引"
              desc="串接大型交通場站室內地圖，提供點對點精準導航。"
              integration="臺北車站與主要捷運站的室內空間結構、無障礙動線圖資"
              color="indigo"
            />
            <FeatureCard
              icon={<Languages className="w-6 h-6 text-indigo-600" />}
              title="跨語言與在地文化內容"
              desc="針對外文菜單或在地菜名提供翻譯、文化脈絡解說，並結合健康模型提醒過敏原。"
              color="indigo"
            />
            <FeatureCard
              icon={<DollarSign className="w-6 h-6 text-indigo-600" />}
              title="支出記錄與即時預算監控"
              desc="協助記錄花費，接近預算上限時主動提醒，並動態推薦符合剩餘預算的餐廳或活動。"
              color="indigo"
            />
            <FeatureCard
              icon={<ShieldAlert className="w-6 h-6 text-indigo-600" />}
              title="安全警示與緊急資訊推送"
              desc="到達景點時推送背景與安全資訊、急救教學。"
              integration="臺北市防災與災情即時通報 API、警政據點位置、急救責任醫院即時看診狀態、AED 設置地點資料"
              color="indigo"
            />
          </div>
        </section>

        {/* Phase 3 */}
        <section id="phase3" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">階段三：在地文化沉浸式互動體驗</h2>
            <p className="text-lg text-slate-600">透過擴增實境與在地文化知識庫，將臺北百年歷史與藝文活動轉化為深度的互動旅遊。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-emerald-600" />}
              title="情境式任務導覽與文化資訊解鎖"
              desc="將旅行設計為任務遊戲，抵達景點解鎖歷史小故事或冷知識。"
              integration="臺北市文化資產資料庫、臺北市立圖書館及地方文史開源文本"
              color="emerald"
            />
            <FeatureCard
              icon={<Headphones className="w-6 h-6 text-emerald-600" />}
              title="動態專屬 Podcast 語音導覽"
              desc="依據 GPS 定位、移動速度與視野，即時生成導覽腳本並配音，可自訂導遊人設。"
              color="emerald"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-emerald-600" />}
              title="在地文化 AI 數位分身諮詢"
              desc="將在地知識訓練成具不同性格的 AI 實體，透過自然語言提供私房建議。"
              integration="利用臺北市歷史建築與聚落文獻作為 RAG 檢索增強生成的知識庫"
              color="emerald"
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6 text-emerald-600" />}
              title="AR 擴增實境時光機"
              desc="結合鏡頭在古蹟疊加百年歷史繁盛樣貌，或渲染未來地標建築。"
              color="emerald"
            />
            <FeatureCard
              icon={<RefreshCw className="w-6 h-6 text-emerald-600" />}
              title="AI 驚喜偶遇引擎與短期社交媒合"
              desc="掃描社群推播限時事件，並為獨自旅行者進行互助共遊的技能媒合。"
              integration="臺北市各局處藝文活動行事曆、臺北市街頭藝人展演即時資訊清單"
              color="emerald"
            />
          </div>
        </section>

        {/* Phase 4 */}
        <section id="phase4" className="scroll-mt-24 pb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">階段四：旅遊回憶自動化彙整與數位典藏</h2>
            <p className="text-lg text-slate-600">旅行結束後，由 AI 自動將照片與軌跡轉化為精美日誌，永遠珍藏專屬回憶。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Book className="w-6 h-6 text-amber-600" />}
              title="自動化智慧旅遊日誌生成"
              desc="旅途中定點提醒記錄，行程後自動彙整時間軸、照片與軌跡，生成排版精美的日誌。"
              color="amber"
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-amber-600" />}
              title="遺憾彌補與回憶創造性擴寫"
              desc="針對錯過的景點，AI 將自動擴寫日誌並合成專屬完美照片。"
              integration="臺北市觀傳局官方開源高畫質風景圖庫，作為 AI 圖像生成的墊底素材"
              color="amber"
            />
            <FeatureCard
              icon={<Share className="w-6 h-6 text-amber-600" />}
              title="社群媒體連動與內容自動發布"
              desc="依據設定自動選取日誌精華或照片，定時發布貼文實現數位共享。"
              color="amber"
            />
          </div>
        </section>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p>© 2024 Data.Taipei SmartTravel. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  integration,
  color = "blue"
}: {
  icon: ReactNode,
  title: string,
  desc: string,
  integration?: string,
  color?: "blue" | "indigo" | "emerald" | "amber"
}) {
  const colorStyles = {
    blue: "bg-blue-50 border-blue-100",
    indigo: "bg-indigo-50 border-indigo-100",
    emerald: "bg-emerald-50 border-emerald-100",
    amber: "bg-amber-50 border-amber-100"
  };

  const textStyles = {
    blue: "text-blue-700",
    indigo: "text-indigo-700",
    emerald: "text-emerald-700",
    amber: "text-amber-700"
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${colorStyles[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 leading-relaxed">{desc}</p>

      {integration && (
        <div className={`mt-4 p-4 rounded-xl text-sm ${colorStyles[color]} ${textStyles[color]}`}>
          <div className="font-semibold mb-1 flex items-center gap-1.5">
            <span className="text-lg">✦</span> 整合資料
          </div>
          {integration}
        </div>
      )}
    </div>
  );
}

export default App;
