'use client'

import { useEffect, useState } from 'react'

// ─────────────────────────────────────────────
//  CONFIG — update these two props per build
//  <SalePopup businessName="Bellerose Roofing" expiryDate="June 30, 2026" />
// ─────────────────────────────────────────────
const WA_NUMBER = '15796883737'
const EMAIL = 'kong@wdjcreative.com'
const DELAY_MS = 11000

interface SalePopupProps {
  businessName: string
  expiryDate: string
  trade: string
}

export default function SalePopup({ businessName, expiryDate, trade }: SalePopupProps) {
  const [phase, setPhase] = useState<'hidden' | 'open' | 'pill'>('hidden')
  const [visible, setVisible] = useState(false)

  const waMessage = encodeURIComponent(
    `Hey, I just saw the site you built for ${businessName} — I'd love to learn more.`
  )
  const waHref = `https://wa.me/${WA_NUMBER}?text=${waMessage}`

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('open')
      requestAnimationFrame(() => setVisible(true))
    }, DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function close() {
    setVisible(false)
    setTimeout(() => setPhase('pill'), 350)
  }

  function reopen() {
    setPhase('open')
    requestAnimationFrame(() => setVisible(true))
  }

  if (phase === 'hidden') return null

  return (
    <>
      <style>{`
        @keyframes qf-pulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(0,0,0,0.35), 0 0 0 0 rgba(99,102,241,0); }
          50%       { box-shadow: 0 4px 24px rgba(0,0,0,0.35), 0 0 0 9px rgba(99,102,241,0.22); }
        }
        @keyframes qf-pill-in {
          from { opacity: 0; transform: translateY(12px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .qf-pill {
          animation: qf-pill-in 0.32s cubic-bezier(0.34,1.56,0.64,1) forwards,
                     qf-pulse 2.6s ease-in-out 0.4s infinite;
        }
        .qf-popup-enter {
          transition: opacity 0.35s ease, transform 0.38s cubic-bezier(0.34,1.56,0.64,1);
        }
        .qf-overlay-enter {
          transition: opacity 0.3s ease;
        }
      `}</style>

      {/* ── Overlay ── */}
      {phase === 'open' && (
        <div
          onClick={close}
          className="qf-overlay-enter fixed inset-0 z-[9998] flex items-center justify-center px-4"
          style={{
            background: 'rgba(10, 14, 26, 0.55)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            opacity: visible ? 1 : 0,
          }}
        >
          {/* ── Popup card ── */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="qf-popup-enter relative w-full max-w-sm rounded-2xl bg-white px-8 py-9 shadow-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
            }}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              style={{ fontSize: '18px', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ✕
            </button>

            {/* Tag */}
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ background: '#fff7ed', color: '#c2410c', letterSpacing: '0.1em' }}
            >
              This site is for sale
            </span>

            {/* Headline */}
            <h2
              className="mb-3 leading-snug text-gray-900"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '21px', fontWeight: 600 }}
            >
              Hey {businessName} — we built this for you.
            </h2>

            {/* Subheading */}
            <p className="mb-5 text-sm leading-relaxed text-gray-600">
              This site is live and ready to go. We wanted you to see it before we offer it to anyone else.
            </p>

            {/* Bullets */}
            <ul className="mb-5 space-y-2.5">
              {[
                <>Built to rank on Google <em>and</em> show up when people search on ChatGPT or Siri for {trade}.</>,
                'Fully custom to your trade, your area, and your reputation.',
                'Every detail of this site was built specifically for you and your business.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700" style={{ lineHeight: '1.55' }}>
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: '#16a34a' }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-5 h-px bg-gray-100" />

            {/* Expiry */}
            <p className="mb-5 flex items-center gap-1.5 text-xs text-gray-400">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Site self-destructs from our server on&nbsp;<strong style={{ color: '#dc2626' }}>{expiryDate}</strong>
            </p>

            {/* WhatsApp CTA */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-sm font-semibold text-white transition-all"
              style={{ background: '#25D366', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1ebe5d')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#25D366')}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message us on WhatsApp
            </a>

            {/* Email fallback */}
            <p className="text-center text-xs text-gray-400">
              Or email us at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium"
                style={{ color: '#6366f1', textDecoration: 'none' }}
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* ── Floating pill ── */}
      {phase === 'pill' && (
        <button
          onClick={reopen}
          aria-label="Reopen site sale popup"
          className="qf-pill fixed bottom-6 right-6 z-[9999] flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
          style={{
            background: '#111827',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          This site is for sale
        </button>
      )}
    </>
  )
}
