'use client'
import Menu from "./components/menu/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu /> 
      <h1> Sistemas de adoção de pet</h1>     
    </main>
  )
}
