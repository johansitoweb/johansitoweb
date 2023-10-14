function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');
  
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    const formattedTime = now.toLocaleTimeString('es-ES');
  
    dateElement.innerText = formattedDate;
    timeElement.innerText = formattedTime;
  
    // Simulando la obtención de la ubicación
    getLocation().then(location => {
      locationElement.innerText = `Ubicación: ${location}`;
    }).catch(error => {
      console.error('Error al obtener la ubicación:', error);
      locationElement.innerText = 'Ubicación: No disponible';
    });
  }
  
  function getLocation() {
    return new Promise((resolve, reject) => {
      // Simulando una llamada asíncrona para obtener la ubicación
      setTimeout(() => {
        resolve('Ciudad X, País Y');
      }, 2000); // Simula un tiempo de respuesta de 2 segundos
    });
  }
  
  // Actualizar la hora, fecha y ubicación cada segundo
  setInterval(updateDateTime, 1000);
  
  // Inicializar la página
  updateDateTime();
  