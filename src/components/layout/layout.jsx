export const Layout = ({ children, sidebar }) => {
  return (
    <main>
      {sidebar}
      <header>header</header>
      {children}
      <footer>footer</footer>
    </main>
  );
};
