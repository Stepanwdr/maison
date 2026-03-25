'use client';
export function FooterSection() {
  const cols = [
    { h:'Навигация', links:[{l:'Бронирование',h:'#booking'},{l:'Номера',h:'#rooms'},{l:'SPA',h:'#spa'},{l:'Галерея',h:'#gallery'}] },
    { h:'Контакты',  links:[{l:'+374 10 123 456',h:'#'},{l:'info@maisondoree.am',h:'#'},{l:'ул. Абовяна 12',h:'#'}] },
    { h:'Правовое',  links:[{l:'Условия бронирования',h:'#'},{l:'Конфиденциальность',h:'#'},{l:'Правила отмены',h:'#'}] },
  ];
  return (
    <footer className="footer" id="contacts">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">MO<em>N</em>TE LEON</div>
          <p className="footer-tagline">Бутик-отель в сердце Еревана. 18 номеров, SPA, авторский сервис.</p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div className="footer-col-h">{c.h}</div>
            <div className="footer-links">
              {c.links.map(l => <a key={l.l} href={l.h} className="footer-link">{l.l}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-btm">
        <span className="footer-copy">© 2026 MONTE LEON Boutique Hotel</span>
        <span className="footer-copy">Ереван, Армения</span>
      </div>
    </footer>
  );
}
