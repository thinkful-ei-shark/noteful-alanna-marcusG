import React from 'react'
import Context from '../Context'
import Note from '../Note/Note'
import './NotePageMain.css'
import {findNote} from '../notes-helpers'

export default class NotePageMain extends React.Component {

  static contextType = Context

  render() {
    const {noteId} = routeProps.match.params
    const note = findNote(notes, noteId)
    const {notes = []} = this.context

    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
  }  
  

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
