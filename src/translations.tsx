import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export type SupportedLanguage = 
  | 'en' 
  | 'es' 
  | 'ja' 
  | 'ar' 
  | 'de' 
  | 'fr' 
  | 'it' 
  | 'ru' 
  | 'vi' 
  | 'zh';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳' }
];

export const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_products: 'Products',
    nav_instruments: 'Instrument Cabinets',
    nav_dry_cabinets: 'Electronic Dry Cabinets',
    nav_applications: 'Applications',
    nav_technology: 'Technology',
    nav_guides: 'Humidity Guide',
    nav_oem: 'OEM / ODM',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    quote_basket: 'Quote Basket',
    request_quote: 'Find Your Vault',
    request_oem_quote: 'Request OEM Quote',
    viewing_as: 'Viewing as:',
    for_b2c: 'For Musicians & Collectors',
    for_b2b: 'For Dealers & OEM/ODM',
    top_notice: 'Active Dual-Mode Climate Storage: Automatic Humidification & Dehumidification to ±1% RH',

    // Hero
    hero_pill_brand: 'Protect What Matters. Control the Humidity.',
    hero_pill_badge: 'Dual-Mode Active',
    hero_title_prefix: 'Smart Humidity Control for',
    hero_title_highlight: 'Sensitive Instruments & Valuables',
    hero_subtitle: 'Automatically dehumidify when ambient humidity is too high, and humidify when the room becomes too dry.',
    hero_cta_instruments: 'Explore Musical Instrument Cabinets',
    hero_cta_dry: 'Explore Electronic Dry Cabinets',
    hero_gateways: 'Tailored Gateways:',
    hero_gate_individual: 'For Individual Musicians & Collectors',
    hero_gate_b2b: 'For Dealers, Studios & OEM/ODM Partners',
    hero_climate_lock: 'CLIMATE LOCK ACTIVE',
    hero_safe_zone: 'Safe Acoustic Zone',
    hero_zero_drift: 'Zero Wood Drift',
    hero_protected_assets: 'Protected Assets:',
    hero_tech_link: 'See How Dual-Mode Works',

    // Features
    feat_dual_mode: 'Active Dual-Mode',
    feat_dual_mode_desc: 'Automated humidify + dehumidify',
    feat_precision: '±1.0% Precision',
    feat_precision_desc: 'Swiss Sensirion digital probes',
    feat_silent: '<22 dB Studio Silent',
    feat_silent_desc: 'Zero vibration in recording spaces',
    feat_warranty: '5-Year Warranty',
    feat_warranty_desc: 'Global factory replacement support',

    // Simulator
    sim_badge: 'Interactive Microclimate Lab',
    sim_title: 'Real-Time Climate Stress & Active Control Simulator',
    sim_desc: 'Drag the slider to alter room humidity from dry winter heating (15% RH) to tropical monsoons (85% RH). Observe how unprotected materials suffer, and how RHVault active dual-mode technology instantly intervenes.',
    sim_ambient_label: 'Simulated Ambient Humidity:',
    sim_preset_winter: 'Dry Winter Heating (20% RH)',
    sim_preset_target: 'RHVault Target (45%–50% RH)',
    sim_preset_monsoon: 'Tropical / Monsoon (75% RH)',
    sim_chamber_internal: 'RHVault Chamber Internal State',
    sim_status_locked: 'Locked at Ideal 45.0% RH Target',
    sim_status_dehum: 'Active Thermoelectric Dehumidifying',
    sim_status_humid: 'Active Ultrasonic Humidifying',
    sim_instrument_status: 'Impact on Stored Valuables',

    // Common
    view_details: 'View Specifications',
    add_to_rfq: '+ Add to RFQ',
    in_basket: 'In Basket',
    clear_all: 'Clear all',
    submit_inquiry: 'Submit Technical Quote Request',
    close: 'Close',
    language: 'Language'
  },
  zh: {
    // Nav
    nav_home: '首页',
    nav_products: '全系列产品',
    nav_instruments: '乐器恒湿柜',
    nav_dry_cabinets: '电子防潮箱',
    nav_applications: '应用领域',
    nav_technology: '双向恒湿技术',
    nav_guides: '湿度科普知识',
    nav_oem: 'OEM / ODM 定制',
    nav_about: '关于我们',
    nav_contact: '联系我们',
    quote_basket: '询价清单',
    request_quote: '选购适配合适型号',
    request_oem_quote: '获取 OEM 批发报价',
    viewing_as: '浏览视角：',
    for_b2c: '乐手与收藏家',
    for_b2b: '经销商与 OEM/ODM',
    top_notice: '主动双向恒湿存储：自动加湿与自动除湿，高精度控制在 ±1% RH',

    // Hero
    hero_pill_brand: '保护珍贵之物，精准控制湿度',
    hero_pill_badge: '主动双向恒湿',
    hero_title_prefix: '专为乐器与精密贵重物品设计的',
    hero_title_highlight: '全自动恒湿控制防潮存储柜',
    hero_subtitle: '当环境潮湿时自动除湿，当室内干燥时自动超声波加湿，终年锁定最佳黄金湿度。',
    hero_cta_instruments: '浏览乐器恒湿展示柜',
    hero_cta_dry: '浏览电子精密防潮箱',
    hero_gateways: '快捷通道：',
    hero_gate_individual: '个人演奏家与乐器收藏者',
    hero_gate_b2b: '琴行、录音棚与品牌 OEM 合作伙伴',
    hero_climate_lock: '恒湿锁定运行中',
    hero_safe_zone: '原声乐器安全黄金带',
    hero_zero_drift: '木料形变位移 0',
    hero_protected_assets: '保护对象：',
    hero_tech_link: '查看双向恒湿工作原理',

    // Features
    feat_dual_mode: '双向主动闭环',
    feat_dual_mode_desc: '高湿自动除，干燥自动加',
    feat_precision: '±1.0% RH 高精度',
    feat_precision_desc: '瑞士盛思锐高精数字探头',
    feat_silent: '<22 dB 录音棚级静音',
    feat_silent_desc: '无震动，不影响专业拾音',
    feat_warranty: '5年全球联保',
    feat_warranty_desc: '模块化机芯免工具快速维护',

    // Simulator
    sim_badge: '交互式微环境实验室',
    sim_title: '实时湿度应力测试与主动控制模拟器',
    sim_desc: '拖动滑块模拟从冬季北方供暖（15% RH）到南方梅雨回南天（85% RH）的环境。直观观察无保护材质的物理损伤，以及 RHVault 双向恒湿柜的主动介入响应。',
    sim_ambient_label: '模拟室温环境湿度：',
    sim_preset_winter: '冬季干燥供暖 (20% RH)',
    sim_preset_target: '黄金保护目标 (45%–50% RH)',
    sim_preset_monsoon: '梅雨回南高湿 (75% RH)',
    sim_chamber_internal: 'RHVault 柜内稳定微环境',
    sim_status_locked: '精准锁定在 45.0% RH 目标',
    sim_status_dehum: '半导体制冷凝结除湿中',
    sim_status_humid: '超微米超声波加湿中',
    sim_instrument_status: '物品实时物理应力状态',

    // Common
    view_details: '查看详细规格',
    add_to_rfq: '+ 加入询价单',
    in_basket: '已在清单中',
    clear_all: '清空清单',
    submit_inquiry: '提交专业技术询价',
    close: '关闭',
    language: '语言'
  },
  vi: {
    nav_home: 'Trang chủ',
    nav_products: 'Sản phẩm',
    nav_instruments: 'Tủ bảo quản nhạc cụ',
    nav_dry_cabinets: 'Tủ chống ẩm điện tử',
    nav_applications: 'Ứng dụng',
    nav_technology: 'Công nghệ kiểm soát ẩm',
    nav_guides: 'Cẩm nang độ ẩm',
    nav_oem: 'OEM / ODM',
    nav_about: 'Về chúng tôi',
    nav_contact: 'Liên hệ',
    quote_basket: 'Giỏ báo giá',
    request_quote: 'Tìm tủ phù hợp',
    request_oem_quote: 'Yêu cầu báo giá OEM',
    viewing_as: 'Chế độ xem:',
    for_b2c: 'Dành cho nhạc công & nhà sưu tập',
    for_b2b: 'Dành cho đại lý & đối tác OEM/ODM',
    top_notice: 'Bảo quản vi khí hậu hai chiều chủ động: Tự động tạo ẩm & hút ẩm đạt chuẩn ±1% RH',
    hero_pill_brand: 'Bảo vệ những điều quý giá. Kiểm soát độ ẩm tối ưu.',
    hero_pill_badge: 'Chế độ kép chủ động',
    hero_title_prefix: 'Kiểm soát độ ẩm thông minh cho',
    hero_title_highlight: 'Nhạc cụ tinh xảo & tài sản quý giá',
    hero_subtitle: 'Tự động hút ẩm khi môi trường quá ẩm và tự động tạo ẩm siêu âm khi phòng trở nên quá khô, duy trì độ ẩm lý tưởng quanh năm.',
    hero_cta_instruments: 'Khám phá tủ bảo quản nhạc cụ',
    hero_cta_dry: 'Khám phá tủ chống ẩm điện tử',
    hero_gateways: 'Lối tắt nhanh:',
    hero_gate_individual: 'Nhạc công & nhà sưu tập cá nhân',
    hero_gate_b2b: 'Phòng thu, cửa hàng nhạc cụ & đối tác OEM',
    hero_climate_lock: 'Đang khóa độ ẩm vi khí hậu',
    hero_safe_zone: 'Vùng an toàn cho nhạc cụ gỗ',
    hero_zero_drift: 'Độ biến dạng gỗ: 0',
    hero_protected_assets: 'Bảo vệ hoàn hảo:',
    hero_tech_link: 'Tìm hiểu nguyên lý cân bằng ẩm 2 chiều',
    feat_dual_mode: 'Hai chiều chủ động vòng kín',
    feat_dual_mode_desc: 'Tự động hút khi ẩm, tự động bù khi khô',
    feat_precision: 'Độ chính xác ±1.0% RH',
    feat_precision_desc: 'Cảm biến kỹ thuật số Sensirion Thụy Sĩ',
    feat_silent: 'Độ ồn cực thấp <22 dB',
    feat_silent_desc: 'Êm ái tuyệt đối, không rung lắc trong phòng thu',
    feat_warranty: 'Bảo hành toàn cầu 5 năm',
    feat_warranty_desc: 'Mô-đun máy tháo lắp bảo trì không cần dụng cụ',
    sim_badge: 'Phòng thử nghiệm vi khí hậu tương tác',
    sim_title: 'Bộ mô phỏng ứng suất độ ẩm & kiểm soát chủ động',
    sim_desc: 'Kéo thanh trượt để thử nghiệm từ phòng điều hòa khô hanh đến mùa nồm ẩm nhiệt đới. Quan sát hư hại và sự can thiệp tức thì của tủ RHVault.',
    sim_ambient_label: 'Độ ẩm môi trường xung quanh mô phỏng:',
    sim_preset_winter: 'Mùa đông hanh khô / Điều hòa (20% RH)',
    sim_preset_target: 'Mục tiêu lý tưởng (45%–50% RH)',
    sim_preset_monsoon: 'Mùa nồm ẩm nhiệt đới (75% RH)',
    sim_chamber_internal: 'Môi trường bên trong tủ RHVault',
    sim_status_locked: 'Đã khóa chuẩn xác ở mức 45.0% RH',
    sim_status_dehum: 'Hệ thống hút ẩm bán dẫn đang hoạt động',
    sim_status_humid: 'Hệ thống tạo ẩm siêu âm đang hoạt động',
    sim_instrument_status: 'Trạng thái vật lý của nhạc cụ',
    view_details: 'Xem thông số chi tiết',
    add_to_rfq: '+ Thêm vào yêu cầu báo giá',
    in_basket: 'Đã có trong giỏ',
    clear_all: 'Xóa tất cả',
    submit_inquiry: 'Gửi yêu cầu báo giá kỹ thuật',
    close: 'Đóng',
    language: 'Ngôn ngữ'
  },
  ja: {
    nav_home: 'ホーム',
    nav_products: '製品一覧',
    nav_instruments: '楽器用調湿キャビネット',
    nav_dry_cabinets: '電子ドライキャビネット',
    nav_applications: '適用分野',
    nav_technology: '双方向調湿技術',
    nav_guides: '湿度ガイド',
    nav_oem: 'OEM / ODM',
    nav_about: '企業情報',
    nav_contact: 'お問い合わせ',
    quote_basket: 'お見積りリスト',
    request_quote: '最適なモデルを探す',
    request_oem_quote: 'OEM価格をお問い合わせ',
    viewing_as: '表示対象:',
    for_b2c: 'ミュージシャン・コレクター向け',
    for_b2b: '販売店・OEM/ODM向け',
    top_notice: '双方向アクティブ調湿保管：自動除湿＆自動加湿で±1%RHの超高精度を維持',
    hero_pill_brand: '大切なものを守る。湿度を極める。',
    hero_pill_badge: '双方向アクティブ調湿',
    hero_title_prefix: '精密楽器と貴重品のための',
    hero_title_highlight: 'インテリジェント湿度コントロール保管庫',
    hero_subtitle: '部屋の湿度が高いときは自動で除湿し、冬の乾燥時には自動で超音波加湿します。',
    hero_cta_instruments: '楽器用キャビネットを見る',
    hero_cta_dry: '電子ドライキャビネットを見る',
    hero_gateways: '専用ゲートウェイ:',
    hero_gate_individual: '個人演奏家・コレクターの方へ',
    hero_gate_b2b: '販売店・スタジオ・OEMパートナーへ',
    hero_climate_lock: '高精度気候ロック作動中',
    hero_safe_zone: '木製楽器安全ゾーン',
    hero_zero_drift: '木材変形ゼロ',
    hero_protected_assets: '保護対象:',
    hero_tech_link: '双方向調湿の仕組み',
    feat_dual_mode: '双方向アクティブ駆動',
    feat_dual_mode_desc: '自動加湿＋自動除湿を完全両立',
    feat_precision: '±1.0% 高精度',
    feat_precision_desc: 'スイス製Sensirionデジタルセンサー',
    feat_silent: '<22 dB スタジオ静音',
    feat_silent_desc: '録音マイクにも乗らない無振動設計',
    feat_warranty: '5年間長期保証',
    feat_warranty_desc: 'ユニット交換対応の安心サポート',
    sim_badge: 'インタラクティブ環境ラボ',
    sim_title: 'リアルタイム湿度シミュレーター',
    sim_desc: 'スライダーを動かして冬の乾燥（15%RH）から梅雨の湿気（85%RH）をシミュレート。RHVaultが瞬時に補正する様子をご覧ください。',
    sim_ambient_label: 'シミュレート環境湿度:',
    sim_preset_winter: '冬の暖房乾燥 (20% RH)',
    sim_preset_target: '黄金目標湿度 (45%–50% RH)',
    sim_preset_monsoon: '梅雨の多湿 (75% RH)',
    sim_chamber_internal: 'RHVaultキャビネット庫内状態',
    sim_status_locked: '目標45.0%RHにロック中',
    sim_status_dehum: 'ペルチェ素子で除湿中',
    sim_status_humid: '超音波ミストで加湿中',
    sim_instrument_status: '保管品の受ける影響',
    view_details: '仕様を見る',
    add_to_rfq: '+ 見積りに追加',
    in_basket: 'リストに追加済',
    clear_all: 'すべてクリア',
    submit_inquiry: '見積りを送信',
    close: '閉じる',
    language: '言語'
  },
  de: {
    nav_home: 'Startseite',
    nav_products: 'Produkte',
    nav_instruments: 'Instrumentenschränke',
    nav_dry_cabinets: 'Trockenschränke',
    nav_applications: 'Anwendungen',
    nav_technology: 'Dual-Mode Technologie',
    nav_guides: 'Feuchtigkeitsratgeber',
    nav_oem: 'OEM / ODM',
    nav_about: 'Über uns',
    nav_contact: 'Kontakt',
    quote_basket: 'Anfragekorb',
    request_quote: 'Passendes Modell finden',
    request_oem_quote: 'OEM-Angebot anfordern',
    viewing_as: 'Ansicht für:',
    for_b2c: 'Musiker & Sammler',
    for_b2b: 'Händler & OEM/ODM',
    top_notice: 'Aktive Dual-Mode Klimatisierung: Automatische Befeuchtung & Entfeuchtung auf ±1% rF',
    hero_pill_brand: 'Schützen was wertvoll ist. Feuchtigkeit kontrollieren.',
    hero_pill_badge: 'Aktiver Dual-Modus',
    hero_title_prefix: 'Präzisions-Klimatisierung für',
    hero_title_highlight: 'Empfindliche Instrumente & Wertgegenstände',
    hero_subtitle: 'Entfeuchtet vollautomatisch bei hoher Raumfeuchte und befeuchtet sanft bei trockener Winterluft.',
    hero_cta_instruments: 'Instrumentenschränke entdecken',
    hero_cta_dry: 'Elektronische Trockenschränke',
    hero_gateways: 'Zielgruppen:',
    hero_gate_individual: 'Für Musiker & Sammler',
    hero_gate_b2b: 'Für Fachhändler & OEM-Partner',
    hero_climate_lock: 'KLIMA-LOCK AKTIV',
    hero_safe_zone: 'Akustische Sicherheitszone',
    hero_zero_drift: 'Keine Holzverformung',
    hero_protected_assets: 'Geschützte Objekte:',
    hero_tech_link: 'Funktionsweise ansehen',
    feat_dual_mode: 'Aktiver Dual-Modus',
    feat_dual_mode_desc: 'Automatisch befeuchten & entfeuchten',
    feat_precision: '±1,0% Genauigkeit',
    feat_precision_desc: 'Schweizer Sensirion-Digitalsensoren',
    feat_silent: '<22 dB Studio-Flüsterleise',
    feat_silent_desc: 'Vibrationsfrei für Tonstudios',
    feat_warranty: '5 Jahre Garantie',
    feat_warranty_desc: 'Weltweiter Modul-Austauschservice',
    sim_badge: 'Interaktives Mikroklima-Labor',
    sim_title: 'Echtzeit-Klimasimulator',
    sim_desc: 'Testen Sie extreme Bedingungen von 15% bis 85% rF und erleben Sie das intelligente Gegensteuern von RHVault.',
    sim_ambient_label: 'Simulierte Raumfeuchtigkeit:',
    sim_preset_winter: 'Trockene Heizungsluft (20% rF)',
    sim_preset_target: 'RHVault Zielwert (45%–50% rF)',
    sim_preset_monsoon: 'Hohe Feuchte (75% rF)',
    sim_chamber_internal: 'RHVault Kammer-Innenzustand',
    sim_status_locked: 'Konstant auf 45,0% rF geregelt',
    sim_status_dehum: 'Aktive thermoelektrische Entfeuchtung',
    sim_status_humid: 'Aktive Ultraschall-Befeuchtung',
    sim_instrument_status: 'Auswirkung auf gelagerte Güter',
    view_details: 'Spezifikationen ansehen',
    add_to_rfq: '+ Zur Anfrage hinzufügen',
    in_basket: 'Im Korb',
    clear_all: 'Alles leeren',
    submit_inquiry: 'Technische Anfrage absenden',
    close: 'Schließen',
    language: 'Sprache'
  },
  fr: {
    nav_home: 'Accueil',
    nav_products: 'Produits',
    nav_instruments: 'Vitrines pour Instruments',
    nav_dry_cabinets: 'Armoires Déshydratantes',
    nav_applications: 'Applications',
    nav_technology: 'Technologie Dual-Mode',
    nav_guides: 'Guide Hygrométrie',
    nav_oem: 'OEM / ODM',
    nav_about: 'À propos',
    nav_contact: 'Contact',
    quote_basket: 'Panier de Devis',
    request_quote: 'Trouver Votre Armoire',
    request_oem_quote: 'Demande Devis OEM',
    viewing_as: 'Profil:',
    for_b2c: 'Musiciens & Collectionneurs',
    for_b2b: 'Distributeurs & OEM',
    top_notice: 'Stockage Actif Double-Flux: Humidification et Déshumidification Automatiques à ±1% HR',
    hero_pill_brand: 'Protéger ce qui compte. Maîtriser l’humidité.',
    hero_pill_badge: 'Double-Flux Actif',
    hero_title_prefix: 'Contrôle Intelligent de l’Hygrométrie pour',
    hero_title_highlight: 'Instruments Délicats & Objets Précieux',
    hero_subtitle: 'Déshumidifie automatiquement quand l’air est trop humide, et humidifie par ultrasons quand il est trop sec.',
    hero_cta_instruments: 'Explorer les Vitrines d’Instruments',
    hero_cta_dry: 'Explorer les Armoires Électroniques',
    hero_gateways: 'Accès Dédiés:',
    hero_gate_individual: 'Pour Musiciens & Collectionneurs',
    hero_gate_b2b: 'Pour Luthiers, Studios & Partenaires OEM',
    hero_climate_lock: 'VERROU HYGROMÉTRIQUE ACTIF',
    hero_safe_zone: 'Zone Acoustique Sécurisée',
    hero_zero_drift: 'Déformation Nulle du Bois',
    hero_protected_assets: 'Biens Protégés:',
    hero_tech_link: 'Découvrir la Technologie',
    feat_dual_mode: 'Double-Flux Actif',
    feat_dual_mode_desc: 'Humidification + déshumidification auto',
    feat_precision: 'Précision ±1,0%',
    feat_precision_desc: 'Sondes suisses numériques Sensirion',
    feat_silent: '<22 dB Silence Studio',
    feat_silent_desc: 'Zéro vibration en studio d’enregistrement',
    feat_warranty: 'Garantie 5 Ans',
    feat_warranty_desc: 'Support d’échange d’usine mondial',
    sim_badge: 'Laboratoire Microclimat Interactif',
    sim_title: 'Simulateur d’Hygrométrie en Temps Réel',
    sim_desc: 'Variez le curseur de 15% à 85% d’humidité relative et observez la réaction immédiate du système RHVault.',
    sim_ambient_label: 'Humidité Ambiante Simulée:',
    sim_preset_winter: 'Chauffage Hivernal Sec (20% HR)',
    sim_preset_target: 'Cible Idéale RHVault (45%–50% HR)',
    sim_preset_monsoon: 'Humidité Tropicale (75% HR)',
    sim_chamber_internal: 'État Intérieur de l’Armoire RHVault',
    sim_status_locked: 'Maintenu à 45,0% HR Constant',
    sim_status_dehum: 'Déshumidification Thermoélectrique Active',
    sim_status_humid: 'Humidification Ultrasonique Active',
    sim_instrument_status: 'Impact sur les Instruments Stockés',
    view_details: 'Voir Caractéristiques',
    add_to_rfq: '+ Ajouter au Devis',
    in_basket: 'Dans le Panier',
    clear_all: 'Tout Vider',
    submit_inquiry: 'Envoyer la Demande de Devis',
    close: 'Fermer',
    language: 'Langue'
  },
  es: {
    nav_home: 'Inicio',
    nav_products: 'Productos',
    nav_instruments: 'Vitrinas de Instrumentos',
    nav_dry_cabinets: 'Armarios Deshumidificadores',
    nav_applications: 'Aplicaciones',
    nav_technology: 'Tecnología Doble Modo',
    nav_guides: 'Guía de Humedad',
    nav_oem: 'OEM / ODM',
    nav_about: 'Nosotros',
    nav_contact: 'Contacto',
    quote_basket: 'Cesta de Cotización',
    request_quote: 'Elegir su Vitrina',
    request_oem_quote: 'Cotización B2B OEM',
    viewing_as: 'Ver como:',
    for_b2c: 'Músicos y Coleccionistas',
    for_b2b: 'Distribuidores y OEM/ODM',
    top_notice: 'Control Climático Activo de Doble Modo: Humidificación y Deshumidificación Automática a ±1% RH',
    hero_pill_brand: 'Proteja lo que importa. Controle la humedad.',
    hero_pill_badge: 'Modo Dual Activo',
    hero_title_prefix: 'Control Inteligente de Humedad para',
    hero_title_highlight: 'Instrumentos Sensibles y Objetos de Valor',
    hero_subtitle: 'Deshumidifica automáticamente en ambientes húmedos y humidifica por ultrasonido cuando el ambiente es seco.',
    hero_cta_instruments: 'Explorar Vitrinas para Instrumentos',
    hero_cta_dry: 'Explorar Armarios Electrónicos',
    hero_gateways: 'Accesos directos:',
    hero_gate_individual: 'Para Músicos y Coleccionistas',
    hero_gate_b2b: 'Para Tiendas, Estudios y Socios OEM',
    hero_climate_lock: 'BLOQUEO CLIMÁTICO ACTIVO',
    hero_safe_zone: 'Zona Acústica Segura',
    hero_zero_drift: 'Cero Deformación de Madera',
    hero_protected_assets: 'Objetos Protegidos:',
    hero_tech_link: 'Cómo Funciona el Modo Dual',
    feat_dual_mode: 'Modo Dual Activo',
    feat_dual_mode_desc: 'Humidifica y deshumidifica de forma automática',
    feat_precision: 'Precisión de ±1.0%',
    feat_precision_desc: 'Sensores digitales Sensirion suizos',
    feat_silent: '<22 dB Silencio de Estudio',
    feat_silent_desc: 'Sin vibraciones en estudios de grabación',
    feat_warranty: 'Garantía de 5 Años',
    feat_warranty_desc: 'Soporte y reemplazo modular global',
    sim_badge: 'Laboratorio de Microclima Interactivo',
    sim_title: 'Simulador de Estrés por Humedad en Tiempo Real',
    sim_desc: 'Mueva el control deslizante de 15% a 85% de humedad relativa y observe la protección instantánea de RHVault.',
    sim_ambient_label: 'Humedad Ambiental Simulada:',
    sim_preset_winter: 'Calefacción de Invierno Seca (20% RH)',
    sim_preset_target: 'Objetivo Ideal RHVault (45%–50% RH)',
    sim_preset_monsoon: 'Alta Humedad Costera (75% RH)',
    sim_chamber_internal: 'Estado Interior de la Cámara RHVault',
    sim_status_locked: 'Fijado en el Objetivo de 45.0% RH',
    sim_status_dehum: 'Deshumidificación Termoeléctrica Activa',
    sim_status_humid: 'Humidificación Ultrasónica Activa',
    sim_instrument_status: 'Impacto en los Materiales Guardados',
    view_details: 'Ver Especificaciones',
    add_to_rfq: '+ Agregar a Cotización',
    in_basket: 'En la Cesta',
    clear_all: 'Limpiar Todo',
    submit_inquiry: 'Enviar Solicitud Técnica',
    close: 'Cerrar',
    language: 'Idioma'
  },
  it: {
    nav_home: 'Home',
    nav_products: 'Prodotti',
    nav_instruments: 'Vetrine per Strumenti',
    nav_dry_cabinets: 'Armadi Deumidificatori',
    nav_applications: 'Applicazioni',
    nav_technology: 'Tecnologia Dual-Mode',
    nav_guides: 'Guida Umidità',
    nav_oem: 'OEM / ODM',
    nav_about: 'Chi Siamo',
    nav_contact: 'Contatti',
    quote_basket: 'Carrello Preventivo',
    request_quote: 'Trova la Tua Vetrina',
    request_oem_quote: 'Richiedi Preventivo OEM',
    viewing_as: 'Visualizza come:',
    for_b2c: 'Musicisti e Collezionisti',
    for_b2b: 'Rivenditori e OEM/ODM',
    top_notice: 'Controllo Attivo del Clima a Doppio Flusso: Umidificazione e Deumidificazione Automatica a ±1% UR',
    hero_pill_brand: 'Proteggi ciò che conta. Controlla l’umidità.',
    hero_pill_badge: 'Dual-Mode Attivo',
    hero_title_prefix: 'Controllo Intelligente dell’Umidità per',
    hero_title_highlight: 'Strumenti Musicali & Oggetti di Pregio',
    hero_subtitle: 'Deumidifica automaticamente con aria troppo umida e umidifica a ultrasuoni quando la stanza è secca.',
    hero_cta_instruments: 'Scopri le Vetrine per Strumenti',
    hero_cta_dry: 'Scopri gli Armadi Essiccatori',
    hero_gateways: 'Percorsi Dedicati:',
    hero_gate_individual: 'Per Musicisti e Collezionisti',
    hero_gate_b2b: 'Per Rivenditori, Studi & Partner OEM',
    hero_climate_lock: 'BLOCCO CLIMATICO ATTIVO',
    hero_safe_zone: 'Zona Acustica Protetta',
    hero_zero_drift: 'Zero Deformazione del Legno',
    hero_protected_assets: 'Beni Protetti:',
    hero_tech_link: 'Scopri Come Funziona il Dual-Mode',
    feat_dual_mode: 'Dual-Mode Attivo',
    feat_dual_mode_desc: 'Umidificazione e deumidificazione automatica',
    feat_precision: 'Precisione ±1.0%',
    feat_precision_desc: 'Sonde digitali svizzere Sensirion',
    feat_silent: '<22 dB Silenzio da Studio',
    feat_silent_desc: 'Zero vibrazioni negli studi di registrazione',
    feat_warranty: '5 Anni di Garanzia',
    feat_warranty_desc: 'Assistenza con ricambi modulari rapidi',
    sim_badge: 'Laboratorio Microclimatico Interattivo',
    sim_title: 'Simulatore di Umidità in Tempo Reale',
    sim_desc: 'Sposta il cursore dal 15% all’85% di umidità e osserva l’intervento automatico del sistema RHVault.',
    sim_ambient_label: 'Umidità Ambientale Simulata:',
    sim_preset_winter: 'Riscaldamento Invernale Secco (20% UR)',
    sim_preset_target: 'Obiettivo Ideale RHVault (45%–50% UR)',
    sim_preset_monsoon: 'Alta Umidità (75% UR)',
    sim_chamber_internal: 'Condizione Interna Camera RHVault',
    sim_status_locked: 'Bloccato sul Valore Target di 45.0% UR',
    sim_status_dehum: 'Deumidificazione Termoelettrica Attiva',
    sim_status_humid: 'Umidificazione a Ultrasuoni Attiva',
    sim_instrument_status: 'Impatto sui Beni Custoditi',
    view_details: 'Dettagli Tecnici',
    add_to_rfq: '+ Aggiungi al Preventivo',
    in_basket: 'Aggiunto',
    clear_all: 'Svuota Carrello',
    submit_inquiry: 'Invia Richiesta Preventivo',
    close: 'Chiudi',
    language: 'Lingua'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_products: 'المنتجات',
    nav_instruments: 'خزائن الآلات الموسيقية',
    nav_dry_cabinets: 'خزائن التجفيف الإلكترونية',
    nav_applications: 'مجالات الاستخدام',
    nav_technology: 'تكنولوجيا التحكم بالرطوبة',
    nav_guides: 'دليل الرطوبة',
    nav_oem: 'OEM / ODM',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    quote_basket: 'سلة طلب الأسعار',
    request_quote: 'اختر النموذج المناسب',
    request_oem_quote: 'طلب أسعار الجملة OEM',
    viewing_as: 'وضع العرض:',
    for_b2c: 'للموسيقيين وهواة الجمع',
    for_b2b: 'للموزعين وشركاء OEM/ODM',
    top_notice: 'حفظ مناخي نشط مزدوج: ترطيب وتجفيف تلقائي بدقة ±1% RH',
    hero_pill_brand: 'احمِ مقتنياتك الثمينة. تحكّم في الرطوبة بدقة.',
    hero_pill_badge: 'وضع مزدوج نشط',
    hero_title_prefix: 'تحكم ذكي في الرطوبة مصمم لـ',
    hero_title_highlight: 'الآلات الموسيقية الحساسة والمقتنيات الثمينة',
    hero_subtitle: 'إزالة الرطوبة تلقائيًا عند ارتفاع الرطوبة المحيطة، والترطيب بالموجات فوق الصوتية عند جفاف الغرفة، للحفاظ على المناخ المثالي طوال العام.',
    hero_cta_instruments: 'استكشف خزائن الآلات الموسيقية',
    hero_cta_dry: 'استكشف خزائن التجفيف الإلكترونية',
    hero_gateways: 'بوابات الوصول السريع:',
    hero_gate_individual: 'للموسيقيين وهواة الجمع الأفراد',
    hero_gate_b2b: 'لمتاجر الآلات، الاستوديوهات وشركاء التصنيع OEM',
    hero_climate_lock: 'تثبيت المناخ نشط',
    hero_safe_zone: 'المنطقة الآمنة للآلات الخشبية',
    hero_zero_drift: 'انعدام تشوه الخشب تماماً',
    hero_protected_assets: 'المقتنيات المحمية:',
    hero_tech_link: 'كيف تعمل تقنية الوضع المزدوج',
    feat_dual_mode: 'تحكم ثنائي الاتجاه مغلق',
    feat_dual_mode_desc: 'إزالة الرطوبة عند البلل، وترطيب تلقائي عند الجفاف',
    feat_precision: 'دقة عالية ±1.0% RH',
    feat_precision_desc: 'مستشعر رقمي سويسري فائق الدقة Sensirion',
    feat_silent: 'فائق الهدوء <22 ديسيبل',
    feat_silent_desc: 'بدون أي اهتزاز، مثالي لاستوديوهات التسجيل',
    feat_warranty: 'ضمان عالمي لمدة 5 سنوات',
    feat_warranty_desc: 'وحدة تحكم معيارية سهلة الصيانة بدون أدوات',
    sim_badge: 'مختبر المناخ الدقيق التفاعلي',
    sim_title: 'محاكي ضغط الرطوبة والتحكم النشط في الوقت الفعلي',
    sim_desc: 'حرّك شريط التمرير لاختبار الظروف من غرف التدفئة الجافة إلى الرطوبة الاستوائية العالية. شاهد التدخل الفوري لخزائن RHVault.',
    sim_ambient_label: 'رطوبة الغرفة المحاكاة:',
    sim_preset_winter: 'تدفئة شتوية جافة (20% RH)',
    sim_preset_target: 'الهدف المثالي (45%–50% RH)',
    sim_preset_monsoon: 'رطوبة موسمية عالية (75% RH)',
    sim_chamber_internal: 'بيئة خزانة RHVault المستقرة',
    sim_status_locked: 'مثبت بدقة عند هدف 45.0% RH',
    sim_status_dehum: 'نظام إزالة الرطوبة بأشباه الموصلات نشط',
    sim_status_humid: 'نظام الترطيب بالموجات فوق الصوتية نشط',
    sim_instrument_status: 'الحالة الفيزيائية للآلة',
    view_details: 'عرض التفاصيل والمواصفات',
    add_to_rfq: '+ إضافة لطلب السعر',
    in_basket: 'مضاف في السلة',
    clear_all: 'مسح الكل',
    submit_inquiry: 'إرسال طلب عرض أسعار تقني',
    close: 'إغلاق',
    language: 'اللغة'
  },
  ru: {
    nav_home: 'Главная',
    nav_products: 'Все продукты',
    nav_instruments: 'Шкафы для инструментов',
    nav_dry_cabinets: 'Электронные сухие шкафы',
    nav_applications: 'Сферы применения',
    nav_technology: 'Технология Dual-Mode',
    nav_guides: 'Гид по влажности',
    nav_oem: 'OEM / ODM',
    nav_about: 'О компании',
    nav_contact: 'Контакты',
    quote_basket: 'Корзина запроса',
    request_quote: 'Выбрать модель',
    request_oem_quote: 'Запрос OEM оптовых цен',
    viewing_as: 'Режим просмотра:',
    for_b2c: 'Для музыкантов и коллекционеров',
    for_b2b: 'Для дилеров и OEM/ODM',
    top_notice: 'Активный двухрежимный климат-контроль: автоматическое увлажнение и осушение с точностью ±1% RH',
    hero_pill_brand: 'Защитите ценное. Контролируйте влажность.',
    hero_pill_badge: 'Активный двухсторонний режим',
    hero_title_prefix: 'Интеллектуальный климат-контроль для',
    hero_title_highlight: 'Музыкальных инструментов и оптики',
    hero_subtitle: 'Автоматически осушает воздух при высокой влажности и бережно увлажняет ультразвуком при зимней сухости.',
    hero_cta_instruments: 'Шкафы для инструментов',
    hero_cta_dry: 'Электронные сухие шкафы',
    hero_gateways: 'Выбор профиля:',
    hero_gate_individual: 'Для музыкантов и коллекционеров',
    hero_gate_b2b: 'Для салонов, студий и партнеров OEM',
    hero_climate_lock: 'КЛИМАТ-ЛОК АКТИВЕН',
    hero_safe_zone: 'Безопасная зона для дерева',
    hero_zero_drift: 'Нулевая деформация древесины',
    hero_protected_assets: 'Защищаемые объекты:',
    hero_tech_link: 'Как работает Dual-Mode',
    feat_dual_mode: 'Активный Dual-Mode',
    feat_dual_mode_desc: 'Автоматическое осушение и увлажнение',
    feat_precision: 'Точность ±1.0%',
    feat_precision_desc: 'Швейцарские цифровые датчики Sensirion',
    feat_silent: '<22 дБ Студийная тишина',
    feat_silent_desc: 'Без вибраций для студий звукозаписи',
    feat_warranty: '5 лет гарантии',
    feat_warranty_desc: 'Глобальная модульная замена узлов',
    sim_badge: 'Интерактивная микроклиматическая лаборатория',
    sim_title: 'Симулятор влажности в реальном времени',
    sim_desc: 'Перемещайте ползунок от 15% до 85% RH и наблюдайте реакцию системы активной стабилизации RHVault.',
    sim_ambient_label: 'Влажность в помещении:',
    sim_preset_winter: 'Зимнее отопление (20% RH)',
    sim_preset_target: 'Идеальная норма (45%–50% RH)',
    sim_preset_monsoon: 'Влажное лето (75% RH)',
    sim_chamber_internal: 'Внутри шкафа RHVault',
    sim_status_locked: 'Зафиксировано на идеальных 45.0% RH',
    sim_status_dehum: 'Активное термоэлектрическое осушение',
    sim_status_humid: 'Активное ультразвуковое увлажнение',
    sim_instrument_status: 'Состояние хранимых материалов',
    view_details: 'Характеристики',
    add_to_rfq: '+ Добавить в запрос',
    in_basket: 'В запросе',
    clear_all: 'Очистить',
    submit_inquiry: 'Отправить запрос',
    close: 'Закрыть',
    language: 'Язык'
  }
};

export interface TranslationHelper {
  (key: string, defaultText?: string): string;
  nav: {
    home: string;
    products: string;
    instruments: string;
    dryCabinets: string;
    applications: string;
    technology: string;
    guides: string;
    oem: string;
    about: string;
    contact: string;
    quote: string;
    getQuote: string;
    viewingAs: string;
    forB2c: string;
    forB2b: string;
    topNotice: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    ctaExploreInstruments: string;
    ctaExploreDry: string;
  };
  footer: {
    nav: string;
    resources: string;
    rights: string;
  };
}

const FOOTER_LABELS: Record<SupportedLanguage, { nav: string; resources: string; rights: string }> = {
  en: {
    nav: 'Navigation',
    resources: 'Knowledge & Resources',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. All rights reserved.'
  },
  es: {
    nav: 'Navegación',
    resources: 'Conocimiento y Recursos',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. Todos los derechos reservados.'
  },
  ja: {
    nav: 'ナビゲーション',
    resources: '技術知識・リソース',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. (珠海市迪迈斯精密电器有限公司) All rights reserved.'
  },
  ar: {
    nav: 'التنقل',
    resources: 'المعرفة والمصادر',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. جميع الحقوق محفوظة.'
  },
  de: {
    nav: 'Navigation',
    resources: 'Wissen & Ressourcen',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. Alle Rechte vorbehalten.'
  },
  fr: {
    nav: 'Navigation',
    resources: 'Ressources & Savoir',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. Tous droits réservés.'
  },
  it: {
    nav: 'Navigazione',
    resources: 'Risorse e Conoscenza',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. Tutti i diritti riservati.'
  },
  ru: {
    nav: 'Навигация',
    resources: 'База знаний',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. Все права защищены.'
  },
  vi: {
    nav: 'Điều hướng',
    resources: 'Kiến thức & Tài nguyên',
    rights: 'Zhuhai Deomax Precision Electrical Co., Ltd. Bảo lưu mọi quyền.'
  },
  zh: {
    nav: '快速导航',
    resources: '知识库与资源',
    rights: '珠海市迪迈斯精密电器有限公司 保留所有权利。'
  }
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationHelper;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  // Load preferred language from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('rhvault_lang') as SupportedLanguage;
      if (saved && TRANSLATIONS[saved]) {
        setLanguage(saved);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleSetLanguage = (lang: SupportedLanguage) => {
    setLanguage(lang);
    try {
      localStorage.setItem('rhvault_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  const t: TranslationHelper = useMemo(() => {
    const fn = (key: string, defaultText?: string): string => {
      const langDict = TRANSLATIONS[language];
      if (langDict && langDict[key]) {
        return langDict[key];
      }
      const enDict = TRANSLATIONS.en;
      if (enDict && enDict[key]) {
        return enDict[key];
      }
      return defaultText || key;
    };

    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    const enDict = TRANSLATIONS.en;
    const getVal = (key: string, fallback = '') => dict[key] || enDict[key] || fallback;
    const footerInfo = FOOTER_LABELS[language] || FOOTER_LABELS.en;

    const nav = {
      home: getVal('nav_home', 'Home'),
      products: getVal('nav_products', 'Products'),
      instruments: getVal('nav_instruments', 'Instrument Cabinets'),
      dryCabinets: getVal('nav_dry_cabinets', 'Electronic Dry Cabinets'),
      applications: getVal('nav_applications', 'Applications'),
      technology: getVal('nav_technology', 'Technology'),
      guides: getVal('nav_guides', 'Humidity Guide'),
      oem: getVal('nav_oem', 'OEM / ODM'),
      about: getVal('nav_about', 'About Us'),
      contact: getVal('nav_contact', 'Contact'),
      quote: getVal('quote_basket', 'Quote Basket'),
      getQuote: getVal('request_quote', 'Find Your Vault'),
      viewingAs: getVal('viewing_as', 'Viewing as:'),
      forB2c: getVal('for_b2c', 'For Musicians & Collectors'),
      forB2b: getVal('for_b2b', 'For Dealers & OEM/ODM'),
      topNotice: getVal('top_notice', 'Active Dual-Mode Climate Storage: Automatic Humidification & Dehumidification to ±1% RH')
    };

    const heroTitlePrefix = getVal('hero_title_prefix', '');
    const heroTitleHighlight = getVal('hero_title_highlight', '');
    const fullHeroTitle = [heroTitlePrefix, heroTitleHighlight].filter(Boolean).join(' ') || 'Smart Humidity Control for Sensitive Instruments & Valuables';

    const hero = {
      tagline: getVal('hero_pill_brand', 'Protect What Matters. Control the Humidity.'),
      title: fullHeroTitle,
      subtitle: getVal('hero_subtitle', 'Automatically dehumidify when ambient humidity is too high, and humidify when the room becomes too dry.'),
      ctaExploreInstruments: getVal('hero_cta_instruments', 'Explore Musical Instrument Cabinets'),
      ctaExploreDry: getVal('hero_cta_dry', 'Explore Electronic Dry Cabinets')
    };

    const footer = {
      nav: footerInfo.nav,
      resources: footerInfo.resources,
      rights: footerInfo.rights
    };

    const helper = Object.assign(fn, {
      nav,
      hero,
      footer
    }) as TranslationHelper;

    return helper;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
