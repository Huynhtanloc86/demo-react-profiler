import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="todo-container">
        <h1 className="mb-4">About me</h1>
        <div className="mb-4">Please contact me anytime when you need</div>
      </div>
    </div>
  )
}
