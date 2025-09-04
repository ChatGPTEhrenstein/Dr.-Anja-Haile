import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

let cachedClient = null
let cachedDb = null

async function connectToDatabase() {
  const uri = process.env.MONGO_URL
  const dbName = process.env.DB_NAME

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}

// GET handler
export async function GET(request, { params }) {
  const path = params.path

  // Root API endpoint
  if (!path || path.length === 0) {
    return NextResponse.json({ 
      message: 'Dr. Anja Haile API - Psychologische Psychotherapie München',
      status: 'active',
      timestamp: new Date().toISOString()
    })
  }

  // Health check endpoint
  if (path[0] === 'health') {
    try {
      const { db } = await connectToDatabase()
      const result = await db.admin().ping()
      
      return NextResponse.json({ 
        status: 'healthy',
        database: 'connected',
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      return NextResponse.json({ 
        status: 'error',
        database: 'disconnected',
        error: error.message,
        timestamp: new Date().toISOString()
      }, { status: 500 })
    }
  }

  // Contact form submissions endpoint
  if (path[0] === 'contacts') {
    try {
      const { db } = await connectToDatabase()
      const contacts = await db.collection('contacts').find({}).sort({ createdAt: -1 }).toArray()
      
      return NextResponse.json({ 
        success: true,
        data: contacts,
        count: contacts.length
      })
    } catch (error) {
      return NextResponse.json({ 
        success: false,
        error: error.message 
      }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
}

// POST handler
export async function POST(request, { params }) {
  const path = params.path

  // Contact form submission
  if (path && path[0] === 'contact') {
    try {
      const body = await request.json()
      const { name, email, phone, message, subject } = body

      // Validate required fields
      if (!name || !email || !message) {
        return NextResponse.json({ 
          success: false,
          error: 'Name, E-Mail und Nachricht sind erforderlich' 
        }, { status: 400 })
      }

      const { db } = await connectToDatabase()
      
      const contactData = {
        id: crypto.randomUUID(),
        name,
        email,
        phone: phone || '',
        subject: subject || 'Kontaktanfrage',
        message,
        createdAt: new Date().toISOString(),
        status: 'new'
      }

      const result = await db.collection('contacts').insertOne(contactData)
      
      return NextResponse.json({ 
        success: true,
        message: 'Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich schnellstmöglich bei Ihnen!',
        id: contactData.id
      })
    } catch (error) {
      return NextResponse.json({ 
        success: false,
        error: 'Fehler beim Senden der Nachricht: ' + error.message 
      }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
}

// PUT handler
export async function PUT(request, { params }) {
  return NextResponse.json({ error: 'Method not implemented' }, { status: 501 })
}

// DELETE handler
export async function DELETE(request, { params }) {
  return NextResponse.json({ error: 'Method not implemented' }, { status: 501 })
}