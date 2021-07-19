import { useTheme } from "../providers/ThemeProvider"

export const ThemeChanger = (props:{title:string}) => {
    const [_,setTheme] = useTheme();
    return (
        <button onClick={() => { setTheme(props.title) }}>
            {props.title}
        </button>
    )
}