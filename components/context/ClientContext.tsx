/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable linebreak-style */
import { createContext, useEffect, useState } from 'react'

const ClientContext = createContext({
  client: null,
  setClient: (newClient) => {}, // Modificar la declaración de setClient
  loading: true,
})

const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hostnameParts = window.location.hostname.split('.')
    const hasSubdomain = (hostnameParts.length > 2 && hostnameParts[0] !== 'www') || hostnameParts[1] === 'localhost'
    if (!hasSubdomain) {
      setLoading(false)
      return
    }

    fetch('/api/clients')
      .then((response) => response.json())
      .then((data) => {
        const listSubdomain = data.data.map((x) => x.attributes.subdomain)
        const foundSubdomains = listSubdomain.includes(hostnameParts[0])
        const dataClient = data.data.find((x) => x.attributes.subdomain === hostnameParts[0])
        if (foundSubdomains) {
          setClient(dataClient.attributes)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  const contextValue = { client, setClient, loading }

  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  )
}

export { ClientContext, ClientProvider }
