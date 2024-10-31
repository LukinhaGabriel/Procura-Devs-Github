import "./index.css";

interface InputProps {
  id: string,
  type: string,
  placeholder: string,
  value:string,
  aoAlterado: (value:string) => void,
}

export default function Input(props: InputProps) {
  const aoDigitado = (e:React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(e.target.value);
  };
  return (
    <fieldset>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        minLength={1}
        maxLength={39}
        pattern="^[a-zA-Z0-9\-]+$"
        value={props.value}
        onChange={aoDigitado}
        required
      />
      {/* <span className="error-message"></span> */}
    </ fieldset>
  );
}
