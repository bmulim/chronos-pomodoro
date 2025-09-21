import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
  type: 'search' | 'text' | 'number';
} & React.ComponentProps<'input'>;

export function DefaultInput({id, labelText, type, ...rest}: DefaultInputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>{labelText}</label>

      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
