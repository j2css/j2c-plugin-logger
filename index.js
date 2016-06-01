module.exports = function logger(name) {
  return {$filter: function(next) {
    return {
      i: function() {console.log(name, 'i', [].slice.call(arguments)); next.i.apply(next, arguments)},
      x: function() {console.log(name, 'x', [].slice.call(arguments)); return next.x.apply(next, arguments)},
      a: function() {console.log(name, 'a', [].slice.call(arguments)); next.a.apply(next, arguments)},
      A: function() {console.log(name, 'A', [].slice.call(arguments)); next.A.apply(next, arguments)},
      d: function() {console.log(name, 'd', [].slice.call(arguments)); next.d.apply(next, arguments)},
      s: function() {console.log(name, 's', [].slice.call(arguments)); next.s.apply(next, arguments)},
      S: function() {console.log(name, 'S', [].slice.call(arguments)); next.S.apply(next, arguments)}
    }
  }}
}
