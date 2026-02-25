/* Simple interactions: contact switch, send messages, responsive sidebar toggle, fake replies */
const contactsEl = document.getElementById('contacts');
const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('send');
const chatName = document.getElementById('chatName');
const chatAvatar = document.getElementById('chatAvatar');
const chatSub = document.getElementById('chatSub');
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('openSidebar');

const sampleReplies = [
  "Nice! 👍",
  "Got it — I'll check.",
  "Haha that's great 😂",
  "Sounds perfect!",
  "Let's do it tonight.",
  "On my way 🚗"
];

// click / switch contact
contactsEl.addEventListener('click', e => {
  const li = e.target.closest('.contact');
  if (!li) return;
  // mark active
  document.querySelectorAll('.contact').forEach(c => c.classList.remove('active'));
  li.classList.add('active');

  // update header
  const name = li.dataset.name || li.querySelector('.cname').textContent;
  chatName.textContent = name;
  chatAvatar.src = li.querySelector('img').src;
  chatSub.textContent = "Typing...";

  // clear messages and add starter
  messagesEl.innerHTML = `<div class="day">Today</div>`;
  appendReceived("Hey! This is a demo conversation.", '4:00 pm');
  appendReceived("Try typing below — UI is responsive & blue theme.", '4:01 pm');

  // close sidebar on small
  if (window.innerWidth < 640) sidebar.classList.remove('show');
});

// send message
function sendMessage(){
  const text = inputEl.value.trim();
  if(!text) return;
  appendSent(text);
  inputEl.value = '';
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // fake typing indicator
  chatSub.textContent = "Typing...";
  setTimeout(()=> {
    appendReceived(sampleReplies[Math.floor(Math.random()*sampleReplies.length)]);
    chatSub.textContent = "Online";
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }, 900 + Math.random()*900);
}

sendBtn.addEventListener('click', sendMessage);
inputEl.addEventListener('keypress', e=> { if(e.key==='Enter') sendMessage(); });

// helper appenders
function appendSent(text, time){
  const el = document.createElement('div'); el.className='msg sent';
  const b = document.createElement('div'); b.className='bubble'; b.textContent = text;
  const ts = document.createElement('div'); ts.className='ts'; ts.textContent = time || timeNow();
  el.appendChild(b); el.appendChild(ts); messagesEl.appendChild(el);
}
function appendReceived(text, time){
  const el = document.createElement('div'); el.className='msg received';
  const b = document.createElement('div'); b.className='bubble'; b.textContent = text;
  const ts = document.createElement('div'); ts.className='ts'; ts.textContent = time || timeNow();
  el.appendChild(b); el.appendChild(ts); messagesEl.appendChild(el);
}
function timeNow(){
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h>=12 ? 'pm':'am';
  h = ((h+11)%12+1); // 12-hour
  return `${h}:${m.toString().padStart(2,'0')} ${ampm}`;
}

// make messages area auto-scroll on load
messagesEl.scrollTop = messagesEl.scrollHeight;

// responsive sidebar toggle for mobile
openSidebarBtn.addEventListener('click', ()=>{
  sidebar.classList.toggle('show');
});

// close sidebar when clicking outside (mobile)
document.addEventListener('click', (e)=>{
  if (window.innerWidth < 640){
    if (!sidebar.contains(e.target) && !openSidebarBtn.contains(e.target)){
      sidebar.classList.remove('show');
    }
  }
});