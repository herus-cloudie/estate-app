export default function BookMark({checked}){
    return(
        <label className="ui-bookmark">
            <input checked={checked} type="checkbox" />
            <div className="bookmark">
            <svg viewBox="0 0 32 32">
                <g>
                <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                </g>
            </svg>
            </div>
        </label>
    )
}