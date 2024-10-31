import "./index.css";


interface ErrorMessageProps {
    message:string,
}

export default function ErrorMessage(props:ErrorMessageProps){
    return (
        <div className="error-message">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDBvdjRka3BzeGZ6Nm85NGRmd3Vkd2ozMDJ0YnpmaDhzZ3ozdmJvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3zDdFSPALuCe6C43nM/200.webp" alt="not found" />
            <p>{props.message}</p>
        </div>
    );
}