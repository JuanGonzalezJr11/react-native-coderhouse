const input = "ajshdj123123X!#"

// Solo números:
const expression = /^[0-9]*$/
// Solo letras:
const expression2 = /^[a-zA-Z]*$/
// Solo letras y números
const expression3 = /^[a-zA-Z0-9]*$/

const evaluation = expression.test(input)
const evaluation2 = expression.test(input)
const evaluation3 = expression.test(input)

