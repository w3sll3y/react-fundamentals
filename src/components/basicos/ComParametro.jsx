import React from 'react'

export default function ComParametro(props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  const notaInt = Math.ceil(props.nota)
  return (
    <div>
      <h2> {props.titulo} </h2>
      <p> O aluno <strong> {props.aluno} </strong> tem nota {notaInt}</p>
      <strong> Status: </strong>
      <strong> {status}! </strong>
    </div>
  )
}