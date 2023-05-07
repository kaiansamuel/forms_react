import './Myform.css'
import {useState} from 'react'

const Myform = ({ user }) => {

  const [nome, setNome] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const handleNome = (e) => {
    setNome(e.target.value)
  }
  console.log(nome)
  console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Enviando o formulário')
    console.log(nome, email)
  
  //Limpar o form
  setNome('')
  setEmail('')
  
  }
  
  return (
    <div>
      {/* 1 - Criação de form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleNome} value={nome}/> 
        </div>
        {/* 2 - Label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Myform