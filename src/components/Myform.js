import './Myform.css'
import {useState} from 'react'

const Myform = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const handleNome = (e) => {
    setNome(e.target.value)
  }
  console.log(nome)
  return (
    <div>
      {/* 1 - Criação de form*/}
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleNome}/> 
        </div>
        {/* 2 - Label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite o seu email' />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Myform