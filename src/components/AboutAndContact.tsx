import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Phone, 
  Smartphone,
  Globe, 
  CheckCircle2, 
  Send, 
  Building2, 
  Sparkles,
  Award,
  Truck,
  Clock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const AboutAndContact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('dealer');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-slate-50/50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Mission & Story */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>珠海市迪迈斯精密电器有限公司 · Zhuhai Deomax Precision Electrical Co., Ltd.</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-slate-950">
            精控每一度微气候 · <br />
            <span className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">守护世间珍贵之物</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            珠海市迪迈斯精密电器有限公司（Zhuhai Deomax Precision Electrical Co., Ltd.）坐落于中国海滨创新之都珠海，是一家专注于高精度环境温湿度智能控制系统研发、设计与精益制造的高新技术企业。我们融合声学乐器养护理论、现代半导体热电技术与瑞士 Sensirion 数字传感算法，彻底攻克冬季干燥开裂与夏季湿气霉变的顽疾，为全球音乐家、藏家、光学工业与微电子企业提供双向主动恒湿与精密防潮微气候生态设备。
          </p>
        </div>

        {/* Corporate Headquarters & Reception Photo Showcase */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 group">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-slate-900 relative overflow-hidden">
              <img
                src="/deomax-reception.jpg"
                alt="珠海市迪迈斯精密电器有限公司总部前台与接待大厅"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

              {/* Badges on the image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase mb-2 border border-blue-400/30">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>公司前台接待区 · Corporate Headquarters &amp; Reception</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                    珠海市迪迈斯精密电器有限公司
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl font-light">
                    Zhuhai Deomax Precision Electrical Co., Ltd. · 智能微气候控制系统专业智造基地
                  </p>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700/80 text-xs flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">品牌核心理念</span>
                    <span className="font-bold text-sky-400 tracking-wider">CONNECT. BRILLIANT. SMART.</span>
                  </div>
                  <div className="h-8 w-px bg-slate-700"></div>
                  <div className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>实体智造工厂</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Caption Strip */}
            <div className="px-6 py-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-slate-900">厂区地址：</span>
                <span>珠海市香洲区金鼎镇上栅村生晖大街18号上栅第二工业区</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500 text-[11px]">
                <span>国家高新技术企业标准</span>
                <span>•</span>
                <span>ISO 9001 质量管理体系认证</span>
                <span>•</span>
                <span>欢迎全球客商莅临考察指导</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hubs & Quality Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs hover:border-blue-300 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-heading block mb-1">
              ±1.0%
            </span>
            <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
              控制精度 Control Accuracy
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">
              瑞士 Sensirion 工业级数字传感
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs hover:border-blue-300 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-heading block mb-1">
              &lt;22 dB
            </span>
            <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
              录音室级静音 Acoustic Silent
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">
              专业消音室无振动设计认证
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs hover:border-blue-300 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading block mb-1">
              5-Year
            </span>
            <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
              超长原厂质保 Warranty
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">
              核心冷热双核热插拔快速维护
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs hover:border-blue-300 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-sky-600 font-heading block mb-1">
              42+
            </span>
            <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
              出口国家与地区 Countries
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">
              北美、欧洲、日本、韩国及东南亚
            </span>
          </div>
        </div>

        {/* Contact & Global Inquiries */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-12">
            {/* Official Contact Information */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-blue-700 block mb-1">
                  联系我们 · Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
                  迪迈斯全球总部与客户支持中心
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  无论您是需要乐器温湿度养护咨询的独立音乐家，还是计划开展 OEM / ODM 定制生产的琴行连锁与工业合作品牌，迪迈斯专业工程技术团队随时为您提供全方位支持。
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-700">
                {/* Company Name */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700 flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">珠海市迪迈斯精密电器有限公司</span>
                    <span className="text-xs text-slate-600 block mt-0.5 font-medium">Zhuhai Deomax Precision Electrical Co., Ltd.</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">高精度环境温湿度智能控制与精密存储装备专业制造商</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">工厂及办公地址 Address</span>
                    <p className="text-xs text-slate-800 font-medium mt-0.5">
                      珠海市香洲区金鼎镇上栅村生晖大街18号上栅第二工业区
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Shangshan 2nd Industrial Zone, No. 18 Shenghui Avenue, Shangshan Village, Jinding Town, Xiangzhou District, Zhuhai City, Guangdong, China
                    </p>
                  </div>
                </div>

                {/* Phone & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href="tel:1330299643"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 text-xs block">移动手机 Mobile</span>
                      <span className="text-blue-700 font-bold text-sm block mt-0.5 group-hover:underline">
                        1330299643
                      </span>
                      <span className="text-[10px] text-slate-500">微信同号 / 快速响应</span>
                    </div>
                  </a>

                  <a 
                    href="tel:+867566903313"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 text-xs block">公司座机 Telephone</span>
                      <span className="text-blue-700 font-bold text-sm block mt-0.5 group-hover:underline">
                        +86-756-6903313
                      </span>
                      <span className="text-[10px] text-slate-500">总机 / 商务技术支持</span>
                    </div>
                  </a>
                </div>

                {/* Website & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href="https://www.deomax.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-slate-900 text-xs block">官方网址 Website</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                      </div>
                      <span className="text-blue-700 font-bold text-sm block mt-0.5 group-hover:underline">
                        www.deomax.com
                      </span>
                      <span className="text-[10px] text-slate-500">全球官方品牌门户</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:sales@deomax.cn"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 text-xs block">商务邮箱 Email</span>
                      <span className="text-blue-700 font-bold text-sm block mt-0.5 group-hover:underline">
                        sales@deomax.cn
                      </span>
                      <span className="text-[10px] text-slate-500">OEM合作: oem@deomax.cn</span>
                    </div>
                  </a>
                </div>

                {/* Logistics info */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-200/70 text-slate-700">
                  <Truck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">全球交付与外贸支持 Global Logistics</span>
                    <span className="text-[11px] text-slate-600 block mt-0.5">支持 FOB、CIF、DDP 全球直发，产品符合 CE、FCC、RoHS 国际出口认证。</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Online Consultation / Inquiry Form */}
            <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-950 font-heading">
                  在线发送技术咨询与订购意向
                </h3>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                  24小时响应
                </span>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">咨询信息已成功送达！</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    尊敬的 {name || '客户'}，迪迈斯精密温湿度工程技术顾问已收到您的信息，我们将在 24 小时内与您取得联系（{phone || email}），为您提供专属产品方案与技术支持。
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold"
                  >
                    发送另一条咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 mb-1 font-semibold">您的姓名 / 称呼 *</label>
                      <input
                        type="text"
                        required
                        placeholder="例如：陈工 / 张经理 / Mr. Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-700 mb-1 font-semibold">联系电话 / 手机 *</label>
                      <input
                        type="tel"
                        required
                        placeholder="例如：138xxxxxxx / 0756-xxxxxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 mb-1 font-semibold">电子邮箱 Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 mb-1 font-semibold">咨询或合作类型</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 shadow-2xs"
                    >
                      <option value="dealer">琴行零售与全国经销商加盟 (Dealer &amp; Distributor)</option>
                      <option value="oem">品牌 OEM / ODM 代工贴牌定制 (Private Label)</option>
                      <option value="individual">个人高端乐器恒温恒湿柜选型 (Individual Musician)</option>
                      <option value="industrial">光学影像 / 芯片微电子工业防潮箱批量采购 (Industrial Dry Cabinets)</option>
                      <option value="technical">售后服务与配件支持 (Technical Support)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 mb-1 font-semibold">具体需求描述 *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="请简要描述您的需求（如需要保护的乐器种类/数量、期望柜体规格、安装地点、预算或OEM定制要求等）..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-2xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>提交咨询并发送至迪迈斯工程团队</span>
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-500">
                      您也可以前往专门的 <a href="#order-board" onClick={(e) => { e.preventDefault(); window.location.hash = 'order-board'; window.dispatchEvent(new HashChangeEvent('hashchange')); }} className="text-blue-600 font-semibold underline">「产品订购留言板」</a> 获取跟踪单号
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
