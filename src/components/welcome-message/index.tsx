import {useState } from 'react'
import * as S from './styled'

export const WelcomeMessage = () => {
  const [open, setOpen] = useState(true)
  
  return (
    <S.ModalComponent
      visible={open}
      footer={null}
      closable
      centered
      destroyOnClose={true}
      maskClosable={true}
      width={690}
    >
      <S.Wrapper>
        <h1>
          Welcome, <S.Span>New User</S.Span>
        </h1>
        <p>
          This app gives you the opportunity to easily search, create and store
          flight plans. <br />
          <br />
          The user is able to create a flight plan by clicking on the map to
          insert points. Each point will be joint to the next one with a
          straight line. Once you have inserted all the points, you will be able
          to save the new route by clicking the <i>Save</i> button in the bar
          above. <br /> You can toggle on/off the search bar by selecting the{' '}
          <i>Search</i> icon in the menu on the right. <br /> <br />
          You can also access your flight history at any time and visualise it
          over the map. To retrieve your flight history, you need to select the{' '}
          <i>History</i> option from the right menu and navigate to the route
          you've created.
        </p>
        <S.StartButton onClick={() => setOpen(false)}>START</S.StartButton>
      </S.Wrapper>
    </S.ModalComponent>
  )
}

export default WelcomeMessage
