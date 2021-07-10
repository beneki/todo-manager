'use strict'
const fs = require('fs')
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const tasksContainer = require('./tasks.json')

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/api/tasks', (req: any, res: any) => {
  return res.status(200).json(tasksContainer)
})

/**
 * Get /api/task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/api/task/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id, 10)

  if (!Number.isNaN(id)) {
    const task = tasksContainer.find((item: any) => item.id === id)

    if (task !== null) {
      return res.status(200).json({
        task,
      })
    } else {
      return res.status(404).json({
        message: 'Not found.',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    })
  }
})

/**
 * PUT /api/task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/api/task/update/:id/:title/:description', (req: any, res: any) => {
  const id = parseInt(req.params.id, 10)

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item: any) => item.id === id)

    if (task !== null) {
      task.title = req.params.title
      task.description = req.params.description
      return res.status(204)
    } else {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    })
  }
})

/**
 * POST /api/task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
// app.post('/api/task/create/:title/:description', (req: any, res: any) => {
app.post('/api/tasks/sync', (req: any, res: any) => {
  const tasks = req.body.tasks

  tasksContainer.tasks = tasks
  const jsonStr = JSON.stringify(tasksContainer)
  fs.writeFile('./server/tasks.json', jsonStr, 'utf8', (error: any) => {
    if (error) {
      console.log('error happend during writing json')
    }
  })

  return res.status(201).json({
    message: 'Resource created',
  })
})

/**
 * DELETE /api/task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/api/task/delete/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id, 10)

  if (!Number.isNaN(id)) {
    const task = tasksContainer.tasks.find((item: any) => item.id === id)

    if (task !== null) {
      const taskIndex = tasksContainer.tasks
      tasksContainer.tasks.splice(taskIndex, 1)
      return res.status(200).json({
        message: 'Updated successfully',
      })
    } else {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    })
  }
})

app.listen(9001, () => {
  process.stdout.write('The server is available on http://localhost:9001/\n')
})
