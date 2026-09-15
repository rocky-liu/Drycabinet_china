import React, { useState, useEffect } from 'react';
import { Product, OrderMessage, OrderStatus, ProductCategory } from '../types';
import { 
  getStoredProducts, 
  saveProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  resetProductsToDefault,
  getStoredOrderMessages,
  updateOrderStatus,
  deleteOrderMessage
} from '../data/productStore';
import { 
  ShieldCheck, 
  Package, 
  Plus, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  Download, 
  Search, 
  CheckCircle2, 
  Clock, 
  Tag, 
  Sparkles, 
  MessageSquare, 
  Layers, 
  FileText, 
  Lock, 
  Save, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface AdminPortalProps {
  onClose?: () => void;
  onViewOrderBoard?: () => void;
  onViewProducts?: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  onClose,
  onViewOrderBoard,
  onViewProducts
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'factory'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<OrderMessage[]>([]);
  
  // Product state
  const [searchProduct, setSearchProduct] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);

  // Order state
  const [searchOrder, setSearchOrder] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('all');
  const [replyingOrder, setReplyingOrder] = useState<OrderMessage | null>(null);
  const [replyText, setReplyText] = useState('');

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const loadAll = () => {
    setProducts(getStoredProducts());
    setOrders(getStoredOrderMessages());
  };

  useEffect(() => {
    loadAll();
    window.addEventListener('deomax_products_updated', loadAll);
    window.addEventListener('deomax_orders_updated', loadAll);
    return () => {
      window.removeEventListener('deomax_products_updated', loadAll);
      window.removeEventListener('deomax_orders_updated', loadAll);
    };
  }, []);

  // Product Actions
  const handleSaveProduct = (prod: Product) => {
    if (editingProduct) {
      updateProduct(prod);
      showToast(`产品 "${prod.name}" 已成功保存更新！`);
      setEditingProduct(null);
    } else {
      addProduct(prod);
      showToast(`新产品 "${prod.name}" 已成功添加并发布！`);
      setIsCreatingProduct(false);
    }
    loadAll();
  };

  const handleDeleteProduct = (id: string, name: string) => {
    if (window.confirm(`确定要从产品库中下架/删除产品 "${name}" 吗？`)) {
      deleteProduct(id);
      showToast(`产品 "${name}" 已删除`);
      loadAll();
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('确定要恢复出厂预设的迪迈斯恒湿防潮产品目录吗？当前修改将被重置。')) {
      resetProductsToDefault();
      showToast('已恢复出厂产品库');
      loadAll();
    }
  };

  const exportProductsJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(products, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', `deomax_products_${Date.now()}.json`);
    dlAnchorElem.click();
    showToast('产品目录 JSON 已成功导出');
  };

  // Order Actions
  const handleUpdateStatus = (orderId: string, status: OrderStatus) => {
    updateOrderStatus(orderId, status);
    showToast('订购单状态已更新');
    loadAll();
  };

  const handleSendReply = (orderId: string) => {
    if (!replyText.trim()) return;
    updateOrderStatus(orderId, 'quoted', replyText.trim());
    showToast('技术回复已发送并更新至留言板');
    setReplyingOrder(null);
    setReplyText('');
    loadAll();
  };

  const handleDeleteOrder = (orderId: string, orderNumber: string) => {
    if (window.confirm(`确定删除单号 ${orderNumber} 的订购记录吗？`)) {
      deleteOrderMessage(orderId);
      showToast(`订单 ${orderNumber} 已删除`);
      loadAll();
    }
  };

  const exportOrdersCSV = () => {
    const headers = ['Order Number', 'Date', 'Customer', 'Company', 'Email', 'Phone', 'Region', 'Product', 'Qty', 'Voltage', 'Target RH', 'Status', 'Requirements', 'Admin Reply'];
    const rows = orders.map((o) => [
      `"${o.orderNumber}"`,
      `"${o.createdAt}"`,
      `"${o.customerName}"`,
      `"${o.companyName || ''}"`,
      `"${o.email}"`,
      `"${o.phone || ''}"`,
      `"${o.countryRegion}"`,
      `"${o.productName.replace(/"/g, '""')}"`,
      o.quantity,
      `"${o.voltageHz || ''}"`,
      `"${o.targetRHRequirement || ''}"`,
      `"${o.status}"`,
      `"${(o.requirements || '').replace(/"/g, '""')}"`,
      `"${(o.adminReply || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `deomax_orders_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('订购留言清单已导出为 CSV 表格');
  };

  const filteredProducts = products.filter((p) => 
    p.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
    p.tagline.toLowerCase().includes(searchProduct.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const filteredOrders = orders.filter((o) => {
    const matchFilter = orderStatusFilter === 'all' || o.status === orderStatusFilter;
    const matchSearch = searchOrder === '' ||
      o.orderNumber.toLowerCase().includes(searchOrder.toLowerCase()) ||
      o.customerName.toLowerCase().includes(searchOrder.toLowerCase()) ||
      o.productName.toLowerCase().includes(searchOrder.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="py-8 bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed top-6 right-6 z-50 px-4 py-3 rounded-xl bg-blue-600 text-white shadow-xl flex items-center gap-2 text-sm animate-fade-in border border-blue-400">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Header Bar */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-heading">
                  迪迈斯精密电器 · 管理员后台中心
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase">
                  Deomax Admin Portal
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                珠海市迪迈斯精密电器有限公司 (Zhuhai Deomax Precision Electrical Co., Ltd.) 内部管理系统
              </p>
            </div>
          </div>

          {/* Quick stats & Nav button */}
          <div className="flex items-center gap-3">
            {onViewOrderBoard && (
              <button
                onClick={onViewOrderBoard}
                className="px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 border border-slate-600"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span>前台订购留言板</span>
              </button>
            )}
            {onViewProducts && (
              <button
                onClick={onViewProducts}
                className="px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 border border-slate-600"
              >
                <Package className="w-3.5 h-3.5 text-sky-400" />
                <span>前台产品展厅</span>
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                title="关闭后台"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-700/80 pb-4 mb-6">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'products'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>产品管理与上架 ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>订购留言板管理 ({orders.length})</span>
            {orders.filter(o => o.status === 'pending').length > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('factory')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'factory'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>企业与工厂资质</span>
          </button>
        </div>

        {/* TAB 1: PRODUCT MANAGEMENT */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="搜索型号、名称或类别..."
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setIsCreatingProduct(true);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>添加新产品</span>
                </button>

                <button
                  onClick={exportProductsJSON}
                  className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1"
                  title="导出产品数据 JSON"
                >
                  <Download className="w-4 h-4" />
                </button>

                <button
                  onClick={handleResetDefaults}
                  className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1"
                  title="恢复出厂产品列表"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Table / Cards */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="px-5 py-3.5">产品 / 缩略图</th>
                      <th className="px-4 py-3.5">类别 / 控制类型</th>
                      <th className="px-4 py-3.5">恒湿/防潮范围</th>
                      <th className="px-4 py-3.5">容量 / 尺寸</th>
                      <th className="px-4 py-3.5 text-right">管理操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 font-sans">
                    {filteredProducts.map((prod) => (
                      <tr key={prod.id} className="hover:bg-slate-750/50 transition-colors">
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex-shrink-0 overflow-hidden flex items-center justify-center p-1">
                              <img 
                                src={prod.image} 
                                alt={prod.name} 
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm">
                                {prod.name}
                              </div>
                              <div className="text-slate-400 text-[11px] line-clamp-1 max-w-xs mt-0.5">
                                {prod.tagline}
                              </div>
                              {prod.badge && (
                                <span className="inline-block px-1.5 py-0.2 rounded text-[9px] bg-blue-500/20 text-blue-300 border border-blue-500/30 mt-1">
                                  {prod.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3.5">
                          <span className="font-medium text-slate-200 block">
                            {prod.categoryName}
                          </span>
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold mt-1 ${
                            prod.isDualMode 
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {prod.isDualMode ? '双向主动恒湿' : '精密电子防潮'}
                          </span>
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-medium text-blue-400">
                            {prod.specs.rhRange}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            精度: {prod.specs.controlAccuracy}
                          </div>
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="text-slate-200">
                            {prod.specs.capacity}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                            {prod.specs.volumeLiters}L • {prod.specs.dimensionsExternal}
                          </div>
                        </td>

                        <td className="px-4 py-3.5 text-right space-x-2">
                          <button
                            onClick={() => {
                              setIsCreatingProduct(false);
                              setEditingProduct(prod);
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white transition-colors inline-flex items-center gap-1"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>编辑</span>
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(prod.id, prod.name)}
                            className="px-2.5 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-600 text-red-300 hover:text-white transition-colors inline-flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>删除</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Edit / Add Modal */}
            {(editingProduct || isCreatingProduct) && (
              <ProductEditModal
                product={editingProduct}
                onSave={handleSaveProduct}
                onClose={() => {
                  setEditingProduct(null);
                  setIsCreatingProduct(false);
                }}
              />
            )}
          </div>
        )}

        {/* TAB 2: ORDER MESSAGE BOARD MANAGEMENT */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {/* Filter & Export Bar */}
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {[
                  { id: 'all', label: '全部留言' },
                  { id: 'pending', label: '待处理' },
                  { id: 'processing', label: '对接中' },
                  { id: 'quoted', label: '已出价' },
                  { id: 'completed', label: '已完成' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setOrderStatusFilter(s.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      orderStatusFilter === s.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <div className="relative w-full sm:w-60">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="搜索单号 / 客户名..."
                    value={searchOrder}
                    onChange={(e) => setSearchOrder(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  onClick={exportOrdersCSV}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>导出订购 CSV</span>
                </button>
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.length === 0 ? (
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-12 text-center text-slate-400">
                  <MessageSquare className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                  <p className="text-sm font-semibold">暂无符合条件的订购留言</p>
                </div>
              ) : (
                filteredOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 shadow-sm space-y-4 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/30">
                          {ord.orderNumber}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {(['pending', 'processing', 'quoted', 'completed'] as OrderStatus[]).map((st) => (
                            <button
                              key={st}
                              onClick={() => handleUpdateStatus(ord.id, st)}
                              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                                ord.status === st
                                  ? st === 'pending' ? 'bg-amber-500 text-black font-bold'
                                    : st === 'processing' ? 'bg-blue-600 text-white'
                                    : st === 'quoted' ? 'bg-indigo-600 text-white'
                                    : 'bg-emerald-600 text-white'
                                  : 'bg-slate-700 text-slate-400 hover:text-white'
                              }`}
                            >
                              {st === 'pending' ? '待处理' : st === 'processing' ? '对接中' : st === 'quoted' ? '已出价' : '已完成'}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="font-mono">{ord.createdAt}</span>
                        <button
                          onClick={() => handleDeleteOrder(ord.id, ord.orderNumber)}
                          className="p-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-600 hover:text-white transition-colors"
                          title="删除留言"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Customer & Product details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs bg-slate-900/60 p-3.5 rounded-xl border border-slate-750">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">客户与联系方式</span>
                        <span className="font-bold text-white block mt-0.5">
                          {ord.customerName} {ord.companyName ? `(${ord.companyName})` : ''}
                        </span>
                        <span className="text-blue-400 block mt-0.5 font-mono">{ord.email}</span>
                        {ord.phone && <span className="text-slate-400 block text-[11px]">{ord.phone}</span>}
                        <span className="text-slate-400 block text-[11px]">地区: {ord.countryRegion}</span>
                      </div>

                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">订购产品与配置</span>
                        <span className="font-bold text-white block mt-0.5">
                          {ord.productName}
                        </span>
                        <span className="text-amber-400 font-bold block mt-0.5">
                          数量: {ord.quantity} 台
                        </span>
                        {ord.voltageHz && <span className="text-slate-400 block text-[11px]">{ord.voltageHz}</span>}
                        {ord.targetRHRequirement && (
                          <span className="text-sky-300 block text-[11px]">湿度要求: {ord.targetRHRequirement}</span>
                        )}
                      </div>

                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">客户特殊需求说明</span>
                        <p className="text-slate-300 mt-0.5 leading-relaxed italic line-clamp-4">
                          "{ord.requirements || '标准出厂配置'}"
                        </p>
                      </div>
                    </div>

                    {/* Official Engineering Reply */}
                    {ord.adminReply ? (
                      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-blue-300 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                            已提供技术工程答复 / 报价方案:
                          </span>
                          <button
                            onClick={() => {
                              setReplyingOrder(ord);
                              setReplyText(ord.adminReply || '');
                            }}
                            className="text-[11px] text-blue-400 hover:text-blue-200 underline"
                          >
                            修改答复
                          </button>
                        </div>
                        <p className="text-slate-200 leading-relaxed font-sans pl-1">
                          {ord.adminReply}
                        </p>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setReplyingOrder(ord);
                            setReplyText(`已根据贵方 ${ord.quantity} 台需求拟定技术方案与出厂报价函，请查收邮件附件。交货周期预计 7-10 工作日。`);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>添加工程答复并转为“已报价”</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Reply Modal */}
            {replyingOrder && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                    <h3 className="font-bold text-white text-base">
                      针对单号 {replyingOrder.orderNumber} 撰写工程答复
                    </h3>
                    <button onClick={() => setReplyingOrder(null)} className="text-slate-400 hover:text-white">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      答复内容 (将同步显示在前台留言板供客户查验):
                    </label>
                    <textarea
                      rows={4}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                      placeholder="输入出厂报价、定制排期或技术参数说明..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-end gap-2.5 pt-2">
                    <button
                      onClick={() => setReplyingOrder(null)}
                      className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-semibold"
                    >
                      取消
                    </button>
                    <button
                      onClick={() => handleSendReply(replyingOrder.id)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <Save className="w-4 h-4" />
                      <span>确认发布答复</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: FACTORY & BRAND CREDENTIALS */}
        {activeTab === 'factory' && (
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-700">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white font-heading">
                  珠海市迪迈斯精密电器有限公司 · 智造体系
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Zhuhai Deomax Precision Electrical Co., Ltd.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-750 space-y-2">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">生产基地与研发中心</span>
                <p className="font-semibold text-white">中国广东省珠海市高新技术产业开发区</p>
                <p className="text-slate-400">专业从事双向闭环高精度温湿度控制模组、半导体制冷除湿芯片、超声微雾加湿核心系统的研发与整机装配。</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-750 space-y-2">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">商务与 OEM/ODM 专线</span>
                <p className="font-semibold text-white">sales@deomax.cn</p>
                <p className="text-slate-400">支持全案私标打标、结构外观开模、定制木纹箱体及海内外电压（110V/220V/宽电压）认证与出海 DDP 发货。</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-750 space-y-2">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">出厂质保标准</span>
                <p className="font-semibold text-white">核心除湿/加湿主机 5 年质保</p>
                <p className="text-slate-400">全线产品出厂前均经过连续 72 小时恒温恒湿老化舱全检，控制精度达到工业级 ±1.0% RH。</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// SUB-COMPONENT: Product Edit/Add Modal
interface ProductEditModalProps {
  product: Product | null;
  onSave: (prod: Product) => void;
  onClose: () => void;
}

const ProductEditModal: React.FC<ProductEditModalProps> = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState<Product>(() => {
    if (product) return { ...product };
    return {
      id: `deo-${Date.now()}`,
      name: 'Deomax Precision Vault Model',
      category: 'guitar-cabinets',
      categoryName: 'Musical Instrument Cabinets',
      subCategory: 'Custom Climate Cabinet',
      tagline: 'High Precision Active Dual-Mode Climate Storage Showcase',
      description: 'Engineered by Zhuhai Deomax Precision Electrical Co., Ltd. featuring active humidification and silent semiconductor dehumidification.',
      badge: 'New Arrival',
      image: '/products/gh-100.png',
      isDualMode: true,
      recommendedFor: ['Acoustic Guitars', 'Cellos', 'Violins', 'Optics'],
      specs: {
        rhRange: '45% – 55% RH Active Dual-Mode',
        controlAccuracy: '±1.0% RH Precision Sensor',
        capacity: '1–2 Instruments / Precision Instruments',
        volumeLiters: 300,
        sensorType: 'High Precision Digital RH & Temp Probe',
        noiseLevel: '< 20 dB(A) Whisper Quiet',
        powerConsumption: 'Avg. 20W Eco-mode',
        dimensionsExternal: '1200 × 550 × 420 mm',
        dimensionsInternal: '1140 × 510 × 380 mm',
        shelvesHooks: 'High-density EVA anti-slip padding',
        glassType: '4mm Low-E UV-Shield Tempered Glass',
        lockType: 'Dual Magnetic Seal + Smart RFID Lock',
        weight: '42 kg'
      },
      features: [
        'Dual-direction Active Climate Regulation (Auto Dehumidify + Humidify)',
        'Precision Touch Digital Display Panel',
        'Aircraft-grade Airtight Magnetic Door Gasket',
        'Internal 3000K Warm Museum-Grade Lighting'
      ],
      suitableItems: ['Guitars', 'Boutique Tonewoods', 'Lenses'],
      climateSuitability: ['dry', 'humid', 'variable']
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl my-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <h3 className="text-base font-bold text-white font-heading">
            {product ? `编辑产品: ${product.name}` : '添加新产品至迪迈斯目录'}
          </h3>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-300 mb-1">产品全名 (Product Name) *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">产品标识角标 (Badge)</label>
              <input
                type="text"
                value={formData.badge || ''}
                placeholder="例如: 旗舰热销 / New / Studio Bestseller"
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">一句话亮点标语 (Tagline) *</label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-300 mb-1">产品分类 (Category) *</label>
              <select
                value={formData.category}
                onChange={(e) => {
                  const cat = e.target.value as ProductCategory;
                  const catName = cat.includes('guitar') || cat.includes('violin') 
                    ? 'Musical Instrument Cabinets' 
                    : 'Electronic Dry Cabinets';
                  setFormData({ ...formData, category: cat, categoryName: catName });
                }}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="guitar-cabinets">吉他恒湿柜 (Guitar Cabinets)</option>
                <option value="violin-cabinets">提琴恒湿柜 (Violin Cabinets)</option>
                <option value="woodwind-cabinets">管乐恒湿柜 (Woodwind Cabinets)</option>
                <option value="camera-optics">相机镜头防潮箱 (Camera & Optics)</option>
                <option value="semiconductor-pcb">工业芯片PCB干燥柜 (Industrial Dry)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">控制方式 (Dual-Mode / Dry) *</label>
              <select
                value={formData.isDualMode ? 'true' : 'false'}
                onChange={(e) => setFormData({ ...formData, isDualMode: e.target.value === 'true' })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="true">双向主动恒湿 (加湿+除湿双核)</option>
                <option value="false">精密单向防潮 (单向超低湿除湿)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">产品图片路径或预设 *</label>
              <select
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="/products/gh-100.png">预设: 单把琴恒湿柜 (gh-100)</option>
                <option value="/products/gh-300.png">预设: 三把琴展示柜 (gh-300)</option>
                <option value="/products/gh-600.png">预设: 六把琴恒湿柜 (gh-600)</option>
                <option value="/products/gh-custom.png">预设: 大师订制典藏柜 (gh-custom)</option>
              </select>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-750 space-y-3">
            <span className="font-bold text-white block text-[11px] uppercase tracking-wider text-blue-400">
              技术规格参数 (Specifications)
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="text-slate-400 block mb-1">湿度控制范围</label>
                <input
                  type="text"
                  value={formData.specs.rhRange}
                  onChange={(e) => setFormData({ ...formData, specs: { ...formData.specs, rhRange: e.target.value } })}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">控制精度</label>
                <input
                  type="text"
                  value={formData.specs.controlAccuracy}
                  onChange={(e) => setFormData({ ...formData, specs: { ...formData.specs, controlAccuracy: e.target.value } })}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">容量容积 (L)</label>
                <input
                  type="number"
                  value={formData.specs.volumeLiters}
                  onChange={(e) => setFormData({ ...formData, specs: { ...formData.specs, volumeLiters: parseInt(e.target.value) || 0 } })}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">外观尺寸</label>
                <input
                  type="text"
                  value={formData.specs.dimensionsExternal}
                  onChange={(e) => setFormData({ ...formData, specs: { ...formData.specs, dimensionsExternal: e.target.value } })}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">详细描述 (Detailed Description) *</label>
            <textarea
              rows={3}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20"
            >
              <Save className="w-4 h-4" />
              <span>保存并发布产品</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
