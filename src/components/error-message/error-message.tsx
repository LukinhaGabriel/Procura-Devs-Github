import "./index.css";


interface ErrorMessageProps {
    message:string,
}

export default function ErrorMessage(props:ErrorMessageProps){
    return (
        <div className="error-message">
            <p>{props.message}</p>
        </div>
    );
}