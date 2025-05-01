async function cargarDatos() {
  const fechaInput = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje');
  const resultado = document.getElementById('resultado');
  mensaje.textContent = "Cargando datos...";
  resultado.textContent = "";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxa-mEJOBjSGc4aejzEe-UZ_kIiCyE0ufW-GGBNHivFmsRb1vJ3WSjk9MocCHOM4gGs/exec?fecha=" + fechaInput);
    if (!response.ok) throw new Error("Error al obtener los datos");
    const texto = await response.text();
    mensaje.textContent = "Datos cargados correctamente.";
    resultado.textContent = texto;
  } catch (error) {
    mensaje.textContent = "Error al obtener los datos: " + error.message;
  }
}