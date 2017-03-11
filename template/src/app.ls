require! {
  '@cycle/dom': {div}
  'xstream': {default: xs}
  './app.css': styles
}

view = ->
  div ".#{styles.main}", 'My Awesome Cycle.js app'

export App = (sources) ->
  vtree$ = xs.of view!
  sinks =
    DOM: vtree$