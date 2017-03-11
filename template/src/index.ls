require! {
  '@cycle/run': {run}
  '@cycle/dom': {make-DOM-driver}
  './app': {App}
}

main = App

drivers =
  DOM: make-DOM-driver '#app'

run main, drivers
