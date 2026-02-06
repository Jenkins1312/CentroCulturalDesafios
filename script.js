const data = {
  babies: [
    { id: "Babies 1", info: "Lunes — Canto 18:00hs / Baile 18:30hs" },
    { id: "Babies 2", info: "Lunes — Baile 18:00hs / Canto 18:30hs" },
    { id: "Babies 3", info: "Miércoles — Canto 18:00hs / Baile 18:30hs" },
    { id: "Babies 4", info: "Miércoles — Baile 18:00hs / Canto 18:30hs" },
  ],
  ninos: [
    {
      id: "Niños 1",
      info: "Lunes — Canto 19:00hs; Miércoles — Teatro 18:00 / Baile 19:00",
    },
    {
      id: "Niños 2",
      info: "Lunes — Teatro 18:00 / Baile 19:00; Miércoles — Canto 19:00",
    },
    {
      id: "Niños 3",
      info: "Miércoles — Teatro 18:00 / Baile 19:00 / Canto 20:00",
    },
    { id: "Niños 4", info: "Lunes — Teatro 18:00 / Baile 19:00 / Canto 20:00" },
    {
      id: "Niños 5",
      info: "Lunes — Teatro 19:00; Miércoles — Canto 19:00 / Baile 20:00",
    },
  ],
  junior: [
    {
      id: "Canto",
      info: "Martes 18:00hs - Martes 19:00hs - Martes 20:00hs  Jueves 18:00hs - Jueves 19:00hs - Jueves 20:00hs",
    },
    {
      id: "Baile",
      info: "Martes 18:00hs PRINCIPIANTES - Jueves 18:00hs AVANZADOS",
    },
    { id: "Teatro", info: "Martes 19:00hs y Martes 20:00hs" },
  ],
  jovenes: [
    {
      id: "Canto",
      info:
        "Lunes 19:00hs" <
        br >
        " Martes 18:00hs \n Martes 20:00hs \n Miércoles 18:00hs \n Jueves 18:00hs - Jueves 20:00hs",
    },
    {
      id: "Baile",
      info: "Martes 19:00hs HIP HOP Coreográfico - Martes 20:00hs ENTRENAMIENTO FISICO PARA BAILARINES - Miércoles 20:00hs AFRO - Jueves 19:00hs POP coreografico - Jueves 20:00hs AVANZADOS",
    },

    {
      id: "Teatro",
      info: "Martes 18:00hs PRINCIPIANTES - Jueves 17:30 a 19:00hs AVANZADOS",
    },
  ],
  adultos: [
    {
      id: "Canto",
      info: "Lunes 18:00hs — Lunes 20:00hs - Martes 19:00hs - Miércoles 19:00hs - Miércoles 20:00hs - Jueves 20:00hs - Viernes 17:00hs - Viernes 18:30hs",
    },

    { id: "Teatro Musical Adultos", info: "Viernes 19:30 a 21:00hs" },
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
    <div class="group-main">
      <div>
        <strong>${item.id}</strong>
        <div class="small">${item.info}</div>
      </div>
      <span class="accordion-icon">+</span>
    </div>
  
    <div class="accordion-content">
      <img src="imagen/profe.jpg" alt="Profesor" class="profe-img" />
    </div>
  `;

    div.addEventListener("click", () => {
      alert(
        `${item.id}\n${item.info}\n\nPara más info, escribinos por Instagram: @desafiosnqn`
      );
    });
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
div.addEventListener("click", () => {
  div.classList.toggle("open");
});
div.innerHTML = `<div><strong>${item.id}</strong><div class=\"small\">${item.info}</div></div>`;
