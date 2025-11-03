import styles from './styles.module.css'

type DefaultInputProps = {
    id: string //propriedades
    labelText?: string  // O ? informa que é opicional ter ou não
} & React.ComponentProps<'input'>;


                                //pegar a variavel
export function DefaultInput({ id, type, labelText, ...props}: DefaultInputProps) {
    return (
        <>
        {/*sempre que eu quiser usar codigo js utilize {}*/}
        <label htmlFor={id}> {labelText} </label>
        <input className={styles.input} id={id} type={type} {...props}/>      
        </>

    )
}