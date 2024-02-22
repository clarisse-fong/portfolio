import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass(`text-animate-hover`)
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(form.current)

    emailjs
      .sendForm(
        'service_usrbu5o',
        'template_13icfsq',
        form.current,
        'FD7bU5O_wSbckAAcH'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full-time positions for React or Full-Stack
            development. However, if you have other opportunities, don't
            hesitate to contact me using the form below.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="Send"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Clarisse Fong
          <br />
          Philadelphia, Pennsylvania
          <br />
          United States
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[39.95310250512112, -75.16343036321416]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[39.95310250512112, -75.16343036321416]}>
              <Popup>
                Philadelphia's City Hall is right around the corner from me!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
