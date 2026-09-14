const prompts = [

  {
    title: "Classic Studio",
    category: "Studio",
    image: "assets/classic-studio.jpg",
    prompt: `Create a photorealistic 1980s studio portrait using the uploaded person's face and identity accurately. Keep the face recognizable while adding an authentic 1980s Indian hairstyle and period clothing, with a simple painted studio backdrop, soft direct flash, subtle 35mm film grain, warm faded colours, realistic skin texture and natural expression. No modern objects. Professional analogue photography, 4K, vertical 4:5.`
  },
  {
    title: "Family Album",
    category: "Family",
    image: "assets/family-album.jpg",
    prompt: `Create a photorealistic 1980s Indian family album photo using the uploaded people and preserving their facial identities accurately. Dress everyone in authentic 1980s Indian clothing and hairstyles. Place them in a vintage family living room with warm tungsten lighting, direct camera flash, slightly faded colours, analogue film grain and natural expressions. No modern electronics. Realistic old family photograph, 4K, vertical 4:5.`
  },
  {
    title: "Retro Fashion",
    category: "Fashion",
    image: "assets/retro-fashion.jpg",
    prompt: `Transform the uploaded person's photo into an authentic 1980s Indian fashion portrait while preserving their exact facial identity. Add bold 80s hairstyle, period clothing, vintage accessories, studio lighting, soft flash, slight colour fading, 35mm film grain and subtle film halation. Realistic vintage fashion photography, no modern items, 4K, vertical 4:5.`
  },
  {
    title: "Bollywood",
    category: "Cinema",
    image: "assets/bollywood.jpg",
    prompt: `Create a photorealistic 1980s Bollywood-inspired portrait using the uploaded person's face accurately. Give them authentic 1980s Indian cinema styling, period hairstyle, colourful clothing, dramatic studio lighting and a classic painted film-set backdrop. Add realistic 35mm grain, warm analogue colours and subtle halation. Keep the face natural and recognizable. 4K, vertical 4:5.`
  },
  {
    title: "Action Hero",
    category: "Hero",
    image: "assets/action-hero.jpg",
    prompt: `Turn the uploaded person into a realistic 1980s Indian action hero while preserving their exact face and identity. Add classic 80s hairstyle, period clothing, confident hero pose, dramatic backlight and smoky cinematic atmosphere. Authentic 35mm film texture, warm analogue colours and realistic skin. No modern objects. Photorealistic, 4K, vertical 4:5.`
  },
  {
    title: "Retro Heroine",
    category: "Heroine",
    image: "assets/retro-heroine.jpg",
    prompt: `Create a photorealistic 1980s Indian film heroine portrait using the uploaded person's face and identity accurately. Add an authentic period hairstyle, traditional or glamorous 80s clothing, classic jewellery, soft studio flash and a colourful vintage cinema backdrop. Warm faded film colours, fine 35mm grain and natural skin texture. 4K, vertical 4:5.`
  },
  {
    title: "1980s Wedding",
    category: "Wedding",
    image: "assets/wedding.jpg",
    prompt: `Recreate the uploaded person's photo as an authentic 1980s Indian wedding album portrait. Preserve facial identity exactly and add period wedding clothing, traditional jewellery, vintage hairstyle, flower decorations and an old studio wedding backdrop. Use direct camera flash, warm faded colours, film grain and slightly soft focus. No modern objects. 4K, vertical 4:5.`
  },
  {
    title: "College Days",
    category: "College",
    image: "assets/college.jpg",
    prompt: `Create a realistic 1980s Indian college photograph using the uploaded person's exact face. Add authentic 80s college clothing, hairstyle, simple campus background, old books and period-appropriate accessories. Use natural daylight, slightly faded 35mm colours, subtle grain and candid photography. No smartphones or modern items. 4K, vertical 4:5.`
  },
  {
    title: "Indian Street",
    category: "Street",
    image: "assets/street.jpg",
    prompt: `Turn the uploaded person's photo into a photorealistic 1980s Indian street photograph. Preserve their facial identity and natural appearance. Place them on a period-authentic Indian street with vintage shops, scooters, buses and signage, dressed in 1980s clothing. Documentary 35mm photography, warm faded colours, realistic grain and natural sunlight. Avoid modern objects. 4K, vertical 4:5.`
  },
  {
    title: "Vintage Living Room",
    category: "Home",
    image: "assets/living-room.jpg",
    prompt: `Create a photorealistic 1980s Indian home portrait using the uploaded person's face accurately. Place them in a vintage middle-class living room with period furniture, curtains, radio, television and decor. Add authentic 80s clothing and hairstyle, warm indoor tungsten lighting, soft flash and realistic 35mm film grain. Nostalgic family-photo feeling, 4K, vertical 4:5.`
  },
  {
    title: "80s Arcade",
    category: "Arcade",
    image: "assets/arcade.jpg",
    prompt: `Create a realistic 1980s arcade portrait using the uploaded person's face and identity accurately. Dress them in authentic 80s casual fashion and place them beside vintage arcade machines with neon signs and colourful lights. Add analogue camera softness, 35mm grain and subtle halation. No modern gaming devices. 4K, vertical 4:5.`
  },
  {
    title: "VHS Camcorder",
    category: "VHS",
    image: "assets/vhs.jpg",
    prompt: `Transform the uploaded person's photo into an authentic late-1980s VHS camcorder frame while preserving their exact facial identity. Add period clothing, home-video lighting, slight motion softness, scanline texture, chromatic bleed and low-resolution VHS colour. Keep it realistic rather than cartoonish. Vertical 9:16.`
  },
  {
    title: "80s Road Trip",
    category: "Travel",
    image: "assets/road-trip.jpg",
    prompt: `Create a photorealistic 1980s Indian road-trip snapshot using the uploaded person's exact face. Dress them in authentic 80s travel clothing and place them beside a period-correct car on a scenic Indian highway. Add natural sunlight, disposable-camera feel, warm faded colours, 35mm grain and candid expression. No modern vehicles or phones. 4K, vertical 4:5.`
  },
  {
    title: "Tea Shop",
    category: "Nostalgia",
    image: "assets/tea-shop.jpg",
    prompt: `Create a realistic 1980s Indian tea-shop photograph using the uploaded person's face accurately. Place them at a vintage roadside tea stall with steel tumblers, old posters, wooden benches and period clothing. Use documentary 35mm photography, warm morning light, natural expression, faded colours and authentic film grain. No modern objects. 4K, vertical 4:5.`
  },
  {
    title: "South India",
    category: "South India",
    image: "assets/south-india.jpg",
    prompt: `Recreate the uploaded person as a photorealistic 1980s South Indian portrait. Preserve their facial identity exactly and use period-authentic South Indian clothing, hairstyle, traditional home or village setting and vintage household details. Soft sunlight, analogue 35mm grain, warm faded colours and natural skin texture. No modern objects. 4K, vertical 4:5.`
  },
  {
    title: "Kerala Retro",
    category: "Kerala",
    image: "assets/kerala.jpg",
    prompt: `Create a photorealistic 1980s Kerala portrait using the uploaded person's face and identity accurately. Add authentic Kerala clothing and hairstyle, a traditional house or village background, tropical greenery and period details. Use warm natural light, subtle 35mm film grain, slightly faded analogue colours and realistic skin texture. No modern objects. 4K, vertical 4:5.`
  },
  {
    title: "Tamil Nadu 80s",
    category: "Tamil Nadu",
    image: "assets/tamil-retro.jpg",
    prompt: `Transform the uploaded person into an authentic 1980s Tamil Nadu portrait while preserving their exact facial identity. Add period Tamil clothing, hairstyle, traditional street or home setting, old signage and realistic local details. Vintage 35mm photograph with warm faded colours, soft flash and natural film grain. No modern objects. 4K, vertical 4:5.`
  },
  {
    title: "Retro Magazine",
    category: "Magazine",
    image: "assets/magazine.jpg",
    prompt: `Create a photorealistic 1980s Indian magazine-cover portrait using the uploaded person's exact face and identity. Add sophisticated 80s fashion, period hairstyle, studio lighting, bold realistic pose and an authentic vintage editorial backdrop. Include subtle analogue film grain, halation, warm faded colour and printed-photo texture. Keep the face realistic. 4K, vertical 4:5.`
  },
  {
    title: "80s Disco",
    category: "Disco",
    image: "assets/disco.jpg",
    prompt: `Create a photorealistic 1980s disco-night portrait using the uploaded person's face accurately. Give them authentic 80s party fashion, hairstyle and accessories, with a retro disco floor, colourful lights, haze and soft direct flash. Add realistic 35mm film grain, slight motion blur and warm analogue colour. No modern electronics. 4K, vertical 4:5.`
  },
  {
    title: "80s Tycoon",
    category: "Luxury",
    image: "assets/tycoon.jpg",
    prompt: `Create a photorealistic 1980s Indian business tycoon portrait using the uploaded person's exact face and identity. Dress them in an authentic 80s suit or luxury Indian formalwear, with vintage office furniture, wood-panelled interiors and period decor. Dramatic studio lighting, warm film tones, subtle 35mm grain and realistic skin. No modern objects. 4K, vertical 4:5.`
  }

];

let currentPrompt = null;

function displayPrompts(list = prompts) {
  const grid = document.getElementById("promptGrid");
  grid.innerHTML = "";

  list.forEach((item) => {
    const index = prompts.indexOf(item);
    const card = document.createElement("div");
    card.className = "prompt-card";

    card.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.title}"
        loading="lazy"
      >
      <div class="prompt-info">
        <div class="prompt-number">
          PROMPT ${String(index + 1).padStart(2, "0")}
        </div>
        <h3>${item.title}</h3>
        <p>${item.category}</p>
        <div class="view-btn" onclick="openPrompt(${index})">
          View & Copy Prompt →
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function openPrompt(index) {
  currentPrompt = index;
  const item = prompts[index];

  document.getElementById("modalNumber").innerText =
    `PROMPT ${String(index + 1).padStart(2, "0")}`;

  document.getElementById("modalTitle").innerText = item.title;
  document.getElementById("modalPrompt").innerText = item.prompt;

  document.getElementById("promptModal").classList.add("active");
}

function closeModal() {
  document.getElementById("promptModal").classList.remove("active");
}

async function copyPrompt() {
  if (currentPrompt === null) return;
  const text = prompts[currentPrompt].prompt;

  try {
    await navigator.clipboard.writeText(text);
    alert("✅ Prompt copied!");
  } catch {
    alert("Please copy the prompt manually.");
  }
}

function openChatGPT() {
  window.open("https://chatgpt.com/", "_blank");
}

function randomPrompt() {
  const random = Math.floor(Math.random() * prompts.length);
  openPrompt(random);
}

function searchPrompts() {
  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = prompts.filter(item =>
    item.title.toLowerCase().includes(search) ||
    item.category.toLowerCase().includes(search)
  );

  displayPrompts(filtered);
}

document.getElementById("promptModal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

displayPrompts();
