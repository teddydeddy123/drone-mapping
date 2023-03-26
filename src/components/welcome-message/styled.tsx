import styled from 'styled-components'
import { Modal } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: left;
  h1 {
    margin: 0;
    text-align: center;
  }
  i {
    color: #7777f4;
  }
`

export const Span = styled.span`
  color: #7777f4;
`

export const StartButton = styled.button`
  transition: all 0.6s;
  &:hover {
    background-color: #2aa755;
    opacity: 0.7;
    color: white;
    transform: scale(1.2);
    border: none;
    transition: all 0.6s;
  }
`

export const ModalComponent = styled(Modal).attrs((props) => ({
  className: props.className,
}))`
  & .ant-modal-content {
    border-radius: 20px;
  }
  & .ant-modal-body {
    padding: 30px;
  }
  & .anticon svg {
    display: none;
  }
`
