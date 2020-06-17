import { connect } from 'react-redux'
import { Laminate } from './Laminate'
import { selectLaminateAction } from 'Redux/Action/laminate'

const action = {
  selectLaminateAction
}

export const selectLaminate = connect(null, action)(Laminate)
