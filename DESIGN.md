# DESIGN.md — BetterAringay.org Design System

**Municipality of Aringay, La Union — Coastal gateway to La Union**
`24 barangays • 50,380 citizens (2020) • 84.54 km² • Lingayen Gulf • 16°24′N 120°21′E`
_For humans and AI agents — read before building any UI._

> Shadcn tokens style components. This file tells you how to **compose** them for Aringay — density, hierarchy, and taste — so you don't produce generic AI slop.

---

## 1. Visual Theme & Atmosphere

**Aringay is coastal municipal, not monochrome SaaS.** Light, civic, trustworthy — seal blue as anchor, warm white body, restrained accent.

- **Visual style:** civic minimal, editorial — not glassmorphism, not SaaS dense
- **Color stance:** Aringay seal **primary #0032a0** (deep navy blue) + **info #00184d** (InfoBar) + **hotline red #ff0000→#cc0000** — monochrome shadcn palette is **not** used for operational surfaces
- **Design intent:** Keep outputs recognizable as _government transparency_ — high contrast, high legibility, barangay-first. Avoid startup gradients, neon, or dense data-table compactness.

**Emotional target:** Peaceful, prosperous, God-loving — per LGU Vision. **Avoid:** flashy, playful, or dark-mode-heavy.

---

## 2. Color — Tokens (hsl, overrides from shadcn defaults)

**shadcn defaults overridden for Aringay:**

```css
:root {
  --primary: hsl(
    221 100% 31%
  ); /* #0032a0 — Aringay seal blue (shadcn default 221.2 83.2% 53.3% is too light) */
  --primary-foreground: hsl(210 40% 98%);
  --info: hsl(
    221 100% 31%
  ); /* same as primary — InfoBar uses #00184d as bg, not token */
  --destructive: hsl(0 84.2% 60.2%);
  --success: hsl(142 76% 36%);
  --warning: hsl(38 92% 50%);
  --radius: 0.5rem; /* shadcn default — keep, Aringay cards use radius-lg 12px via --radius */
  --background: hsl(0 0% 100%);
  --foreground: hsl(222 84% 4.9%);
}
.dark {
  --primary: hsl(217 91% 60%); /* lighter for dark, keep accessible */
}
```

**Keep:** `--background`, `--foreground`, `--card`, `--border`, `--muted` as shadcn defaults — **do not** invent new hexes.

**Usage:**

- `bg-primary text-primary-foreground` — only for **hero CTA primary**, `Badge bg-primary`, timeline dots — **not** for card backgrounds
- `bg-card border` — for **service/stat/map/history cards** — **border only, no shadow** (see anti-patterns)
- `bg-muted/50` — for `Stats`/`FAQ` section backgrounds — **not** `bg-primary`
- `HotlineBar` — **not token** — `linear-gradient(135deg,#ff0000 0%,#cc0000 100%)` + `bg-white/15` pills
- `InfoBar` — **not token** — `bg-[#00184d]` + `text-white` + `border-white/15` + `text-yellow-300` icons

---

## 3. Typography — Inter + Figtree + JetBrains Mono

**Body:** `Inter 400/500/600/700` — `font-sans 'Inter'` — min 16px (iOS zoom), `line-height 1.6`, `letter-spacing -0.01em` for headings. **Never** thin 300 on white.

**Display:** `Figtree 600/700` — `font-serif` fallback — **only for hero h1** `Welcome to BetterAringay` and `h2` `Aringay at a Glance` etc. — not for card titles.

**Mono:** `JetBrains Mono 400/500` — **only for stats numbers** `50,380` `84.54 km²` `2503` — not for body.

**Scale (major third 1.25, base 16px, fluid clamp):**

| Token       | Size | Line Height | Use                          |
| ----------- | ---- | ----------- | ---------------------------- |
| `text-xs`   | 12px | 1.5         | Badges, `2020 Census`, `PHT` |
| `text-sm`   | 14px | 1.5         | Card descriptions, `InfoBar` |
| `text-base` | 16px | 1.6         | Body, `Input`                |
| `text-lg`   | 18px | 1.4         | `CardTitle`                  |
| `text-xl`   | 20px | 1.3         | `Find a Service` h2          |
| `text-2xl`  | 24px | 1.25        | `h2` `Aringay at a Glance`   |
| `text-3xl`  | 30px | 1.1         | Hero h1                      |

**Rules:**

- `CardTitle` `text-base` `font-semibold` `tracking-tight` — **not** `text-lg` `font-bold`
- `Badge` `text-xs font-normal` — **not** `font-semibold`
- `Hero h1` `Figtree 700 text-3xl` — **only** place Figtree is allowed

---

## 4. Spacing & Layout — Density

**Aringay density: editorial, not SaaS compact.** Default `p-6` for `CardContent`, `gap-6` for grids, `py-12` for `Section`.

- **Section:** `py-12` `container mx-auto px-4` `max-w 1200px` — **not** `py-8` tight
- **Card:** `p-6` `rounded-xl border` — **not** `p-4` compact; `CardHeader pb-3` `gap-3`
- **Grid:** `gap-6` `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` for services/stats — **not** `gap-4`
- **Button:** `size default h-10 px-4` for hero `Browse Services`, `size sm h-9` for `EN/FIL/ILO` and `Hotline pills` — **not** `size lg` in cards
- **Vertical rhythm:** `Heading mb-2` + `Text text-muted-foreground mb-6` + `grid mt-0` — **no extra dividers**

**Fluid:** `--spacing-fluid-md: clamp(20px, 1.25rem + 1vw, 32px)`

---

## 5. Border Radius & Shadows — Restraint

**Radius:** `0.5rem` base → `radius-lg 12px` cards, `radius-md 8px` buttons/inputs, `9999px` pills/avatars

- `Card` `rounded-xl` — **not** `rounded-lg`
- `Button` `rounded-md` — **not** `rounded-full` except `Hotline pills` and `Call Now` `rounded-full`
- `Badge` `rounded-full` — **not** `rounded-md`

**Shadows:** **Border only, no shadow** for operational cards (`Services`, `Stats`, `Map`, `History`) — `shadow-sm` only on `hover:shadow-lg hover:-translate-y-1` — **not** default shadow

**Nested formula:** `inner-radius = outer-radius - padding` — avatar `40px` inside `p-6` card `12px` → keep `rounded-full`

---

## 6. Components — Rules by Surface

**Button:**

- Primary CTA (hero `Browse Services`, quiz `Next`): `variant default bg-primary text-primary-foreground hover:bg-primary/90`
- Secondary (hero `Contact Us`): `variant outline bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20`
- Language `EN/FIL/ILO`: `variant default` if active else `outline` `h-7 px-2.5 text-xs`
- In cards (`Call Now`): `variant outline size sm rounded-full`

**Card:**

- **Service/Government:** `border-t-4 border-primary hover:shadow-lg` + `CardHeader flex gap-3` `bg-primary/10 p-2.5 rounded-lg` icon `h-6 w-6` + `CardTitle text-base` + `CardContent line-clamp-3 text-sm text-muted-foreground` + `Badge secondary mt-3`
- **Stat:** `text-center p-6` `w-12 h-12 rounded-full bg-primary/10 → group-hover:bg-primary` + `text-2xl font-bold` (JetBrains Mono) + `Badge secondary` for sub
- **Map:** left `Card` `CardHeader MapPin` + `iframe aspect-[16/10] rounded-lg border`, right `Card bg-primary text-primary-foreground border-primary` + `Badge bg-white/20`
- **History:** `border-l-2 border-primary/10` + dot `w-4 h-4 bg-primary rounded-full border-4 border-background` + `Card hover:shadow-md` + `Badge bg-primary` for year
- **Leadership:** `Avatar h-20 w-20 border` + `Badge secondary tracking-widest uppercase` + `Button ghost sm`
- **Contact:** `Card text-center group` `w-12 h-12 rounded-full bg-red/blue/green-50 group-hover:bg-*` + `Button outline rounded-full`

**Badge:**

- `variant secondary font-normal` — for `2020 Census`, `Barangays`, `Municipality` — **not** `default` primary

**Input/Search:**

- `FindService` `Input pl-9` with `Search h-4 w-4 text-muted-foreground` + `Button` `Browse All`

**Navigation:**

- Desktop: `NavigationMenu` `h-10 px-4` + dropdown `w-56 shadow-lg border` `hover:bg-accent` — **not** native select
- Mobile: `Sheet` `w-3/4 border-l bg-background` — **not** hidden div

**Other:**

- `Breadcrumb` with `Separator`, `Alert destructive` for errors, `Skeleton h-24` for loading, `Accordion` for FAQ, `Dialog` for `Send Message` (with `Input`/`Textarea`/`Label`), `Tabs` for service filtering (if used), `Avatar` for leadership, `Separator` for quiz share

---

## 7. Page Patterns — Composition (critical)

**Homepage order (from `bettersolano.org`):**
`HotlineBar (red) → Header (white, sticky) → InfoBar (dark navy) → Hero (gradient + seal/banner + 2 CTAs + 3 pills) → FindService (border-y, Input + popular Badges) → Services (4-col grid, 10 cards, View All Button) → Stats (4-col, At a Glance) → Map (2-col, OSM + blue info) → History (left border timeline, 8 items) → Updates (Card + 2 Buttons) → Leadership (2-col) → Contact (3-col) → Quiz (centered blue Card) → FAQ (Accordion) → Government (4-col) → Footer`

- **Hero:** `grid lg:grid-cols-2 gap-8` left `Figtree h1 + Inter subtitle + 2 Buttons + 3 pills (emojis 📍🏘️🌊 kept)` right `bg-white rounded-2xl p-4 shadow-xl max-w-sm` seal `w-32 h-32` + town `h-40 rounded-xl`
- **Services/Government:** `Section py-12 container` `Heading + Text muted` `gap-6` `hover:-translate-y-1`
- **Stats:** `bg-muted/50` `Heading + View 24 Barangays link` `gap-6` `text-center`
- **Map:** `gap-8` `Card` left `CardHeader MapPin` right `bg-primary`
- **History:** `ml-3 md:ml-6 border-l-2` `pl-8` `gap-6`
- **Updates:** `Card p-6` `w-12 h-12 seal` + `2 Buttons`
- **Leadership:** `gap-6` `Avatar 20` + `Badge`
- **Quiz:** `section py-8 bg-white > container > bg-[#0a2a7a] rounded-2xl py-12` centered `max-w-2xl mx-auto` — **not** double `Section` bg

---

## 8. Anti-Patterns — What Breaks Aringay

- ❌ **No decorative gradients on operational surfaces** — `HotlineBar` red and `Hero` gradient only; `Card` never `gradient`
- ❌ **No hero inside app shell** — `Hero` only on `/`, not on `/services/*`
- ❌ **No card shadows by default** — `border` only, `hover:shadow-lg` only
- ❌ **No Figtree outside hero h1/h2** — `CardTitle` is `Inter`
- ❌ **No `size lg` in cards** — `Button size sm` in `Hotline`/`Language`, `default` only for hero
- ❌ **No `South China Sea` parenthetical** — use `Lingayen Gulf` only (West Philippine Sea is correct but local asks for just Gulf)
- ❌ **No `bi-*` bootstrap icons** — use `lucide-react` (`Shield/Flame/TriangleAlert/Heart/Building2/Truck/Banknote/Thermometer/Calendar/Clock`) — emojis `📍` etc. are **kept**
- ❌ **No `dark:` overrides for semantic colors** — `bg-primary` auto switches via `.dark`, not `dark:bg-`

---

## 9. Review Loop

1. Build screen from primitives above
2. Compare hierarchy/density/tokens with this file
3. Fix missing `loading/empty/error/disabled/focus/mobile` states
4. Extract repeated decisions back into this file

---

_Source: shadcnblocks Alpine/Vercel themes + az9713 Shadcn DESIGN.md + artyhoo glass UI tokens + BetterAringay LGU data (24 barangays, 1741, Kilawen, seal #0032a0, Inter/Figtree/JetBrains Mono)._
