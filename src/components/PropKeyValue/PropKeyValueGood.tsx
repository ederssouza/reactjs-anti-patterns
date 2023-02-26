function PropKeyValueGood() {
  const items = ['Item 1', 'Item 2', 'Item 3']

  return (
    <section>
      <h2 className="text-success">Prop key value (good)</h2>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul> */}
    </section>
  )
}

export default PropKeyValueGood
