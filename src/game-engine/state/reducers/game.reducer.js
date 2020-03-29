import { gameConstants } from '../actions'

const initialState = {}

export function game(state = initialState, action) {
	switch (action.type) {
		case gameConstants.CREATE_GAME_REQUEST:
			return {
				...state,
				error: null,
				locked: true
			}
		case gameConstants.CREATE_GAME_SUCCESS:
			return {
				...state,
				gameData: {
					code: action.data.gcode
				},
				playerData: {
					id: action.data.pid,
					name: action.data.pname
				},
				error: null,
				locked: false,
				inGame:true
			}
		case gameConstants.CREATE_GAME_FAILURE:
			return {
				...state,
				error: {
					code: action.data.code,
					message: action.data.message
				},
				locked: false
			}
		case gameConstants.GET_PLAYERS_LIST_REQUEST:
			return {
				...state,
				locked: true
			}
		case gameConstants.GET_PLAYERS_LIST_SUCCESS:
			return {
				...state,
				gameData: {
					...state.gameData,
					players: action.data.data
				},
				locked: false
			}
		case gameConstants.GET_PLAYERS_LIST_FAILURE: {
			return {
				...state,
				error: {
					code: action.data.code,
					message: action.data.message
				},
				locked: false
			}
		}
		case gameConstants.JOIN_GAME_REQUEST: {
			return {
				...state,
				gameData: {
					code: action.data.gameCode
				},
				playerData:{
					name: action.data.name
				},
				locked: true
			}
		}
		case gameConstants.JOIN_GAME_SUCCESS:{
			return {
				...state,
				playerData: {
					...state.playerData,
					id: action.data.pid
				},
				players: action.data.data,
				error: null,
				locked: false,
				inGame: true
			}
		}
		default:
			return state
	}
}
