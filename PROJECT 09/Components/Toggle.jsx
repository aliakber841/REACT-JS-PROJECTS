import useToggle from "./useToggle"
const Toggle = () => {
   const [show,toggle] = useToggle(true);
  return (
    <>
    <div className='toggle-container'>
        <h2>Toggle Custom Hook</h2>
        <button className='btn' onClick={toggle}>Toggle</button>
        {show && <h2 className='stuff'>Some Stuff</h2>}
        </div>
        </>
  )
}

export default Toggle