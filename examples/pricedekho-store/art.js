/* Flat product illustrations used until real product photos are added.
   ART(type, color, view) returns an SVG string. view: 'front' | 'back' | 'box'.
   Outlines use var(--art-ink) so they hold up in light and dark themes. */
(() => {
  const INK = 'var(--art-ink)', SCREEN = '#16202E', TAG = '#FFD43B';
  const s = (body, label) =>
    `<svg viewBox="0 0 200 200" role="img" aria-label="${label}" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">${body}</svg>`;
  const screenUI = (x, y, w, h) => `
    <rect x="${x + w * .12}" y="${y + h * .14}" width="${w * .44}" height="${h * .07}" rx="2" fill="#FFFFFF" fill-opacity=".85" stroke="none"/>
    <rect x="${x + w * .12}" y="${y + h * .26}" width="${w * .28}" height="${h * .05}" rx="2" fill="#FFFFFF" fill-opacity=".4" stroke="none"/>
    <rect x="${x + w * .12}" y="${y + h * .62}" width="${w * .76}" height="${h * .16}" rx="4" fill="#FFFFFF" fill-opacity=".12" stroke="none"/>
    <rect x="${x + w * .12}" y="${y + h * .66}" width="${w * .3}" height="${h * .08}" rx="3" fill="${TAG}" stroke="none"/>`;

  const D = {
    phone: (c, v) => v === 'back'
      ? `<rect x="62" y="20" width="76" height="160" rx="16" fill="${c}"/>
         <rect x="72" y="32" width="38" height="52" rx="10" fill="${SCREEN}" fill-opacity=".14"/>
         <circle cx="84" cy="46" r="7" fill="${SCREEN}"/><circle cx="84" cy="70" r="7" fill="${SCREEN}"/><circle cx="100" cy="58" r="4" fill="#F2F2F2" stroke="none"/>
         <circle cx="84" cy="46" r="2.5" fill="#5B7090" stroke="none"/><circle cx="84" cy="70" r="2.5" fill="#5B7090" stroke="none"/>`
      : `<rect x="62" y="20" width="76" height="160" rx="16" fill="${c}"/>
         <rect x="68" y="27" width="64" height="146" rx="11" fill="${SCREEN}"/>
         <rect x="92" y="33" width="16" height="5" rx="2.5" fill="#000" stroke="none"/>${screenUI(68, 27, 64, 146)}`,
    laptop: c => `
      <rect x="38" y="40" width="124" height="84" rx="7" fill="${c}"/>
      <rect x="45" y="47" width="110" height="70" rx="3" fill="${SCREEN}"/>${screenUI(45, 47, 110, 70)}
      <path d="M24 126h152l6 12a4 4 0 0 1-3.6 6H21.6a4 4 0 0 1-3.6-6z" fill="${c}"/>
      <path d="M86 126h28l-2 5H88z" fill="${INK}" stroke="none" opacity=".35"/>`,
    headphones: c => `
      <path d="M48 112C48 52 152 52 152 112" stroke-width="15"/>
      <path d="M48 112C48 52 152 52 152 112" stroke="${c}" stroke-width="9"/>
      <rect x="32" y="98" width="34" height="58" rx="14" fill="${c}"/>
      <rect x="134" y="98" width="34" height="58" rx="14" fill="${c}"/>
      <rect x="58" y="106" width="12" height="42" rx="6" fill="${SCREEN}"/>
      <rect x="130" y="106" width="12" height="42" rx="6" fill="${SCREEN}"/>`,
    earbuds: c => `
      <rect x="52" y="96" width="96" height="68" rx="30" fill="${c}"/>
      <path d="M53 122h94"/><circle cx="100" cy="140" r="3" fill="${TAG}" stroke="none"/>
      <g fill="${c}"><circle cx="76" cy="62" r="16"/><path d="M80 77l6 26h-10l-6-24"/><circle cx="124" cy="62" r="16"/><path d="M120 77l-6 26h10l6-24"/></g>
      <circle cx="76" cy="62" r="6" fill="${SCREEN}"/><circle cx="124" cy="62" r="6" fill="${SCREEN}"/>`,
    washer: c => `
      <rect x="48" y="22" width="104" height="156" rx="12" fill="${c}"/>
      <path d="M48 56h104"/><rect x="60" y="34" width="34" height="10" rx="3" fill="${SCREEN}"/>
      <rect x="64" y="37" width="12" height="4" rx="1" fill="${TAG}" stroke="none"/>
      <circle cx="132" cy="39" r="7" fill="#FFFFFF"/>
      <circle cx="100" cy="114" r="40" fill="#E9EDF2"/><circle cx="100" cy="114" r="29" fill="#9DB8D9"/>
      <path d="M72 120c9-7 19 7 28 0s19 7 28 0" stroke="#FFFFFF" stroke-width="3"/>`,
    ac: c => `
      <rect x="18" y="62" width="164" height="62" rx="16" fill="${c}"/>
      <path d="M30 108h140"/><rect x="138" y="74" width="30" height="16" rx="4" fill="${SCREEN}"/>
      <rect x="143" y="79" width="12" height="6" rx="1" fill="${TAG}" stroke="none"/>
      <g stroke="#7FA7D6" stroke-width="3"><path d="M56 138c-4 10 4 16 0 26"/><path d="M100 138c-4 10 4 16 0 26"/><path d="M144 138c-4 10 4 16 0 26"/></g>`,
    watch: c => `
      <rect x="78" y="14" width="44" height="172" rx="12" fill="${c}"/>
      <rect x="62" y="56" width="76" height="88" rx="22" fill="${SCREEN}"/>
      <rect x="138" y="82" width="7" height="20" rx="3" fill="${SCREEN}"/>
      <circle cx="100" cy="100" r="24" stroke="#FFFFFF" stroke-opacity=".18" stroke-width="5"/>
      <path d="M100 76a24 24 0 0 1 22 33" stroke="${TAG}" stroke-width="5"/>
      <rect x="90" y="95" width="20" height="9" rx="3" fill="#FFFFFF" stroke="none"/>`,
    tv: c => `
      <rect x="16" y="34" width="168" height="104" rx="7" fill="${c}"/>
      <rect x="22" y="40" width="156" height="92" rx="3" fill="${SCREEN}"/>
      <circle cx="140" cy="68" r="12" fill="${TAG}" stroke="none"/>
      <path d="M22 132l38-40 26 24 22-18 70 34z" fill="#2F6F5E" stroke="none"/>
      <path d="M58 138l-12 26M142 138l12 26M40 164h120"/>`,
    speaker: c => `
      <rect x="62" y="34" width="76" height="136" rx="36" fill="${c}"/>
      <g fill="${INK}" stroke="none" opacity=".55">${Array.from({length: 24}, (_, i) =>
        `<circle cx="${80 + (i % 4) * 13}" cy="${80 + Math.floor(i / 4) * 13}" r="2.4"/>`).join('')}</g>
      <rect x="86" y="46" width="28" height="8" rx="4" fill="${SCREEN}"/>
      <circle cx="100" cy="50" r="2" fill="${TAG}" stroke="none"/>`,
    kettle: c => `
      <path d="M136 82c30 6 26 52 0 62" stroke-width="13"/><path d="M136 82c30 6 26 52 0 62" stroke="${c}" stroke-width="7"/>
      <path d="M66 150l8-82c16-10 36-10 52 0l8 82z" fill="${c}"/>
      <path d="M72 92L44 72l4-6 32 14z" fill="${c}"/>
      <ellipse cx="100" cy="66" rx="24" ry="7" fill="${c}"/><rect x="94" y="52" width="12" height="9" rx="3" fill="${SCREEN}"/>
      <rect x="52" y="150" width="96" height="18" rx="7" fill="${SCREEN}"/>
      <rect x="92" y="156" width="16" height="5" rx="2" fill="${TAG}" stroke="none"/>`,
  };
  const box = (type, c) => `
    <path d="M40 72l60-26 60 26v78l-60 26-60-26z" fill="#F4F1EC"/>
    <path d="M40 72l60 26 60-26M100 98v78"/>
    <g transform="translate(108 104) scale(.42) rotate(-8 100 100)">${D[type](c, 'front')}</g>
    <path d="M52 84l36 15v20l-36-15z" fill="${TAG}" stroke="none"/>`;

  window.ART = (type, color, view = 'front') => {
    const t = D[type] ? type : 'phone';
    if (view === 'box') return s(box(t, color), 'In the box');
    return s(D[t](color, view), view === 'back' ? 'Back view' : 'Product image');
  };
})();
