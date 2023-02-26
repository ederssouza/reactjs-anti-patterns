function PropKeyValueBad() {
  const items = ['Item 1', 'Item 2', 'Item 3']

  return (
    <section>
      <h2 className="text-danger">Prop key value (bad)</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default PropKeyValueBad
