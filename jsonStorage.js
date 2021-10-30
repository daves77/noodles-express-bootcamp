import {readFile} from 'fs'



export const read = (filename, callback) => {

  const handleFileRead = (err, data) => {
    if (err){
      console.log(err)
      return
    }

    const jsonObj = JSON.parse(data)
    callback(jsonObj)
  }

  readFile(filename, 'utf-8', handleFileRead)
}