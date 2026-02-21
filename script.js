const data = {
  babies: [
    {
      id: "Babies 1",
      info: "Lunes — Canto 18:00hs / Baile 18:30hs",
      img: "imagen/BARBY.jpeg",
    },
    {
      id: "Babies 2",
      info: "Lunes — Baile 18:00hs / Canto 18:30hs",
      img: "imagen/CANDE.jpeg",
    },
    {
      id: "Babies 3",
      info: "Miércoles — Canto 18:00hs / Baile 18:30hs",
      img: "imagen/EMI.jpeg",
    },
    {
      id: "Babies 4",
      info: "Miércoles — Baile 18:00hs / Canto 18:30hs",
      img: "imagen/Leo.jpeg",
    },
  ],

  ninos: [
    {
      id: "Niños 1",
      info: "Lunes — Canto 19:00hs; Miércoles — Teatro 18:00 / Baile 19:00",
      img: "imagen/MAMA.jpeg",
    },
    {
      id: "Niños 2",
      info: "Lunes — Teatro 18:00 / Baile 19:00; Miércoles — Canto 19:00",
      img: "imagen/MARIAN.jpeg",
    },
    {
      id: "Niños 3",
      info: "Miércoles — Teatro 18:00 / Baile 19:00 / Canto 20:00",
      img: "imagen/MARTINA.jpeg",
    },
    {
      id: "Niños 4",
      info: "Lunes — Teatro 18:00 / Baile 19:00 / Canto 20:00",
      img: "imagen/MICA.jpeg",
    },
  ],

  junior: [
    {
      id: "Canto",
      info: "Martes 18:00hs - Martes 19:00hs - Martes 20:00hs / Jueves 18:00hs - 19:00hs - 20:00hs",
      img: "imagen/BARBY.jpeg",
    },
    {
      id: "Baile",
      info: "Martes 18:00hs PRINCIPIANTES - Jueves 18:00hs AVANZADOS",
      img: "imagen/CANDE.jpeg",
    },
    {
      id: "Teatro",
      info: "Martes 19:00hs y Martes 20:00hs",
      img: "imagen/EMI.jpeg",
    },
  ],

  jovenes: [
    {
      id: "Canto",
      info: "Lunes 19:00hs - Martes 18:00hs - Martes 20:00hs - Miércoles 18:00hs - Jueves 18:00hs - 20:00hs",
      img: "imagen/Leo.jpeg",
    },
    {
      id: "Baile",
      info: "Hip Hop - Entrenamiento - Afro - Pop - Avanzados",
      img: "imagen/MAMA.jpeg",
    },
    {
      id: "Teatro",
      info: "Martes 18:00hs PRINCIPIANTES - Jueves 17:30 a 19:00hs AVANZADOS",
      img: "imagen/MARIAN.jpeg",
    },
  ],

  adultos: [
    {
      id: "Canto",
      info: "Lunes 18:00hs y 20:00hs - Martes 19:00hs - Miércoles 19:00hs y 20:00hs",
      img: "imagen/MARTINA.jpeg",
    },
    {
      id: "Teatro Musical Adultos",
      info: "Viernes 19:30 a 21:00hs",
      img: "imagen/MICA.jpeg",
    },
  ],
};

const groupsList = document.getElementById("groupsList");
const sectionTitle = document.getElementById("sectionTitle");
const buttons = document.querySelectorAll(".group-btn");

function renderGroup(groupKey) {
  const titles = {
    babies: "Babies (3-5 años)",
    ninos: "Niños (6-9 años)",
    junior: "Junior (10-13 años)",
    jovenes: "Jóvenes (14-20 años)",
    adultos: "Adultos (21+)",
  };

  sectionTitle.textContent = titles[groupKey];
  groupsList.innerHTML = "";

  const items = data[groupKey] || [];

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "group-item pulse";

    div.innerHTML = `
      <img src="${item.img}" alt="${item.id}" class="group-img">
      <div>
        <strong>${item.id}</strong>
        <div class="small">${item.info}</div>
      </div>
    `;

    groupsList.appendChild(div);
  });
}

renderGroup("babies");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGroup(btn.dataset.group);
  });
});
