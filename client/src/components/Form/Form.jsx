import './Form.css'

export default function Form() {
  return (
    <div id='main-container' >
      <div id='overlay' />
      <div className='removable'>
        <div id='form-container'>
          <div id='form-title'>
            <span >
              Create activity
            </span>
            <span id='close-form'>
              ✖
            </span>
          </div>
          <form>
            <label> Name:</label>
            <input type="text" />

            <label>Difficulty:</label>
            <input type="number" max={5} min={1} />

            <label>Duration:</label>
            <input type="number" min={0} />

            <label>Season:</label>
            <input type="text" />
          </form >
          <button id='save-button'>Save</button>
        </div>
      </div>
    </div>
  )
}



