import { Suspense, use, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'
import Resolved from './components/TicketSection/Resolved'
import Status from './components/TicketSection/Status'
import Tickets from './components/TicketSection/Tickets'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

const fetchTickets = fetch("/tickets.json").then(res => res.json());

function App() {
  const ticketsData = use(fetchTickets);
  const [tickets, setTickets] = useState(ticketsData);
  // handle progress
  const [progressTask, setProgressTask] = useState([]);
  const handleProgress = (ticket) => {
    setProgressTask([...progressTask, ticket]);
  }

  // handle resolved
  const [resolvedTask, setResolvedTask] = useState([]);
  const handleResolved = (id) => {
    const task = progressTask.find(task => task.id === id);
    setResolvedTask([...resolvedTask, task]);
    const remainingTasks = progressTask.filter(task => task.id !== id);
    setProgressTask(remainingTasks);
    setTickets(prev => prev.filter(task => task.id !== id));
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner progressTask={progressTask} resolvedTask={resolvedTask}></Banner>
      <div className='w-11/12 mx-auto pb-10 md:pb-15 flex flex-col md:flex-row gap-8'>
        <aside className='w-full md:w-3/4'>
          <Suspense fallback={<div>Loading tickets...</div>}>
            <Tickets tickets={tickets} handleProgress={handleProgress} progressTask={progressTask}></Tickets>
          </Suspense>
        </aside>
        <aside className='flex flex-col gap-8 w-full md:w-1/4 h-fit'>
          <Status progressTask={progressTask} handleResolved={handleResolved}></Status>
          <Resolved resolvedTask={resolvedTask}></Resolved>
        </aside>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App;
