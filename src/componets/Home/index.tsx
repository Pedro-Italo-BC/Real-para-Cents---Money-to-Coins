import {
  Container,
  InputValue,
  InputContainer,
  InputButton,
  InputArea,
} from './styles'

import { Money, Coins } from 'phosphor-react'
import React, { useState } from 'react'

export function Home() {
  const [realInputValue, setRealInputValue] = useState('')
  const [centsInputValue, setCentsInputValue] = useState('')

  function handleConvertRealToCents() {
    const realMoneyValue = parseFloat(realInputValue)

    setCentsInputValue(String(realMoneyValue * 100))
  }

  function handleConvertCentsToReal() {
    const centsMoneyValue = parseFloat(centsInputValue)

    setRealInputValue(String(centsMoneyValue / 100))
  }

  return (
    <Container>
      <InputContainer>
        <div>
          <label htmlFor="real">Real - Money</label>

          <InputArea>
            <InputValue
              placeholder="Real"
              type="number"
              id="real"
              onChange={(data: React.ChangeEvent<HTMLInputElement>) => {
                setRealInputValue(data.target.value)
              }}
              value={realInputValue}
            />
            <InputButton onClick={handleConvertRealToCents}>
              <Money />
            </InputButton>
          </InputArea>
        </div>

        <div>
          <label htmlFor="centavos">Centavos - Cents</label>
          <InputArea>
            <InputValue
              placeholder="Centavos"
              type="number"
              id="centavos"
              onChange={(data: React.ChangeEvent<HTMLInputElement>) => {
                setCentsInputValue(data.target.value)
              }}
              value={centsInputValue}
            />
            <InputButton onClick={handleConvertCentsToReal}>
              <Coins />
            </InputButton>
          </InputArea>
        </div>
      </InputContainer>
    </Container>
  )
}
