export const abbrNum = (number, decPlaces) => {
    decPlaces = Math.pow(10, decPlaces)
    var abbrev = ['k', 'm', 'b', 't']
    for (var i = abbrev.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3)
  
      if (size <= number) {
        number = Math.round((number * decPlaces) / size) / decPlaces
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1
          i++
        }
        number += abbrev[i]
      }
    }
    return number
  }

//Credit: illumi6121 (Discord)

export function isPlayerAt(location){
  if(World.isLoaded() == false) return;
  return TabList.getNames().some((l) => 
      {
          return l.removeFormatting().toLowerCase().includes(location.toLowerCase());
      }
  )
} 
