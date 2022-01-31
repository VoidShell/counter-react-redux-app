import {useDispatch, useSelector} from "react-redux";
import Counter from "../components/Counter";
import {increase, decrease} from "../modules/counter";
import {useCallback} from "react";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);

    const dispatch = useDispatch();
    const onIncrease = useCallback(on => dispatch(increase()), [dispatch])
    const onDecrease = useCallback(on => dispatch(decrease()), [dispatch])

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

export default CounterContainer;