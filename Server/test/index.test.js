const app = require('../src/app')
const session = require('supertest')
const req = session(app)

const char = {
  id: 918,
  name: 'Lola',
  species: 'Human',
  status: 'Alive',
  gender: 'Female',
  origin: {
    name: 'Earth (C-137)',
  },
  image: 'image.jpg',
}

describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      const res = await req.get('/rickandmorty/character/1')
      expect(res.statusCode).toBe(200)
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const res = await req.get('/rickandmorty/character/1')
      for (let i in char) {
        expect(res.body).toHaveProperty(i)
      }
    })

    it('Si hay un error responde con status: 500', async () => {
      const res = await req.get('/rickandmorty/character/1333s')
      expect(res.statusCode).toBe(500)
    })
  })

  describe('GET /rickandmorty/login', () => {
    it('Responde a {access: true} si la información es válida', async () => {
      const res = await req.get(
        '/rickandmorty/login?email=test@test.com&password=test123'
      )
      const access = { access: true }
      expect(res.body).toEqual(access)
    })

    it('Responde a {access: false} si la información no es válida', async () => {
      const res = await req.get(
        '/rickandmorty/login?email=testing@gmail.com&password=143scd'
      )
      const access = { access: false }
      expect(res.body).toEqual(access)
    })
  })

  describe('POST /rickandmorty/fav', () => {
    it('Debe guardar el personaje como favorito', async () => {
      const res = await req.post('/rickandmorty/fav').send(char)
      expect(res.body).toContainEqual(char)
    })

    it('Debe agregar otro personaje enviado', async () => {
      char.id = 1000
      char.name = 'Messi'
      const res = await req.post('/rickandmorty/fav').send(char)
      expect(res.body.length).toBe(2)
    })
  })

  describe('DELETE /rickandmorty/fav/:id', () => {
    it('Si el ID no existe, debe retornar un arreglo con todos los favoritos', async () => {
      const res = await req.delete('/rickandmorty/fav/2')
      expect(res.body.length).toBe(2)
    })

    it('Si el ID existe, debe ser eliminado de favoritos', async () => {
      const res = await req.delete('/rickandmorty/fav/1000')
      console.log(res.body)
      expect(res.body.length).toBe(1)
    })
  })
})
