import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  max-width: 700px;
  margin: calc((100vh / 2) - 200px) auto;
`

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  background-color: #202024;
  border: #323238 1px solid;
  border-radius: 6px;
  width: 100%;
  max-width: 700px;
  padding: 2rem 0;
`

export const InputArea = styled.div`
  display: flex;
  margin-top: 2px;
`

export const InputValue = styled.input`
  all: unset;

  background-color: #323238;
  border: 1px solid #505059;
  padding: 0.5rem;
  border-bottom-left-radius: 6px;

  &::placeholder {
    color: #a9a9b2;
  }
`

export const InputButton = styled.button`
  all: unset;

  background-color: #00875f;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid #505059;
  border-left: none;

  cursor: pointer;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`
