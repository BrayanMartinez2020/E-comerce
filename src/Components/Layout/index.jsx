/**
 * Renders a layout component.
 *
 * @param {Object} props - The properties passed to the layout component.
 * @param {ReactNode} props.children - The child components to be rendered inside the layout.
 * @return {ReactNode} The rendered layout component.
 */
const Layout = ({ children }) => {
    return (
      <div className='mt-20 flex flex-col items-center'>
        {children}
      </div>
    )
  }
  
  export { Layout }