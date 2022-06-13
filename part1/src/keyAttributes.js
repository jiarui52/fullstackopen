const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
        <li key={note.id}>{note.content}</li>)}
        {/* const map1 = array.map(x=>x*2) 
        此处array的名字是notes，每个元素需要用一个新的变量名note来定义函数
        map的工作原理：map总是创建一个新的数组，
                    其中的元素是通过mapping从原始数组的元素创建的
                    原始值作为map method的参数
                    
        */}
      </ul>
    </div>
  )
}

export default App