import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


// ------------------ ASYNC / AWAIT AXIOS ---------------

function Users() {

    const [ usuarios, setUsuarios ] = useState([])

    async function fetchUsers () {
        try {
            const response = await axios.get ('https://randomuser.me/api/')
            const datos = await response.data
            setUsuarios(datos.results)
    
            
        } catch (error) {console.log(error) }
    }

    useEffect( () => {

        fetchUsers()

    }, [])

  return (
    <div>

        {usuarios.map (usuario =>
        <ul className='user-ul'>
            <li><img src = {usuario.picture.thumbnail}/></li>
            <li>{usuario.name.title} {usuario.name.first} {usuario.name.last}, {usuario.gender}</li>
            <li>{usuario.location.country}</li>
            <li>Contacto: {usuario.email}</li>
        </ul>
            
        )}
      
    </div>
  )
}

export default Users
