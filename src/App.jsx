import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'
import Resolved from './components/TicketSection/Resolved'
import Status from './components/TicketSection/Status'
import Tickets from './components/TicketSection/Tickets'

const fetchTickets = fetch("/tickets.json").then(res => res.json());

function App() {

  const ticketsPromise = fetchTickets;

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='w-11/12 mx-auto pb-10 md:pb-15 flex flex-col md:flex-row gap-8'>
        <aside className='w-2/3'>
          <Suspense>
            <Tickets ticketsPromise={ticketsPromise}></Tickets>
          </Suspense>
        </aside>
        <aside className='flex flex-col gap-8 w-1/3'>
          <Status></Status>
          <Resolved></Resolved>
        </aside>
      </div>
    </>
  )
}

export default App
