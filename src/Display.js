

export function Display(props) {

    return (
        <div className={'display'} style={{ visibility: props.isVisible }}>
            Info {props.DataToDisplay}
            <div onClick={props.closeDisplay} >close</div>
        </div>
    )
}