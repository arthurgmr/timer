import { produce } from 'immer'
import { ActionsType } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  return produce(state, (draft) => {
    const currentCycleIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId
    })

    switch (action.type) {
      case ActionsType.ADD_NEW_CYCLE:
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
        break

      case ActionsType.INTERRUPT_CURRENT_CYCLE: {
        if (currentCycleIndex < 0) {
          return
        }

        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        break
      }

      case ActionsType.MARK_CURRENT_CYCLES_AS_FINISHED: {
        if (currentCycleIndex < 0) {
          return
        }

        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        break
      }

      default:
        return state
    }
  })
}
