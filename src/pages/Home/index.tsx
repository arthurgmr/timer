import { Play } from 'phosphor-react'
import {
  CounterContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCoutdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> I gonna work in</label>
          <TaskInput placeholder="Give a project name" id="task" />

          <label htmlFor="minutesAmount">duration</label>
          <MinutesAmountInput
            type="number"
            placeholder="00"
            id="minutesAmount"
          />

          <span>minutes.</span>
        </FormContainer>

        <CounterContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CounterContainer>

        <StartCoutdownButton disabled type="submit">
          <Play size={24} />
          Start
        </StartCoutdownButton>
      </form>
    </HomeContainer>
  )
}
