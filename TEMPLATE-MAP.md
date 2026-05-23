# Template Map: Unclog
**Framework**: Next.js 16 (React 19) App Router  
**Styling**: Tailwind CSS v4 + custom CSS (`styles/homepage.css`, `styles/inner-pages.css`, `styles/common.css`)  
**Animations**: GSAP (lazily imported — loads on client only)  
**Architecture**: Mixed — partially data-driven (`/data/` folder handles testimonials, FAQ, pricing, blog, services, nav), partially hardcoded (Hero copy, Header phone, About copy, CTA copy, all service detail page props)  
**Package Manager**: npm (use `npm install` and `npm run dev`)  
**Last Mapped**: 2026-05-23

---

## Quick Reference

This template has a `/data/` folder with 10 TypeScript files that handle the most frequently swapped content — services, testimonials, FAQ, pricing, blog posts, and nav links. However, several high-visibility sections are still hardcoded inline: the Hero headline and video, the Header phone number, the About section copy, the CTA section copy, and all 5 service detail pages (which pass their content as component props). Repositioning requires editing both the data files (fast) and a targeted list of components and page files (moderate effort). No index registry file is needed — each page is its own static route.

---

## Pages & Routes

| Route | Purpose | Data Source | Hardcoded Content? |
|-------|---------|-------------|-------------------|
| `/` | Homepage | Components pull from data files | Yes — Hero H1, description, video, CTA section copy, About copy, NeedServices copy |
| `/about-us` | About Us | `data/about.ts` (why-choose bullets) | Yes — About heading, 2 body paragraphs, FleetSection copy + images |
| `/contact-us` | Contact form + map | None | Yes — Google Maps embed URL, page metadata |
| `/faq` | FAQs | `data/faq.ts` | Minimal — PageHeroSection title/subtitle only |
| `/services-page` | Services overview | `data/services.ts` | Minimal — PageHeroSection title/subtitle only |
| `/blog-unclogme` | Blog listing | `data/blog.ts` | Minimal — PageHeroSection title/subtitle only |
| `/residential-unclogging` | Service detail | Page props (hardcoded inline) | Yes — heading, intro, whatWeDo, whyChooseUs bullets, metadata |
| `/commercial-unclogging` | Service detail | Page props (hardcoded inline) | Yes — same as above |
| `/camera-inspection` | Service detail | Page props (hardcoded inline) | Yes — same as above |
| `/grease-trap-cleaning` | Service detail | Page props (hardcoded inline) | Yes — same as above |
| `/recurring-grease-trap-cleaning-maintenance` | Service detail | Page props (hardcoded inline) | Yes — same as above |
| `/become-an-unclogger` | Careers/hiring page | `data/become.ts` | Yes — BecomeSection copy (rename or remove for most clients) |

---

## Data Files — Content Slots

### `data/nav.ts`
_Controls main nav (header dropdown) and both footer link columns._

| Export | Type | Notes |
|--------|------|-------|
| `navItems` | `NavItem[]` | Main nav. Each item has `label`, `href`, optional `children[]` for dropdown |
| `quickLinks` | `FooterLink[]` | Footer "Quick Links" column |
| `servicesLinks` | `FooterLink[]` | Footer "Our Services" column |

**To update nav**: Edit `navItems` array. Flatten the structure (remove `children`) for simple trade clients.  
**Footer links**: Update `quickLinks` and `servicesLinks` to match the client's actual pages.

---

### `data/services.ts`
_Drives the homepage Services grid and service detail sidebar._

| Export | Type | Fields | Notes |
|--------|------|--------|-------|
| `services` | `Service[]` | `number`, `title`, `image`, `href`, `width`, `height` | 4 service cards on homepage. `number` is decorative ("01"–"04") |
| `sidebarServices` | `SidebarService[]` | `label`, `href` | Sidebar nav on all service detail pages |

**Note**: `ServiceDetailSection.tsx` also has a **hardcoded `SIDEBAR_SERVICES` array** inside the component that duplicates `sidebarServices`. Update both when adding/removing services.

---

### `data/testimonials.ts`
_Drives `TestimonialsSection` — shown on homepage and most inner pages._

| Field | Type | Notes |
|-------|------|-------|
| `name` | `string` | Reviewer name |
| `rating` | `number` | Stars (1–5) |
| `text` | `string` | Review body |
| `avatar` | `string` | URL — typically a Google avatar URL. Replace with `/images/avatar-*.png` for local images |

**Minimum**: 3 reviews. **Ideal**: 5–6 for carousel variety.

---

### `data/faq.ts`
_Drives `FAQSection` on homepage and the `/faq` page._

| Field | Type | Notes |
|-------|------|-------|
| `q` | `string` | Question |
| `a` | `string` | Answer (plain text only, no JSX) |

**Typical count**: 4–6 items. Keep answers short — 2–3 sentences max for the accordion layout.

---

### `data/pricing.ts`
_Drives `PricingSection` — shown on homepage and service detail pages._

| Field | Type | Notes |
|-------|------|-------|
| `price` | `number` | Numeric price (displayed as `$XXX`) |
| `note` | `string` | Below-price note (e.g., "No hidden fees") |
| `title` | `string` | Package name |
| `features` | `string[]` | Bullet list of included items |
| `description` | `string` | Short descriptive copy (supports `\n\n` for line breaks) |
| `highlight?` | `boolean` | Renders card with accent color border as the "featured" plan |

**Typical count**: 3–4 pricing cards. Not all trade businesses use public pricing — remove `PricingSection` from page imports if client doesn't want prices shown.

---

### `data/blog.ts`
_Drives `BlogSection` on homepage and the `/blog-unclogme` page._

| Field | Type | Notes |
|-------|------|-------|
| `slug` | `string` | Full URL path (e.g., `/2026/02/02/post-slug/`) |
| `image` | `string` | Card image path — store in `/public/images/` |
| `date` | `string` | Day number as string ("02") |
| `monthYear` | `string` | Display string ("Feb '26") |
| `category` | `string` | Display category label |
| `categoryHref` | `string` | Category URL |
| `title` | `string` | Post title |
| `excerpt` | `string` | 1–2 sentence preview |

**Note**: This template does not have individual blog post pages — slugs can link to an external blog or CMS. If the client doesn't have a blog, remove `BlogSection` from `app/page.tsx` imports.

---

### `data/about.ts`
_Provides the bullet list in the "Why Choose Us" portion of `AboutSection`._

| Export | Type | Notes |
|--------|------|-------|
| `whyChooseUs` | `string[]` | 3–5 short bullet strings. Rendered with check icons. |

**Note**: The About section heading, body paragraphs, and years-of-experience stat are hardcoded in `AboutSection.tsx` itself.

---

### `data/ticker.ts`
_Drives the `MarqueeTicker` scrolling banner below the Hero._

| Export | Type | Notes |
|--------|------|-------|
| `tickerItems` | `string[]` | Short labels that scroll continuously. 6–10 items ideal. |

---

### `data/why-choose.ts`
_Drives `WhyChooseSection` (shown on the About Us page)._

| Field | Type | Notes |
|-------|------|-------|
| `title` | `string` | Card heading (e.g., "Quality Service") |
| `text` | `string` | 1–2 sentences of supporting copy |

**Typical count**: 6 cards (2×3 grid).

---

### `data/become.ts`
_Drives `BecomeSection` on the `/become-an-unclogger` page._

| Field | Type | Notes |
|-------|------|-------|
| `num` | `string` | Decorative number ("01"–"04") |
| `title` | `string` | Benefit heading |
| `text` | `string` | 1–2 sentence description |

**For most clients**: Rename this page to `/careers` or remove it entirely. Update `data/nav.ts` to remove the nav entry.

---

## Hardcoded Components (Require Direct Editing)

| Component / File | What to Change | Effort |
|-----------------|---------------|--------|
| `components/custom/hero/HeroSection.tsx` | H1 text (lines 73–78), description paragraph (lines 83–89), button hrefs (lines 92–97), video `src` URL (line 65), poster image (line 62) | **High** — video URL must be replaced with client video or removed |
| `components/custom/header/Header.tsx` | Phone number `href` + display text (line 54–58), topbar item labels (line 40, 49), logo `src` (line 69) | **Low** |
| `components/custom/footer/Footer.tsx` | Logo `src` (line 13), brand description paragraph (lines 21–24), social `href` links (lines 27–41), copyright text (line 78), legal link hrefs (lines 81–82) | **Low** |
| `components/custom/about/AboutSection.tsx` | About heading (lines 43–45), 2 body paragraphs (lines 47–54), years-of-experience stat (line 101), about image `src` (line 84) | **Medium** |
| `components/custom/cta/CTAFormSection.tsx` | Eyebrow (line 66), heading (lines 67–70), subtext (lines 73–76), `WHY_LEFT` array (lines 48–53), `WHY_RIGHT` array (lines 54–59), right-panel heading + paragraphs (lines 143–150) | **Medium** |
| `components/custom/need-services/NeedServicesSection.tsx` | Heading (lines 33–34), paragraph (lines 37–39), button href (line 41) | **Low** |
| `components/custom/fleet/FleetSection.tsx` | Fleet heading (line 42), intro paragraph (lines 44–50), 3 truck image `src` paths (lines 55–75) — currently uses `/wp-assets/` images that must be replaced | **Medium** |
| `components/custom/service-detail/ServiceDetailSection.tsx` | `SIDEBAR_SERVICES` hardcoded array (lines 24–30) — must match `data/services.ts` entries | **Low** |
| `app/layout.tsx` | Default site `title` and `description` metadata (lines 13–15) | **Low** |
| `app/contact-us/page.tsx` | Google Maps `src` embed URL (line 27), page `metadata` title + description | **Low** |
| Each service `page.tsx` (×5) | `PageHeroSection` title + subtitle, `ServiceDetailSection` heading + `intro[]` + `whatWeDo[]` + `whyChooseUs[]`, page `metadata` title + description | **Medium per page** |

---

## Navigation

- **Main nav file**: `data/nav.ts` → `navItems`
- **Nav type**: 2-level dropdown (label + optional `children[]` array for sub-items)
- **Current structure**: 5 top-level items — Homepage, About (×2 children), Services (×4 children), Blog, Contact (×2 children)
- **Recommended for trade clients**: Simplify to 4–5 flat items, no dropdowns. Suggested: `[Home, Services, About, Blog, Contact]`
- **Mobile nav**: `components/custom/header/NavMenu.tsx` — reads the same `navItems` export
- **Footer nav**: Also from `data/nav.ts` — update `quickLinks` and `servicesLinks` to match final nav structure

---

## Image Slots

| Slot | File | Current Asset | Action Required |
|------|------|--------------|-----------------|
| Hero video | `HeroSection.tsx` line 65 | External URL: `unclogme.com/wp-content/...mp4` | **Replace** — upload client video to `/public/videos/` or use a still image fallback |
| Hero video poster | `HeroSection.tsx` line 62 | `/wp-assets/Title-Background-Image-scaled.webp` | **Replace** with client hero image |
| Header logo | `Header.tsx` line 69 | `/logo.png` (200×44) | **Replace** with client logo |
| Footer logo | `Footer.tsx` line 13 | `/images/logo-image-50.png` (239×58) | **Replace** with client logo |
| About section photo | `AboutSection.tsx` line 84 | `/images/about-row.webp` (690×613) | **Replace** with client team/work photo |
| About decoration icon | `AboutSection.tsx` line 94 | `/images/vector-decoration.svg` | Optional — keep or replace with client-appropriate icon |
| Service card image 1 | `data/services.ts` line 29 | `/images/service-1.png` (535×643) | **Replace** with client service photo |
| Service card image 2 | `data/services.ts` line 36 | `/images/service-2.png` (535×643) | **Replace** |
| Service card image 3 | `data/services.ts` line 43 | `/images/service-3.webp` (535×643) | **Replace** |
| Service card image 4 | `data/services.ts` line 50 | `/images/service-4.webp` (535×643) | **Replace** |
| Service detail sidebar | Each service `page.tsx` | Same service images | **Same files as above** — already linked via page props |
| Fleet truck 1 | `FleetSection.tsx` line 55 | `/wp-assets/About-Row-IMG-1.webp` | **Replace** with client truck/equipment photo |
| Fleet truck 2 | `FleetSection.tsx` line 63 | `/wp-assets/Truck-Example-2.webp` | **Replace** |
| Fleet truck 3 | `FleetSection.tsx` line 71 | `/wp-assets/Truck-Example-3.webp` | **Replace** |
| Blog post image 1 | `data/blog.ts` | `/images/blog-3.png` | **Replace** with client blog images or stock photos |
| Blog post image 2 | `data/blog.ts` | `/images/blog-2.png` | **Replace** |
| CTA background | `styles/homepage.css` (referenced via CSS) | `/images/cta-bg.png` | **Replace** if different background desired |
| Testimonial avatars | `data/testimonials.ts` | External Google avatar URLs | **Replace** with `/images/avatar-name.png` or leave as URLs if Google-sourced |

---

## Pages Not Included (Commonly Needed for Trade Clients)

| Page | Path | When to Add |
|------|------|-------------|
| Before/After Gallery | `/gallery` | Always recommended — strong trust signal |
| Service Areas | `/service-areas` | When client covers multiple distinct cities/regions |
| Privacy Policy | `/privacy-policy` | Required for GDPR / contact form compliance |
| Thank You / Confirmation | `/thank-you` | After form submission — improves conversion tracking |

---

## Repositioning Checklist

Use this checklist for every client build on the Unclog template.

### Phase 1 — Data Files (start here, lowest risk)
- [ ] `data/nav.ts` — Update `navItems` (simplify to flat nav), `quickLinks`, `servicesLinks` to match client's pages and services
- [ ] `data/services.ts` — Replace service titles, hrefs, and image paths for client's actual services. Also update `sidebarServices[]`
- [ ] `data/testimonials.ts` — Replace all reviews with client's real Google/Yelp reviews. Use real avatar URLs or download and store locally
- [ ] `data/faq.ts` — Replace all FAQ items with trade-appropriate Q&A for client
- [ ] `data/pricing.ts` — Replace pricing cards with client's packages, or remove `PricingSection` from page imports if client doesn't advertise prices
- [ ] `data/blog.ts` — Replace with client's blog posts, or remove `BlogSection` from `app/page.tsx` if no blog
- [ ] `data/about.ts` — Replace `whyChooseUs[]` bullets with client-specific differentiators
- [ ] `data/ticker.ts` — Replace scrolling labels with client's services and credentials
- [ ] `data/why-choose.ts` — Replace 6 cards with client's actual USPs
- [ ] `data/become.ts` — Replace benefits, OR skip if removing the `/become-an-unclogger` page

### Phase 2 — Global Layout & Identity
- [ ] `app/layout.tsx` — Update default site `title` and `description` metadata (site-wide fallback)
- [ ] `components/custom/header/Header.tsx` — Replace phone number (both `href` and display text), update topbar items, swap logo `src`
- [ ] `components/custom/footer/Footer.tsx` — Swap logo `src`, rewrite brand description, update social link `href`s, update copyright text and legal link hrefs

### Phase 3 — Homepage Sections
- [ ] `components/custom/hero/HeroSection.tsx` — Rewrite H1, description, button hrefs. **Replace video `src`** with client video (upload to `/public/videos/hero.mp4`) and update poster image. If no video: swap `<video>` for `<Image>` with a full-bleed hero photo
- [ ] `components/custom/about/AboutSection.tsx` — Rewrite About heading, 2 body paragraphs, update years-of-experience stat, replace about image
- [ ] `components/custom/cta/CTAFormSection.tsx` — Update eyebrow, heading, subtext, `WHY_LEFT` and `WHY_RIGHT` arrays, right-panel heading and paragraphs
- [ ] `components/custom/need-services/NeedServicesSection.tsx` — Update heading and paragraph to match client's trade + city

### Phase 4 — Inner Pages
- [ ] `components/custom/fleet/FleetSection.tsx` — Rewrite fleet heading and intro paragraph. **Replace all 3 `/wp-assets/` truck image `src` paths** with client photos or library images
- [ ] `components/custom/service-detail/ServiceDetailSection.tsx` — Update `SIDEBAR_SERVICES` hardcoded array to match final service list
- [ ] `app/contact-us/page.tsx` — Replace Google Maps embed `src` with client's actual business address map URL. Update page metadata
- [ ] Each service `page.tsx` (×number of client services):
  - Update `PageHeroSection` title + subtitle
  - Update `ServiceDetailSection` props: `heading`, `intro[]`, `whatWeDo[]`, `whyChooseUs[]`, `sidebarImage`
  - Update `metadata` title + description
  - **Delete service pages the client doesn't offer** (e.g., remove grease trap pages for a residential plumber)
- [ ] `/become-an-unclogger` — Rename to `/careers` or delete the folder. Update nav in `data/nav.ts`

### Phase 5 — Images
- [ ] Replace all `/wp-assets/` images (Hero poster, Fleet trucks) — these are UnclogMe-specific
- [ ] Replace service card images (4× in `data/services.ts` + same in service pages)
- [ ] Replace About photo (`/images/about-row.webp`)
- [ ] Replace both logo files (`/logo.png` and `/images/logo-image-50.png`)
- [ ] Replace or remove blog images
- [ ] Run image-library-matcher skill for any remaining `[TODO: Replace with...]` gaps

### Phase 6 — Quality Check
- [ ] All phone numbers show client's actual number (Header topbar, Footer, CTA section, contact page)
- [ ] All service names match client's actual offerings
- [ ] No "UnclogMe," "Miami-Dade," or "Aaron" references remain (unless client is in that area)
- [ ] No `/wp-assets/` image references remain in any component
- [ ] Video `src` is either a local file or a client-controlled CDN URL (not `unclogme.com` domain)
- [ ] Google Maps URL shows client's actual business address
- [ ] `npm run build` passes with zero TypeScript errors
- [ ] All removed service pages are also removed from `data/nav.ts`, `data/services.ts`, and `ServiceDetailSection.tsx` SIDEBAR_SERVICES

---

## Conceptual Remapping

_This template was built for a Miami-Dade drain unclogging and grease trap business. When repositioning to other trades:_

| Unclog Template Concept | Other Trade Equivalent |
|------------------------|----------------------|
| Drain unclogging services | Any residential/commercial service (HVAC tune-up, roof repair, etc.) |
| Grease trap cleaning | Specialty commercial service (preventive maintenance contracts) |
| Camera inspection | Diagnostic/assessment service (electrical inspection, home energy audit) |
| "Become an Unclogger" page | Careers page (rename) or delete entirely |
| Fleet section (trucks) | Equipment section — reframe as "Our Equipment" for any service vehicle biz |
| Miami-Dade / Broward / Palm Beach | Replace with client's actual service area throughout |
| "24/7 emergency" messaging | Adjust to client's actual availability (not all trades are 24/7) |
| Pricing cards | Works well for trades with package pricing. Remove if client quotes per-job only |
| "Aaron" references (in stock testimonials) | Replace with real client testimonials |
