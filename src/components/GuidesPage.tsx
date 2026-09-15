import React, { useState } from 'react';
import { GUIDE_ARTICLES } from '../data/guides';
import { GuideArticle } from '../types';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Tag, 
  ArrowLeft, 
  Share2, 
  Check, 
  Search, 
  Sparkles,
  HelpCircle,
  FileText
} from 'lucide-react';

export const GuidesPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<GuideArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSlug, setCopiedSlug] = useState(false);

  const filteredArticles = GUIDE_ARTICLES.filter(a => {
    const q = searchQuery.toLowerCase();
    return a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.seoKeywords.some(k => k.toLowerCase().includes(q));
  });

  const handleShare = () => {
    setCopiedSlug(true);
    setTimeout(() => setCopiedSlug(false), 2000);
  };

  return (
    <div className="py-12 bg-white text-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedArticle ? (
          /* Single Article Reader View */
          <div className="max-w-4xl mx-auto">
            <button
              id="back-to-guides-btn"
              onClick={() => setSelectedArticle(null)}
              className="mb-8 inline-flex items-center space-x-2 text-xs font-semibold text-neutral-600 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Humidity Knowledge Hub</span>
            </button>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-200 text-xs text-neutral-500">
                <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {selectedArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {selectedArticle.publishedDate}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
                {selectedArticle.title}
              </h1>

              {/* Callout Box */}
              <div className="my-6 p-4 rounded-xl bg-amber-50/60 border border-amber-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                    Scientific Synopsis
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {selectedArticle.summary}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-8 mt-8 text-neutral-800 text-sm sm:text-base leading-relaxed">
                {selectedArticle.content.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-xl font-bold text-neutral-900 font-heading">
                      {sec.sectionHeading}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-neutral-700">
                        {p}
                      </p>
                    ))}
                    {sec.bulletPoints && (
                      <ul className="space-y-2 pl-2 mt-2">
                        {sec.bulletPoints.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* SEO Tags / Google Search Targets */}
              <div className="mt-12 pt-6 border-t border-neutral-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-neutral-400" />
                  <span>SEO Target Keywords for Lutherie &amp; Preservation</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.seoKeywords.map((kw, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-xs font-mono border border-neutral-200"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={handleShare}
                  className="px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold flex items-center gap-1.5 border border-neutral-200 transition-colors"
                >
                  {copiedSlug ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-neutral-600" />}
                  <span>{copiedSlug ? 'Link Copied!' : 'Share Article'}</span>
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs text-amber-800 hover:underline font-semibold"
                >
                  Browse more guides →
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Guides Index / List */
          <div>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Knowledge &amp; Environmental Science</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-neutral-900">
                Humidity Knowledge &amp; Research Library
              </h1>
              <p className="mt-3 text-base sm:text-lg text-neutral-600">
                Authoritative guides for lutherie masters, string players, brass musicians, photographers, and archivists on microclimate science and material preservation.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mb-8 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., guitar cracking, violin hide glue, fungus)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 shadow-xs"
              />
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white rounded-xl border border-neutral-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-3">
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-lg font-bold text-neutral-900 group-hover:text-amber-800 transition-colors font-heading leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs text-neutral-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-xs text-amber-800 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read Full Guide →
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {article.publishedDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
