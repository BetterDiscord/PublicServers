import MagnifyingGlass from "../icons/magnifyingglass";

const {React} = BdApi;

export default function NoResults(props) {
    return <div className={"bd-empty-results" + (props.className ? ` ${props.className}` : "")}>
                <MagnifyingGlass />
                <div className="bd-empty-results-text">
                    {props.text || ""}
                </div>
            </div>;
}