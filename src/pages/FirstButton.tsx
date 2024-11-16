const FirstButton = (props: { style: any; price: string }) =>{
    return (
        <button style={{...JSON.parse(props.style)}}>{Number(props.price).toFixed(2)}</button>
        // <FirstButton price="10" style='{"width": "100%", "textAlign": "right", "fontSize": "1.3em"}' />
    );
  }

  export default FirstButton;
  