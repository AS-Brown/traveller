const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation 
  })
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport === transport)
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance})
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  var total = this.journeys.reduce((current, journey)=>{
    return current + journey.distance

  },0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportOptions = this.journeys.map((journey)=>{
    return journey.transport
  })
  const uniqueTransport = [...new Set(transportOptions)]
  return uniqueTransport
};


module.exports = Traveller;
