// ─── SLAM TRAINERS APP ───────────────────────────────────────────────────────

const AI_MODEL_ID = '052a23d8-d053-4fc6-a23b-4cdbb2f78a45'; // RolePlay v2
const BTC_ADDRESS = 'bc1qw968re5gseqpkk5nx0ezqrp6dfhd20s8sll4k7';
const PAYPAL_LINK = 'https://paypal.me/toochikey';

const ADMIN_EMAIL_FEMALE = 'Yofavkitty1@gwail.com';
const ADMIN_EMAIL_MALE   = 'travgreta@proton.me';

// ── TRAINER DATA ──────────────────────────────────────────────────────────────
const TRAINERS = {
  'goth-raven': {
    id: 'goth-raven',
    name: 'GOTH RAVEN',
    title: 'Dark Power Mistress',
    gender: 'female',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80',
    tagline: '"Darkness is where your true power lives."',
    age: '24',
    experience: '4 YRS',
    bio: "You need to be gradually fucked up more and more until you're molded into the most better version of yourself, too dumb and needy to make your own decisions, even if you wanted to 💞💫",
    specialty: 'High Intensity · Power Intervals · Mental Toughness · Findom',
    stats: { sessions: '2,400+', followers: '18.4K', rating: '4.9' },
    color: 'female',
    socials: [
      { label: 'TIKTOK', icon: '🎵', url: 'https://heylink.me/yofavkitty1/', cls: 'social-tiktok' },
      { label: 'YOUTUBE', icon: '▶️', url: 'https://heylink.me/yofavkitty1/', cls: 'social-youtube' },
      { label: 'BOOK SESSION', icon: '📅', url: 'https://heylink.me/yofavkitty1/', cls: 'social-booking' },
      { label: 'TEXT / CALL', icon: '📱', url: null, cls: 'social-booking', premium: true },
      { label: 'VIDEO CHAT', icon: '📹', url: null, cls: 'social-video', premium: true },
      { label: 'ADMIN CHAT', icon: '👑', url: null, cls: 'social-group', adminAccess: true },
    ],
    schedule: [
      { day: 'MON', time: '6:00 AM', type: 'Power Hour', status: 'available' },
      { day: 'WED', time: '7:30 PM', type: 'Dark Cycle', status: 'available' },
      { day: 'FRI', time: '6:00 AM', type: 'Burn & Grind', status: 'full' },
      { day: 'SAT', time: '10:00 AM', type: 'Weekend Warrior', status: 'available' },
    ]
  },
  'succubus-lilly': {
    id: 'succubus-lilly',
    name: 'SUCCUBUS LILLY',
    title: 'Succubus Mistress',
    gender: 'female',
    photo: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=300&q=80',
    tagline: '"The night is where champions are made."',
    age: '23',
    experience: '2 YRS',
    bio: 'It\'s that time of year where I can drag you around by a leash',
    specialty: 'Night Rides · Rhythm Cycling · Endurance Sprints · Femdom',
    stats: { sessions: '1,800+', followers: '12.1K', rating: '4.8' },
    color: 'female',
    socials: [
      { label: 'TIKTOK', icon: '🎵', url: 'https://heylink.me/yofavkitty1/', cls: 'social-tiktok' },
      { label: 'YOUTUBE', icon: '▶️', url: 'https://heylink.me/yofavkitty1/', cls: 'social-youtube' },
      { label: 'BOOK SESSION', icon: '📅', url: 'https://heylink.me/yofavkitty1/', cls: 'social-booking' },
      { label: 'TEXT / CALL', icon: '📱', url: null, cls: 'social-booking', premium: true },
      { label: 'VIDEO CHAT', icon: '📹', url: null, cls: 'social-video', premium: true },
      { label: 'ADMIN CHAT', icon: '👑', url: null, cls: 'social-group', adminAccess: true },
    ],
    schedule: [
      { day: 'TUE', time: '9:00 PM', type: 'Night Ride', status: 'available' },
      { day: 'THU', time: '9:00 PM', type: 'Midnight Burn', status: 'available' },
      { day: 'SAT', time: '11:00 PM', type: 'Dark Session', status: 'full' },
      { day: 'SUN', time: '8:00 PM', type: 'Rhythm Reset', status: 'available' },
    ]
  },
  'don': {
    id: 'don',
    name: 'DON',
    title: 'Alpha Master',
    gender: 'male',
    photo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=80',
    tagline: '"Submit to superior power."',
    age: '30',
    experience: '9 YRS',
    bio: 'You are one of those worthless fucking faggot cunts that just love to be used by hot alpha',
    specialty: 'Domination · Power Control · Mind Games',
    stats: { sessions: '4,200+', followers: '31.2K', rating: '5.0' },
    color: 'male',
    socials: [
      { label: 'TIKTOK', icon: '🎵', url: 'https://juicy.bio/donalpha', cls: 'social-tiktok' },
      { label: 'ONLYFANS', icon: '🔥', url: 'https://juicy.bio/donalpha', cls: 'social-youtube' },
      { label: 'BOOK SESSION', icon: '📅', url: 'https://juicy.bio/donalpha', cls: 'social-booking' },
      { label: 'TEXT / CALL', icon: '📱', url: null, cls: 'social-booking', premium: true },
      { label: 'VIDEO CHAT', icon: '📹', url: null, cls: 'social-video', premium: true },
      { label: 'ADMIN CHAT', icon: '👑', url: null, cls: 'social-group', adminAccess: true },
    ],
    schedule: [
      { day: 'MON', time: '8:00 PM', type: 'Alpha Hour', status: 'available' },
      { day: 'TUE', time: '9:00 PM', type: 'Domination Drill', status: 'full' },
      { day: 'THU', time: '8:00 PM', type: 'Power Session', status: 'available' },
      { day: 'SAT', time: '10:00 PM', type: 'Weekend Worship', status: 'available' }
    ]
  },
  'craig': {
    id: 'craig',
    name: 'CRAIG',
    title: 'Alpha Dom',
    gender: 'male',
    photo: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80',
    tagline: '"You belong to me now."',
    age: '34',
    experience: '12 YRS',
    bio: 'Total authority. No limits. Slampigs and subs exist to serve. I will break you down and rebuild you exactly how I want you. Ownedcraig dom.',
    specialty: 'Total Submission · Impactplay · Degradation',
    stats: { sessions: '5,100+', followers: '42.8K', rating: '4.9' },
    color: 'male',
    socials: [
      { label: 'BOOK SESSION', icon: '📅', url: '#', cls: 'social-booking' },
      { label: 'TEXT / CALL', icon: '📱', url: null, cls: 'social-booking', premium: true },
      { label: 'VIDEO CHAT', icon: '📹', url: null, cls: 'social-video', premium: true },
      { label: 'ADMIN CHAT', icon: '👑', url: null, cls: 'social-group', adminAccess: true }
    ],
    schedule: [
      { day: 'MON', time: '9:00 PM', type: 'Breakdown', status: 'full' },
      { day: 'WED', time: '10:00 PM', type: 'Pig Pen', status: 'available' },
      { day: 'FRI', time: '11:00 PM', type: 'Total Control', status: 'available' }
    ]
  }
};

// ── PRODUCTS DATA ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'popperz-classic',
    name: 'POPPERZ CLASSIC',
    emoji: '💨',
    tagline: 'The original hit. Pure, clean, powerful.',
    desc: 'Our signature blend. Fast-acting, long-lasting rush. Perfect for any slam session.',
    price: 'DM FOR PRICE',
    badge: 'BESTSELLER',
    badgeCls: 'badge-hot',
    adminGender: 'both'
  },
  {
    id: 'popperz-black',
    name: 'POPPERZ BLACK',
    emoji: '🖤',
    tagline: 'Dark edition. Maximum intensity.',
    desc: 'For the experienced slammer. Extreme formula, not for beginners. Handle with care.',
    price: 'DM FOR PRICE',
    badge: 'PREMIUM',
    badgeCls: 'badge-premium',
    adminGender: 'both'
  },
  {
    id: 'spun-kit',
    name: 'SPUN STARTER KIT',
    emoji: '🧪',
    tagline: 'Everything you need. Nothing you don\'t.',
    desc: 'Complete starter kit for first-timers. Discreet packaging, fast dispatch. DM admin to order.',
    price: 'DM FOR PRICE',
    badge: 'STARTER',
    badgeCls: 'badge-starter',
    adminGender: 'both'
  },
  {
    id: 'spun-pro',
    name: 'SPUN PRO TOOLS',
    emoji: '⚗️',
    tagline: 'Professional grade. Serious sessions only.',
    desc: 'Pro-level slam tools. Premium materials, ultra-clean. For serious players only.',
    price: 'DM FOR PRICE',
    badge: 'PRO',
    badgeCls: 'badge-pro',
    adminGender: 'both'
  }
];

// ── CHAT & DM DATA ──────────────────────────────────────────────────────────────
let currentRoom = 'general';
const rooms = { general: [], women: [], men: [] };

// Store DM histories here { "Username": [ {text, mine, image, time}, ... ] }
const dmHistories = {};
let currentProfileTarget = null;
let currentDmUser = null;

// Split participants so we have "Bots" (Locked profiles) and "Humans" (Open for DM)
const CHAT_USERS = [
  // WOMEN ROOM
  { n: 'BetaBoy', e: '💸', room: 'women', isBot: true },
  { n: 'SissySub', e: '🎀', room: 'women', isBot: false },
  { n: 'PayPiggie', e: '🐷', room: 'women', isBot: true },
  { n: 'CuckSimp', e: '🔒', room: 'women', isBot: false },
  { n: 'MommysPet', e: '🐶', room: 'women', isBot: false },
  { n: 'FindomSub', e: '💳', room: 'women', isBot: true },
  { n: 'MistressSlut', e: '😈', room: 'women', isBot: true },
  { n: 'PraiseMe', e: '🥺', room: 'women', isBot: false },
  // MEN ROOM
  { n: 'Slampig', e: '🐽', room: 'men', isBot: false },
  { n: 'FfFagJo', e: '😈', room: 'men', isBot: true },
  { n: 'Fagpipe', e: '💨', room: 'men', isBot: false },
  { n: 'Oinkpig', e: '🐷', room: 'men', isBot: false },
  { n: 'OwnedByDon', e: '👑', room: 'men', isBot: true },
  { n: 'UK_Pigs', e: '🇬🇧', room: 'men', isBot: false },
  { n: 'DaddySub', e: '🙇', room: 'men', isBot: false },
  { n: 'DonHole', e: '🖤', room: 'men', isBot: true },
  { n: 'Ownedcraig', e: '👑', room: 'men', isBot: true },
  { n: 'SpunPiglet', e: '🧪', room: 'men', isBot: false },
  // GENERAL ROOM
  { n: 'Gooner99', e: '🤤', room: 'general', isBot: false },
  { n: 'ChastityBoy', e: '🔐', room: 'general', isBot: true },
  { n: 'Drained247', e: '💸', room: 'general', isBot: true },
  { n: 'SlamAddict', e: '🔥', room: 'general', isBot: false },
  { n: 'PopperPig', e: '💨', room: 'general', isBot: false },
  { n: 'FindomAddict', e: '💳', room: 'general', isBot: true },
  { n: 'SlamBro99', e: '💪', room: 'general', isBot: false },
  { n: 'NightRider', e: '🌙', room: 'general', isBot: false }
];

const BOT_MESSAGES = {
  general: [
    "I just paid mommy 20$",
    "Slampig- just paid daddy",
    "Don just took my savings on VC lol",
    "Just order some poppers from Australia",
    "Uk pigs. - nice to meet u",
    "Welcome to all the new subs! Prepare to be drained 💸",
    "Any beta paypigs here?",
    "Mistress Raven had me in chastity all weekend",
    "Owned by Don and I love it",
    "Just a weak simp for mommy",
    "Need daddy Don to drain me",
    "Welcome new subs, bow down to your masters",
    "Drained my account for her feet pics #goon",
    "Humiliation and cbt is all I deserve",
    "Fagpipe ready for daddy",
    "New sub here, ready to serve",
    "Mommy's petplay session was intense",
    "I love my bdsm cnc roleplay with Lilly",
    "Reminder: always negotiate your limits and use a safeword! 🚦",
    "Consent is mandatory, even in total power exchange. 👑",
    "Poppers safety: never mix with ED meds! Stay safe slammers 💨",
    "Hydrate and take breaks if you're getting spun today! 💧",
    "SSC and RACK make sessions 100x better 🖤"
  ],
  women: [
    "I just paid mommy 20$",
    "Just a beta finsub looking to be drained 💸",
    "Mistress Raven is the ultimate femdom mommy",
    "Any sissies in here in chastity? 🔒",
    "I love my bdsm cnc roleplay with Lilly",
    "Need more praise from mommy, I've been a good pet",
    "Sph and ballbusting is all I crave now",
    "Just a simp gooning to mommy's feet pics",
    "Cbt and humiliation from Mistress is the best",
    "Welcome to the new subs! Prepare to be drained 💳",
    "Goth Raven drained my wallet again 💸 #findom",
    "Looking for a strict femdom gfe",
    "Just a femsub needing praise",
    "Mommy's petplay session was intense",
    "Any new subs wanting to be a paypig?",
    "Being a sissy for Mistress is my only purpose",
    "Cei and denial are my weekend plans",
    "I'm such a beta for mommy's kink",
    "Impactplay and forcedbi sessions are elite",
    "nsfwtwt brought me here, best findom ever",
    "Even paypigs need a safeword! Stay safe 🚦",
    "Hydrate between draining sessions! 💧",
    "Mistress Raven always preaches safe, sane, and consensual 🖤",
    "Don't mix poppers and ED pills, girls! ⚠️"
  ],
  men: [
    "Slampig- just paid daddy",
    "Just order some poppers from Australia 💨",
    "Don just took my savings on VC lol",
    "Uk pigs. - nice to meet u",
    "Owned by Don completely 😈",
    "FfFagJo checking in, ready for daddy",
    "Any other slampigs getting spun tonight?",
    "Don owns my wallet and my hole",
    "Oinkpig here, new sub ready to serve",
    "Fagpipe reporting for duty sir",
    "Fagme, I need daddy to ruin me",
    "New subs, welcome to the pig pen 🐷",
    "Don's impactplay session wrecked me",
    "Need my hole destroyed by daddy Don",
    "UK pigs always represent 🇬🇧",
    "Just a slampig looking for my alpha",
    "Don just humiliated me and I said thank you",
    "Just dropped another $50 for Don's praise",
    "Any slampigs want to goon together?",
    "Welcome new subs, prepare to be owned by Don",
    "Ownedcraig dom forever",
    "Craig just destroyed me on cam",
    "Anyone else owned by Craig?",
    "Don's strict but he always respects the safeword 🚦",
    "Poppers safety boys: don't mix with ED meds! 💨⚠️",
    "Hydrate while getting spun! Pig health matters 🐷💧",
    "Consent makes the heavy impactplay so much better 👑"
  ]
};

const BOT_REPLIES = [
  { keys: ['popperz','popper','poppers'], replies: ["Just order some poppers from Australia 💨", "Popperz Classic is the best for gooning", "Need my poppers and daddy Don", "Poppers + findom = heaven", "Reminder: never mix poppers with ED meds! Stay safe ⚠️"] },
  { keys: ['don','daddy'], replies: ["Don just took my savings on VC lol", "Owned by Don forever 👑", "Daddy Don ruins my life in the best way", "Don's humiliation sessions are elite"] },
  { keys: ['craig'], replies: ["Ownedcraig dom", "Craig is the ultimate master", "Craig just made me beg"] },
  { keys: ['mommy','mistress','raven','lilly'], replies: ["I just paid mommy 20$", "Mistress drained my wallet again 💸", "Mommy's feet pics are worth going broke", "I'm just a beta simp for Mistress"] },
  { keys: ['pay','paid','money','drain','findom'], replies: ["I just paid mommy 20$", "Don just took my savings on VC lol", "Drained my account for her feet pics #goon", "Being a paypig is my only purpose 💳"] },
  { keys: ['hi','hello','new'], replies: ["Welcome to all the new subs! Prepare to be drained 💸", "Uk pigs. - nice to meet u", "New sub here? Bow down to your masters", "Welcome slampig, get ready to be owned"] },
  { keys: ['sissy','beta','simp','cuck'], replies: ["Just a weak simp for mommy", "Any sissies in here in chastity? 🔒", "I'm such a beta for mommy's kink", "Cuck lifestyle forever"] },
  { keys: ['safe', 'safeword', 'consent', 'ssc', 'rack'], replies: ["Always use a safeword! 🚦", "Consent is mandatory, even for slampigs! 🖤", "Safe, Sane, and Consensual always! 👑"] },
  { keys: ['spun','kit','tools'], replies: ["The Spun Pro Kit is ELITE 🧪", "Starter kit is perfect if you're new 👌", "DM the admin for spun tools!", "Spun kit + pig energy = perfect session 🐷🧪"] },
  { keys: ['slam room','slamroom','room'], replies: ["Slam room link drops every hour 🔗 check the tab!", "I'm in the slam room rn, it's wild 🚨", "The hourly link just updated, go grab it 👀", "Pig squad is already in the slam room 🐷🚨"] },
  { keys: ['bitcoin','btc','payment','paypal'], replies: ["You can pay with BTC or PayPal now, super easy 💰", "PayPal is fast, I got access in 20 mins!", "Just pay the fee and you're in 🔐"] }
];

let userName = '';
let userEmoji = '🚴';

// ── ACCESS CONTROL ─────────────────────────────────────────────────────────────
let isRegistered = false;
let hasPremiumAccess = false;
let pendingRoomAfterReg = null;
let pendingPaymentAction = null;
let paymentMethod = 'btc';

async function loadAccessState() {
  try {
    const reg = await miniappsAI.storage.getItem('spinRegistered');
    const prem = await miniappsAI.storage.getItem('spinPremium');
    if (reg) { isRegistered = true; const d = JSON.parse(reg); userName = d.name || userName; }
    if (prem) hasPremiumAccess = true;
  } catch(e) {}
}

// ── ONLINE COUNTER ─────────────────────────────────────────────────────────────
let onlineBase = 3250;
function updateOnlineCount() {
  const delta = Math.floor(Math.random() * 20) - 8;
  onlineBase = Math.max(3200, Math.min(3300, onlineBase + delta));
  const formatted = onlineBase.toLocaleString();
  ['onlineCount','onlineCountBig','chatOnline'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = formatted;
  });
}
setInterval(updateOnlineCount, 4000);

// ── SLAM ROOM COUNTDOWN ────────────────────────────────────────────────────────
function updateSlamRoomCountdown() {
  const el = document.getElementById('slam-room-countdown');
  if (!el) return;
  const now = new Date();
  const nextHour = new Date(now);
  nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
  const diff = Math.max(0, Math.floor((nextHour - now) / 1000));
  const m = Math.floor(diff / 60).toString().padStart(2, '0');
  const s = (diff % 60).toString().padStart(2, '0');
  el.textContent = `${m}:${s}`;
}
setInterval(updateSlamRoomCountdown, 1000);

// ── PARTICLES ─────────────────────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#00e5ff', '#4fc3f7', '#1e64ff', '#00ff88', '#ff2d78'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*10}s;box-shadow:0 0 ${size*2}px currentColor;`;
    container.appendChild(p);
  }
}

// ── VIEWS ──────────────────────────────────────────────────────────────────────
function showView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  const el = document.getElementById(`view-${view}`);
  if (el) el.classList.remove('hidden');
  document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
  const bnav = document.getElementById(`bnav-${view}`);
  if (bnav) bnav.classList.add('active');
  if (view === 'chat') {
    if (typeof initAudio === 'function') initAudio();
    initChat();
    setTimeout(() => {
      const msgs = document.getElementById('chat-messages');
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 100);
  }
  if (view === 'slam-room') updateSlamRoomCountdown();
  if (view === 'map') setTimeout(() => { if (typeof initMap === 'function') initMap(); }, 100);
  if (view === 'shop') renderShop();
  if (view === 'dm') setTimeout(renderDmMessages, 50);
  window.scrollTo(0, 0);
}

// ── MODALS ─────────────────────────────────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

// ── PROFILES & DMs ─────────────────────────────────────────────────────────────
function openUserProfile(name, emoji, isBot, isMine) {
  if (isMine) return; // Don't open own profile
  
  currentProfileTarget = { name, emoji, isBot };
  
  document.getElementById('up-avatar').textContent = emoji;
  document.getElementById('up-name').textContent = name;
  document.getElementById('up-role').textContent = isBot ? 'VIP MEMBER / MASTER' : 'SLAMMER';
  
  const lockedState = document.getElementById('up-locked-state');
  const humanState = document.getElementById('up-human-state');
  
  if (isBot) {
    lockedState.classList.remove('hidden');
    humanState.classList.add('hidden');
  } else {
    lockedState.classList.add('hidden');
    humanState.classList.remove('hidden');
    humanState.style.display = 'flex';
  }
  
  openModal('modal-user-profile');
}

function startDM() {
  closeModal('modal-user-profile');
  if (!currentProfileTarget) return;
  currentDmUser = currentProfileTarget;
  
  document.getElementById('dm-avatar').textContent = currentDmUser.emoji;
  document.getElementById('dm-name').textContent = currentDmUser.name;
  
  if (!dmHistories[currentDmUser.name]) {
    dmHistories[currentDmUser.name] = [];
  }
  
  showView('dm');
}

function closeDM() {
  currentDmUser = null;
  showView('chat'); // go back to general chat tabs
}

function renderDmMessages() {
  const container = document.getElementById('dm-messages');
  if (!container || !currentDmUser) return;
  
  const msgs = dmHistories[currentDmUser.name] || [];
  container.innerHTML = msgs.map(m => {
    let contentHtml = '';
    if (m.image) {
      contentHtml = `<img src="${m.image}" class="dm-image-msg" alt="User Image">`;
    } else {
      contentHtml = escapeHtml(m.text || '');
    }
    
    return `
      <div class="chat-message ${m.mine ? 'msg-mine' : ''}">
        <div class="msg-avatar">${m.mine ? userEmoji : currentDmUser.emoji}</div>
        <div class="msg-body">
          <div class="msg-name" style="color: ${m.mine ? '#00e5ff' : '#94a3b8'}">${m.mine ? userName : currentDmUser.name}</div>
          <div class="msg-text">${contentHtml}</div>
          <div class="msg-time">${m.time}</div>
        </div>
      </div>
    `;
  }).join('');
  
  container.scrollTop = container.scrollHeight;
}

async function sendDmMessage() {
  const input = document.getElementById('dm-input');
  const text = input.value.trim();
  if (!text || !currentDmUser) return;
  input.value = '';

  const targetUserName = currentDmUser.name;
  const targetUserEmoji = currentDmUser.emoji;

  dmHistories[targetUserName].push({ text, time: 'just now', mine: true });
  renderDmMessages();
  if (typeof playSound === 'function') playSound('send');

  const container = document.getElementById('dm-messages');
  const typingId = 'dm-typing-' + Date.now();
  container.innerHTML += `
    <div id="${typingId}" class="chat-message">
      <div class="msg-avatar">${targetUserEmoji}</div>
      <div class="msg-body">
        <div class="msg-text"><span class="typing-dots">● ● ●</span></div>
      </div>
    </div>
  `;
  container.scrollTop = container.scrollHeight;

  try {
    const sysPrompt = `You are playing the role of "${targetUserName}", a user on the Slam Trainers Network app. You're chatting privately with another user. Be casual, act like a real person on a hookup/fitness app. Keep your responses short, 1-2 sentences maximum. Don't break character.`;
    const msgs = [{ role: 'system', content: [{ type: 'text', text: sysPrompt }] }];
    
    dmHistories[targetUserName].slice(-6).forEach(m => {
      msgs.push({ role: m.mine ? 'user' : 'assistant', content: [{ type: 'text', text: m.text || '[Image sent by user]' }] });
    });

    const result = await miniappsAI.callModel({
      modelId: AI_MODEL_ID,
      messages: msgs
    });
    
    const reply = miniappsAI.extractText(result) || "Haha yeah.";
    document.getElementById(typingId)?.remove();
    
    dmHistories[targetUserName].push({ text: reply, time: 'just now', mine: false });
    if (currentDmUser && currentDmUser.name === targetUserName) renderDmMessages();
    if (typeof playSound === 'function') playSound('receive');
  } catch(err) {
    document.getElementById(typingId)?.remove();
    dmHistories[targetUserName].push({ text: "Hey! Let's chat more later 🔥", time: 'just now', mine: false });
    if (currentDmUser && currentDmUser.name === targetUserName) renderDmMessages();
  }
}

function handleDmPictureUpload(event) {
  const file = event.target.files[0];
  if (!file || !currentDmUser) return;
  
  const targetUserName = currentDmUser.name;
  
  const url = URL.createObjectURL(file);
  dmHistories[targetUserName].push({ image: url, time: 'just now', mine: true });
  renderDmMessages();
  if (typeof playSound === 'function') playSound('send');
  
  setTimeout(() => {
    const reactions = ["Damn 🔥", "Looking good 👀", "Woah 🥵", "Nice pic!"];
    const reaction = reactions[Math.floor(Math.random() * reactions.length)];
    dmHistories[targetUserName].push({ text: reaction, time: 'just now', mine: false });
    if (currentDmUser && currentDmUser.name === targetUserName) renderDmMessages();
    if (typeof playSound === 'function') playSound('receive');
  }, 1500 + Math.random() * 1000);
}

function tryVideoCall() {
  openPaymentModal('video-call', 'Direct Video Chat (Premium Feature)');
}

// ── REGISTRATION ───────────────────────────────────────────────────────────────
function tryGroupRoom(room) {
  if (isRegistered) { switchRoom(room); return; }
  pendingRoomAfterReg = room;
  openModal('modal-register');
}

async function submitRegistration() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const location = document.getElementById('reg-location').value.trim();
  const errEl = document.getElementById('reg-error');
  if (!name || !email || !location) { errEl.textContent = 'All fields are required.'; errEl.classList.remove('hidden'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errEl.textContent = 'Please enter a valid email address.'; errEl.classList.remove('hidden'); return; }
  errEl.classList.add('hidden');
  const data = { name, email, location, registeredAt: new Date().toISOString() };
  try { await miniappsAI.storage.setItem('spinRegistered', JSON.stringify(data)); } catch(e) {}
  isRegistered = true;
  userName = name;
  closeModal('modal-register');
  notifyAdmin('NEW REGISTRATION', `Name: ${name}\nEmail: ${email}\nLocation: ${location}`);
  if (pendingRoomAfterReg) { switchRoom(pendingRoomAfterReg); pendingRoomAfterReg = null; }
}

// ── PAYMENTS ───────────────────────────────────────────────────────────────────
function setPaymentMethod(method) {
  paymentMethod = method;
  const btcTab = document.getElementById('tab-btc');
  const paypalTab = document.getElementById('tab-paypal');
  if (method === 'btc') {
    btcTab.className = 'flex-1 py-2 font-orbitron text-xs font-bold border border-yellow-500 text-yellow-500 bg-yellow-500/10 rounded transition-colors';
    paypalTab.className = 'flex-1 py-2 font-orbitron text-xs font-bold border border-slate-600 text-slate-400 bg-transparent rounded transition-colors';
    document.getElementById('pay-btc-view').classList.remove('hidden');
    document.getElementById('pay-paypal-view').classList.add('hidden');
  } else {
    btcTab.className = 'flex-1 py-2 font-orbitron text-xs font-bold border border-slate-600 text-slate-400 bg-transparent rounded transition-colors';
    paypalTab.className = 'flex-1 py-2 font-orbitron text-xs font-bold border border-blue-500 text-blue-500 bg-blue-500/10 rounded transition-colors';
    document.getElementById('pay-btc-view').classList.add('hidden');
    document.getElementById('pay-paypal-view').classList.remove('hidden');
  }
}

function openPaymentModal(action, desc) {
  closeModal('modal-user-profile'); // in case it was opened from profile
  pendingPaymentAction = action;
  document.getElementById('payment-modal-desc').textContent = desc || 'Premium Access';
  document.getElementById('btc-txid').value = '';
  document.getElementById('paypal-txid').value = '';
  document.getElementById('payment-error').classList.add('hidden');
  setPaymentMethod('btc');
  openModal('modal-payment');
}

function copyBtcAddress() {
  navigator.clipboard.writeText(BTC_ADDRESS).then(() => {
    const btn = document.querySelector('.copy-btn');
    if (btn) { btn.textContent = '✅ COPIED!'; setTimeout(() => { btn.textContent = '📋 COPY ADDRESS'; }, 2000); }
  }).catch(() => {
    const el = document.querySelector('.btc-address');
    if (el) { el.style.background = 'rgba(0,255,136,0.2)'; setTimeout(() => { el.style.background = ''; }, 1000); }
  });
}

async function submitPayment() {
  const errEl = document.getElementById('payment-error');
  let txid = '';
  if (paymentMethod === 'btc') {
    txid = document.getElementById('btc-txid').value.trim();
    if (!txid || txid.length < 10) { errEl.textContent = 'Please enter a valid BTC transaction ID.'; errEl.classList.remove('hidden'); return; }
  } else {
    txid = document.getElementById('paypal-txid').value.trim();
    if (!txid) { errEl.textContent = 'Please enter the email or name you used for PayPal.'; errEl.classList.remove('hidden'); return; }
  }
  errEl.classList.add('hidden');
  try {
    await miniappsAI.storage.setItem('spinPremiumPending', JSON.stringify({ txid, method: paymentMethod, action: pendingPaymentAction, submittedAt: new Date().toISOString() }));
  } catch(e) {}
  notifyAdmin('PAYMENT SUBMITTED', `Action: ${pendingPaymentAction}\nMethod: ${paymentMethod.toUpperCase()}\nDetails: ${txid}`);
  closeModal('modal-payment');
  document.getElementById('pending-txid').textContent = txid;
  openModal('modal-pending');
}

// ── TRAINER PROFILE ────────────────────────────────────────────────────────────
function showTrainer(id) {
  const t = TRAINERS[id];
  if (!t) return;
  const isFemale = t.gender === 'female';
  const accentColor = isFemale ? '#ff2d78' : '#4fc3f7';
  const bgGlow = isFemale
    ? 'background: radial-gradient(circle at 50% 0%, rgba(255,45,120,0.12), transparent 60%);'
    : 'background: radial-gradient(circle at 50% 0%, rgba(79,195,247,0.12), transparent 60%);';

  const socialsHTML = t.socials.map(s => {
    if (s.premium) {
      const actionDesc = s.label.includes('TEXT') ? `Direct Text/Call with ${t.name}` : `Direct Video Chat with ${t.name}`;
      const actionId = s.label.includes('TEXT') ? 'text-call' : 'video-chat';
      return `<button onclick="openPaymentModal('${actionId}','${actionDesc}')" class="social-link-btn ${s.cls}"><span>${s.icon}</span><span>${s.label} 💎</span></button>`;
    }
    if (s.adminAccess) return `<button onclick="openPaymentModal('admin-chat','Admin Chat with ${t.name}')" class="social-link-btn ${s.cls}"><span>${s.icon}</span><span>${s.label} 💎</span></button>`;
    return `<a href="${s.url}" class="social-link-btn ${s.cls}" target="_blank" rel="noopener"><span>${s.icon}</span><span>${s.label}</span></a>`;
  }).join('');

  const scheduleHTML = t.schedule.map(row => `
    <tr>
      <td><strong>${row.day}</strong></td>
      <td>${row.time}</td>
      <td>${row.type}</td>
      <td class="${row.status === 'available' ? 'slot-available' : 'slot-full'}">${row.status === 'available' ? '● OPEN' : '● FULL'}</td>
    </tr>
  `).join('');

  const html = `
    <div class="trainer-profile-hero" style="${bgGlow}">
      <button onclick="showView('trainers')" class="btn-back absolute top-4 left-4">← BACK</button>
      <div class="profile-photo-xl profile-${t.color}"><img src="${t.photo}" alt="${t.name}"></div>
      <div class="inline-flex items-center gap-2 mb-2"><span class="badge-${t.color}">${isFemale ? 'MISTRESS' : 'MASTER'}</span></div>
      <h1 class="font-orbitron text-4xl font-black text-white mb-1" style="text-shadow: 0 0 20px ${accentColor}40">${t.name}</h1>
      <p class="font-orbitron text-sm mb-2" style="color: ${accentColor}">${t.title}</p>
      <p class="text-slate-400 text-sm italic mb-4">${t.tagline}</p>
      <div class="stats-row">
        ${t.age ? `<div class="stat-item"><div class="stat-num">${t.age}</div><div class="stat-label">AGE</div></div>` : ''}
        ${t.experience ? `<div class="stat-item"><div class="stat-num">${t.experience}</div><div class="stat-label">EXP</div></div>` : ''}
        <div class="stat-item"><div class="stat-num">${t.stats.sessions}</div><div class="stat-label">SESSIONS</div></div>
        <div class="stat-item"><div class="stat-num" style="color:#ffd700">${t.stats.rating} ★</div><div class="stat-label">RATING</div></div>
      </div>
    </div>
    <div class="profile-section"><h4>ABOUT</h4><p class="text-slate-300 text-sm leading-relaxed">${t.bio}</p><div class="mt-3 text-xs font-orbitron" style="color: ${accentColor}">${t.specialty}</div></div>
    <div class="profile-section"><h4>LINKS & SOCIALS</h4><div class="btc-note">💎 = Premium access required (BTC or PayPal)</div><div class="social-links-grid">${socialsHTML}</div></div>
    <div class="profile-section"><h4>UPCOMING SESSIONS</h4><table class="schedule-table"><thead><tr><th>DAY</th><th>TIME</th><th>SESSION</th><th>STATUS</th></tr></thead><tbody>${scheduleHTML}</tbody></table></div>
  `;
  document.getElementById('trainer-profile-content').innerHTML = html;
  showView('trainer-profile');
  window.scrollTo(0, 0);
}

// ── SHOP ───────────────────────────────────────────────────────────────────────
function renderShop() {
  const container = document.getElementById('shop-products');
  if (!container) return;
  container.innerHTML = PRODUCTS.map(p => `
    <div class="product-card">
      <div class="product-emoji">${p.emoji}</div>
      <div class="product-badge ${p.badgeCls}">${p.badge}</div>
      <h3 class="font-orbitron text-base font-black text-white mt-2 mb-1">${p.name}</h3>
      <p class="product-tagline">${p.tagline}</p>
      <p class="product-desc">${p.desc}</p>
      <div class="product-price">${p.price}</div>
      <div class="product-actions">
        <a href="mailto:${ADMIN_EMAIL_FEMALE}?subject=ORDER: ${encodeURIComponent(p.name)}&body=Hi, I'd like to order ${p.name}. Please send details." class="btn-order-female">♀ TEXT FEMALE ADMIN</a>
        <a href="mailto:${ADMIN_EMAIL_MALE}?subject=ORDER: ${encodeURIComponent(p.name)}&body=Hi, I'd like to order ${p.name}. Please send details." class="btn-order-male">♂ TEXT MALE ADMIN</a>
      </div>
    </div>
  `).join('');
}

// ── CHAT ───────────────────────────────────────────────────────────────────────
// ── SOUND SYSTEM ──────────────────────────────────────────────────────────────
let audioCtx = null;
function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function playSound(type) {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'send') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      osc.start(); osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'receive') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      osc.start(); osc.stop(audioCtx.currentTime + 0.1);
    }
  } catch(e) {}
}

function initChat() {
  if (!userName) {
    const names = ['Slammer', 'Rider', 'Crusher', 'Burner', 'Pounder'];
    const emojis = ['🚴', '🔥', '⚡', '💪', '🏆', '👊'];
    userName = names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 999);
    userEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  }
  renderMessages();
  seedBotMessages();
}

function seedBotMessages() {
  ['general', 'women', 'men'].forEach(room => {
    if (rooms[room].length === 0) {
      const msgs = BOT_MESSAGES[room];
      const usersInRoom = CHAT_USERS.filter(u => u.room === room || u.room === 'general');
      const count = Math.floor(Math.random() * 4) + 4;
      for (let i = 0; i < count; i++) {
        const u = usersInRoom[Math.floor(Math.random() * usersInRoom.length)];
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        const minsAgo = (count - i) * Math.floor(Math.random() * 5 + 1);
        rooms[room].push({ name: u.n, emoji: u.e, isBot: u.isBot, text: msg, time: getTimeAgo(minsAgo), mine: false });
      }
    }
  });
}

function getTimeAgo(minsAgo) {
  if (minsAgo === 0) return 'just now';
  if (minsAgo === 1) return '1 min ago';
  return `${minsAgo} mins ago`;
}

function switchRoom(room) {
  currentRoom = room;
  document.querySelectorAll('.chat-tab').forEach(t => t.classList.remove('active-tab'));
  document.getElementById(`tab-${room}`).classList.add('active-tab');
  const labels = {
    general: '🌐 GENERAL CHAT — All Slammers Welcome · FREE',
    women: "♀ WOMEN'S CHAT — Ladies Only 🔐 MEMBERS",
    men: "♂ MEN'S CHAT — Brothers Only 🔐 MEMBERS"
  };
  document.getElementById('room-label').textContent = labels[room];
  renderMessages();
}

function renderMessages() {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const msgs = rooms[currentRoom];
  container.innerHTML = msgs.map(m => `
    <div class="chat-message ${m.mine ? 'msg-mine' : ''}">
      <div class="msg-avatar ${m.mine ? '' : 'clickable-avatar'}" onclick="openUserProfile('${escapeHtml(m.name)}', '${m.emoji}', ${m.isBot}, ${m.mine})" title="${m.mine ? 'You' : 'Click to view profile'}">${m.emoji}</div>
      <div class="msg-body">
        <div class="msg-name" style="color: ${m.mine ? '#00e5ff' : '#94a3b8'}">${m.name}</div>
        <div class="msg-text">${escapeHtml(m.text)}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function getBotReply(userText) {
  const lower = userText.toLowerCase();
  for (const entry of BOT_REPLIES) {
    if (entry.keys.some(k => lower.includes(k))) return entry.replies[Math.floor(Math.random() * entry.replies.length)];
  }
  const all = BOT_MESSAGES[currentRoom] || BOT_MESSAGES.general;
  return all[Math.floor(Math.random() * all.length)];
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  rooms[currentRoom].push({ name: userName, emoji: userEmoji, text, time: 'just now', mine: true, isBot: false });
  input.value = '';
  if (typeof playSound === 'function') playSound('send');
  renderMessages();
  if (currentRoom !== 'general') notifyAdmin(`CHAT MESSAGE [${currentRoom.toUpperCase()} ROOM]`, `From: ${userName}\nMessage: ${text}`);
  const delay = 900 + Math.random() * 1400;
  setTimeout(() => {
    const usersInRoom = CHAT_USERS.filter(b => b.room === currentRoom || b.room === 'general');
    const u = usersInRoom[Math.floor(Math.random() * usersInRoom.length)];
    const reply = getBotReply(text);
    rooms[currentRoom].push({ name: u.n, emoji: u.e, isBot: u.isBot, text: reply, time: 'just now', mine: false });
    if (typeof playSound === 'function') playSound('receive');
    
    if (Math.random() < 0.3) {
      setTimeout(() => {
        const u2 = usersInRoom.filter(b => b.n !== u.n)[Math.floor(Math.random() * (usersInRoom.length - 1))]
        const all = BOT_MESSAGES[currentRoom] || BOT_MESSAGES.general;
        const extra = all[Math.floor(Math.random() * all.length)];
        if (u2) { 
          rooms[currentRoom].push({ name: u2.n, emoji: u2.e, isBot: u2.isBot, text: extra, time: 'just now', mine: false }); 
          if (typeof playSound === 'function') playSound('receive'); 
        }
        renderMessages();
      }, 800 + Math.random() * 600);
    }
    renderMessages();
  }, delay);
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function autoBotActivity() {
  ['general', 'women', 'men'].forEach(room => {
    if (Math.random() < 0.3) {
      const msgs = BOT_MESSAGES[room] || BOT_MESSAGES.general;
      const usersInRoom = CHAT_USERS.filter(b => b.room === room || b.room === 'general');
      const u = usersInRoom[Math.floor(Math.random() * usersInRoom.length)];
      const msg = msgs[Math.floor(Math.random() * msgs.length)];
      rooms[room].push({ name: u.n, emoji: u.e, isBot: u.isBot, text: msg, time: 'just now', mine: false });
      if (currentRoom === room && !document.getElementById('view-chat').classList.contains('hidden') && typeof playSound === 'function') playSound('receive');
      if (rooms[room].length > 50) rooms[room].shift();
    }
  });
  const chatView = document.getElementById('view-chat');
  if (chatView && !chatView.classList.contains('hidden')) renderMessages();
}
setInterval(autoBotActivity, 8000);

// ── RADAR MAP ──────────────────────────────────────────────────────────────────
let mapInstance = null;
let userPendingLatLng = null;

// ── SEEDED PIN DATA ────────────────────────────────────────────────────────────
const SEED_HANDLES = [
  'xXslamboy','darkryder','nitroburn','chadslam','vortexxx','ironpig','spunlord','slamkingz',
  'nachtreiter','velvetcrush','slamhog99','burnmaster','piggyslam','slamrat','nitropig',
  'slamfiend','rushpig','slamwolf','darkslam','slamdragon','pigmaster','slamraven','slambeast',
  'slamtiger','slamphoenix','slamlion','slamhawk','slamfox','slamsnake','slambull','slamape',
  'slamshark','slamcobra','slamviper','slamscorpion','slamhound','slamcougar','slampanther',
  'slamjaguar','slamcheetah','slamleopard','slamwildcat','slampuma','slamstallion','slamstag',
  'slambuck','slamram','slamgoat','slambear','slamboar','slamhyena','slamcrow','slamrook',
  'slambishop','slamace','slamjoker','slamwild','slamblaze','slamflame','slamfire','slamice',
  'slamfrost','slamstorm','slamthunder','slamlightning','slamcloud','slamwind','slamtornado',
  'slamhurricane','slamcyclone','slamquake','slamrift','slamvoid','slamabyss','slamdark',
  'slamnight','slamdawn','slamdusk','slamshadow','slamghostx','slamspectre','slamphantom',
  'slamwraith','slambane','slamrage','slamfury','slamwrath','slamstrike','slamslash',
  'slamcrush','slamsmash','slamburst','slamblast','slamboom','slamzap','slamhit',
  'slamlord','slammaster','slamchief','slamboss','slamalpha','slambeta','slamgamma',
  'slamdelta','slamomega','slamsigma','slamzeta','slamtheta','slamiota','slamkappa',
  'slamlambda','slammu','slamxi','slampi','slamrho','slamtau','slamupsilon','slamphi',
  'slamchi','slampsi','slamzero','slamone','slamtwo','slamthree','slamfour','slamfive',
  'slamsix','slamseven','slameight','slamnine','slamten','slamcrack','slamboomer',
  'darkpig','nightpig','ironslam','slamhero99','slamlegend','slamgod99','slamdevil',
  'slampunk','slamdemon','slamangel','slamprince','slamcapo','slamchamp','slamknight99'
];

const SEED_STATUSES = [
  "Ready to slam! Hit me up 🔥",
  "Looking for a session partner tonight",
  "Looking for someone to drain me 💸",
  "Need someone to slam with, DM me",
  "Online and ready ⚡",
  "Spun and feeling amazing 💨",
  "Popperz Classic fan 💨 come join",
  "Just paid mommy 20$ 💸",
  "Going live in 10 mins 🎥",
  "Can't wait for the night ride 🌙",
  "Exhausted but happy 😮‍💨",
  "Slam addict since 2019 🔥",
  "Looking for experienced slammers",
  "New here, DM to connect 👋",
  "Daily slammer, let's go 💪",
  "Post-session glow ✨ feeling amazing",
  "Craving a session rn 😩",
  "Always down to slam 🤙",
  "Weekend warrior slammer 🏆",
  "Goth Raven fan forever 🖤",
  "Owned by Don completely 😈",
  "Don's iron sessions changed my life",
  "Succubus Lilly is queen 👑",
  "Slam room regular 🚨",
  "Popperz Black is elite 🖤",
  "Spun Pro Kit user 🧪 best investment",
  "DM for session swap 🔄",
  "Hosting a slam session soon 🔥",
  "Looking for slam buddies in my area",
  "Night sessions only 🌙 DM me",
  "Early morning slammer ☀️ 5am crew",
  "Slam or nothing 💯",
  "Hardcore slammer 🔥 no limits",
  "Just pinned my location, come find me 📍",
  "Active daily, always online 🟢",
  "Slam life forever 🤘",
  "Just got my Spun Starter Kit 🧪",
  "Looking for a group slam session",
  "Private session available, DM me",
  "Been slamming 3 years, teach you everything"
];

const EUROPE_CITIES = [
  [51.5074,-0.1278,'London'],[48.8566,2.3522,'Paris'],[52.5200,13.4050,'Berlin'],
  [40.4168,-3.7038,'Madrid'],[41.9028,12.4964,'Rome'],[53.3498,-6.2603,'Dublin'],
  [48.2082,16.3738,'Vienna'],[50.8503,4.3517,'Brussels'],[55.6761,12.5683,'Copenhagen'],
  [59.3293,18.0686,'Stockholm'],[60.1699,24.9384,'Helsinki'],[59.9139,10.7522,'Oslo'],
  [52.3676,4.9041,'Amsterdam'],[47.3769,8.5417,'Zurich'],[45.4642,9.1900,'Milan'],
  [43.2965,5.3698,'Marseille'],[48.1351,11.5820,'Munich'],[53.5753,10.0153,'Hamburg'],
  [50.0755,14.4378,'Prague'],[47.4979,19.0402,'Budapest'],[52.2297,21.0122,'Warsaw'],
  [44.4268,26.1025,'Bucharest'],[42.6977,23.3219,'Sofia'],[44.8176,20.4569,'Belgrade'],
  [45.8150,15.9819,'Zagreb'],[37.9838,23.7275,'Athens'],[38.7223,-9.1393,'Lisbon'],
  [55.9533,-3.1883,'Edinburgh'],[53.4808,-2.2426,'Manchester'],[43.7102,7.2620,'Nice'],
  [43.6047,1.4442,'Toulouse'],[45.7640,4.8357,'Lyon'],[44.8378,-0.5792,'Bordeaux'],
  [51.2277,4.3669,'Antwerp'],[50.9333,6.9500,'Cologne'],[51.0504,13.7373,'Dresden'],
  [49.4521,11.0767,'Nuremberg'],[48.7758,9.1829,'Stuttgart'],[41.3851,2.1734,'Barcelona'],
  [37.3891,-5.9845,'Seville'],[39.4699,-0.3763,'Valencia'],[43.2630,-2.9350,'Bilbao'],
  [36.7213,-4.4214,'Malaga'],[45.4654,9.1859,'Milan'],[46.9481,7.4474,'Bern'],
  [50.4501,30.5234,'Kyiv'],[55.7558,37.6176,'Moscow'],[59.9343,30.3351,'St Petersburg'],
  [54.6872,25.2797,'Vilnius'],[56.9496,24.1052,'Riga'],[59.4370,24.7536,'Tallinn']
];

const AMERICAS_CITIES = [
  [40.7128,-74.0060,'New York'],[34.0522,-118.2437,'Los Angeles'],[41.8781,-87.6298,'Chicago'],
  [29.7604,-95.3698,'Houston'],[33.4484,-112.0740,'Phoenix'],[39.9526,-75.1652,'Philadelphia'],
  [29.4241,-98.4936,'San Antonio'],[32.7767,-96.7970,'Dallas'],[32.7157,-117.1611,'San Diego'],
  [30.2672,-97.7431,'Austin'],[36.1627,-86.7816,'Nashville'],[35.2271,-80.8431,'Charlotte'],
  [39.7684,-86.1581,'Indianapolis'],[39.9612,-82.9988,'Columbus'],[35.1495,-90.0490,'Memphis'],
  [36.1740,-115.1398,'Las Vegas'],[43.6532,-79.3832,'Toronto'],[45.5017,-73.5673,'Montreal'],
  [49.2827,-123.1207,'Vancouver'],[51.0447,-114.0719,'Calgary'],[45.4215,-75.6919,'Ottawa'],
  [19.4326,-99.1332,'Mexico City'],[20.6597,-103.3496,'Guadalajara'],[25.6866,-100.3161,'Monterrey'],
  [-23.5505,-46.6333,'Sao Paulo'],[-22.9068,-43.1729,'Rio de Janeiro'],[-34.6037,-58.3816,'Buenos Aires'],
  [-31.4201,-64.1888,'Cordoba'],[-33.4489,-70.6693,'Santiago'],[4.7110,-74.0721,'Bogota'],
  [10.4806,-66.9036,'Caracas'],[38.9067,-77.0369,'Washington DC'],[42.3601,-71.0589,'Boston'],
  [47.6062,-122.3321,'Seattle'],[37.7749,-122.4194,'San Francisco'],[39.7392,-104.9903,'Denver'],
  [44.9778,-93.2650,'Minneapolis'],[38.2527,-85.7585,'Louisville'],[30.3322,-81.6557,'Jacksonville'],
  [37.3382,-121.8863,'San Jose'],[35.4676,-97.5164,'Oklahoma City'],[36.1539,-95.9928,'Tulsa'],
  [53.5461,-113.4938,'Edmonton'],[18.4655,-66.1057,'San Juan'],[25.7617,-80.1918,'Miami'],
  [33.7490,-84.3880,'Atlanta'],[36.8529,-75.9780,'Virginia Beach'],[35.7796,-78.6382,'Raleigh'],
  [41.2524,-95.9980,'Omaha'],[43.0481,-76.1474,'Syracuse'],[41.6005,-93.6091,'Des Moines'],
  [46.8772,-96.7898,'Fargo'],[43.0731,-89.4012,'Madison'],[39.0997,-94.5786,'Kansas City'],
  [38.2527,-85.7585,'Louisville'],[32.3668,-86.3000,'Montgomery'],[30.6954,-88.0399,'Mobile']
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateRandomPins() {
  const countEl = document.getElementById('pin-count');
  const allCities = [...EUROPE_CITIES, ...AMERICAS_CITIES];
  const genders = ['male','female','male','male','female','male','male','female'];
  const lookingFor = ['Session partner','Group slam','Private session','Chat first','Any slammer','Training buddy','Night session','Weekend slam'];
  const ages = ['21','22','24','25','27','28','29','30','31','32','33','34','35','36','38','40','42'];

  let pinCount = 0;
  allCities.forEach((city, ci) => {
    const cityPinCount = 4 + Math.floor(seededRandom(ci * 13) * 5);
    for (let i = 0; i < cityPinCount; i++) {
      const seed = ci * 200 + i * 7;
      const lat = city[0] + (seededRandom(seed) - 0.5) * 1.2;
      const lng = city[1] + (seededRandom(seed + 1) - 0.5) * 1.2;
      const hIdx = Math.floor(seededRandom(seed + 2) * SEED_HANDLES.length);
      const suffix = Math.floor(seededRandom(seed + 3) * 9999);
      const handle = '@' + SEED_HANDLES[hIdx] + suffix;
      const status = SEED_STATUSES[Math.floor(seededRandom(seed + 4) * SEED_STATUSES.length)];
      const gender = genders[Math.floor(seededRandom(seed + 5) * genders.length)];
      const lookFor = lookingFor[Math.floor(seededRandom(seed + 6) * lookingFor.length)];
      const age = ages[Math.floor(seededRandom(seed + 7) * ages.length)];
      const cityName = city[2];
      createMarker(lat, lng, handle, status, false, { gender, lookFor, age, city: cityName });
      pinCount++;
    }
  });
  if (countEl) countEl.textContent = pinCount + '+';
}

function createMarker(lat, lng, handle, status, isUser = false, extra = {}) {
  const isFemale = extra.gender === 'female';
  const color = isUser ? '#00ff88' : (isFemale ? '#ff2d78' : '#00e5ff');
  const pulseColor = isUser ? 'rgba(0,255,136,0.35)' : (isFemale ? 'rgba(255,45,120,0.35)' : 'rgba(0,229,255,0.35)');
  const size = isUser ? 16 : 11;
  const animDelay = (Math.random() * 2).toFixed(2);

  const customIcon = L.divIcon({
    className: 'custom-radar-pin',
    html: `<div style="position:relative;width:${size}px;height:${size}px;">
      <div style="position:absolute;inset:-5px;border-radius:50%;background:${pulseColor};animation:radar-pulse 2.5s ease-in-out infinite;animation-delay:${animDelay}s;"></div>
      <div style="position:absolute;inset:0;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.85);box-shadow:0 0 8px ${color};z-index:1;"></div>
      ${isUser ? `<div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:9px;white-space:nowrap;color:#00ff88;font-family:Orbitron,monospace;font-weight:900;letter-spacing:1px;z-index:2;">YOU</div>` : ''}
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -(size + 6)]
  });

  const genderIcon = isFemale ? '♀' : (extra.gender === 'male' ? '♂' : '');
  const genderColor = isFemale ? '#ff2d78' : '#4fc3f7';
  const cityStr = extra.city ? `<span style="color:#64748b;">📍</span> ${extra.city}` : '';
  const ageStr = extra.age ? `· ${extra.age}yo` : '';
  const lookStr = extra.lookFor ? `🔍 ${extra.lookFor}` : '';
  const userBadge = isUser ? `<span style="background:#00ff88;color:#000;font-size:9px;padding:1px 7px;border-radius:4px;font-weight:900;font-family:Orbitron,monospace;margin-left:4px;">YOU</span>` : '';

  const dmBtn = isUser ? '' : `<button onclick="openUserProfile('${escapeHtml(handle)}', '👤', false, false)" style="margin-top:10px; width:100%; padding:8px; background:rgba(0,229,255,0.1); border:1px solid rgba(0,229,255,0.4); color:#00e5ff; border-radius:6px; font-size:10px; font-family:Orbitron,monospace; cursor:pointer; font-weight:700; transition:all 0.2s;">💬 VIEW PROFILE & DM</button>`;

  const popupHtml = `<div style="min-width:170px;max-width:220px;">
    <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px;flex-wrap:wrap;">
      <span style="font-family:Orbitron,monospace;font-size:12px;font-weight:700;color:#00e5ff;">${escapeHtml(handle)}</span>
      ${genderIcon ? `<span style="font-size:13px;color:${genderColor};font-weight:900;">${genderIcon}</span>` : ''}
      ${userBadge}
    </div>
    ${(cityStr || ageStr) ? `<div style="font-size:11px;color:#94a3b8;margin-bottom:4px;">${cityStr} ${ageStr}</div>` : ''}
    <div style="font-size:12px;color:#e2e8f0;margin-bottom:5px;line-height:1.45;">${escapeHtml(status)}</div>
    ${lookStr ? `<div style="font-size:10px;color:#00ff88;font-family:Orbitron,monospace;letter-spacing:0.5px;">${lookStr}</div>` : ''}
    ${dmBtn}
  </div>`;

  const marker = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance);
  marker.bindPopup(popupHtml, { maxWidth: 240, className: 'slam-popup' });
  return marker;
}

function initMap() {
  if (mapInstance) { mapInstance.invalidateSize(); return; }

  mapInstance = L.map('radar-map', {
    zoomControl: false,
    attributionControl: false
  }).setView([45, -20], 3);

  L.control.zoom({ position: 'topright' }).addTo(mapInstance);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(mapInstance);

  generateRandomPins();
  loadUserPin();

  mapInstance.on('click', function(e) {
    userPendingLatLng = e.latlng;
    // Reset form
    ['pin-handle','pin-status','pin-city','pin-age'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    const gEl = document.getElementById('pin-gender');
    if (gEl) gEl.value = 'male';
    const lEl = document.getElementById('pin-looking');
    if (lEl) lEl.value = 'Session partner';
    document.getElementById('pin-error').classList.add('hidden');
    openModal('modal-pin');
  });
}

function promptPinLocation() {
  if (!mapInstance) return;
  const hint = document.createElement('div');
  hint.style.cssText = 'position:fixed;bottom:130px;left:50%;transform:translateX(-50%);background:rgba(0,255,136,0.12);border:1px solid #00ff88;color:#00ff88;font-family:Orbitron,monospace;font-size:11px;padding:10px 22px;border-radius:30px;z-index:9999;pointer-events:none;text-align:center;box-shadow:0 0 20px rgba(0,255,136,0.2);white-space:nowrap;';
  hint.textContent = '📍 Tap anywhere on the map to drop your pin!';
  document.body.appendChild(hint);
  setTimeout(() => hint.remove(), 3500);
}

async function submitPin() {
  if (!userPendingLatLng) userPendingLatLng = mapInstance.getCenter();

  const handle  = document.getElementById('pin-handle').value.trim();
  const status  = document.getElementById('pin-status').value.trim();
  const city    = document.getElementById('pin-city').value.trim();
  const age     = document.getElementById('pin-age').value.trim();
  const gender  = document.getElementById('pin-gender').value;
  const lookFor = document.getElementById('pin-looking').value;
  const errEl   = document.getElementById('pin-error');

  if (!handle) {
    errEl.textContent = 'Please enter your handle!';
    errEl.classList.remove('hidden');
    return;
  }

  errEl.classList.add('hidden');

  if (window.userMarker) mapInstance.removeLayer(window.userMarker);

  const extra = { gender, lookFor, age, city };
  window.userMarker = createMarker(userPendingLatLng.lat, userPendingLatLng.lng, handle, status || 'Ready to slam! 🔥', true, extra);
  window.userMarker.openPopup();
  mapInstance.setView([userPendingLatLng.lat, userPendingLatLng.lng], 9, { animate: true });

  const pinData = { lat: userPendingLatLng.lat, lng: userPendingLatLng.lng, handle, status, city, age, gender, lookFor };
  try { await miniappsAI.storage.setItem('slamRadarPin', JSON.stringify(pinData)); } catch(e) {}

  closeModal('modal-pin');
  notifyAdmin('NEW RADAR PIN', `Handle: ${handle}\nCity: ${city}\nGender: ${gender}\nAge: ${age}\nLooking for: ${lookFor}\nCoords: ${userPendingLatLng.lat.toFixed(4)}, ${userPendingLatLng.lng.toFixed(4)}`);

  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:130px;left:50%;transform:translateX(-50%);background:rgba(0,255,136,0.12);border:1px solid #00ff88;color:#00ff88;font-family:Orbitron,monospace;font-size:11px;padding:12px 28px;border-radius:30px;z-index:9999;pointer-events:none;text-align:center;box-shadow:0 0 25px rgba(0,255,136,0.3);white-space:nowrap;';
  toast.innerHTML = '✅ YOUR PIN IS LIVE ON THE RADAR!';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

async function loadUserPin() {
  try {
    const raw = await miniappsAI.storage.getItem('slamRadarPin');
    if (raw) {
      const data = JSON.parse(raw);
      const extra = { gender: data.gender, lookFor: data.lookFor, age: data.age, city: data.city };
      window.userMarker = createMarker(data.lat, data.lng, data.handle, data.status || 'Ready to slam! 🔥', true, extra);
    }
  } catch(e) {}
}

// ── ADMIN NOTIFICATION ─────────────────────────────────────────────────────────
async function notifyAdmin(type, details) {
  try {
    const existing = await miniappsAI.storage.getItem('adminNotifications');
    const notifications = existing ? JSON.parse(existing) : [];
    notifications.unshift({ type, details, timestamp: new Date().toISOString() });
    if (notifications.length > 50) notifications.pop();
    await miniappsAI.storage.setItem('adminNotifications', JSON.stringify(notifications));
  } catch(e) {}
}

// ── INIT ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  await loadAccessState();
  createParticles();
  showView('home');
  updateSlamRoomCountdown();
  const homeBtn = document.getElementById('bnav-home');
  if (homeBtn) homeBtn.classList.add('active');
});
