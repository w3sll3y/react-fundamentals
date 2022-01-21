import React from 'react'

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <>
      <h2>Valor aleatorio</h2>
      <p>
        <strong> Valor minimo: </strong> {min}
      </p>
      <p>
        <strong> Valor máximo: </strong> {max}
      </p>
      <p>
        <strong> Valor escolhido: </strong> {aleatorio}
      </p>
    </>
  )
}