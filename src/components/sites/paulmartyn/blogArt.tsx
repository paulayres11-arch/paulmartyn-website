import type { ReactNode } from "react";

/**
 * The blog infographics, one per post slug.
 *
 * These used to sit inline in blogPosts.tsx. They were moved out on
 * 2026-09-04 when the posts were rewritten long-form: a 2,000-word post plus a
 * 100-line SVG in the same object made the file impossible to edit safely, and
 * the automation that writes a post every other day has to edit that file.
 * Art here, words there.
 *
 * Every image is an ORIGINAL drawn as inline SVG. Nothing is lifted from the
 * web — reusing stock or press photography on a commercial site is a real legal
 * exposure, and these are cheap to draw and sharper at any size than a bitmap.
 * House style is dark slate with an amber accent and the brand name in the
 * corner, per the blog brief.
 */
export const BLOG_ART: Record<string, ReactNode> = {
  "wet-rooms-cranleigh-cottage": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="wrsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="wrwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#efe6d4" /><stop offset="1" stopColor="#d8cba8" />
          </linearGradient>
          <linearGradient id="wrroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c96a4a" /><stop offset="1" stopColor="#9c4c33" />
          </linearGradient>
          <linearGradient id="wrjoist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8a6a45" /><stop offset="1" stopColor="#5f4630" />
          </linearGradient>
          <linearGradient id="wramber" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="wrfloorcav" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e9e2d2" /><stop offset="1" stopColor="#d3c7ab" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#wrsky)" />
        <rect y="250" width="400" height="70" fill="#7fae5c" />
        <text x="24" y="34" fontFamily="Helvetica,Arial,sans-serif" fontSize="16" fontWeight="700" fill="#1f2a30">The floor decides before the tiles do</text>
        <text x="24" y="53" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#5d7078">Wet rooms in a Cranleigh cottage</text>

        {/* cottage elevation, left */}
        <path d="M24 150 L24 250 L154 250 L154 150 L89 100 Z" fill="url(#wrwall)" stroke="#b9a97e" strokeWidth="2" />
        <path d="M14 154 L89 96 L164 154 Z" fill="url(#wrroof)" stroke="#7a3a26" strokeWidth="2" />
        <rect x="78" y="86" width="16" height="26" fill="#7a3a26" />
        <rect x="46" y="168" width="34" height="34" fill="#dcecf5" stroke="#7a6a4a" strokeWidth="2" />
        <path d="M63 168 v34 M46 185 h34" stroke="#7a6a4a" strokeWidth="1.5" />
        <rect x="112" y="200" width="30" height="50" fill="#6b5138" stroke="#4a3826" strokeWidth="2" />
        <circle cx="136" cy="226" r="2" fill="#d8cba8" />
        <text x="89" y="270" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#2f3a40" textAnchor="middle">CRANLEIGH COTTAGE</text>

        {/* floor cavity, cutaway, right */}
        <rect x="190" y="110" width="186" height="160" fill="url(#wrfloorcav)" stroke="#b9a97e" strokeWidth="2" />
        <text x="283" y="124" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#c4741f" textAnchor="middle">WET ROOM FLOOR</text>
        <text x="283" y="142" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#c4741f" textAnchor="middle">FALL TO DRAIN</text>

        {/* tiles on top surface */}
        <rect x="198" y="150" width="168" height="14" fill="#eef2f4" stroke="#c7d2d8" strokeWidth="1" />
        <path d="M220 150 v14 M242 150 v14 M264 150 v14 M286 150 v14 M308 150 v14 M330 150 v14 M352 150 v14" stroke="#c7d2d8" strokeWidth="1" />

        {/* sloped screed and amber tanking membrane forming the fall */}
        <path d="M198 178 L366 196 L366 206 L198 188 Z" fill="#c9b998" stroke="#a9967a" strokeWidth="1.5" />
        <path d="M198 172 L366 190" stroke="url(#wramber)" strokeWidth="5" strokeLinecap="round" />
        <path d="M210 176 q40 6 80 10 q38 4 66 6" stroke="#6fa8cf" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".8" />
        <circle cx="366" cy="196" r="9" fill="#7d8790" stroke="#5d6568" strokeWidth="2" />
        <circle cx="366" cy="196" r="3.5" fill="#5d6568" />

        {/* joists in cross-section, checked before anything is built up */}
        <rect x="204" y="212" width="16" height="48" fill="url(#wrjoist)" stroke="#4a3826" strokeWidth="1.5" />
        <rect x="240" y="212" width="16" height="48" fill="url(#wrjoist)" stroke="#4a3826" strokeWidth="1.5" />
        <rect x="276" y="212" width="16" height="48" fill="url(#wrjoist)" stroke="#4a3826" strokeWidth="1.5" />
        <rect x="312" y="212" width="16" height="48" fill="url(#wrjoist)" stroke="#4a3826" strokeWidth="1.5" />
        <rect x="348" y="212" width="16" height="48" fill="url(#wrjoist)" stroke="#4a3826" strokeWidth="1.5" />
        <text x="283" y="278" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#2f3a40" textAnchor="middle">JOISTS CHECKED FIRST</text>

        <rect y="320" width="400" height="80" fill="#1f2a30" />
        <text x="24" y="345" fontFamily="Helvetica,Arial,sans-serif" fontSize="14" fontWeight="700" fill="#e8e4dc">Survey the joists before you choose a tile</text>
        <text x="24" y="365" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Structural engineer: £1,500–£3,000 — listed building consent: 8-week statutory target</text>
        <text x="24" y="383" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#8fa0a8">Floor loading: Planning Portal — waterproofing: BS 5385 — ventilation: Approved Document F</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "kitchen-extensions-cranleigh-layout-budget": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="kesky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="kewall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#efe6d4" /><stop offset="1" stopColor="#d8cba8" />
          </linearGradient>
          <linearGradient id="keamber" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="keglass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dcecf5" /><stop offset="1" stopColor="#aed4e8" />
          </linearGradient>
          <linearGradient id="kesoil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6a5238" /><stop offset="1" stopColor="#42311f" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#kesky)" />
        <text x="24" y="34" fontFamily="Helvetica,Arial,sans-serif" fontSize="16" fontWeight="700" fill="#1f2a30">The steel decides the room, not the units</text>
        <text x="24" y="53" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#5d7078">Kitchen extensions: layout before budget</text>

        {/* old kitchen, left */}
        <rect x="20" y="76" width="132" height="180" fill="url(#kewall)" stroke="#b9a97e" strokeWidth="2" />
        <rect x="42" y="108" width="40" height="46" fill="url(#keglass)" stroke="#b9a97e" strokeWidth="2" />
        <rect x="42" y="108" width="40" height="46" fill="none" stroke="#b9a97e" strokeWidth="1.5" />
        <path d="M62 108 v46 M42 131 h40" stroke="#b9a97e" strokeWidth="1.5" />
        <rect x="42" y="196" width="86" height="10" fill="#c9b998" />
        <rect x="46" y="176" width="30" height="20" fill="#dcd2b8" stroke="#b9a97e" />
        <text x="86" y="238" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#5d7078" textAnchor="middle">EXISTING</text>

        {/* opening: padstones + steel beam */}
        <rect x="152" y="204" width="18" height="52" fill="#8a8f92" stroke="#6b7275" strokeWidth="1.5" />
        <rect x="230" y="204" width="18" height="52" fill="#8a8f92" stroke="#6b7275" strokeWidth="1.5" />
        <rect x="152" y="186" width="96" height="18" fill="url(#keamber)" stroke="#c4741f" strokeWidth="1.5" />
        <path d="M170 262 v10 M230 262 v10 M170 272 h60 M167 266 h6 M227 266 h6" stroke="#c4741f" strokeWidth="2" fill="none" />
        <text x="200" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#c4741f" textAnchor="middle">STEEL SPAN</text>
        <path d="M164 220 v-10 M236 220 v-10" stroke="#dfe6ea" strokeWidth="10" opacity=".5" />

        {/* new extension, right, with lantern roof */}
        <rect x="248" y="76" width="132" height="180" fill="url(#kewall)" stroke="#b9a97e" strokeWidth="2" />
        <path d="M248 76 L280 40 L348 40 L380 76 Z" fill="url(#keglass)" stroke="#c4741f" strokeWidth="2" />
        <path d="M280 40 L280 76 M314 40 L314 76 M348 40 L348 76" stroke="#c4741f" strokeWidth="2" />
        <rect x="266" y="130" width="96" height="90" fill="url(#keglass)" stroke="#b9a97e" strokeWidth="2" />
        <path d="M314 130 v90 M266 175 h96" stroke="#b9a97e" strokeWidth="1.5" />
        <path d="M290 60 q6 14 -2 26" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7" />
        <text x="314" y="248" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#c4741f" textAnchor="middle">NEW KITCHEN</text>

        {/* underground: drainage run to manhole */}
        <rect y="300" width="400" height="30" fill="url(#kesoil)" />
        <path d="M300 300 v10 q0 8 20 8 h50 q10 0 10 10 v6" stroke="#8fa0a8" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="2 5" />
        <circle cx="380" cy="330" r="10" fill="#7d8790" stroke="#5d6568" strokeWidth="2" />
        <circle cx="380" cy="330" r="4" fill="#5d6568" />

        <rect y="330" width="400" height="70" fill="#1f2a30" />
        <text x="24" y="354" fontFamily="Helvetica,Arial,sans-serif" fontSize="14" fontWeight="700" fill="#e8e4dc">Agree the opening before the worktop</text>
        <text x="24" y="374" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Structural calculation: £1,500–£3,000, whatever the size of the kitchen</text>
        <text x="24" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#8fa0a8">Guide costs: /pricing — planning limits: Planning Portal, Class A GPDO</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "trickle-vents-approved-document-f": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="tvsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="tvwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0e9d8" /><stop offset="1" stopColor="#ddd0b4" />
          </linearGradient>
          <linearGradient id="tvframe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e7dcc4" /><stop offset="1" stopColor="#cdbf9c" />
          </linearGradient>
          <linearGradient id="tvamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#tvwall)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Sealed shut, still needs to breathe</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Trickle vents under Approved Document F</text>

        {/* left window: sealed, no vent, condensation */}
        <rect x="28" y="80" width="152" height="190" rx="4" fill="url(#tvframe)" stroke="#a9967a" strokeWidth="2" />
        <rect x="40" y="92" width="128" height="166" fill="url(#tvsky)" />
        <rect x="40" y="172" width="128" height="2" fill="#a9967a" />
        <rect x="103" y="92" width="2" height="166" fill="#a9967a" />
        <path d="M62 106 q4 10 0 18 q-4 8 0 16 q4 8 0 16" stroke="#6fa8cf" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".85" />
        <path d="M84 100 q4 12 0 22 q-4 10 0 20 q4 10 0 18" stroke="#6fa8cf" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".7" />
        <path d="M132 106 q4 10 0 18 q-4 8 0 16 q4 8 0 16" stroke="#6fa8cf" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".8" />
        <path d="M150 100 q4 12 0 22 q-4 10 0 20 q4 10 0 18" stroke="#6fa8cf" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".65" />
        <circle cx="70" cy="150" r="2.5" fill="#6fa8cf" opacity=".7" />
        <circle cx="140" cy="160" r="2.5" fill="#6fa8cf" opacity=".7" />
        <rect x="28" y="272" width="152" height="20" rx="10" fill="#7d8790" />
        <text x="104" y="286" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#ffffff" textAnchor="middle">NO VENT</text>

        {/* right window: trickle vent fitted, dry glass, fresh air arrow */}
        <rect x="220" y="80" width="152" height="190" rx="4" fill="url(#tvframe)" stroke="#a9967a" strokeWidth="2" />
        <rect x="220" y="80" width="152" height="16" fill="url(#tvamber)" stroke="#c4741f" strokeWidth="1.5" />
        <rect x="234" y="85" width="18" height="6" rx="3" fill="#1f2a30" opacity=".5" />
        <rect x="260" y="85" width="18" height="6" rx="3" fill="#1f2a30" opacity=".5" />
        <rect x="286" y="85" width="18" height="6" rx="3" fill="#1f2a30" opacity=".5" />
        <rect x="312" y="85" width="18" height="6" rx="3" fill="#1f2a30" opacity=".5" />
        <rect x="338" y="85" width="18" height="6" rx="3" fill="#1f2a30" opacity=".5" />
        <rect x="232" y="106" width="128" height="152" fill="url(#tvsky)" />
        <rect x="232" y="176" width="128" height="2" fill="#a9967a" />
        <rect x="295" y="106" width="2" height="152" fill="#a9967a" />
        <path d="M296 64 q10 8 0 18 q-10 8 0 16" stroke="#e08a2b" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".9" />
        <path d="M270 118 q22 -4 40 0 q22 4 44 0" stroke="#6a9a4c" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".85" />
        <path d="M262 138 q22 -4 40 0 q22 4 44 0" stroke="#6a9a4c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".6" />
        <rect x="220" y="272" width="152" height="20" rx="10" fill="url(#tvamber)" stroke="#c4741f" strokeWidth="1.5" />
        <text x="296" y="286" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">TRICKLE VENT</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Most new windows must vent themselves</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Even where the old frame never had one fitted</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Approved Document F, Volume 1 (2021 ed.), in force from 15 June 2022</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "cranleigh-settlement-boundary": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="sbsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="sbroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="sbwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e7dcc4" /><stop offset="1" stopColor="#cdbf9c" />
          </linearGradient>
          <linearGradient id="sbgrassL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="sbgrassR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5f8f56" /><stop offset="1" stopColor="#436b3c" />
          </linearGradient>
          <linearGradient id="sbtree" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5f9a55" /><stop offset="1" stopColor="#3f6f3a" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#sbsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Which side are you on?</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh parish has two settlement boundaries</text>

        {/* left: Cranleigh built-up area, open gate = normally acceptable */}
        <rect x="20" y="250" width="172" height="30" fill="url(#sbgrassL)" />
        <path d="M40 210 L64 186 L88 210 Z" fill="url(#sbroof)" />
        <rect x="46" y="210" width="36" height="40" fill="url(#sbwall)" />
        <rect x="54" y="220" width="10" height="12" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="1.5" />
        <rect x="70" y="234" width="10" height="16" fill="#6a4034" />

        <path d="M100 220 L128 192 L156 220 Z" fill="url(#sbroof)" />
        <rect x="108" y="220" width="40" height="30" fill="url(#sbwall)" />
        <rect x="116" y="228" width="10" height="12" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="1.5" />
        <rect x="134" y="228" width="10" height="12" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="1.5" />

        <g transform="translate(30,150)">
          <rect x="0" y="0" width="4" height="34" fill="#8b98a0" />
          <path d="M4 4 l30 -10 v28 l-30 10" fill="none" stroke="#e08a2b" strokeWidth="3" strokeLinejoin="round" />
        </g>

        <rect x="30" y="192" width="86" height="18" rx="9" fill="url(#sbroof)" stroke="#c4741f" strokeWidth="1.5" />
        <text x="73" y="205" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#1f2a30" textAnchor="middle">CRANLEIGH — built-up</text>

        {/* right: Rowly, Green Belt, closed gate + padlock = restricted */}
        <rect x="208" y="250" width="172" height="30" fill="url(#sbgrassR)" />
        <ellipse cx="250" cy="230" rx="26" ry="30" fill="url(#sbtree)" />
        <rect x="247" y="256" width="6" height="14" fill="#5a4530" />
        <ellipse cx="300" cy="218" rx="22" ry="26" fill="url(#sbtree)" />
        <rect x="297" y="240" width="6" height="14" fill="#5a4530" />
        <ellipse cx="345" cy="234" rx="24" ry="28" fill="url(#sbtree)" />
        <rect x="342" y="258" width="6" height="14" fill="#5a4530" />
        <path d="M215 246 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0" stroke="#3f6f3a" strokeWidth="2" fill="none" opacity=".6" />

        <g transform="translate(340,150)">
          <rect x="0" y="0" width="4" height="34" fill="#8b98a0" />
          <rect x="4" y="6" width="30" height="4" fill="#8b98a0" />
          <rect x="4" y="20" width="30" height="4" fill="#8b98a0" />
          <rect x="30" y="0" width="4" height="34" fill="#8b98a0" />
          <rect x="10" y="10" width="14" height="12" rx="2" fill="#e08a2b" stroke="#c4741f" strokeWidth="1.5" />
          <path d="M14 10 v-4 a3 3 0 0 1 6 0 v4" fill="none" stroke="#c4741f" strokeWidth="2" />
        </g>

        <rect x="242" y="192" width="106" height="18" rx="9" fill="#4c6b3c" stroke="#3a5330" strokeWidth="1.5" />
        <text x="295" y="205" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#eef4ea" textAnchor="middle">ROWLY — Green Belt</text>

        {/* dashed boundary line down the centre */}
        <path d="M200 78 v190" stroke="#1f2a30" strokeWidth="2.5" strokeDasharray="7 6" opacity=".6" />
        <rect x="146" y="86" width="108" height="20" rx="10" fill="#1f2a30" />
        <text x="200" y="100" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#e08a2b" textAnchor="middle" letterSpacing="0.5">SETTLEMENT BOUNDARY</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">One parish, two very different rules</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Outside the line, land counts as rural whatever the name</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Waverley BC Settlement Boundaries Topic Paper, Nov 2020</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "cranleigh-conservation-area-consent": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="cvsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="cvroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="cvbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="cvtimber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d8bd92" /><stop offset="1" stopColor="#b3966a" />
          </linearGradient>
          <linearGradient id="cvgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="cvamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#cvsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Inside the line, ask first</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh Conservation Area — designated 1973</text>

        {/* dashed conservation area boundary loop */}
        <path d="M18 96 q0 -14 14 -14 h336 q14 0 14 14 v168 q0 14 -14 14 h-336 q-14 0 -14 -14 z" fill="none" stroke="#1f2a30" strokeWidth="2.5" strokeDasharray="7 6" opacity=".55" />

        {/* terrace, three buildings */}
        <path d="M40 176 L78 138 L116 176 Z" fill="url(#cvroof)" />
        <rect x="48" y="176" width="60" height="80" fill="url(#cvbrick)" />
        <rect x="58" y="188" width="16" height="18" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="82" y="188" width="16" height="18" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="66" y="228" width="20" height="28" fill="#40525a" />

        {/* small rear outbuilding, threatened by demolition */}
        <rect x="112" y="216" width="30" height="40" fill="#b9a988" stroke="#8f7550" strokeWidth="1.5" />
        <path d="M112 216 L127 200 L142 216 Z" fill="#9d8362" />
        <path d="M160 150 l-24 44" stroke="#7c8890" strokeWidth="2" />
        <circle cx="132" cy="204" r="13" fill="#5d6a72" stroke="#3f4a50" strokeWidth="1.5" />
        <circle cx="160" cy="150" r="4" fill="#3f4a50" />
        <rect x="96" y="196" width="72" height="18" rx="9" fill="url(#cvamber)" stroke="#c4741f" strokeWidth="1.5" />
        <text x="132" y="209" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#1f2a30" textAnchor="middle">115m³ = consent</text>

        {/* centre building, timber framed */}
        <path d="M172 168 L212 126 L252 168 Z" fill="url(#cvroof)" />
        <rect x="180" y="168" width="64" height="88" fill="#e7dcc4" />
        <path d="M180 168 h64 M212 168 v88" stroke="url(#cvtimber)" strokeWidth="6" />
        <rect x="192" y="182" width="16" height="18" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="216" y="182" width="16" height="18" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="200" y="226" width="24" height="30" fill="#40525a" />

        {/* right building, flank wall flagged for cladding */}
        <path d="M256 176 L296 132 L336 176 Z" fill="url(#cvroof)" />
        <rect x="264" y="176" width="76" height="80" fill="url(#cvbrick)" />
        <rect x="274" y="188" width="18" height="18" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="302" y="188" width="18" height="18" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="286" y="228" width="22" height="28" fill="#40525a" />
        <g transform="translate(342,196)">
          <rect x="0" y="0" width="8" height="30" rx="2" fill="#c9d2d6" />
          <rect x="-10" y="-6" width="28" height="12" rx="4" fill="url(#cvamber)" />
          <path d="M4 30 v14" stroke="#8b98a0" strokeWidth="2.5" />
        </g>
        <rect x="292" y="240" width="88" height="18" rx="9" fill="url(#cvamber)" stroke="#c4741f" strokeWidth="1.5" />
        <text x="336" y="253" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#1f2a30" textAnchor="middle">cladding needs consent</text>

        <rect x="18" y="256" width="364" height="22" fill="url(#cvgrass)" />

        {/* low front garden wall, height marked */}
        <rect x="18" y="278" width="364" height="22" fill="#b7a888" stroke="#8f7550" strokeWidth="1.5" />
        <path d="M40 262 v16" stroke="#1f2a30" strokeWidth="2" strokeDasharray="2 3" />
        <path d="M35 246 l5 -6 l5 6 z" fill="#1f2a30" opacity=".6" />
        <text x="40" y="242" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#1f2a30" textAnchor="middle">1m by the road</text>

        {/* boundary tag pinned on the loop */}
        <rect x="150" y="72" width="132" height="20" rx="10" fill="url(#cvamber)" stroke="#c4741f" strokeWidth="1.5" />
        <text x="216" y="86" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">CONSERVATION AREA</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">More needs asking inside the line</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Demolition, boundary walls and some cladding all need consent here</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Planning Portal; Cranleigh Conservation Area Appraisal, Waverley BC</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "part-l-extension-insulation": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="plsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="plroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="plbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="plgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="plamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#plsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Two walls, one standard</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Approved Document L — new work vs old</text>

        {/* existing house, pitched roof */}
        <path d="M52 148 L110 88 L168 148 Z" fill="url(#plroof)" />
        <rect x="60" y="148" width="108" height="128" fill="url(#plbrick)" />
        <rect x="74" y="168" width="22" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />

        {/* torn cutaway in the existing wall: single brick skin, heat escaping */}
        <path d="M128 188 L166 184 L163 202 L166 218 L162 232 L166 248 L163 264 L166 276 L128 276 Z" fill="#a86648" />
        <path d="M133 200 h26 M133 216 h26 M133 232 h26 M133 248 h26 M133 264 h26" stroke="#7c4a34" strokeWidth="1" opacity=".6" />
        <path d="M124 202 q-11 -5 -20 3 q-9 8 -19 2" stroke="#6fa8cf" strokeWidth="2" fill="none" opacity=".85" strokeLinecap="round" />
        <path d="M124 226 q-11 -5 -20 3 q-9 8 -19 2" stroke="#6fa8cf" strokeWidth="2" fill="none" opacity=".85" strokeLinecap="round" />
        <path d="M124 250 q-11 -5 -20 3 q-9 8 -19 2" stroke="#6fa8cf" strokeWidth="2" fill="none" opacity=".85" strokeLinecap="round" />
        <text x="147" y="178" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">existing wall</text>

        {/* join between old and new */}
        <path d="M168 140 v136" stroke="#1f2a30" strokeWidth="2" strokeDasharray="5 4" opacity=".5" />

        {/* extension, lean-to roof */}
        <path d="M168 140 L340 196 L340 206 L168 150 Z" fill="url(#plroof)" />
        <rect x="176" y="200" width="156" height="76" fill="url(#plbrick)" />

        {/* torn cutaway in the extension wall: full layered build-up */}
        <rect x="200" y="216" width="14" height="54" fill="#9d6044" />
        <rect x="214" y="216" width="46" height="54" fill="url(#plamber)" />
        <path d="M216 220 l10 -10 M216 232 l14 -14 M216 244 l14 -14 M216 256 l14 -14 M216 266 l10 -10" stroke="#c4741f" strokeWidth="1.5" opacity=".55" />
        <rect x="260" y="216" width="20" height="54" fill="#aeb8bd" />
        <rect x="280" y="216" width="8" height="54" fill="#f4f0e6" />
        <path d="M292 228 q11 -5 19 4 q9 8 19 -3" stroke="#e08a2b" strokeWidth="2" fill="none" opacity=".85" strokeLinecap="round" />
        <path d="M292 250 q11 -5 19 4 q9 8 19 -3" stroke="#e08a2b" strokeWidth="2" fill="none" opacity=".85" strokeLinecap="round" />
        <text x="255" y="188" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">new wall</text>
        <rect x="210" y="192" width="90" height="18" rx="9" fill="url(#plamber)" stroke="#c4741f" strokeWidth="1.5" />
        <text x="255" y="205" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">0.18 W/m²K</text>

        <rect x="24" y="276" width="352" height="24" fill="url(#plgrass)" />

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">The new wall must out-perform the old</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Approved Document L sets its own standard for new work</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Approved Document L, Volume 1: Dwellings (2021 ed., 2023 amendments)</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "cranleigh-neighbourhood-plan-householders": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="npsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cee2ef" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="nproof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b98a0" /><stop offset="1" stopColor="#6a7880" />
          </linearGradient>
          <linearGradient id="npamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="npgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="nppaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fbf6ec" /><stop offset="1" stopColor="#f0e6d2" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#npsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">One line, new limits</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh Neighbourhood Plan — made 15 July 2024</text>

        {/* skyline: four houses under the prevailing roofline, one breaking it */}
        <rect x="24" y="270" width="352" height="30" fill="url(#npgrass)" />

        <path d="M24 152 L58 116 L92 152 Z" fill="url(#nproof)" />
        <rect x="32" y="152" width="52" height="118" fill="#dfe5e8" />
        <rect x="42" y="164" width="14" height="16" fill="#aebcc2" />
        <rect x="62" y="164" width="14" height="16" fill="#aebcc2" />

        <path d="M96 158 L128 124 L160 158 Z" fill="url(#nproof)" />
        <rect x="104" y="158" width="48" height="112" fill="#dfe5e8" />
        <rect x="112" y="170" width="14" height="16" fill="#aebcc2" />
        <rect x="132" y="170" width="14" height="16" fill="#aebcc2" />

        <path d="M164 150 L198 114 L232 150 Z" fill="url(#nproof)" />
        <rect x="172" y="150" width="52" height="120" fill="#dfe5e8" />
        <rect x="182" y="162" width="14" height="16" fill="#aebcc2" />
        <rect x="202" y="162" width="14" height="16" fill="#aebcc2" />

        <path d="M236 156 L266 122 L296 156 Z" fill="url(#nproof)" />
        <rect x="244" y="156" width="44" height="114" fill="#dfe5e8" />
        <rect x="252" y="168" width="14" height="16" fill="#aebcc2" />

        {/* fifth house, extension in amber breaking the guideline */}
        <path d="M300 158 L328 128 L356 158 Z" fill="url(#nproof)" />
        <rect x="306" y="158" width="44" height="112" fill="#dfe5e8" />
        <rect x="314" y="170" width="14" height="16" fill="#aebcc2" />
        <path d="M330 158 L352 92 L374 158 Z" fill="url(#npamber)" />
        <rect x="336" y="158" width="32" height="52" fill="url(#npamber)" />
        <rect x="346" y="176" width="12" height="14" fill="#fbe3c4" />

        {/* prevailing roofline guide */}
        <path d="M20 118 h384" stroke="#1f2a30" strokeWidth="2" strokeDasharray="6 5" opacity=".55" />
        <text x="24" y="110" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" opacity=".7">the prevailing roofline</text>
        <path d="M352 92 l-10 20 l20 0 z" fill="#e08a2b" opacity=".9" />
        <text x="352" y="86" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#c4741f" textAnchor="middle">evidence needed</text>

        {/* the plan itself, made */}
        <g transform="translate(28,146)">
          <rect x="0" y="0" width="72" height="52" rx="3" fill="url(#nppaper)" stroke="#d8c9a8" strokeWidth="2" />
          <path d="M8 12 h56 M8 22 h56 M8 32 h40" stroke="#b7a67e" strokeWidth="2" opacity=".7" />
          <circle cx="58" cy="38" r="12" fill="url(#npamber)" stroke="#c4741f" strokeWidth="1.5" />
          <text x="58" y="41" fontFamily="Helvetica,Arial,sans-serif" fontSize="7" fontWeight="700" fill="#1f2a30" textAnchor="middle">MADE</text>
        </g>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Exceed the roofline, and you need evidence</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">The Plan now sits in the development plan Waverley uses</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Cranleigh Neighbourhood Development Plan 2021–2032</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "cranleigh-buildings-of-local-merit": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="lmsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="lmamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="lmroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#lmsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Two lists, not one</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh parish — listed, and locally significant</text>

        {/* Street elevation. Two amber (nationally listed), five outlined
            (buildings of local merit) — the ratio the numbers below state. */}
        <g>
          {/* Listed, amber */}
          <path d="M28 150 L58 124 L88 150 Z" fill="url(#lmroof)" />
          <rect x="34" y="150" width="48" height="72" fill="url(#lmamber)" />
          <rect x="52" y="188" width="14" height="34" fill="#6a4034" />
          <rect x="40" y="160" width="12" height="14" fill="#fdf3e2" />
          <rect x="66" y="160" width="12" height="14" fill="#fdf3e2" />

          {/* Local merit, outlined */}
          <path d="M96 158 L122 134 L148 158 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="101" y="158" width="42" height="64" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="116" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />

          <path d="M156 152 L182 128 L208 152 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="161" y="152" width="42" height="70" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="176" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />

          {/* Listed, amber */}
          <path d="M212 146 L242 120 L272 146 Z" fill="url(#lmroof)" />
          <rect x="218" y="146" width="48" height="76" fill="url(#lmamber)" />
          <rect x="236" y="188" width="14" height="34" fill="#6a4034" />
          <rect x="224" y="156" width="12" height="14" fill="#fdf3e2" />
          <rect x="250" y="156" width="12" height="14" fill="#fdf3e2" />

          <path d="M276 158 L302 134 L328 158 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="281" y="158" width="42" height="64" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="296" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />

          <path d="M334 152 L358 130 L382 152 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="338" y="152" width="40" height="70" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="352" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />
        </g>

        <rect x="24" y="222" width="354" height="2" fill="#b7c5cb" />

        {/* Legend */}
        <rect x="24" y="240" width="14" height="14" fill="url(#lmamber)" />
        <text x="46" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30">81 nationally listed</text>
        <text x="46" y="268" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#5d7078">80 Grade II, one Grade II* — St Nicolas</text>

        <rect x="222" y="240" width="14" height="14" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
        <text x="244" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30">174 local merit</text>
        <text x="244" y="268" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#5d7078">Not listed. Still weighed.</text>

        <text x="24" y="330" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Your house can be heritage without being listed</text>
        <text x="24" y="354" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Check listing, local merit and conservation area first</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Cranleigh Neighbourhood Plan; Waverley Borough Council</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "building-control-completion-certificate": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="ccsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="ccbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="ccroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="ccgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="ccpaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fbf6ec" /><stop offset="1" stopColor="#f0e6d2" />
          </linearGradient>
          <linearGradient id="ccseal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ccsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">The certificate that matters</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Building Regulations 2010 — completion sign-off</text>

        {/* house */}
        <path d="M40 200 L110 140 L180 200 Z" fill="url(#ccroof)" />
        <rect x="52" y="200" width="116" height="76" fill="url(#ccbrick)" />
        <path d="M52 214 h116 M52 228 h116 M52 242 h116 M52 256 h116" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="64" y="210" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="120" y="210" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="94" y="250" width="24" height="26" fill="#40525a" />
        <rect x="24" y="276" width="352" height="24" fill="url(#ccgrass)" />

        {/* inspector's clipboard */}
        <g transform="translate(228,108)">
          <rect x="0" y="0" width="66" height="86" rx="4" fill="#e7edf1" stroke="#c3ccd1" strokeWidth="2" />
          <rect x="20" y="-8" width="26" height="14" rx="3" fill="#8b98a0" />
          <path d="M10 22 h46 M10 38 h46 M10 54 h32" stroke="#5d7078" strokeWidth="2" opacity=".6" />
          <path d="M8 22 l7 7 l-7 7" stroke="#4c9a5b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2,44)" />
        </g>

        {/* dashed line: inspection leads to certificate */}
        <path d="M240 196 q-10 18 -10 30" stroke="#e08a2b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="1 7" />

        {/* certificate scroll with amber wax seal */}
        <g transform="translate(210,228)">
          <rect x="0" y="0" width="150" height="56" rx="4" fill="url(#ccpaper)" stroke="#d8c9a8" strokeWidth="2" />
          <path d="M10 16 h130 M10 28 h130 M10 40 h92" stroke="#b7a67e" strokeWidth="2" opacity=".7" />
          <circle cx="128" cy="42" r="17" fill="url(#ccseal)" stroke="#c4741f" strokeWidth="2" />
          <path d="M120 42 l5 5 l10 -12" stroke="#1f2a30" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Eight weeks is the statutory deadline</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Notify within 5 days of finishing — the clock starts there</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: The Building Regulations 2010, regulation 17</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "extension-value-cranleigh": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="evsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cee2ef" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="evbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="evroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="evext" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="evgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#evsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Does it add value?</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh extensions — national data, local planning</text>

        {/* garden with Green Belt boundary */}
        <rect x="0" y="252" width="400" height="48" fill="url(#evgrass)" />
        <path d="M0 264 h180 M228 264 h172" stroke="#1f2a30" strokeWidth="2" strokeDasharray="7 5" opacity=".55" />
        <rect x="180" y="256" width="4" height="16" fill="#6a4034" />
        <rect x="224" y="256" width="4" height="16" fill="#6a4034" />
        <text x="202" y="250" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#4c6b3c" textAnchor="middle" letterSpacing="0.5">GREEN BELT</text>

        {/* original house */}
        <path d="M46 170 L108 116 L170 170 Z" fill="url(#evroof)" />
        <rect x="58" y="170" width="100" height="82" fill="url(#evbrick)" />
        <path d="M58 186 h100 M58 202 h100 M58 218 h100 M58 234 h100" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="70" y="182" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="118" y="182" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="92" y="222" width="24" height="30" fill="#40525a" />

        {/* extension, amber to mark the added value */}
        <rect x="158" y="204" width="66" height="48" fill="url(#evext)" />
        <path d="M158 204 L191 178 L224 204 Z" fill="#c4741f" />
        <rect x="172" y="216" width="24" height="24" fill="#fbe3c4" stroke="#f6cf9a" strokeWidth="2" />
        <path d="M158 252 h66" stroke="#a8652a" strokeWidth="2" />

        {/* value tag rising from the extension */}
        <path d="M205 178 q6 -34 24 -50" stroke="#e08a2b" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="1 7" />
        <path d="M224 104 l28 -8 l7 26 l-16 12 l-19 -8 z" fill="#e08a2b" />
        <text x="238" y="120" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30" textAnchor="middle">+24%</text>
        <text x="238" y="132" fontFamily="Helvetica,Arial,sans-serif" fontSize="8" fill="#3a2a12" textAnchor="middle">nationally*</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">National data says up to 24%*</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Outside the settlement boundary, Waverley judges it as countryside</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">*Nationwide research on home improvements, 2025</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "party-wall-notice-timing": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="pwsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d3e4ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="pwbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c3805c" /><stop offset="1" stopColor="#9d5f42" />
          </linearGradient>
          <linearGradient id="pwroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="pwwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#pwsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Before you can start</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Party Wall etc. Act 1996 — notice periods</text>

        {/* the pair of houses, sharing one wall */}
        <path d="M40 150 L118 96 L196 150 Z" fill="url(#pwroof)" />
        <path d="M204 150 L282 96 L360 150 Z" fill="url(#pwroof)" />
        <rect x="52" y="150" width="144" height="86" fill="url(#pwbrick)" />
        <rect x="204" y="150" width="144" height="86" fill="url(#pwbrick)" />
        <path d="M52 164 h144 M52 180 h144 M52 196 h144 M52 212 h144 M52 228 h144" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <path d="M204 164 h144 M204 180 h144 M204 196 h144 M204 212 h144 M204 228 h144" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="74" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="140" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="226" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="292" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="86" y="210" width="24" height="26" fill="#40525a" />
        <rect x="290" y="210" width="24" height="26" fill="#40525a" />

        {/* the party wall itself */}
        <rect x="196" y="90" width="8" height="146" fill="url(#pwwall)" />
        <path d="M200 78 v14" stroke="#e08a2b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="72" r="5" fill="#e08a2b" />
        <text x="200" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#a8652a" textAnchor="middle">the party wall</text>
        <rect x="24" y="236" width="352" height="6" fill="#b9c8ce" />

        {/* countdown strip */}
        <rect x="24" y="258" width="352" height="30" rx="4" fill="#ffffff" stroke="#c3d0d5" strokeWidth="1.5" />
        <rect x="24" y="258" width="176" height="30" rx="4" fill="#e08a2b" opacity=".16" />
        <path d="M200 258 v30 M288 258 v30" stroke="#c3d0d5" strokeWidth="1.5" />
        <text x="112" y="271" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">2 months</text>
        <text x="112" y="283" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fill="#5d7078" textAnchor="middle">existing party wall</text>
        <text x="244" y="271" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">1 month</text>
        <text x="244" y="283" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fill="#5d7078" textAnchor="middle">excavation</text>
        <text x="332" y="271" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">14 days</text>
        <text x="332" y="283" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fill="#5d7078" textAnchor="middle">to reply</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Serve it early, or it moves your start date</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Silence counts as a dispute. A notice lapses after a year.</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: GOV.UK Party Wall etc. Act 1996 explanatory booklet</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "loft-conversions-cranleigh-roof-types": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="lwsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe2ee" /><stop offset="1" stopColor="#f0f5f7" />
          </linearGradient>
          <linearGradient id="lwtile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7d8f97" /><stop offset="1" stopColor="#5c6d75" />
          </linearGradient>
          <linearGradient id="lwtimber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d8bd92" /><stop offset="1" stopColor="#b3966a" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#lwsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">The roof decides</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh loft conversions — cut roof vs trussed rafters</text>

        {/* left: cut roof, convertible */}
        <path d="M28 214 L110 108 L192 214 Z" fill="#ffffff" opacity=".72" />
        <path d="M28 214 L110 108 L192 214" fill="none" stroke="url(#lwtile)" strokeWidth="11" strokeLinejoin="round" />
        <rect x="56" y="164" width="9" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <rect x="155" y="164" width="9" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <rect x="28" y="214" width="164" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <path d="M110 122 v88" stroke="#7f9aa6" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M110 132 v66" stroke="#e08a2b" strokeWidth="2.5" />
        <path d="M110 128 l-5 8 h10 z M110 202 l-5 -8 h10 z" fill="#e08a2b" />
        <text x="118" y="168" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#a8652a">2.2m</text>
        <circle cx="110" cy="244" r="13" fill="#3f7d54" />
        <path d="M104 244 l4 5 l8 -10" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="110" y="278" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30" textAnchor="middle">Cut roof</text>
        <text x="110" y="292" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#5d7078" textAnchor="middle">pre-1960s — space is open</text>

        {/* right: trussed rafters, blocked */}
        <path d="M208 214 L290 108 L372 214 Z" fill="#ffffff" opacity=".72" />
        <path d="M208 214 L290 108 L372 214" fill="none" stroke="url(#lwtile)" strokeWidth="11" strokeLinejoin="round" />
        <rect x="208" y="214" width="164" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <path d="M290 112 L238 214 M290 112 L342 214 M252 186 L290 214 M328 186 L290 214" stroke="url(#lwtimber)" strokeWidth="8" strokeLinecap="round" />
        <path d="M290 112 L238 214 M290 112 L342 214 M252 186 L290 214 M328 186 L290 214" stroke="#8f7550" strokeWidth="1" opacity=".6" fill="none" />
        <circle cx="290" cy="244" r="13" fill="#b04434" />
        <path d="M284 238 l12 12 M296 238 l-12 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <text x="290" y="278" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30" textAnchor="middle">Trussed rafters</text>
        <text x="290" y="292" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#5d7078" textAnchor="middle">later builds — members in the way</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Measure ridge to ceiling joist first</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">2.2m is the minimum; 2.4m is comfortable after finishes.</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Planning Portal loft conversion guidance</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "extending-1930s-semi-cranleigh": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="cosky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cee2ef" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="cobrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="cotile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#cosky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">How far back can you go?</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">1930s semi, Cranleigh — single-storey rear extension</text>

        {/* garden */}
        <rect x="24" y="232" width="352" height="18" fill="#7ba05f" />
        <rect x="24" y="250" width="352" height="10" fill="#5f8149" />

        {/* the original house */}
        <path d="M24 128 L86 84 L148 128 Z" fill="url(#cotile)" />
        <rect x="34" y="128" width="104" height="104" fill="url(#cobrick)" />
        <path d="M34 146 h104 M34 164 h104 M34 182 h104 M34 200 h104 M34 218 h104" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="46" y="140" width="30" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="96" y="140" width="30" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="102" y="92" width="14" height="30" fill="#8a5138" />
        <text x="86" y="222" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#f2e2d8" textAnchor="middle">original house</text>

        {/* original rear wall datum */}
        <path d="M138 76 v170" stroke="#1f2a30" strokeWidth="2" strokeDasharray="5 4" />
        <text x="138" y="70" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">original rear wall</text>

        {/* first 3m — permitted development */}
        <rect x="138" y="170" width="90" height="62" fill="url(#cobrick)" />
        <path d="M138 186 h90 M138 202 h90 M138 218 h90" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="134" y="164" width="98" height="8" fill="#6a4034" />
        <rect x="160" y="186" width="46" height="34" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />

        {/* 3m to 6m — prior approval */}
        <rect x="228" y="170" width="90" height="62" fill="#e08a2b" opacity=".14" />
        <rect x="228" y="170" width="90" height="62" fill="none" stroke="#e08a2b" strokeWidth="2.5" strokeDasharray="7 5" />
        <text x="273" y="196" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#a8652a" textAnchor="middle">prior</text>
        <text x="273" y="210" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#a8652a" textAnchor="middle">approval</text>

        {/* dimensions */}
        <path d="M138 272 h90 M228 272 h90" stroke="#1f2a30" strokeWidth="1.5" />
        <path d="M138 266 v12 M228 266 v12 M318 266 v12" stroke="#1f2a30" strokeWidth="1.5" />
        <text x="183" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">3m</text>
        <text x="273" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#a8652a" textAnchor="middle">to 6m</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">3m as of right. To 6m, neighbours get a say.</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">No start until Waverley decides, or 42 days pass.</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: GOV.UK householder permitted development guidance</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
  ),
  "bathroom-fitting-cost-cranleigh": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="cbwall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe7ea"/><stop offset="1" stopColor="#c3d0d5"/>
        </linearGradient>
        <linearGradient id="cbstud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cdb896"/><stop offset="1" stopColor="#a98f68"/>
        </linearGradient>
        <radialGradient id="cbglow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e08a2b" stopOpacity=".35"/><stop offset="1" stopColor="#e08a2b" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#eef2f4"/>
      <rect y="300" width="400" height="100" fill="#1f2a30"/>
      <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">What moves the price</text>
      <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh bathroom fittings — Checkatrade, 2026</text>
      <rect x="24" y="72" width="162" height="196" fill="url(#cbwall)"/>
      <path d="M24 104 h162 M24 136 h162 M24 168 h162 M24 200 h162 M24 232 h162 M24 264 h162" stroke="#b7c5cb" strokeWidth="1"/>
      <path d="M65 72 v196 M106 72 v196 M147 72 v196" stroke="#b7c5cb" strokeWidth="1"/>
      <rect x="98" y="80" width="18" height="46" rx="3" fill="#dfe7ea" stroke="#9fb0b6" strokeWidth="1.5"/>
      <circle cx="107" cy="92" r="3" fill="#9fb0b6"/>
      <path d="M107 95 v14" stroke="#9fb0b6" strokeWidth="2"/>
      <path d="M34 240 q0 -22 22 -22 h96 q22 0 22 22 v18 h-140 z" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2"/>
      <rect x="34" y="258" width="140" height="10" fill="#dfe7ea" stroke="#9fb0b6" strokeWidth="1.5"/>
      <rect x="30" y="266" width="8" height="10" rx="2" fill="#c3d0d5"/>
      <rect x="166" y="266" width="8" height="10" rx="2" fill="#c3d0d5"/>
      <path d="M186 72 L200 96 L189 118 L200 146 L188 172 L200 198 L189 224 L200 250 L188 268 L186 268 Z" fill="#f6f8f9"/>
      <path d="M186 72 L200 96 L189 118 L200 146 L188 172 L200 198 L189 224 L200 250 L188 268" fill="none" stroke="#b7c5cb" strokeWidth="1.5"/>
      <rect x="200" y="72" width="176" height="196" fill="url(#cbstud)"/>
      <rect x="228" y="72" width="10" height="196" fill="#8f7550" opacity=".6"/>
      <rect x="330" y="72" width="10" height="196" fill="#8f7550" opacity=".6"/>
      <circle cx="284" cy="180" r="70" fill="url(#cbglow)"/>
      <path d="M280 78 q10 20 -6 38 q-16 18 4 34 q18 14 -4 36 q-18 18 6 40 q14 16 -8 34 q-14 12 2 30" fill="none" stroke="#6b4a30" strokeWidth="9" strokeLinecap="round"/>
      <path d="M280 78 q10 20 -6 38 q-16 18 4 34 q18 14 -4 36 q-18 18 6 40 q14 16 -8 34 q-14 12 2 30" fill="none" stroke="#b0703f" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="270" cy="128" r="5" fill="#5a3a24"/>
      <circle cx="292" cy="176" r="4" fill="#5a3a24"/>
      <circle cx="266" cy="230" r="4.5" fill="#5a3a24"/>
      <path d="M270 240 q-4 10 2 16" fill="none" stroke="#7a97a3" strokeWidth="2" opacity=".7"/>
      <path d="M296 270 l30 -4 l4 16 l-14 10 l-16 -6 z" fill="#e08a2b"/>
      <circle cx="308" cy="272" r="2.6" fill="#1f2a30"/>
      <text x="311" y="285" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#1f2a30" textAnchor="middle">+£</text>
      <path d="M280 254 q10 8 16 16" fill="none" stroke="#e08a2b" strokeWidth="2"/>
      <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">The pipe behind the wall, not the suite</text>
      <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Full refit, materials included: £5,500–£14,000+</text>
      <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Checkatrade 2026 cost guide, not a fixed quote</text>
      <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
  ),
  "bat-surveys-timing-cranleigh": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="bnight" cx="50%" cy="45%" r="65%">
          <stop offset="0" stopColor="#2b3a44"/><stop offset="1" stopColor="#141d23"/>
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#bnight)"/>
      <circle cx="52" cy="52" r="1.6" fill="#e8e4dc" opacity=".7"/>
      <circle cx="352" cy="70" r="1.4" fill="#e8e4dc" opacity=".6"/>
      <circle cx="330" cy="330" r="1.5" fill="#e8e4dc" opacity=".5"/>
      <circle cx="66" cy="342" r="1.3" fill="#e8e4dc" opacity=".55"/>
      <text x="200" y="40" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e8e4dc" textAnchor="middle">Bat activity surveys</text>
      <path d="M 202.25 120.03 L 203.66 66.05 A 140 140 0 0 1 266.80 82.97 L 241.04 130.42 A 86 86 0 0 0 202.25 120.03 Z" fill="#31424b"/><text x="229.2" y="96.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(15 229.2 96.9)">Jan</text><path d="M 244.93 132.67 L 273.15 86.63 A 140 140 0 0 1 319.37 132.85 L 273.33 161.07 A 86 86 0 0 0 244.93 132.67 Z" fill="#31424b"/><text x="279.9" y="126.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(45 279.9 126.1)">Feb</text><path d="M 275.58 164.96 L 323.03 139.20 A 140 140 0 0 1 339.95 202.34 L 285.97 203.75 A 86 86 0 0 0 275.58 164.96 Z" fill="#31424b"/><text x="309.1" y="176.8" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(75 309.1 176.8)">Mar</text><path d="M 285.97 208.25 L 339.95 209.66 A 140 140 0 0 1 323.03 272.80 L 275.58 247.04 A 86 86 0 0 0 285.97 208.25 Z" fill="#31424b"/><text x="309.1" y="235.2" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(105 309.1 235.2)">Apr</text><path d="M 273.33 250.93 L 319.37 279.15 A 140 140 0 0 1 273.15 325.37 L 244.93 279.33 A 86 86 0 0 0 273.33 250.93 Z" fill="#e08a2b"/><text x="279.9" y="285.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(135 279.9 285.9)">May</text><path d="M 241.04 281.58 L 266.80 329.03 A 140 140 0 0 1 203.66 345.95 L 202.25 291.97 A 86 86 0 0 0 241.04 281.58 Z" fill="#e08a2b"/><text x="229.2" y="315.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(165 229.2 315.1)">Jun</text><path d="M 197.75 291.97 L 196.34 345.95 A 140 140 0 0 1 133.20 329.03 L 158.96 281.58 A 86 86 0 0 0 197.75 291.97 Z" fill="#e08a2b"/><text x="170.8" y="315.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(195 170.8 315.1)">Jul</text><path d="M 155.07 279.33 L 126.85 325.37 A 140 140 0 0 1 80.63 279.15 L 126.67 250.93 A 86 86 0 0 0 155.07 279.33 Z" fill="#e08a2b"/><text x="120.1" y="285.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(225 120.1 285.9)">Aug</text><path d="M 124.42 247.04 L 76.97 272.80 A 140 140 0 0 1 60.05 209.66 L 114.03 208.25 A 86 86 0 0 0 124.42 247.04 Z" fill="#31424b"/><text x="90.9" y="235.2" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(255 90.9 235.2)">Sep</text><path d="M 114.03 203.75 L 60.05 202.34 A 140 140 0 0 1 76.97 139.20 L 124.42 164.96 A 86 86 0 0 0 114.03 203.75 Z" fill="#31424b"/><text x="90.9" y="176.8" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(285 90.9 176.8)">Oct</text><path d="M 126.67 161.07 L 80.63 132.85 A 140 140 0 0 1 126.85 86.63 L 155.07 132.67 A 86 86 0 0 0 126.67 161.07 Z" fill="#31424b"/><text x="120.1" y="126.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(315 120.1 126.1)">Nov</text><path d="M 158.96 130.42 L 133.20 82.97 A 140 140 0 0 1 196.34 66.05 L 197.75 120.03 A 86 86 0 0 0 158.96 130.42 Z" fill="#31424b"/><text x="170.8" y="96.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(345 170.8 96.9)">Dec</text>
      <circle cx="200" cy="206" r="76" fill="#0f1619"/>
      <path d="M200 196 l7 -9 l3 11 l16 -10 q18 -10 34 2 q-16 2 -24 12 q-9 12 -25 12 l-11 6 l-11 -6 q-16 0 -25 -12 q-8 -10 -24 -12 q16 -12 34 -2 l16 10 l3 -11 z" fill="#e08a2b"/>
      <text x="200" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="26" fontWeight="700" fill="#e8e4dc" textAnchor="middle">MAY–AUG</text>
      <text x="200" y="270" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8" textAnchor="middle">the only window</text>
      <text x="200" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#8fa0a8" textAnchor="middle">Preliminary roost assessment: any time of year</text>
      <text x="376" y="394" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
  ),
  "tiles-are-not-waterproof": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="wtile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe7ea"/><stop offset="1" stopColor="#c3d0d5"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="#eef2f4"/>
      <rect y="286" width="400" height="114" fill="#1f2a30"/>
      <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Tiles are not waterproof</text>
      <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">What has to sit behind them — BS 5385-1</text>
      <rect x="150" y="70" width="34" height="216" fill="#8d99a0"/>
      <rect x="184" y="70" width="16" height="216" fill="#e08a2b"/>
      <rect x="200" y="70" width="10" height="216" fill="#a9b6bb"/>
      <rect x="210" y="70" width="26" height="216" fill="url(#wtile)"/>
      <path d="M210 104 h26 M210 138 h26 M210 172 h26 M210 206 h26 M210 240 h26" stroke="#9fb0b6" strokeWidth="1.5"/>
      <path d="M196 92 q6 9 0 13 q-6 -4 0 -13 z" fill="#8fd4f0" opacity=".9"/><path d="M232 74 q6 9 0 13 q-6 -4 0 -13 z" fill="#8fd4f0" opacity=".9"/><path d="M266 96 q6 9 0 13 q-6 -4 0 -13 z" fill="#8fd4f0" opacity=".9"/>
      <path d="M300 78 l-52 0" stroke="#5d7078" strokeWidth="1.4"/>
      <text x="306" y="82" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#1f2a30">Tile</text>
      <path d="M300 108 l-96 0" stroke="#5d7078" strokeWidth="1.4"/>
      <text x="306" y="112" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#1f2a30">Adhesive</text>
      <path d="M300 138 l-108 0" stroke="#e08a2b" strokeWidth="2"/>
      <text x="306" y="142" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#c4741f">Tanking</text>
      <text x="306" y="157" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#c4741f">membrane</text>
      <path d="M300 186 l-134 0" stroke="#5d7078" strokeWidth="1.4"/>
      <text x="306" y="190" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#1f2a30">Substrate</text>
      <path d="M132 214 L132 286" stroke="#e08a2b" strokeWidth="2.5"/>
      <path d="M126 214 h12 M126 286 h12" stroke="#e08a2b" strokeWidth="2.5"/>
      <text x="120" y="254" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#c4741f" textAnchor="end">150mm</text>
      <text x="24" y="316" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fill="#e8e4dc">Minimum upstand above finished floor</text>
      <text x="24" y="342" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fill="#e8e4dc">Wet room floor fall</text>
      <text x="376" y="342" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e08a2b" textAnchor="end">1:80 min</text>
      <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">A standard, not a statutory regulation</text>
      <text x="376" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
  ),
  "trees-and-foundation-depth-cranleigh": (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="tsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a9fd4"/><stop offset="1" stopColor="#9fd3ea"/>
        </linearGradient>
        <linearGradient id="tsoil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b4530"/><stop offset="1" stopColor="#3a2b1d"/>
        </linearGradient>
      </defs>
      <rect width="400" height="236" fill="url(#tsky)"/>
      <circle cx="326" cy="58" r="22" fill="#ffe9a8" opacity=".85"/>
      <ellipse cx="92" cy="70" rx="42" ry="15" fill="#ffffff" opacity=".55"/>
      <ellipse cx="120" cy="62" rx="28" ry="12" fill="#ffffff" opacity=".45"/>
      <rect y="228" width="400" height="14" fill="#6ab04a"/>
      <rect y="242" width="400" height="158" fill="url(#tsoil)"/>
      <path d="M150 250 Q 90 296 41 301" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 92 326 44 356" stroke="#c9b79a" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 105 353 68 405" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 136 349 124 398" stroke="#c9b79a" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 191 339 225 380" stroke="#c9b79a" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 222 332 280 367" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 225 303 286 313" stroke="#c9b79a" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 215 277 269 267" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/>
      <rect x="144" y="196" width="13" height="58" fill="#7a5b3a"/>
      <circle cx="150" cy="168" r="46" fill="#3f8f37"/>
      <circle cx="118" cy="186" r="30" fill="#4aa33f"/>
      <circle cx="182" cy="186" r="30" fill="#4aa33f"/>
      <circle cx="150" cy="140" r="30" fill="#57b449"/>
      <rect x="286" y="150" width="96" height="78" fill="#efe9df"/>
      <path d="M280 152 L334 118 L388 152 Z" fill="#b4442f"/>
      <rect x="304" y="180" width="22" height="24" fill="#8fc4dd"/>
      <rect x="344" y="180" width="22" height="24" fill="#8fc4dd"/>
      <rect x="286" y="242" width="96" height="86" fill="#9a9a95"/>
      <path d="M286 242 h96" stroke="#e08a2b" strokeWidth="3"/>
      <path d="M272 242 L272 328" stroke="#e08a2b" strokeWidth="2.5"/>
      <path d="M266 242 h12 M266 328 h12" stroke="#e08a2b" strokeWidth="2.5"/>
      <text x="260" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#ffd79a" textAnchor="end">0.9m</text>
      <text x="260" y="308" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#ffd79a" textAnchor="end">to 3.0m</text>
      <rect y="336" width="400" height="64" fill="#1f2a30" opacity=".92"/>
      <text x="24" y="360" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Roots drink the clay. Clay shrinks.</text>
      <text x="24" y="380" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Depth set by species and soil — NHBC ch. 4.2</text>
      <text x="376" y="380" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
  ),
};
