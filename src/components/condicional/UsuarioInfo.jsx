import React from "react";
import If, { Else } from './If';

export default props => {
  const user = props.usuario || {}
  return (
    <div>
      <If test={user && user.nome}>
        Seja bem-vindo! <strong> {user.nome}! </strong>
        <Else>
          Seja bem-vindo! <strong> Amigão! </strong>
        </Else>
      </If>
    </div>
  )
}