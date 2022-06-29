function enoughAirtime(usage, cost) {
    var call = 1.88
    var sms = 0.75
    var data = 12.00
    let totalCost = 0
    var used = usage.split(',');
  
    for (var i = 0; i < used.length; i++) {
      if (used[i].startsWith('call')) {
         totalCost += call
        console.log("buying call")
      } else if (used[i].startsWith('sms')) {
        console.log("buying sms")
         totalCost += sms
      } else if (used[i].startsWith('data')) {
                 totalCost += data
      }
    }
   
    const sum = ( totalCost > cost) ? 0 : cost - totalCost;
    return 'R' + sum.toFixed(2)
  }