particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, /* Cantidad de nodos */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#58a6ff" /* Color de los nodos (Azul Ciencia) */
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#58a6ff", /* Color de las conexiones */
      "opacity": 0.2, /* Transparencia sutil para no distraer */
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, /* Velocidad de flotación */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" /* ESTO hace que las redes sigan tu cursor */
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200, /* Distancia de atracción del mouse */
        "line_linked": {
          "opacity": 0.6
        }
      }
    }
  },
  "retina_detect": true
});
