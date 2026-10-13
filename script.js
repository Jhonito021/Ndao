// ===== DONNEES DE PROFILS (30 profils) =====
const profiles = [
    { id: 1, name: "Sophie", age: 26, location: "Lyon, France", bio: "Amoureuse de la nature et des voyages. Cherche quelqu'un pour partager des moments simples et vrais.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop", tags: ["Voyage", "Nature", "Yoga"], distance: 2, verified: true },
    { id: 2, name: "Emma", age: 24, location: "Marseille, France", bio: "Etudiante en art. Passionnee par la photographie et la musique indie. Toujours partante pour une expo.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop", tags: ["Art", "Photo", "Musique"], distance: 5, verified: true },
    { id: 3, name: "Lucas", age: 29, location: "Bordeaux, France", bio: "Developpeur le jour, guitariste le soir. Fan de randonnees et de bons vins.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop", tags: ["Musique", "Randonnee", "Vin"], distance: 3, verified: false },
    { id: 4, name: "Chloe", age: 27, location: "Toulouse, France", bio: "Chef cuisiniere. J'adore creer et partager des plats avec ceux que j'aime.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop", tags: ["Cuisine", "Voyage", "Vin"], distance: 8, verified: true },
    { id: 5, name: "Nathan", age: 31, location: "Nantes, France", bio: "Sportif, aventurier, et toujours partant pour un nouveau defi. Marathonien amateur.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop", tags: ["Sport", "Running", "Voyage"], distance: 12, verified: true },
    { id: 6, name: "Camille", age: 25, location: "Lille, France", bio: "Professeure des ecoles. J'aime les livres, les chats et les longues discussions.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop", tags: ["Lecture", "Animaux", "Cafe"], distance: 4, verified: false },
    { id: 7, name: "Lea", age: 28, location: "Nice, France", bio: "Avocate passionnee de danse latine. Je cherche quelqu'un avec qui partager la piste.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=800&fit=crop", tags: ["Danse", "Droit", "Plage"], distance: 6, verified: true },
    { id: 8, name: "Hugo", age: 30, location: "Strasbourg, France", bio: "Ingenieur et photographe amateur. J'aime capturer les instants de la vie.", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop", tags: ["Photo", "Tech", "Voyage"], distance: 9, verified: true },
    { id: 9, name: "Manon", age: 23, location: "Rennes, France", bio: "Etudiante en medecine. Passionnee de yoga et de cuisine saine.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop", tags: ["Yoga", "Sante", "Cuisine"], distance: 3, verified: false },
    { id: 10, name: "Thomas", age: 33, location: "Montpellier, France", bio: "Chef de projet. J'aime le surf, les voyages et les bonnes tables.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop", tags: ["Surf", "Voyage", "Cuisine"], distance: 15, verified: true },
    { id: 11, name: "Julie", age: 26, location: "Grenoble, France", bio: "Guide de montagne. J'adore les sommets, les levers de soleil et la nature.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop", tags: ["Montagne", "Nature", "Sport"], distance: 20, verified: true },
    { id: 12, name: "Antoine", age: 28, location: "Paris, France", bio: "Musicien professionnel. Je cherche quelqu'un pour partager ma passion.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop", tags: ["Musique", "Concert", "Art"], distance: 1, verified: false },
    { id: 13, name: "Sarah", age: 27, location: "Annecy, France", bio: "Architecte d'interieur. J'aime le design, l'art et les balades au bord du lac.", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=800&fit=crop", tags: ["Design", "Art", "Lac"], distance: 25, verified: true },
    { id: 14, name: "Maxime", age: 32, location: "Toulon, France", bio: "Marin et plongeur. La mer est ma seconde maison.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop", tags: ["Plongee", "Mer", "Voyage"], distance: 18, verified: true },
    { id: 15, name: "Ines", age: 24, location: "Brest, France", bio: "Etudiante en oceanographie. Passionnee par les fonds marins.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop", tags: ["Ocean", "Science", "Nature"], distance: 30, verified: false },
    { id: 16, name: "Paul", age: 29, location: "Clermont-Ferrand", bio: "Vigneron et amateur de randonnee. J'aime les choses authentiques.", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop", tags: ["Vin", "Randonnee", "Nature"], distance: 22, verified: true },
    { id: 17, name: "Elodie", age: 25, location: "Aix-en-Provence", bio: "Fleuriste. J'aime la beaute des choses simples et les marches du dimanche.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop", tags: ["Fleurs", "Marche", "Nature"], distance: 10, verified: false },
    { id: 18, name: "Romain", age: 30, location: "Metz, France", bio: "Pompier volontaire. J'aime aider les autres et repousser mes limites.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop", tags: ["Sport", "Solidarite", "Aventure"], distance: 14, verified: true },
    { id: 19, name: "Celine", age: 28, location: "Dijon, France", bio: "Sommeliere. J'aime partager ma passion pour le vin et la gastronomie.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop", tags: ["Vin", "Gastronomie", "Voyage"], distance: 7, verified: true },
    { id: 20, name: "Benjamin", age: 27, location: "Reims, France", bio: "Photographe de mariage. J'aime capturer l'amour et les emotions.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop", tags: ["Photo", "Art", "Voyage"], distance: 11, verified: false },
    { id: 21, name: "Laura", age: 26, location: "Le Havre", bio: "Journaliste. Curieuse de tout, j'aime les discussions profondes.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop", tags: ["Lecture", "Culture", "Voyage"], distance: 16, verified: true },
    { id: 22, name: "Kevin", age: 31, location: "Saint-Etienne", bio: "Coach sportif. La forme physique est mon quotidien, la bonne humeur aussi.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop", tags: ["Sport", "Sante", "Motivation"], distance: 13, verified: true },
    { id: 23, name: "Marine", age: 29, location: "Angers", bio: "Veterinaire. J'adore les animaux et la nature. Jamais sans mon chien.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop", tags: ["Animaux", "Nature", "Sante"], distance: 5, verified: false },
    { id: 24, name: "Alexandre", age: 34, location: "Tours", bio: "Historien de l'art. J'aime les musees, les vieilles pierres et les bons cafes.", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop", tags: ["Art", "Histoire", "Cafe"], distance: 19, verified: true },
    { id: 25, name: "Charlotte", age: 25, location: "Caen", bio: "Danseuse classique. La danse est ma vie, la scene mon oxygene.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop", tags: ["Danse", "Art", "Musique"], distance: 24, verified: false },
    { id: 26, name: "Nicolas", age: 30, location: "Nancy", bio: "Ingenieur son. Passionne de musique et de cinema. J'aime creer.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop", tags: ["Musique", "Cinema", "Tech"], distance: 17, verified: true },
    { id: 27, name: "Amelie", age: 27, location: "Poitiers", bio: "Illustratrice. J'aime dessiner, lire et rever. A la recherche d'une belle histoire.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=800&fit=crop", tags: ["Art", "Dessin", "Lecture"], distance: 21, verified: false },
    { id: 28, name: "Julien", age: 32, location: "La Rochelle", bio: "Skipper. La mer, le vent et la liberte sont mes moteurs.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop", tags: ["Voile", "Mer", "Aventure"], distance: 26, verified: true },
    { id: 29, name: "Morgane", age: 24, location: "Limoges", bio: "Patissiere. J'adore creer des douceurs et voir les gens sourire.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop", tags: ["Cuisine", "Patisserie", "Art"], distance: 23, verified: false },
    { id: 30, name: "Adrien", age: 28, location: "Perpignan", bio: "Viticulteur. J'aime la terre, le soleil et les bonnes choses de la vie.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop", tags: ["Vin", "Nature", "Soleil"], distance: 28, verified: true }
];

// ===== MATCHS (12 matchs) =====
const matches = [
    { id: 1, name: "Sophie", age: 26, image: "https://i.pravatar.cc/150?img=47", online: true, lastActive: "En ligne" },
    { id: 2, name: "Emma", age: 24, image: "https://i.pravatar.cc/150?img=45", online: true, lastActive: "En ligne" },
    { id: 3, name: "Lea", age: 28, image: "https://i.pravatar.cc/150?img=32", online: false, lastActive: "Il y a 2h" },
    { id: 4, name: "Camille", age: 25, image: "https://i.pravatar.cc/150?img=48", online: true, lastActive: "En ligne" },
    { id: 5, name: "Julie", age: 26, image: "https://i.pravatar.cc/150?img=44", online: false, lastActive: "Il y a 5h" },
    { id: 6, name: "Manon", age: 23, image: "https://i.pravatar.cc/150?img=49", online: true, lastActive: "En ligne" },
    { id: 7, name: "Sarah", age: 27, image: "https://i.pravatar.cc/150?img=31", online: false, lastActive: "Hier" },
    { id: 8, name: "Ines", age: 24, image: "https://i.pravatar.cc/150?img=41", online: true, lastActive: "En ligne" },
    { id: 9, name: "Elodie", age: 25, image: "https://i.pravatar.cc/150?img=26", online: false, lastActive: "Il y a 3h" },
    { id: 10, name: "Celine", age: 28, image: "https://i.pravatar.cc/150?img=20", online: true, lastActive: "En ligne" },
    { id: 11, name: "Laura", age: 26, image: "https://i.pravatar.cc/150?img=24", online: false, lastActive: "Il y a 1h" },
    { id: 12, name: "Charlotte", age: 25, image: "https://i.pravatar.cc/150?img=29", online: true, lastActive: "En ligne" }
];

// ===== CONVERSATIONS (10 conversations) =====
const conversations = [
    {
        id: 1, name: "Sophie", image: "https://i.pravatar.cc/150?img=47", time: "10:42", unread: 2,
        messages: [
            { text: "Salut ! Comment ca va ?", sent: false },
            { text: "Tres bien et toi ?", sent: true },
            { text: "Super ! J'ai vu que tu aimais la randonnee", sent: false },
            { text: "Oui j'adore ! Tu veux qu'on en fasse une ?", sent: true },
            { text: "Avec plaisir ! Tu connais un bon sentier ?", sent: false },
            { text: "Oui, il y en a un magnifique pres de Lyon", sent: true },
            { text: "On se voit ce weekend ?", sent: false }
        ]
    },
    {
        id: 2, name: "Emma", image: "https://i.pravatar.cc/150?img=45", time: "09:15", unread: 0,
        messages: [
            { text: "Hey ! J'ai adore ta photo de voyage", sent: false },
            { text: "Merci beaucoup ! C'etait en Italie", sent: true },
            { text: "J'aimerais trop y aller, tu me conseilles quelle ville ?", sent: false },
            { text: "Rome sans hesiter, c'est magique", sent: true },
            { text: "Haha trop drole ta story hier", sent: false }
        ]
    },
    {
        id: 3, name: "Lea", image: "https://i.pravatar.cc/150?img=32", time: "Hier", unread: 1,
        messages: [
            { text: "Bonjour ! Tu fais quoi comme sport ?", sent: false },
            { text: "Du yoga et de la course a pied", sent: true },
            { text: "J'adore le yoga aussi ! Tu vas dans quel studio ?", sent: false },
            { text: "Celui du centre-ville, tu connais ?", sent: true },
            { text: "Oui ! On pourrait y aller ensemble", sent: false },
            { text: "A bientot !", sent: false }
        ]
    },
    {
        id: 4, name: "Camille", image: "https://i.pravatar.cc/150?img=48", time: "Hier", unread: 0,
        messages: [
            { text: "Salut ! Tu lis quoi en ce moment ?", sent: false },
            { text: "Un roman de Murakami, tu connais ?", sent: true },
            { text: "Oui ! J'adore cet auteur", sent: false },
            { text: "On pourrait echanger nos livres", sent: true },
            { text: "Bonne idee !", sent: false }
        ]
    },
    {
        id: 5, name: "Julie", image: "https://i.pravatar.cc/150?img=44", time: "Lun", unread: 0,
        messages: [
            { text: "Coucou ! Tu fais de la montagne ?", sent: false },
            { text: "Oui, j'adore la randonnee en altitude", sent: true },
            { text: "Tu as deja fait le Mont-Blanc ?", sent: false },
            { text: "Pas encore, c'est un reve", sent: true },
            { text: "On pourrait le preparer ensemble", sent: false }
        ]
    },
    {
        id: 6, name: "Manon", image: "https://i.pravatar.cc/150?img=49", time: "Lun", unread: 3,
        messages: [
            { text: "Hey ! Tu cuisines ?", sent: false },
            { text: "Oui, j'adore ca !", sent: true },
            { text: "Tu me ferais decouvrir une recette ?", sent: false },
            { text: "Avec plaisir, un risotto ?", sent: true },
            { text: "Parfait !", sent: false }
        ]
    },
    {
        id: 7, name: "Sarah", image: "https://i.pravatar.cc/150?img=31", time: "Dim", unread: 0,
        messages: [
            { text: "J'ai vu que tu aimais le design", sent: false },
            { text: "Oui beaucoup ! Tu es architecte ?", sent: true },
            { text: "Oui, architecte d'interieur", sent: false },
            { text: "Super metier !", sent: true }
        ]
    },
    {
        id: 8, name: "Ines", image: "https://i.pravatar.cc/150?img=41", time: "Dim", unread: 1,
        messages: [
            { text: "Salut ! Tu t'interesses a l'ocean ?", sent: false },
            { text: "Oui, je suis passionne de plongee", sent: true },
            { text: "Genial ! Tu plonges ou ?", sent: false },
            { text: "Surtout en Mediterranee", sent: true }
        ]
    },
    {
        id: 9, name: "Elodie", image: "https://i.pravatar.cc/150?img=26", time: "Sam", unread: 0,
        messages: [
            { text: "Bonjour ! Tu aimes les fleurs ?", sent: false },
            { text: "Oui, surtout les tournesols", sent: true },
            { text: "Moi aussi ! C'est mon prefere", sent: false }
        ]
    },
    {
        id: 10, name: "Celine", image: "https://i.pravatar.cc/150?img=20", time: "Ven", unread: 0,
        messages: [
            { text: "Tu t'y connais en vin ?", sent: false },
            { text: "Un peu, j'aime decouvrir", sent: true },
            { text: "Je suis sommeliere, on pourrait deguster", sent: false },
            { text: "Ce serait avec grand plaisir", sent: true }
        ]
    }
];

// ===== ETAT GLOBAL =====
let currentIndex = 0;
let isAnimating = false;

// ===== NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.dataset.page;

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(`page-${targetPage}`).classList.add('active');
    });
});

// ===== CARTES SWIPE =====
function renderCard() {
    const stack = document.getElementById('cardStack');
    stack.innerHTML = '';

    if (currentIndex >= profiles.length) {
        stack.innerHTML = `
            <div class="card" style="display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem;">
                <div>
                    <i class="fa-solid fa-face-smile" style="font-size:3rem;color:#ff3d6e;margin-bottom:1rem;"></i>
                    <h2>Plus de profils</h2>
                    <p style="color:#8e8e93;margin-top:1rem;">Revenez plus tard pour decouvrir de nouveaux profils.</p>
                </div>
            </div>
        `;
        return;
    }

    const profile = profiles[currentIndex];
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}">
        <div class="card-info">
            <h2>${profile.name}, ${profile.age} ${profile.verified ? '<i class="fa-solid fa-circle-check verified-badge"></i>' : ''}</h2>
            <p class="location"><i class="fa-solid fa-location-dot"></i> ${profile.location}</p>
            <div class="card-stats">
                <span><i class="fa-solid fa-person-walking"></i> A ${profile.distance} km</span>
            </div>
            <p class="bio">${profile.bio}</p>
            <div class="card-tags">
                ${profile.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;
    stack.appendChild(card);
}

function swipe(direction) {
    if (isAnimating) return;
    const card = document.querySelector('.card');
    if (!card) return;

    isAnimating = true;

    if (direction === 'left') {
        card.classList.add('swipe-left');
        showToast('Profil passe', 'fa-xmark');
    } else if (direction === 'right') {
        card.classList.add('swipe-right');
        showToast('Nouveau match !', 'fa-heart');
    } else if (direction === 'super') {
        card.classList.add('swipe-super');
        showToast('Super Like envoye !', 'fa-star');
    }

    setTimeout(() => {
        currentIndex++;
        renderCard();
        isAnimating = false;
    }, 500);
}

document.getElementById('btnPass').addEventListener('click', () => swipe('left'));
document.getElementById('btnLike').addEventListener('click', () => swipe('right'));
document.getElementById('btnSuper').addEventListener('click', () => swipe('super'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') swipe('left');
    if (e.key === 'ArrowRight') swipe('right');
    if (e.key === 'ArrowUp') swipe('super');
});

// ===== MATCHS =====
function renderMatches() {
    const grid = document.getElementById('matchesGrid');
    grid.innerHTML = matches.map(m => `
        <div class="match-card">
            ${m.online ? '<span class="online-dot"></span>' : ''}
            <img src="${m.image}" alt="${m.name}">
            <h4>${m.name}, ${m.age}</h4>
            <p>${m.lastActive}</p>
        </div>
    `).join('');
}

// ===== CONVERSATIONS =====
function renderConversations() {
    const list = document.getElementById('conversationsList');
    list.innerHTML = conversations.map(c => {
        const lastMsg = c.messages[c.messages.length - 1];
        return `
            <div class="conversation" data-id="${c.id}">
                <img src="${c.image}" alt="${c.name}">
                <div class="conversation-info">
                    <h4>
                        <span>${c.name}</span>
                        <span class="time">${c.time}</span>
                    </h4>
                    <p>${lastMsg.text}</p>
                </div>
                ${c.unread > 0 ? `<span class="unread-badge">${c.unread}</span>` : ''}
            </div>
        `;
    }).join('');

    document.querySelectorAll('.conversation').forEach(conv => {
        conv.addEventListener('click', () => {
            const id = parseInt(conv.dataset.id);
            const conversation = conversations.find(c => c.id === id);
            document.querySelectorAll('.conversation').forEach(c => c.classList.remove('active'));
            conv.classList.add('active');
            openChat(conversation);
        });
    });
}

function openChat(conversation) {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = `
        <div class="chat-header">
            <img src="${conversation.image}" alt="${conversation.name}">
            <div class="chat-header-info">
                <h4>${conversation.name}</h4>
                <p>En ligne</p>
            </div>
        </div>
        <div class="chat-messages" id="chatMessages">
            ${conversation.messages.map(m => `
                <div class="message ${m.sent ? 'sent' : 'received'}">${m.text}</div>
            `).join('')}
        </div>
        <div class="chat-input">
            <input type="text" id="messageInput" placeholder="Ecrivez un message...">
            <button id="sendBtn">
                <i class="fa-solid fa-paper-plane"></i> Envoyer
            </button>
        </div>
    `;

    const input = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const messagesContainer = document.getElementById('chatMessages');

    const replies = [
        "C'est note !",
        "Trop bien !",
        "J'adore cette idee",
        "On se voit bientot alors",
        "Tu me racontes plus ?",
        "Haha genial",
        "Je suis d'accord avec toi",
        "Avec plaisir"
    ];

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        const msg = document.createElement('div');
        msg.className = 'message sent';
        msg.textContent = text;
        messagesContainer.appendChild(msg);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            const reply = document.createElement('div');
            reply.className = 'message received';
            reply.textContent = replies[Math.floor(Math.random() * replies.length)];
            messagesContainer.appendChild(reply);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ===== TOAST =====
function showToast(message, icon) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderCard();
    renderMatches();
    renderConversations();
});