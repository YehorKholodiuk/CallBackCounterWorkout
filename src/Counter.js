function Counter(props){
    return (
        <div className="App">


                ID:{props.id}
            <button onClick = {() => props.onMinus(props.id)}>Minus</button>
            {props.count}
            <button onClick = {() => props.onPlus(props.id)}>Plus</button>
        </div>
    );
}

export default Counter;