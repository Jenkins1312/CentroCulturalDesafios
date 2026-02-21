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

  // ===== GRUPOS =====
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

  // ===== PROFES POR GRUPO =====
  const profesPorGrupo = {
    babies: [
      { nombre: "Candela Sörenson", img: "imagen/CANDE.jpeg" },
      { nombre: "Emiliano Alfaro", img: "imagen/EMI.jpeg" },
    ],
    ninos: [
      { nombre: "Barbara Falcigno (Canto y Baile)", img: "imagen/BARBY.jpeg" },
      { nombre: "Emiliano Alfaro", img: "imagen/EMI.jpeg" },
      { nombre: "Marian Casarini (Teatro)", img: "imagen/MARIAN.jpeg" },
    ],
    junior: [
      { nombre: "Micaela Palma (Baile)", img: "imagen/MICA.jpeg" },
      { nombre: "Belén Martínez (Canto)", img: "imagen/BELEN.jpeg" },
      { nombre: "Leonel Brown (Teatro)", img: "imagen/Leo.jpeg" },
    ],
    jovenes: [
      { nombre: "Evelyn Jenkins (Canto)", img: "imagen/MAMA.jpeg" },
      {
        nombre: "Martina Zalasar (Baile Coreográfico y Entrenamiento)",
        img: "imagen/MARTINA.jpeg",
      },
      { nombre: "Emiliano Alfaro (Fusión)", img: "imagen/EMI.jpeg" },
      { nombre: "Leonel Brown (Teatro)", img: "imagen/Leo.jpeg" },
    ],
    adultos: [
      { nombre: "Evelyn Jenkins (Canto y Teatro)", img: "imagen/MAMA.jpeg" },
    ],
  };

  const profes = profesPorGrupo[groupKey] || [];

  const profesHTML = profes
    .map(
      (profe) => `
      <div class="profe-card">
        <img src="${profe.img}" class="profe-img">
        <div>${profe.nombre}</div>
      </div>
    `
    )
    .join("");

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
