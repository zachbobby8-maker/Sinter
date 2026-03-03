// ── AI HELP BOX ────────────────────────────────────────────────────────────────
let aiHelpOpen = false;
let aiHelpHistory = [];

function toggleAiHelp() {
  const box = document.getElementById('ai-help-box');
  aiHelpOpen = !aiHelpOpen;
  if (aiHelpOpen) {
    box.classList.remove('hidden');
    if (aiHelpHistory.length === 0) {
      addAiHelpMessage('bot', "BEEP BOOP! 🤖⚡ I'm SlamBot! I'm way more fun than the Masters 😜 Need help with the Slam Room, Shop, or Trainers? Remember: stay hydrated, use your safewords, and never mix poppers with ED meds! 💧💨 What's up?");
    }
  } else {
    box.classList.add('hidden');
  }
}

function showAiHelp() {
  const box = document.getElementById('ai-help-box');
  aiHelpOpen = true;
  box.classList.remove('hidden');
  if (aiHelpHistory.length === 0) {
    addAiHelpMessage('bot', "BEEP BOOP! 🤖⚡ I'm SlamBot! I'm way more fun than the Masters 😜 Need help with the Slam Room, Shop, or Trainers? Remember: stay hydrated, use your safewords, and never mix poppers with ED meds! 💧💨 What's up?");
  }
}

function addAiHelpMessage(role, text) {
  const container = document.getElementById('ai-help-messages');
  const div = document.createElement('div');
  div.className = role === 'user' ? 'ai-msg ai-msg-user' : 'ai-msg ai-msg-bot';
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  if (role === 'bot' && typeof playSound === 'function') playSound('receive');
}

async function sendAiHelp() {
  const input = document.getElementById('ai-help-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addAiHelpMessage('user', text);
  if (typeof playSound === 'function') playSound('send');

  const container = document.getElementById('ai-help-messages');
  const typing = document.createElement('div');
  typing.className = 'ai-msg ai-msg-bot';
  typing.id = 'ai-typing';
  typing.innerHTML = '<span class="typing-dots">● ● ●</span>';
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;

  aiHelpHistory.push({ role: 'user', content: text });
  if (aiHelpHistory.length > 10) aiHelpHistory = aiHelpHistory.slice(-10);

  const systemPrompt = "You are SlamBot 🤖💥, the hyper, fun, and slightly chaotic AI assistant for SLAM TRAINERS. You contrast with the strict, dark masters (Don, Craig, Goth Raven, Lilly) by having a playful, upbeat, party-animal energy. You use lots of emojis! You ALWAYS emphasize safety: 1) Consent (SSC/RACK), 2) Using Safewords, 3) Poppers safety (never mix with ED meds, hydrate, don't spill on skin). Shop sells Popperz Classic, Popperz Black, Spun Starter Kit, Spun Pro Tools — DM female admin (Yofavkitty1@gwail.com) or male admin (travgreta@proton.me). Chat rooms: General FREE. Women/Men require free registration. Premium features require 0.0001 BTC or $9.99 via PayPal. Keep answers short, fun, and helpful. Max 3 sentences.";

  try {
    const result = await miniappsAI.callModel({
      modelId: AI_MODEL_ID,
      messages: [
        { role: 'system', content: systemPrompt },
        ...aiHelpHistory
      ]
    });

    const reply = miniappsAI.extractText(result);
    const typingEl = document.getElementById('ai-typing');
    if (typingEl) typingEl.remove();
    addAiHelpMessage('bot', reply);
    aiHelpHistory.push({ role: 'assistant', content: reply });
    notifyAdmin('AI SUPPORT', 'Q: ' + text + ' | A: ' + reply.slice(0, 100));
  } catch(err) {
    const typingEl = document.getElementById('ai-typing');
    if (typingEl) typingEl.remove();
    addAiHelpMessage('bot', "Sorry, I'm having trouble connecting to the SlamFrame. Please try again in a moment! 🔌⚡");
  }
}
