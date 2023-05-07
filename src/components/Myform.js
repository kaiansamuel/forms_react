import './Myform.css'

const Myform = () => {
  return (
    <div>
      {/* 1 - Criação de form*/}
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Digite o seu nome"/> 
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