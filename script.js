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
    {
      id: "Niños 4",
      info: "Lunes — Teatro 18:00 / Baile 19:00 / Canto 20:00",
    },
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
      info: "Lunes 19:00hs \n Martes 18:00hs \n Martes 20:00hs \n Miércoles 18:00hs \n Jueves 18:00hs - Jueves 20:00hs",
    },
    {
      id: "Baile",
      info: "Martes 19:00hs HIP HOP Coreográfico - Martes 20:00hs ENTRENAMIENTO COREOGRAFICO PARA BAILARINES - Miércoles 20:00hs FUSION COREOGRAFICA - Jueves 19:00hs POP coreografico - Jueves 20:00hs AVANZADOS",
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

  // ===== Acordeón 1: GRUPOS =====
  const gruposHTML = items
    .map(
      (item) => `
      <div class="group-item pulse">
        <strong>${item.id}</strong>
        <div class="small">${item.info}</div>
      </div>
    `
    )
    .join("");

  // ===== Acordeón 2: PROFES =====
  const profesHTML = `
    <div class="profe-card"><img src="imagen/BARBY.jpeg" class="profe-img"><div>Barbara Falcigno</div></div>
    <div class="profe-card"><img src="imagen/CANDE.jpeg" class="profe-img"><div>Candela Sörenson</div></div>
    <div class="profe-card"><img src="imagen/EMI.jpeg" class="profe-img"><div>Emiliano Alfaro</div></div>
    <div class="profe-card"><img src="imagen/Leo.jpeg" class="profe-img"><div>Leonel Brown</div></div>
    <div class="profe-card"><img src="imagen/MAMA.jpeg" class="profe-img"><div>Evelyn Jenkins</div></div>
    <div class="profe-card"><img src="imagen/MARIAN.jpeg" class="profe-img"><div>Marian Casarini</div></div>
    <div class="profe-card"><img src="imagen/MARTINA.jpeg" class="profe-img"><div>Martina Zalasar</div></div>
    <div class="profe-card"><img src="imagen/MICA.jpeg" class="profe-img"><div>Micaela Palma</div></div>
  `;

  groupsList.innerHTML = `
    <details class="accordion">
      <summary>GRUPOS Y HORARIOS</summary>
      <div class="accordion-content">
        ${gruposHTML}
      </div>
    </details>

    <details class="accordion">
      <summary>PROFES</summary>
      <div class="accordion-content profes-grid">
        ${profesHTML}
      </div>
    </details>
  `;
}

renderGroup("babies");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGroup(btn.dataset.group);
  });
});
