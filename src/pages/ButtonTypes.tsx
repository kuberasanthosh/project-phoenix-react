const ButtonTypes = (props: { style: any; btnName: string }) =>{
    return (
        <div className="button-types">
            <button type="button" className="primary">Primary</button>
            <button type="button" className="secondary">Secondary</button>
            <button type="button" className="accent1">Accent 1</button>
            <button type="button" className="accent2">Accent 2</button>
            <button type="button" className="bg">Background</button>
            <a href="" className="primary link-btn">Link Button</a>
            <button style={{...JSON.parse(props.style)}}>{props.btnName}</button>
        </div>
        // <FirstButton price="10" style='{"width": "100%", "textAlign": "right", "fontSize": "1.3em"}' />
    );
  }

  export default ButtonTypes;
  