import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test ('reducer', () => {

    // Данный
    const state: StateType = {
        collapsed: false
    }

    // Действие
    const newState = reducer(state, {type: TOGGLE_CONSTANT})


    // Какой результат
    expect(newState.collapsed).toBe(true)
})

test ('reducer', () => {

    // Данный
    const state: StateType = {
        collapsed: true
    }

    // Действие
    const newState = reducer(state, {type: TOGGLE_CONSTANT})


    // Какой результат
    expect(newState.collapsed).toBe(false)
})

test ('reducer error', () => {

    // Данный
    const state: StateType = {
        collapsed: false
    }

    // Действие
    expect( () => {reducer(state, {type: "FAKE-TYPE"})}).toThrowError()

})