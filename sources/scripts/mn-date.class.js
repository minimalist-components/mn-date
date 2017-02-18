class MnDate extends window.MnInput {
  constructor(self) {
    self = super(self)

    const value = this.getAttribute('value')

    if (this.getAttribute('value')) {
      this.setAttribute('value', value.slice(0, 10))
      this.value = value.slice(0, 10)
    }

    const input = this.querySelector('input')
    input.setAttribute('type', 'date')
    input.setAttribute('value', value)

    const attributes = Array
      .from(this.attributes)
      .map(attr => {
        const name = attr.name
        const value = attr.value

        return {name, value}
      })

    const attributeSpecs = [
      {
        name: 'max',
      },
      {
        name: 'min',
      },
    ]

    attributeSpecs
      .filter(implemented)
      .forEach(setAttribute)

    return self

    function implemented(defaultAttr) {
      return attributes.some(attr => attr.name === defaultAttr.name)
    }

    function setAttribute(attribute) {
      const value = attributes.filter(attr => attr.name === attribute.name)[0].value
      input.setAttribute(attribute.name, value)
    }
  }
}

customElements.define('mn-date', MnDate)
