// 샘플 데이터 — 여기만 고치면 내용이 바뀝니다.
const DATA = [
  {
    id: 'enjoy', name: '즐기기', icon: '🎧', desc: '듣고, 보고, 노는 것들',
    accent: 'var(--c1)', soft: 'var(--c1-soft)',
    subs: [
      { id: 'music', name: '음악', icon: '🎵', desc: '요즘 자주 듣는 노래들', items: [
        { icon: '🎧', title: '출근길 플레이리스트', text: '잔잔한 인디 위주 30곡', tag: '플레이리스트' },
        { icon: '🎹', title: '피아노 독학 일기', text: '악보 읽기 3주차', tag: '연주' },
        { icon: '💿', title: '이번 달 앨범', text: '반복 재생 중인 앨범', tag: '추천' },
      ]},
      { id: 'movie', name: '영화/드라마', icon: '🎬', desc: '보고 나서 남긴 한 줄', items: [
        { icon: '🍿', title: '주말 영화', text: '따뜻한 가족 영화 ★★★★', tag: '영화' },
        { icon: '📺', title: '정주행 드라마', text: '16부작 완주 기록', tag: '드라마' },
        { icon: '⭐', title: '인생 영화 TOP 5', text: '다시 봐도 좋은 작품들', tag: '모음' },
      ]},
      { id: 'game', name: '게임', icon: '🎮', desc: '쉬는 시간의 즐거움', items: [
        { icon: '🕹️', title: '요즘 하는 게임', text: '힐링 농장 게임', tag: '플레이중' },
        { icon: '🧩', title: '보드게임 모임', text: '한 달에 한 번 친구들과', tag: '모임' },
      ]},
    ],
  },
  {
    id: 'move', name: '움직이기', icon: '🏃', desc: '몸을 쓰고 떠나는 시간',
    accent: 'var(--c2)', soft: 'var(--c2-soft)',
    subs: [
      { id: 'workout', name: '운동', icon: '💪', desc: '꾸준함이 목표', items: [
        { icon: '🏋️', title: '주 3회 근력 운동', text: '스쿼트 40kg 달성', tag: '헬스' },
        { icon: '🧘', title: '아침 스트레칭', text: '10분이면 충분해요', tag: '루틴' },
      ]},
      { id: 'trip', name: '여행', icon: '✈️', desc: '다녀온 곳, 가고 싶은 곳', items: [
        { icon: '🏝️', title: '제주 3박 4일', text: '바다 보며 멍하니', tag: '다녀옴' },
        { icon: '🚆', title: '기차 여행 계획', text: '강릉 당일치기', tag: '예정' },
        { icon: '🗺️', title: '버킷리스트', text: '가고 싶은 도시 10곳', tag: '리스트' },
      ]},
      { id: 'walk', name: '산책', icon: '🌳', desc: '동네 한 바퀴', items: [
        { icon: '🍃', title: '우리 동네 코스', text: '공원 → 천변 → 카페', tag: '코스' },
        { icon: '📷', title: '산책 중 찍은 것', text: '하늘, 고양이, 꽃', tag: '사진' },
      ]},
    ],
  },
  {
    id: 'make', name: '만들기', icon: '🎨', desc: '손으로 만드는 즐거움',
    accent: 'var(--c3)', soft: 'var(--c3-soft)',
    subs: [
      { id: 'art', name: '그림/사진', icon: '🖼️', desc: '눈에 담은 순간들', items: [
        { icon: '✏️', title: '오늘의 낙서', text: '하루 한 장 그리기', tag: '드로잉' },
        { icon: '📸', title: '필름 카메라', text: '현상한 사진 모음', tag: '사진' },
      ]},
      { id: 'cook', name: '요리', icon: '🍳', desc: '해 먹는 재미', items: [
        { icon: '🥘', title: '자주 하는 요리', text: '15분 완성 파스타', tag: '레시피' },
        { icon: '🧁', title: '베이킹 도전', text: '첫 마들렌 성공!', tag: '베이킹' },
        { icon: '☕', title: '홈카페', text: '집에서 만든 라떼', tag: '음료' },
      ]},
      { id: 'write', name: '글쓰기', icon: '📝', desc: '생각을 적어두는 곳', items: [
        { icon: '📓', title: '감사 일기', text: '하루 세 줄 쓰기', tag: '일기' },
        { icon: '📚', title: '독서 메모', text: '읽은 책 한 줄 평', tag: '독서' },
      ]},
    ],
  },
];

const $ = (s) => document.querySelector(s);
const home = $('#home'), detail = $('#detail'), title = $('#title');
const backBtn = $('#backBtn'), tabbar = $('#tabbar'), catBox = $('#categories');
const style = (c) => `--accent:${c.accent};--soft:${c.soft}`;

// 홈: 카테고리 아코디언
catBox.innerHTML = DATA.map((c) => `
  <article class="cat" id="cat-${c.id}" style="${style(c)}">
    <button class="cat-head" aria-expanded="false">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-info"><b class="cat-name">${c.name}</b><span class="cat-desc">${c.desc}</span></div>
      <span class="chev">⌄</span>
    </button>
    <div class="cat-body"><div><div class="subs">
      ${c.subs.map((s) => `<button class="sub" data-go="${c.id}/${s.id}"><span>${s.icon}</span>${s.name}</button>`).join('')}
    </div></div></div>
  </article>`).join('');

// 하단 탭
tabbar.innerHTML =
  `<button class="tab on" data-tab="home"><span>🏠</span>홈</button>` +
  DATA.map((c) => `<button class="tab" data-tab="${c.id}" style="--accent:${c.accent}"><span>${c.icon}</span>${c.name}</button>`).join('');

function toggle(cat, force) {
  const open = force ?? !cat.classList.contains('open');
  cat.classList.toggle('open', open);
  cat.querySelector('.cat-head').setAttribute('aria-expanded', open);
}

function setTab(id) {
  tabbar.querySelectorAll('.tab').forEach((t) => t.classList.toggle('on', t.dataset.tab === id));
}

function showHome(openId) {
  detail.hidden = true; home.hidden = false;
  title.textContent = '나의 취미 노트'; backBtn.hidden = true;
  if (openId) {
    document.querySelectorAll('.cat').forEach((c) => toggle(c, c.id === 'cat-' + openId));
    $('#cat-' + openId).scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else window.scrollTo({ top: 0 });
  setTab(openId || 'home');
}

function showSub(catId, subId, itemTag) {
  const c = DATA.find((x) => x.id === catId), s = c.subs.find((x) => x.id === subId);
  const tags = [...new Set(s.items.map((i) => i.tag))];
  const list = s.items.filter((i) => !itemTag || i.tag === itemTag);
  detail.style.cssText = style(c);
  detail.innerHTML = `
    <div class="hero" style="background-image:url(images/${s.id}.jpg)"><div class="big">${s.icon}</div><h2>${s.name}</h2><p>${s.desc}</p></div>
    <div class="chips">
      <button class="chip ${itemTag ? '' : 'on'}" data-tag="">전체</button>
      ${tags.map((t) => `<button class="chip ${t === itemTag ? 'on' : ''}" data-tag="${t}">${t}</button>`).join('')}
    </div>
    ${list.map((i) => `
      <div class="item"><div class="thumb"><img src="images/${s.id}-${s.items.indexOf(i)}.jpg" alt="${i.title}" loading="lazy"></div>
        <div><h3>${i.title}</h3><p>${i.text}</p><span class="tag">${i.tag}</span></div></div>`).join('')}`;
  detail.dataset.path = `${catId}/${subId}`;
  home.hidden = true; detail.hidden = false;
  title.textContent = `${c.name} · ${s.name}`; backBtn.hidden = false;
  setTab(catId);
  if (!itemTag) window.scrollTo({ top: 0 });
}

// 이벤트
catBox.addEventListener('click', (e) => {
  const sub = e.target.closest('[data-go]');
  if (sub) return (location.hash = sub.dataset.go);
  const head = e.target.closest('.cat-head');
  if (head) toggle(head.parentElement);
});
tabbar.addEventListener('click', (e) => {
  const t = e.target.closest('.tab'); if (!t) return;
  const id = t.dataset.tab;
  if (location.hash.slice(1)) { history.pushState(null, '', location.pathname); }
  showHome(id === 'home' ? null : id);
});
detail.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (chip) { const [c, s] = detail.dataset.path.split('/'); showSub(c, s, chip.dataset.tag); }
});
backBtn.addEventListener('click', () => history.back());

// 해시 라우팅 (#enjoy/music) — 폰의 뒤로가기 버튼도 동작
function route() {
  const [c, s] = location.hash.slice(1).split('/');
  if (c && s && DATA.find((x) => x.id === c)?.subs.some((x) => x.id === s)) showSub(c, s);
  else showHome();
}
addEventListener('hashchange', route);
route();
