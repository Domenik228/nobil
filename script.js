document.addEventListener("DOMContentLoaded", () => {
  const ism = prompt("Ismingizni kiriting:");
  const familiya = prompt("Familiyangizni kiriting:");
  const yosh = prompt("Yoshingizni kiriting:");

  if (ism && familiya && yosh) {
    document.getElementById("card").innerHTML = `
                    <div class="card">
                        <h2>${ism}</h2>
                        <h2>${familiya}</h2>
                        <p>Yosh: ${yosh} yosh</p>
                    </div>
                `;
  } else {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
  }
});
