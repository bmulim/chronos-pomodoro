import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    
      <h1 className={styles.heading}>{children}</h1>
    
  );
}

// export function Heading(props) {
//   //   const classes = `${styles.heading} ${styles.teste}`;
//   console.log(props);
//   return (
//     <>
//       <h1 className={styles.heading}>{props.children}</h1>
//       {/* Usando Apenas uma classe com
//       css module
//      <hr />
//       <h1 className={classes}>Usando Duas classes com css module</h1>;  */}
//     </>
//   );
// }
