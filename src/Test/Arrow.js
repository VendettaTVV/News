import { useState } from 'react';

const TestComponent = (props) => {

    const [index, setIndex] = useState(0);

    console.log('Test component render');
    function handleClick(event) {
        console.log(event);
        event.target.innerHTML = 'New text';
        setIndex(index + 1);
    }
    function handleClickIndexMinus(event) {
        console.log(event);
        setIndex(index - 1);

    }

    function handleClickCountMinus(event) {
        props.setCount(props.count - 1);
    }
    return (
        <div>
            {index}
            <div>
                <button onClick={handleClick}>Add one</button>
                <button onClick={handleClickIndexMinus}>Minus index 1</button>
                <button onClick={handleClickCountMinus}>Minus count 1</button>
            </div>
        </div>
    )
};

const ArrowComponent = (props) => {
    const [count, setCount] = useState(0);

    const array = [
        'Test 1',
        'Test 2',
        'Test 3',
    ];
    console.log("arrow render");
    return (
        <div>
            <div>{props.message}<b>{count}</b></div>
            <small>{props.text}</small>
            <div>
                <button onClick={() => setCount(count + 1)}>Add index</button>
            </div>
            <TestComponent count={count} setCount={setCount} />

            {array.map(a => {
                return (<div key={a}>{a}</div>);
            })}
        </div>
    );
};
export default ArrowComponent;