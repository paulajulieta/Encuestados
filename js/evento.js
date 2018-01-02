//Evento
var Evento = function(emisor) {
  this.sujeto = emisor;
  this.observadores = [];
};

Evento.prototype = { // (guia 1(1)) suscriben observadores
  suscribir: function(observador) {
    this.observadores.push(observador);
  },
  notificar: function() {  // (guia 1(1)) se notifica
    for (var i = 0; i < this.observadores.length; i++) {
      this.observadores[i](this.sujeto);
    }
  }
};
