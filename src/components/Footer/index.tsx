import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a téncica pomodoro.</a>
      <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
    
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
