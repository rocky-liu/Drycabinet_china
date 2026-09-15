import React, { useState, useEffect } from 'react';
import { Product, OrderMessage, OrderStatus } from '../types';
import { getStoredProducts, getStoredOrderMessages, addOrderMessage } from '../data/productStore';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Search, 
  Package, 
  Building2, 
  ShieldCheck, 
  Filter, 
  Sparkles, 
  Calendar, 
  Globe, 
  Mail, 
  Phone,
  HelpCircle,
  Tag
} from 'lucide-react';

interface OrderMessageBoardProps {
  onNavigateToProducts?: () => void;
  preselectedProduct?: Product | null;
}

export const OrderMessageBoard: React.FC<OrderMessageBoardProps> = ({ 
  onNavigateToProducts,
  preselectedProduct
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<OrderMessage[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form states
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryRegion, setCountryRegion] = useState('');
  const [voltageHz, setVoltageHz] = useState('220V 50Hz (CN/EU/UK)');
  const [targetRH, setTargetRH] = useState('45% – 50% RH (恒湿乐器/木材标准)');
  const [requirements, setRequirements] = useState('');
  
  const [submittedOrder, setSubmittedOrder] = useState<OrderMessage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadData = () => {
      const prodList = getStoredProducts();
      setProducts(prodList);
      setOrders(getStoredOrderMessages());

      if (preselectedProduct) {
        setSelectedProductId(preselectedProduct.id);
      } else if (prodList.length > 0 && !selectedProductId) {
        setSelectedProductId(prodList[0].id);
      }
    };

    loadData();

    window.addEventListener('deomax_orders_updated', loadData);
    window.addEventListener('deomax_products_updated', loadData);
    return () => {
      window.removeEventListener('deomax_orders_updated', loadData);
      window.removeEventListener('deomax_products_updated', loadData);
    };
  }, [preselectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductId || !customerName.trim() || !email.trim()) {
      return;
    }

    setIsSubmitting(true);
    const prod = products.find((p) => p.id === selectedProductId);
    const prodName = prod ? prod.name : 'Custom Vault Specification';

    setTimeout(() => {
      const newOrder = addOrderMessage({
        customerName: customerName.trim(),
        companyName: companyName.trim() || undefined,
        email: email.trim(),
        phone: phone.trim() || undefined,
        countryRegion: countryRegion.trim() || 'China / Global',
        productName: prodName,
        productId: selectedProductId,
        quantity: Math.max(1, quantity),
        voltageHz,
        targetRHRequirement: targetRH,
        requirements: requirements.trim() || 'Standard factory precision dual-mode configuration requested.'
      });

      setSubmittedOrder(newOrder);
      setIsSubmitting(false);
      // Reset form fields
      setCustomerName('');
      setCompanyName('');
      setEmail('');
      setPhone('');
      setRequirements('');
    }, 400);
  };

  const filteredOrders = orders.filter((ord) => {
    const matchStatus = activeFilter === 'all' || ord.status === activeFilter;
    const matchSearch = searchQuery === '' || 
      ord.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.countryRegion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchSearch;
  });

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 inline-flex items-center gap-1"><Clock className="w-3 h-3" />待处理 Pending</span>;
      case 'processing':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center gap-1"><Sparkles className="w-3 h-3" />对接中 Processing</span>;
      case 'quoted':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 inline-flex items-center gap-1"><Tag className="w-3 h-3" />已报价 Quoted</span>;
      case 'completed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />已交付 Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>迪迈斯产品订购 · 在线留言板与需求对接</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-950">
            产品订购与客制化需求留言板
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            无论您是个人乐手、提琴/吉他名家琴房、光学仪器实验室，还是海内外品牌代理商，均可在线提交采购与定制需求。珠海市迪迈斯工程师将在 12 小时内出具技术配置与工厂直供报价单。
          </p>
        </div>

        {/* Main Grid: Form Left, Board Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-heading">
                  提交订购或技术询价
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  填写以下信息，我们将为您指派专属工程师
                </p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
            </div>

            {submittedOrder ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  订购留言已成功提交！
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">订单询价单号:</span>
                    <span className="font-mono font-bold text-blue-600">{submittedOrder.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">目标产品:</span>
                    <span className="font-medium text-slate-800 line-clamp-1">{submittedOrder.productName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">订购数量:</span>
                    <span className="font-bold text-slate-900">{submittedOrder.quantity} 台/套</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">预留邮箱:</span>
                    <span className="text-blue-700 font-medium">{submittedOrder.email}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  该询价单已同步至右侧留言板。迪迈斯精密电器工程师将尽快查验并邮件回复技术方案与出厂报价。
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedOrder(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  继续提交下一条需求
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Target Product Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    1. 意向产品型号 *
                  </label>
                  <select
                    required
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.isDualMode ? '双向恒湿 ±1%' : '精密电子防潮'})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Quantity & Voltage */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      订购数量 (台) *
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={1000}
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      电源制式标准
                    </label>
                    <select
                      value={voltageHz}
                      onChange={(e) => setVoltageHz(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    >
                      <option value="220V 50Hz (CN/EU/UK)">220V 50Hz 国标/欧标</option>
                      <option value="110V 60Hz (US/JP/TW)">110V 60Hz 美标/日标</option>
                      <option value="100V-240V 全球宽电压">全球宽电压自适应</option>
                    </select>
                  </div>
                </div>

                {/* 3. Target RH Requirement */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    目标恒湿控制要求 (RH%)
                  </label>
                  <select
                    value={targetRH}
                    onChange={(e) => setTargetRH(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                  >
                    <option value="45% – 50% RH (恒湿乐器/木材标准)">45% – 50% RH (木吉他/小提琴/大提琴/珍贵木料)</option>
                    <option value="35% – 45% RH (单反相机/单反镜头/光学胶片)">35% – 45% RH (单反相机/电影镜头/显微光学)</option>
                    <option value="10% – 20% RH (工业芯片/SMT元器件/超低湿)">10% – 20% RH (芯片IC/晶圆/PCB超低湿烘烤存储)</option>
                    <option value="50% – 55% RH (高级邮票/古籍善本/字画纸本)">50% – 55% RH (古籍善本/国画字画/雪茄烟叶)</option>
                  </select>
                </div>

                {/* 4. Customer Info */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      联系人姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例如: 王工 / Mr. David"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      单位/琴房/公司名称
                    </label>
                    <input
                      type="text"
                      placeholder="选填"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* 5. Email & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      电子邮箱 *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      联系电话 / 微信
                    </label>
                    <input
                      type="text"
                      placeholder="选填"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* 6. Country & Region */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    收货城市/国家地区
                  </label>
                  <input
                    type="text"
                    placeholder="例如: 广东省珠海市 / USA California / 日本东京"
                    value={countryRegion}
                    onChange={(e) => setCountryRegion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                  />
                </div>

                {/* 7. Special Requirements */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    详细订购要求与定制说明
                  </label>
                  <textarea
                    rows={3}
                    placeholder="例如：需配带内胆防刮毛毡、特殊木纹饰面、低反射镀膜玻璃、外箱定制私标Logo或指定交货期..."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? '正在提交需求...' : '立即提交订购留言单'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Message Board List Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                {[
                  { id: 'all', label: '全部留言' },
                  { id: 'pending', label: '待处理' },
                  { id: 'processing', label: '对接中' },
                  { id: 'quoted', label: '已报价' },
                  { id: 'completed', label: '已交付' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      activeFilter === f.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-60">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="搜索单号 / 客户 / 地区..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            {/* List of Messages */}
            <div className="space-y-3">
              {filteredOrders.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
                  <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-700">暂无匹配的订购留言记录</p>
                  <p className="text-xs text-slate-400 mt-1">欢迎在左侧提交您的第一条订购或询价需求</p>
                </div>
              ) : (
                filteredOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all space-y-3"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {ord.orderNumber}
                        </span>
                        {getStatusBadge(ord.status)}
                      </div>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {ord.createdAt}
                      </span>
                    </div>

                    {/* Product & Qty */}
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-sm font-bold text-slate-900 font-heading">
                        {ord.productName}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                        订购量: {ord.quantity} 台
                      </span>
                      {ord.voltageHz && (
                        <span className="text-[11px] text-slate-500">
                          • {ord.voltageHz}
                        </span>
                      )}
                    </div>

                    {/* Target RH & Client Location */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px]">订购方 / 地区</span>
                        <span className="font-medium text-slate-800">
                          {ord.customerName} {ord.companyName ? `(${ord.companyName})` : ''} • {ord.countryRegion}
                        </span>
                      </div>
                      {ord.targetRHRequirement && (
                        <div>
                          <span className="text-slate-400 block text-[10px]">设定湿度需求</span>
                          <span className="font-semibold text-blue-700">
                            {ord.targetRHRequirement}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Requirements Notes */}
                    {ord.requirements && (
                      <p className="text-xs text-slate-700 leading-relaxed pl-2 border-l-2 border-blue-400">
                        {ord.requirements}
                      </p>
                    )}

                    {/* Admin Reply */}
                    {ord.adminReply && (
                      <div className="mt-3 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-blue-900 flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                            迪迈斯技术工程部回复:
                          </span>
                          {ord.repliedAt && (
                            <span className="text-[10px] text-blue-600 font-mono">
                              {ord.repliedAt}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {ord.adminReply}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Hint footer */}
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-blue-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>所有订购信息由珠海市迪迈斯精密电器有限公司工程师专人对接，商业机密严格保密。</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
