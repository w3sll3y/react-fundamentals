import React from 'react'
import Produtos from '../../data/produto'

export default props => {
  const produtos = Produtos.map((produto) => {
    return (
      <div>
        <td> {produto.id} </td>
        <td> {produto.nome} </td>
        <td> R$ {produto.preco} </td>
      </div>
    )
  })

  return (
    <div>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        <tr>
          {produtos}
        </tr>
      </table>
    </div>
  )
}